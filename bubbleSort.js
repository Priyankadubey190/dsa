const res = bubbleSort([5, 3, 4, 1, 2, 8, 6, 7]);
console.log(res);

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let flag = false;
    for (let j = 0; j <= arr.length - 2; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        flag = true;
      }
    }
    if (!flag) break;
  }
  return arr;
}

// console.log(bubbleSort(arr));
