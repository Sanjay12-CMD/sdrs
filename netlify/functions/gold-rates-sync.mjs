import { getChennaiRates } from '../../server/goldRates/service.js';

const buildHeaders = (payload, source) => ({
  'Content-Type': 'application/json',
  'Cache-Control': 'no-store, no-cache, max-age=0, s-maxage=0, must-revalidate, proxy-revalidate',
  'CDN-Cache-Control': 'no-store',
  Pragma: 'no-cache',
  Expires: '0',
  'X-Rate-Source': source,
  'X-Rate-Updated-At': payload?.updatedAt || '',
  'X-Rate-Fetched-At': payload?.fetchedAt || payload?.savedAt || '',
});

const isAuthorized = (headers) => {
  const configuredSecret = process.env.GOLD_RATE_CRON_SECRET;
  if (!configuredSecret) {
    return true;
  }

  const authorizationHeader = headers.authorization || headers.Authorization || '';
  const bearerToken = authorizationHeader.replace(/^Bearer\s+/i, '');
  return bearerToken === configuredSecret;
};

export const handler = async (event) => {
  const headers = event?.headers || {};

  if (!isAuthorized(headers || {})) {
    return {
      statusCode: 401,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store',
      },
      body: JSON.stringify({ message: 'Unauthorized' }),
    };
  }

  try {
    const { payload, source } = await getChennaiRates({ forceRefresh: true });

    return {
      statusCode: 200,
      headers: buildHeaders(payload, source),
      body: JSON.stringify(payload),
    };
  } catch (error) {
    console.error('Failed to sync Chennai market rates on Netlify:', error);

    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store',
      },
      body: JSON.stringify({ message: 'Failed to sync Chennai market rates' }),
    };
  }
};
