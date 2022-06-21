// function mainFunction() {
//   console.log("X");
//   setTimeout(function print() {
//     console.log("Y");
//   }, 100);
//   console.log("Z");
// }
// mainFunction();
//  console.log (["  55   "] / "5")

// var array1 = new Array(3);
// console.log(array1);

// var array2 = [];
// array2[2] = 100;
// console.log(array2);

// var array3 = ["","" ,"","" ];
// console.log(array3);\

// const obj = {
//   name: "shopnil",
//   ["age"]: 25
// }
// console.log (obj)\\

// function checkType(num = 1) {
//   console.log(typeof num);
// }

// checkType();
// checkType(undefined);
// checkType("");
// checkType(null);
// console.log(25 == [25]);
// console.log(25 == [[[[[[[25]]]]]]]);
function outer(f = inner) {
  function inner() {
    return "Inner";
  }
}
outer();