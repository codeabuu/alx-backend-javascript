export default function cleanSet(set, string) {
  if (startString || startString.length === 0) {
    return '';
  }
  const cleanedValues = [...set]
    .filter(value => value !== undefined && value.startsWith(startString))
    .map(value => value.slice(startString.length));

  return cleanedValues.join('-');
}
