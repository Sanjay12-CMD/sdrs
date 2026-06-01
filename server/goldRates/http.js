export const sendJson = (res, statusCode, body, headers = {}) => {
  Object.entries({
    'Content-Type': 'application/json',
    ...headers,
  }).forEach(([key, value]) => res.setHeader(key, value));

  res.status(statusCode).send(JSON.stringify(body));
};

export const setNoCacheHeaders = (res) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
};
