// this code works only sorted array

const arr1 = [2, 6, 8, 55, 66];
const arr2 = [4, 11, 33, 36, 37, 40, 42, 70];

const arr = [];

let i1 = 0;
let i2 = 0;
let ar = 0;

while (i1 < arr1.length && i2 < arr2.length) {
  if (arr1[i1] > arr2[i2]) {
    arr[ar] = arr2[i2];
    i2++;
  } else {
    arr[ar] = arr1[i1];
    i1++;
  }
  ar++;
}

while (i1 < arr1.length) {
  arr[ar] = arr1[i1];
  i1++;
  ar++;
}
while (i2 < arr2.length) {
  arr[ar] = arr2[i2];
  i2++;
  ar++;
}

console.log(arr);
