export default function taskBlock(trueOrFalse) {
  let task = false;
  const task2 = true;

  if (trueOrFalse) {
    let task = true;
    const task2 = false;
  }

  return [task, task2];
}
