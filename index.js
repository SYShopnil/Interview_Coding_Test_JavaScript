function mainFunction() {
  console.log("X");
  setTimeout(function print() {
    console.log("Y");
  }, 100);
  console.log("Z");
}
mainFunction();