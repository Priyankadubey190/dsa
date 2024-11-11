const arr = [3, 6, 4, 8];

const elm = 16;

const position = 2;

for (let i = arr.length - 1; i >= 0; i--) {
  if (i >= position) {
    arr[i + 1] = arr[i];
    if (i == position) {
      arr[i] = elm;
    }
  }
}

console.log(arr);
