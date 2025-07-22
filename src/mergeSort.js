function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let mid = Math.floor(array.length / 2);
  let leftArray = mergeSort(array.slice(0, mid));
  let rightArray = mergeSort(array.slice(mid));

  let finalArray = [];
  let leftCount = 0;
  let rightCount = 0;
  let finalCount = 0;

  while (leftCount < leftArray.length && rightCount < rightArray.length) {
    if (leftArray[leftCount] < rightArray[rightCount]) {
      finalArray[finalCount] = leftArray[leftCount];
      finalCount++;
      leftCount++;
    } else {
      finalArray[finalCount] = rightArray[rightCount];
      finalCount++;
      rightCount++;
    }
  }

  for (; leftCount < leftArray.length; leftCount++) {
    finalArray[finalCount] = leftArray[leftCount];
    finalCount++;
  }

  for (; rightCount < rightArray.length; rightCount++) {
    finalArray[finalCount] = rightArray[rightCount];
    finalCount++;
  }

  return finalArray;
}

export { mergeSort };
