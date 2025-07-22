import "./styles.css";

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

// console.log(fibs(8));

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

// fibsRec(3) [0, 1, 1]
// fibsRec(2) [0, 1]
// fibsRec(1) [0]

console.log(fibsRec(6)); /// [0, 1, 1]
