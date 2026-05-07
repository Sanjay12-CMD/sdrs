import React, { useEffect, useRef, useState } from 'react';
import Tesseract from 'tesseract.js';

const SecureCertificateViewer = ({ imageId, className = "" }) => {
  const canvasRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const fetchAndRenderImage = async () => {
      try {
        setLoading(true);
        // 1. Fetch short-lived token
        const tokenRes = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/v1/certificates/token/${imageId}`);
        if (!tokenRes.ok) throw new Error('Failed to fetch security token');
        const { token } = await tokenRes.json();

        // 2. Fetch the actual image using the token
        const imageRes = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/v1/certificates/image/${imageId}?token=${token}`);
        if (!imageRes.ok) throw new Error('Failed to load image');
        const blob = await imageRes.blob();
        
        // 3. Create object URL
        const objectUrl = URL.createObjectURL(blob);
        const img = new Image();
        
        img.onload = async () => {
          if (!isMounted) return;
          const canvas = canvasRef.current;
          if (!canvas) return;
          
          const ctx = canvas.getContext('2d');
          canvas.width = img.width;
          canvas.height = img.height;
          
          // Draw original image
          ctx.drawImage(img, 0, 0, img.width, img.height);
          
          // 4. Run OCR to find sensitive fields
          try {
            const { data: { words } } = await Tesseract.recognize(objectUrl, 'eng');
            
            // Keywords to look for
            const sensitiveKeywords = ['gstin', 'no', 'registration', 'license', 'certificate', 'number', 'sl', 'id'];
            
            if (words && Array.isArray(words)) {
              words.forEach((word, index) => {
                if (!word || !word.text) return;
                const text = word.text.toLowerCase().replace(/[^a-z]/g, '');
                
                if (sensitiveKeywords.some(kw => text.includes(kw))) {
                  // If we find a keyword, blur the word itself and the next 2 words (likely the value)
                  for (let i = 0; i < 3; i++) {
                    const targetWord = words[index + i];
                    if (targetWord && targetWord.confidence > 50) {
                      const { x0, y0, x1, y1 } = targetWord.bbox;
                      const padding = 5;
                      
                      // Apply blur to this area
                      ctx.save();
                      ctx.filter = 'blur(8px)';
                      ctx.drawImage(
                        canvas, 
                        x0 - padding, y0 - padding, (x1 - x0) + padding * 2, (y1 - y0) + padding * 2,
                        x0 - padding, y0 - padding, (x1 - x0) + padding * 2, (y1 - y0) + padding * 2
                      );
                      ctx.restore();

                      // Optional: Add a subtle overlay to indicate redacted area
                      ctx.fillStyle = 'rgba(212, 175, 55, 0.1)';
                      ctx.fillRect(x0 - padding, y0 - padding, (x1 - x0) + padding * 2, (y1 - y0) + padding * 2);
                    }
                  }
                }

                // Also detect strings that look like long numbers or codes (8+ chars)
                if (word.text.length > 8 && (/\d/.test(word.text)) && word.confidence > 60) {
                  const { x0, y0, x1, y1 } = word.bbox;
                  ctx.save();
                  ctx.filter = 'blur(10px)';
                  ctx.drawImage(
                    canvas, 
                    x0 - 2, y0 - 2, (x1 - x0) + 4, (y1 - y0) + 4,
                    x0 - 2, y0 - 2, (x1 - x0) + 4, (y1 - y0) + 4
                  );
                  ctx.restore();
                }
              });
            }
          } catch (ocrError) {
            console.warn('OCR failed, proceeding without selective blur:', ocrError);
          }
          
          // 5. Draw Watermark
          ctx.font = `bold ${Math.max(img.width, img.height) * 0.05}px sans-serif`;
          ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.translate(img.width / 2, img.height / 2);
          ctx.rotate(-Math.PI / 4);
          ctx.fillText('PREVIEW ONLY', 0, 0);
          ctx.setTransform(1, 0, 0, 1, 0, 0);
          
          setLoading(false);
          URL.revokeObjectURL(objectUrl);
        };
        
        img.onerror = () => {
          if (isMounted) {
            setError('Error rendering image');
            setLoading(false);
          }
        };
        
        img.src = objectUrl;

      } catch (err) {
        if (isMounted) {
          console.error(err);
          setError(err.message);
          setLoading(false);
        }
      }
    };

    fetchAndRenderImage();

    return () => {
      isMounted = false;
    };
  }, [imageId]);

  // Prevent keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (
        (e.ctrlKey || e.metaKey) && 
        (e.key === 's' || e.key === 'p' || e.key === 'u' || e.key === 'c' || e.key === 'i')
      ) {
        e.preventDefault();
        setShowWarning(true);
        setTimeout(() => setShowWarning(false), 3000);
      }
      
      if (e.key === 'F12') {
        e.preventDefault();
        setShowWarning(true);
        setTimeout(() => setShowWarning(false), 3000);
      }

      if (e.key === 'PrintScreen') {
        e.preventDefault();
        setShowWarning(true);
        const canvas = canvasRef.current;
        if (canvas) {
          const ctx = canvas.getContext('2d');
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
        setTimeout(() => setShowWarning(false), 3000);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div 
      className={`relative select-none overflow-hidden ${className} group`}
      onContextMenu={(e) => e.preventDefault()} 
      onDragStart={(e) => e.preventDefault()}   
      style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
    >
      {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/40 backdrop-blur-md z-10 text-brand-text gap-4">
          <div className="w-12 h-12 border-4 border-brand-red border-t-transparent rounded-full animate-spin"></div>
          <p className="text-sm font-medium animate-pulse">Securing Document...</p>
        </div>
      )}
      
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-red-900/20 text-red-500 z-10">
          <p>{error}</p>
        </div>
      )}

      {showWarning && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-bold z-50 shadow-2xl animate-bounce">
          Security: Saving/Copying is restricted.
        </div>
      )}
      
      <canvas 
        ref={canvasRef} 
        className="w-full h-full object-contain md:object-cover filter blur-0 md:blur-[6px] md:group-hover:blur-0 transition-all duration-300"
      />
    </div>
  );
};

export default SecureCertificateViewer;
