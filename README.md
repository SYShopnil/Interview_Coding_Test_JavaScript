# JavaScript Interview Questions & Answers

### Coding Exercise

#### 1. What is the output of below code

```javascript
const studentOne = new Student("Mr John", 35);

console.log(studentOne);

function Student(name, age) {
  this.name = name;
  this.age = age;
}
```

- 1: { name: 'Mr John', age: 35 }
- 2: ReferenceError
- 3: null
- 4: undefined

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1

The function declarations are hoisted similar to any variables. So the placement for `Student` function declaration doesn't make any difference.

</p>
</details>

---

**[⬆ Back to Top](#Coding-Exercise)**

#### 2. What is the output of below code

```javascript
const studentOne = new Student("Mr John", 35);

console.log(studentOne);

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
```

- 1: { name: 'Mr John', age: 35 }
- 2: ReferenceError
- 3: null
- 4: undefined

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 2

Create object with function constructor hoisting will behave like a normal function declaration hoisting but in the time of class it will give thrown an ReferenceError can not access `Student` before initialization.

</p>
</details>

---

**[⬆ Back to Top](#Coding-Exercise)**

#### 3. What is the output of below code

```javascript
function test() {
  let a = (b = 0);
  a++;
  b--;
  return a;
}

console.log(test(), typeof a, typeof b);
```

- 1: 0,number,number
- 2: ReferenceError b is not defined
- 3: 1,number,undefined
- 4: 1,undefined,number

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 4

Concept need to understand this problem :

- increment decrement operator workflow
- Scope

Here in the test function when it called:

- 1st new variable is declared as `a` and also assign value by `b = 0`
- Actually here `b` is another variable which is declared in the global scope.
- The scenario is look like this :
  ```javascript
  let a = b;
  b = 0;
  ```
  Here `b` is in the global scope. You can access this `b` in window or global object.
- After increment by 1 (a++) `a` is now `1` and after decrement by 1 (b--) b is now `-1'
- Test() function returns `a` which is `1`
  -typeof `a` is `undefined` because it is not exist outside the function scope
  -typeof `b` is `number`

</p>
</details>

---

**[⬆ Back to Top](#Coding-Exercise)**

#### 4. What is the output of below code

```javascript
"use strict";
function test() {
  let a = (b = 0);
  a++;
  b--;
  return a;
}

console.log(test(), typeof a, typeof b);
```

- 1: 0,number,number
- 2: ReferenceError b is not defined
- 3: 1,number,undefined
- 4: 1,number,number

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 2

Concept need to understand this problem :

- increment decrement operator workflow
- Scope
- workflow of use strict

Here in the test function when it called:

- 1st new variable is declared as `a` and also assign value by `b = 0`
- Actually here `b` is not declared in the global scope implicitly way because of `use strict`.
- That's why it gave a `ReferenceError error b is not defined `

</p>
</details>

---

**[⬆ Back to Top](#Coding-Exercise)**

#### 5. What is the output of below code

```javascript
function mainFunction() {
  console.log("X");
  setTimeout(function print() {
    console.log("Y");
  }, 100);
  console.log("Z");
}
mainFunction();
```

- 1: "X" "Y" "Z"
- 2: Thrown a error
- 3: "X" "Z" "Y"

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 3

Concept need to understand this problem :

- How JavaScript handle Asynchronous request

Coding WorkFlow:

- In JavaScript when there have any Asynchronous behavior has found, Then engine keeps that type of request into WebAPI and execute all others Non Asynchronous request. After finish those request it will come to the Call Stack through out Call back queue and event loop.

</p>
</details>

---

**[⬆ Back to Top](#Coding-Exercise)**

#### 6. What is the output of below code

```javascript
function Persons() {
  this.name = "John Doe";
  return "John Smith";
}
const firstCall = Persons();
const secondCall = new Persons();
console.log(firstCall);
console.log(secondCall);
```

- 1: John Smith, John Smith
- 2: Thrown Error
- 3: John Smith, Persons {name: "John Doe"}
- 4: Persons {name: "John Doe"} Persons {name: "John Doe"}
- 5: John Smith, John Smith

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 3

Here when the firstCall happen it will call that function with out `new Key word`. That's why it will return `"John Smith"`. Because without using `new keyword` a constructor function can not create a instance of a object.
So when the `secondCall` happen with new keyword that time it will create a instance of `Persons` constructor and give that instance as an output object.

</p>
</details>

---

**[⬆ Back to Top](#Coding-Exercise)**

#### 7. What is the output of below code

```javascript
console.log(0.1 + 0.2 === 0.3);
```

- 1: false
- 2: true

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1

It will happen because of floating problem. If we make a addition between `0.1 + 0.2` it will give a result of `0.300000000004` somethings like this.
So Comparing between `0.1 + 0.2 == 0.3` is like `0.3000000004 == 0.3` which is no make sense. So that it will give false

</p>
</details>

---

**[⬆ Back to Top](#Coding-Exercise)**

#### 8. What is the output of below code

```javascript
console.log((0.1 + 0.2).toFixed(1) == 0.3);
```

- 1: false
- 2: true

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 2

When we compare between `0.1 + 0.2 == 0.3` it will look like this `0.30000004 == 0.3` that's why it will give false but when we use `toFixed(1)` method,
We know toFixed() method will fixed the fractional in a fix range. When we fix that amount to `(1)` that time actually it will compare like this way -
`0.3 ==`

</p>
</details>

---

**[⬆ Back to Top](#Coding-Exercise)**

#### 9. What is the output of below code

```javascript
let a = 1;
if (
  function func() {
    return 5;
  }
) {
  a += typeof func;
}
console.log(a);
```

- 1: 6
- 2: ReferenceError
- 3: 1function
- 4: 1undefined

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 4

We know that in the if block it just keep a expression. So here in the if condition block a `function` exist but it will keep the expression not a function reference. So here `func(){}` will just convert to boolean.
Since there don't have any reference of `function` `func (){}` so it's type is `undefined` because of `hoisting`.
So ultimately it will just concat `1` with `undefined` and give a result `1undefined` because of assign operator `+=` assignment operator

</p>
</details>

---

**[⬆ Back to Top](#Coding-Exercise)**

#### 10. What is the output of below code

```javascript
let a = 1;
function func() {
  return 5;
}
if (func()) {
  a += typeof func;
}
console.log(a);
```

- 1: 6
- 2: ReferenceError
- 3: 1function
- 4: 1undefined

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 3

In the if condition block `func()` is `true`. So it will concat `1` with `typeof` `func()` is `function` . So the new value of `a` will be `1function`

</p>
</details>

---

**[⬆ Back to Top](#Coding-Exercise)**

#### 11. What is the output of below code

```javascript
function hello() {
  return;
  {
    message: "Hello World";
  }
}
console.log(hello());
```

- 1: "Hello World"
- 2: {message: "Hello World"}
- 3: Syntax error
- 4: undefined

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 4

Because of using `;` after return the statement will end and return `undefined`.

</p>
</details>

---

**[⬆ Back to Top](#Coding-Exercise)**

#### 12. What is the output of below code

```javascript
const students = ["Mr John", "Mr Smith", "Ms Jannat"]
delete students[0];
console.log (students)
console.log (students[0])
console.log (students.length)

```

- 1: [empty, "Mr Smith", "Ms Jannat"], empty, 2
- 2: [empty, "Mr Smith", "Ms Jannat"], empty, 3
- 3: [empty, "Mr Smith", "Ms Jannat"], undefined, 3
- 4: [null, "Mr Smith", "Ms Jannat"], undefined, 3

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1

`delete` operator always remove the value of an array but it does not remvove the index number. So the index number then show `empty`. But when anyone trying to access that array index that time it will give ``. 

</p>
</details>

---

**[⬆ Back to Top](#Coding-Exercise)**



#### 13. What is the output of below code

```javascript
let exerciseOne = new Array(3);
console.log(exerciseOne);

let exerciseTwo = [];
exerciseTwo[2] = 100;
console.log(exerciseTwo);

let exerciseThree = [, , ,];
console.log(exerciseThree);
```

- 1: [undefined × 3], [undefined × 2, 100], [undefined × 3]
- 2: [empty × 3], [empty × 2, 100], [empty × 3]
- 3: [null × 3], [null × 2, 100], [null × 3]
- 4: [], [100], []

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 2

The latest chrome versions display sparse array(they are filled with holes) using this empty x n notation. Whereas the older versions have undefined x n notation. Note: The latest version of FF displays n empty slots notation.

</p>
</details>

---

**[⬆ Back to Top](#Coding-Exercise)**


#### 14. What is the output of below code

```javascript
const obj = {
  prop1: function () {
    return 0;
  },
  prop2() {
    return 1;
  },
  ["prop" + 3]() {
    return 2;
  },
};
console.log(obj.prop1());
console.log(obj.prop2());
console.log(obj.prop3());
```

- 1: 0, 1, 2
- 2: 0, { return 1 }, 2
- 3: 0, { return 1 }, { return 2 }
- 4: 0, 1, undefined

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1

ES6 provides method definitions and property shorthands for objects. So both prop2 and prop3 are treated as regular function values.

</p>
</details>

---

**[⬆ Back to Top](#Coding-Exercise)**

#### 15. What is the output of below code

```javascript
console.log(1 < 2 < 3);
console.log(3 > 2 > 1);
```

- 1: true, false
- 2: false, true
- 3: true, true
- 4: false, false

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1

It will check step by step. It will check first two operand and compare between two and as a output it will return a boolean vlaue. Then with that boolean it will compare the rest part. 
`For example for example 1 `
First it will check `1 < 2 ` 
Form there it will get a boolean value `false`
Then it will compare `false < 2`
Which will give a new boolean value `true`
An ultimately it will give `true` 


</p>
</details>

---

**[⬆ Back to Top](#Coding-Exercise)**


#### 16. What is the output of below code

```javascript
function student (name, age, name) {
  console.log (name, age, name)
}
student ("John Doe", 25, "John Smith")
```

- 1: undefiend, 25, undefined
- 2: John Doe, 25, John Smith
- 3: Error (Duplicate parameter not allowed in this context)
- 4: John Smith, 25, John Smith

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 4
In a non-strict mode regular Javascript function accept multiple parameter and give the latest one.
</p>
</details>

---

**[⬆ Back to Top](#Coding-Exercise)**


#### 17. What is the output of below code

```javascript
function student (name, age, name = "John Paul") {
  console.log (name, age, name)
}
student ("John Doe", 25, "John Smith")
```

- 1: undefiend, 25, undefined
- 2: John Doe, 25, John Smith
- 3: Error (Duplicate parameter not allowed in this context)
- 4: John Smith, 25, John Smith
- 5: John Smith, 25, John Paul

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 3
In a non-strict mode regular Javascript function accept multiple parameter and give the latest one. But when default value will be assign in the multiple parameter that time it will give an error. 
</p>
</details>

---

**[⬆ Back to Top](#Coding-Exercise)**


#### 18. What is the output of below code

```javascript
const student  = (name, age, name) => {
  console.log (name, age, name)
}
student ("John Doe", 25, "John Smith")
```

- 1: undefiend, 25, undefined
- 2: John Doe, 25, John Smith
- 3: Error (Duplicate parameter not allowed in this context)
- 4: John Smith, 25, John Smith

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 3
In a non-strict mode regular Javascript function accept multiple parameter and give the latest one. But arrow function doesn't support multiple parameter.
</p>
</details>

---

**[⬆ Back to Top](#Coding-Exercise)**


#### 19. What is the output of below code

```javascript
function normalFunction () {
  return arguments.length 
}
console.log(normalFunction(1, 2, 3));
```

- 1: ReferenceError: arguments is not defined
- 2: 3
- 3: undefined
- 4: null

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 3
In the Normal Javascript function has a default arguments property where all arguments are store.
</p>
</details>

---

**[⬆ Back to Top](#Coding-Exercise)**


#### 20. What is the output of below code

```javascript
const arrowFunc = () => arguments.length;
console.log(arrowFunc(1, 2, 3));
```

- 1: ReferenceError: arguments is not defined
- 2: 3
- 3: undefined
- 4: null

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1
In the Normal Javascript function has a default arguments property where all arguments are store. But Arrow function doesn't have any `Arguments property, new, super, this`.
</p>
</details>

---

**[⬆ Back to Top](#Coding-Exercise)**