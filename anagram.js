const str1 = "heyyy";
const str2 = "yehoy";

let obj = {};
for (let x of str1) {
  if (obj[x]) {
    obj[x] += 1;
  } else {
    obj[x] = 1;
  }
}
let flag = true;
if (str1.length !== str2.length) {
  flag = false;
}
for (let y of str2) {
  if (!obj[y]) {
    flag = false;
    break;
  } else {
    obj[y]--;
  }
}
if (flag) {
  console.log("anagram");
} else {
  console.log("not anagram");
}
