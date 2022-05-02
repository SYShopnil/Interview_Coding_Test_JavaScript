// function mainFunction() {
//   console.log("X");
//   setTimeout(function print() {
//     console.log("Y");
//   }, 100);
//   console.log("Z");
// }
// mainFunction();
//  console.log (["  55   "] / "5")
function Perons () {
    this.name = "John Doe"
    return "John Smith"
}
const firstCall =  Perons ();
const secondCall =  new Perons ();
console.log(firstCall)
console.log(secondCall)