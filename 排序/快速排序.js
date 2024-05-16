const quickSort = arr => {
  if (arr.length < 2) {
    return arr;
  }
  let left = [];
  let right = [];
  let n = 0;
  let mid = arr[Math.floor(arr.length / 2)];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > mid) {
      right.push(arr[i]);
    } else if (arr[i] < mid) {
      left.push(arr[i]);
    } else {
      n++;
    }
  }
  return [...quickSort(left), ...new Array(n).fill(mid), ...quickSort(right)];
};

const arr = [64, 34, 25, 12, 12, 11, 90, 34, 25, 22, 11, 90];
console.log(quickSort(arr));
