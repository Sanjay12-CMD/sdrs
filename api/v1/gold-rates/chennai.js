import { getChennaiRates } from '../../../server/goldRates/service.js';
import { sendJson, setNoCacheHeaders } from '../../../server/goldRates/http.js';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return sendJson(res, 405, { message: 'Method not allowed' });
  }

  setNoCacheHeaders(res);

  try {
    const forceRefresh = req.query?.refresh === 'true';
    const { payload, source } = await getChennaiRates({ forceRefresh });

    res.setHeader('X-Rate-Source', source);
    res.setHeader('X-Rate-Updated-At', payload.updatedAt || '');
    res.setHeader('X-Rate-Fetched-At', payload.fetchedAt || payload.savedAt || '');
    return sendJson(res, 200, payload);
  } catch (error) {
    console.error('Failed to load Chennai market rates:', error);
    return sendJson(res, 500, { message: 'Failed to load Chennai market rates' });
  }
}
