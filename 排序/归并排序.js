const mergeSort = arr => {
  if (arr.length <= 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
};
const merge = (left, right) => {
  let result = [];
  let leftIndex = 0,
    rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] > right[rightIndex]) {
      result.push(right[rightIndex]);
      rightIndex++;
    } else {
      result.push(left[leftIndex]);
      leftIndex++;
    }
  }
  while (leftIndex < left.length) {
    result.push(left[leftIndex]);
    leftIndex++;
  }
  while (rightIndex < right.length) {
    result.push(right[rightIndex]);
    rightIndex++;
  }
  return result;
};
const arr = [64, 34, 25, 12, 12, 11, 90, 34, 25, 22, 11, 90];
console.log(mergeSort(arr));
