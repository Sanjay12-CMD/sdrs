const parseNumericRate = (value) => {
  if (!value) {
    return null;
  }

  const numericValue = Number(String(value).replace(/,/g, '').trim());
  return Number.isNaN(numericValue) ? null : numericValue;
};

const convertTo24HourTime = (timeString) => {
  const timeMatch = timeString.match(/(\d{1,2}):(\d{2}):(\d{2})\s*([AP]M)/i);
  if (!timeMatch) {
    return '00:00:00';
  }

  let [, hour, minute, second, meridiem] = timeMatch;
  let normalizedHour = Number(hour);

  if (meridiem.toUpperCase() === 'PM' && normalizedHour !== 12) {
    normalizedHour += 12;
  }

  if (meridiem.toUpperCase() === 'AM' && normalizedHour === 12) {
    normalizedHour = 0;
  }

  return `${String(normalizedHour).padStart(2, '0')}:${minute}:${second}`;
};

const stripHtml = (value) =>
  value
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&#8377;|&rupee;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const extractTableBody = (html, className) => {
  const tableMatch = html.match(
    new RegExp(`<table[^>]*class="[^"]*${className}[^"]*"[^>]*>[\\s\\S]*?<tbody>([\\s\\S]*?)<\\/tbody>`, 'i')
  );

  return tableMatch?.[1] || '';
};

const extractRowsFromTable = (html, className, columnCount) => {
  const tableBody = extractTableBody(html, className);
  if (!tableBody) {
    return [];
  }

  const rowMatches = tableBody.match(/<tr[\s\S]*?<\/tr>/gi) || [];

  return rowMatches
    .map((rowHtml) => {
      const cellMatches = [...rowHtml.matchAll(/<td[^>]*>([\s\S]*?)<\/td>/gi)];
      const cells = cellMatches.map((match) => stripHtml(match[1]));

      if (cells.length < columnCount) {
        return null;
      }

      return cells;
    })
    .filter(Boolean);
};

const extractGoldRows = (html) =>
  extractRowsFromTable(html, 'gold-rates', 5).map((cells) => ({
    date: cells[0],
    gold24k1g: parseNumericRate(cells[1]),
    gold24k8g: parseNumericRate(cells[2]),
    gold22k1g: parseNumericRate(cells[3]),
    gold22k8g: parseNumericRate(cells[4]),
  }));

const extractSilverRows = (html) =>
  extractRowsFromTable(html, 'silver-rates', 3).map((cells) => ({
    date: cells[0],
    silver1g: parseNumericRate(cells[1]),
    silver1kg: parseNumericRate(cells[2]),
  }));

const parseLiveChennaiUpdatedAt = (html) => {
  const updateMatch = html.match(
    /Last Update Time:\s*(\d{2})\/(\d{2})\/(\d{4})\s+(\d{1,2}:\d{2}:\d{2}\s*[AP]M)/i
  );

  if (!updateMatch) {
    return new Date();
  }

  const [, day, month, year, time] = updateMatch;
  const normalizedTime = time.toUpperCase().replace(/\s+/g, ' ');
  return new Date(`${year}-${month}-${day}T${convertTo24HourTime(normalizedTime)}+05:30`);
};

const toResponseRate = (value) => {
  if (value === null || value === undefined) {
    return '';
  }

  return Number.isInteger(value) ? String(value) : value.toFixed(2);
};

export const parseLiveChennaiRates = (html) => {
  const goldRows = extractGoldRows(html);
  const silverRows = extractSilverRows(html);

  if (goldRows.length < 1 || silverRows.length < 1) {
    throw new Error('LiveChennai page format changed');
  }

  const todayGold = goldRows[0];
  const todaySilver = silverRows[0];
  const updatedAt = parseLiveChennaiUpdatedAt(html);
  const gold18k = Math.round((todayGold.gold24k1g || 0) * 0.75);

  if (!todayGold.gold24k1g || !todayGold.gold22k1g || !todaySilver.silver1g || !gold18k) {
    throw new Error('LiveChennai rates were incomplete');
  }

  return {
    gold24k: toResponseRate(todayGold.gold24k1g),
    gold22k: toResponseRate(todayGold.gold22k1g),
    gold18k: toResponseRate(gold18k),
    silver: toResponseRate(todaySilver.silver1g),
    updatedAt: updatedAt.toISOString(),
  };
};
