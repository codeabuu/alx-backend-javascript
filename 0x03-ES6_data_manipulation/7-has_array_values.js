export default function hasValuesFromArray(set, list) {
  let arg = true;
  list.map((x) => {
    if (!set.has(x)) {
      arg = false;
    }
  });
  return arg;
}
