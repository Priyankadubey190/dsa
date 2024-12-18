let str = "madama";
let left = 0;
let right = str.length - 1;
let flag = true;
while (left <= right) {
  if (str[left] !== str[right]) {
    flag = false;
    break;
  } else {
    left++;
    right--;
  }
}

if (flag) {
  console.log("parlilodram");
} else {
  console.log("not");
}
