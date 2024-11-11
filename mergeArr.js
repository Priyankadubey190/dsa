const arr1 = [5, 3, 8, 5, 33, 11];
const arr2 = [3, 2, 6];

const arr = [];

for (let i = 0; i < arr1.length; i++) {
  arr[i] = arr1[i];
}

for (let i = 0; i < arr2.length; i++) {
  arr[arr1.length + i] = arr2[i];
}

console.log(arr);
