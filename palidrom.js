const str = "man";

let reverseStr = "";
for (let i = str.length - 1; i >= 0; i--) {
  reverseStr += str[i];
}
if (str === reverseStr) {
  console.log("true");
} else {
  console.log("false");
}
