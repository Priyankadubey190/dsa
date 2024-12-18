const arr = [6, 9, 11, 55, 77, 78];

let start = 0;
let end = arr.length - 1;
let target = 4;

// iteration method of binary search

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] == target) {
    console.log(mid, arr[mid]);
    break;
  } else if (arr[mid] < target) {
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}
if (start > end) {
  console.log(-1);
}
// binary search recursive method

function binarySearch(arr, start, end) {
  let mid = Math.floor((start + end) / 2);

  if (start > end) {
    console.log(-1);
    return;
  }
  if (arr[mid] === target) {
    console.log(mid, arr[mid]);
    return;
  } else if (arr[mid] < target) {
    binarySearch(arr, mid + 1, end);
  } else {
    binarySearch(arr, start, mid - 1);
  }
}

binarySearch(arr, start, end);
