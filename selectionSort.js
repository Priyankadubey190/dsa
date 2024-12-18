const arr = [44, 2, 5, 12, 1, 55, 33, 22, 2];

for (let i = 0; i < arr.length; i++) {
  let minElm = i;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] < arr[minElm]) {
      minElm = j;
    }
  }

  let temp = arr[minElm];
  arr[minElm] = arr[i];
  arr[i] = temp;
}

console.log(arr);
