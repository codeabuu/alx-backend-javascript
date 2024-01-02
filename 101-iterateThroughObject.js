/* eslint-disable radix */
export default function iterateThroughObject(reportWithIterator) {
  let output = '';

  for (const [index, item] of Object.entries(reportWithIterator)) {
    output += `${item}`;

    if (parseInt(index) !== reportWithIterator.length - 1) {
      output += ' | ';
    }
  }

  return output;
}
