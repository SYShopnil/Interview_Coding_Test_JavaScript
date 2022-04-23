function test() {
  let a = (b = 0);
  a++;
  b--;
  return a;
}

console.log(test(), typeof a, typeof b); //1,number,number
