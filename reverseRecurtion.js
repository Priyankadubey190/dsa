// const str = "hello";

// function recursion(str) {
//   if (str == "") {
//     return "";
//   }
//   return recursion(str.slice(1)) + str.charAt(0);
// }

// console.log(recursion(str));
let num = 123;
function test(num) {
  if (x > 0) {
    return test(num - 1);
  }
  console.log(num);
}

test(num);

function test2(num) {
  console.log(num);
  if (x > 0) {
    return test2(num - 1);
  }
}
test2(num);
