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
- 4: 1,number,number

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
  -typeof `a` is `number`
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
