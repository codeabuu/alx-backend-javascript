export default function hasValuesFromArray(set, list) {
  return list.every(element => set.has(element));
}
