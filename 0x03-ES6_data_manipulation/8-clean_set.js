/*export default function cleanSet(set, startString) {
 const matchingValues = [...set].filter(value => value.startsWith(startString));
  const cleanedString = matchingValues.join('-');
  return cleanedString;
}*/
/* eslint-disable array-callback-return */
export default function cleanSet(set, startString) {
  if (startString === undefined || startString.length === 0) {
    return '';
  }
  return [...set]
    .filter((str) => (str !== undefined ? str.startsWith(startString) : ''))
    .map((str) => (str !== undefined ? str.slice(startString.length) : ''))
    .join('-');
}
