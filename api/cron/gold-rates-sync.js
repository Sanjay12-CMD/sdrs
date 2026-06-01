import { getChennaiRates } from '../../server/goldRates/service.js';
import { sendJson } from '../../server/goldRates/http.js';

const isAuthorized = (req) => {
  const configuredSecret = process.env.GOLD_RATE_CRON_SECRET;
  if (!configuredSecret) {
    return true;
  }

  const bearerToken = req.headers.authorization?.replace(/^Bearer\s+/i, '');
  return bearerToken === configuredSecret;
};

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return sendJson(res, 405, { message: 'Method not allowed' });
  }

  if (!isAuthorized(req)) {
    return sendJson(res, 401, { message: 'Unauthorized' });
  }

  try {
    const { payload, source } = await getChennaiRates({ forceRefresh: true });
    res.setHeader('X-Rate-Source', source);
    return sendJson(res, 200, payload);
  } catch (error) {
    return sendJson(res, 500, { message: 'Failed to sync Chennai market rates' });
  }
}
