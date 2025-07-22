function fibs(number) {
  if (number === 0) {
    return [];
  }

  if (number === 1) {
    return [0];
  }

  let finalArray = [0, 1];
  let count = 2;

  while (count < number) {
    let twoBefore = finalArray[finalArray.length - 2];
    let oneBefore = finalArray[finalArray.length - 1];
    let next = twoBefore + oneBefore;
    finalArray.push(next);
    count++;
  }

  return finalArray;
}

function fibsRec(number) {
  if (number === 0) {
    return [];
  }

  if (number === 1) {
    return [0];
  }

  if (number === 2) {
    return [0, 1];
  }

  let array = fibsRec(number - 1);

  let next = array[array.length - 1] + array[array.length - 2];

  array.push(next);

  return array;
}

export { fibs, fibsRec };
