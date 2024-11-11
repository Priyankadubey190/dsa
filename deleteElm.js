const arr = [4, 6, 2, 8, 9];

const position = 2;

for (let i = position; i < arr.length - 1; i++) {
  arr[i] = arr[i + 1];
}

arr.length = arr.length - 1;

console.log(arr);
