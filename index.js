const studentOne = new Student ("Mr John", 35);

console.log(studentOne);

function Student (name, age) {
    this.name = name
    this.age = age
}