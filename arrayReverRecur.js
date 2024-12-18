const arr = [3, 7, 4, 7];

function reverse(arr, start = 0, end = arr.length - 1) {
  if (start >= end) {
    return;
  }
  let temp = arr[start];
  arr[start] = arr[end];
  arr[end] = temp;
  return reverse(arr, start + 1, end - 1);
}

reverse(arr, (start = 0), (end = arr.length - 1));

console.log(arr);
