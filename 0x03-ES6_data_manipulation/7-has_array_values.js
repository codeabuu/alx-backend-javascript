/* eslint-disable array-callback-return */
export default function hasValuesFromArray(set, list) {
  let verdict = true;
  list.map((x) => {
    if (!set.has(x)) {
      verdict = false;
    }
  });

  return verdict;
}
