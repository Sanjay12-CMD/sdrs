import { GOLD_RATE_CACHE_TTL_MS, LIVE_CHENNAI_SOURCE_URL } from './constants.js';
import { parseLiveChennaiRates } from './parser.js';
import { getStoredRates, readRateStore, saveRates } from './store.js';

let inFlightLiveRatesPromise = null;

const buildFetchOptions = () => ({
  method: 'GET',
  headers: {
    'user-agent': 'SDRS Gold Rates Bot/1.0',
    'cache-control': 'no-cache',
    pragma: 'no-cache',
  },
});

const getFreshnessTimestamp = (payload) => {
  const timestamp = new Date(payload?.fetchedAt || payload?.savedAt || 0).getTime();
  return Number.isNaN(timestamp) ? 0 : timestamp;
};

const isFreshEnough = (payload) => {
  const timestamp = getFreshnessTimestamp(payload);
  if (!timestamp) {
    return false;
  }

  return Date.now() - timestamp < GOLD_RATE_CACHE_TTL_MS;
};

export const fetchLiveChennaiRates = async () => {
  const response = await fetch(LIVE_CHENNAI_SOURCE_URL, buildFetchOptions());

  if (!response.ok) {
    throw new Error(`LiveChennai request failed with status ${response.status}`);
  }

  const html = await response.text();
  return parseLiveChennaiRates(html);
};

const fetchAndPersistLiveRates = async () => {
  const liveRates = await fetchLiveChennaiRates();
  let savedRates = liveRates;

  try {
    savedRates = await saveRates(liveRates, 'livechennai');
  } catch (storageError) {
    console.error('Failed to persist Chennai market rates:', storageError);
  }

  return savedRates;
};

export const getChennaiRates = async ({ forceRefresh = false } = {}) => {
  const store = await readRateStore();
  const storedRates = store.current;

  if (!forceRefresh && storedRates && isFreshEnough(storedRates)) {
    return {
      payload: storedRates,
      source: 'live',
    };
  }

  try {
    if (!inFlightLiveRatesPromise || forceRefresh) {
      inFlightLiveRatesPromise = fetchAndPersistLiveRates().finally(() => {
        inFlightLiveRatesPromise = null;
      });
    }

    const savedRates = await inFlightLiveRatesPromise;

    console.info('Gold rates served from live source', {
      updatedAt: savedRates.updatedAt,
      fetchedAt: savedRates.fetchedAt || null,
      forceRefresh,
    });

    return {
      payload: savedRates,
      source: 'live',
    };
  } catch (error) {
    const fallbackRates = await getStoredRates();
    if (fallbackRates) {
      console.warn('Gold rates live fetch failed, serving stored fallback', {
        updatedAt: fallbackRates.updatedAt,
        fetchedAt: fallbackRates.fetchedAt || null,
        error: error instanceof Error ? error.message : String(error),
      });

      return {
        payload: fallbackRates,
        source: 'saved',
        error,
      };
    }

    console.error('Gold rates live fetch failed with no stored fallback', error);
    throw error;
  }
};
