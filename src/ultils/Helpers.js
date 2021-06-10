export function metaKeywords(obj, language) {
  return Object.entries(obj)
    .map(([key, value]) => [' ' + value[language]])
    .toString()
    .split(',')
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(', ');
}

export function metaDescription(obj, language, type) {
  return Object.entries(obj)
    .map(([key, value]) => [key.includes(type) ? value[language] : 'notAType'])
    .filter((word) => word[0] !== 'notAType')
    .join(', ');
}

export function forMetaTitles(page, language) {
  if (language === 'es') {
    return page !== 'home'
      ? `${page + ' | '}Bashi Law | Ley Migratoria | Raleigh NC`
      : `Bashi Law | Ley Migratoria | Raleigh NC`;
  }
  if (language === 'ar') {
    return `${'Bashi Law | ' + page}قانون الهجرة | رالي نورث كارولاينا`;
  }
  return page !== 'home'
    ? `${page + ' | '}Bashi Law | Immigration Law | Raleigh NC`
    : `Bashi Law | Immigration Law | Raleigh NC`;
}
