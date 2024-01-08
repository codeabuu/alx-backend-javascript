export default function cleanSet(set, startString) {
  const matchingValues = [...set].filter(value => value.startsWith(startString));
  const cleanedString = matchingValues.join('-');
  return cleanedString;
}
