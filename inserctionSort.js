const arr = [44, 2, 7, 12, 1, 55, 33, 22, 2];

for (let i = 1; i < arr.length; i++) {
  let current = arr[i];
  let j = i - 1;
  while (j >= 0 && arr[j] > current) {
    arr[j + 1] = arr[j];
    j = j - 1;
  }
  arr[j + 1] = current;
}

console.log(arr);
