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


#### 21. What is the output of below code

```javascript
console.log (Math.max())
console.log (Math.min())
```

- 1: Infinity, -Infinity
- 2: -Infinity, Infinity

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 2
-Infinity is the initial comparant because almost every other value is bigger. So when no arguments are provided, -Infinity is going to be returned. Note: Zero number of arguments is a valid case.
</p>
</details>

---

**[⬆ Back to Top](#Coding-Exercise)**

#### 22. What is the output of below code

```javascript
console.log(25 == [25]);
console.log(25 == [[[[[[[25]]]]]]]);
```

- 1: true, false
- 2: true, true
- 3: false, true
- 4: false, false 

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 2
When a Non Primitve or Refference type datatype will compare with a primitive datatype. That time -
First The Non Primitive Data will call it's own method `valueOf()` 
Then it will call it's own method `toString()`
Then it will compare with the Primitive datatype.
Example:
```
  25 == Number ([25].valueOf().toString())
```
</p>
</details>

---

**[⬆ Back to Top](#Coding-Exercise)**


#### 23. What is the output of below code

```javascript
console.log([0] == false);
if ([0]) {
  console.log("I'm True");
} else {
  console.log("I'm False");
}
```

- 1: True, I'm True
- 2: True, I'm False
- 3: False, I'm True
- 4: False, I'm False 

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1
In comparison operators, the expression [0] converted to Number([0].valueOf().toString()) which is resolved to false. Whereas [0] just becomes a truthy value without any conversion because there is no comparison operator.
</p>
</details>

---

**[⬆ Back to Top](#Coding-Exercise)**


#### 24. What is the output of below code

```javascript
console.log([1, 2] + [3, 4]);
```

- 1: [1,2,3,4]
- 2: [1,2][3,4]
- 3: SyntaxError
- 4: 1,23,4 

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 4
The + operator is not meant or defined for arrays. So it converts arrays into strings and concatenates them.
</p>
</details>

---

**[⬆ Back to Top](#Coding-Exercise)**


#### 25. What is the output of below code

```javascript
const numbers = new Set([1, 1, 2, 3, 4]);
console.log(numbers);

const browser = new Set("Firefox");
console.log(browser);
```

- 1: {1, 2, 3, 4}, {"F", "i", "r", "e", "f", "o", "x"}
- 2: {1, 2, 3, 4}, {"F", "i", "r", "e", "o", "x"}
- 3: [1, 2, 3, 4], ["F", "i", "r", "e", "o", "x"]
- 4: {1, 1, 2, 3, 4}, {"F", "i", "r", "e", "f", "o", "x"}

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1
Since Set object is a collection of unique values, it won't allow duplicate values in the collection. At the same time, it is case sensitive data structure.
</p>
</details>

---

**[⬆ Back to Top](#Coding-Exercise)**


#### 26. What is the output of below code

```javascript
console.log(NaN === NaN);
```

- 1: False
- 2: True

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1
JavaScript follows IEEE 754 spec standards. As per this spec, NaNs are never equal for floating-point numbers.
</p>
</details>

---

**[⬆ Back to Top](#Coding-Exercise)**


#### 27. What is the output of below code

```javascript
let numbers = [1, 2, 3, 4, NaN];
console.log(numbers.indexOf(NaN));
```

- 1: true
- 2: NaN
- 3: SyntaxError
- 4: -1

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 4
The `indexOf` uses strict equality operator(===) internally and NaN === NaN evaluates to false. Since indexOf won't be able to find NaN inside an array, it returns -1 always. But you can use Array.prototype.findIndex method to find out the index of NaN in an array or You can use Array.prototype.includes to check if NaN is present in an array or not.
</p>
</details>

---

**[⬆ Back to Top](#Coding-Exercise)**



#### 28. What is the output of below code

```javascript
let numbers = [1, 2, 3, 4, NaN];
console.log(numbers.includes(NaN));
```

- 1: true
- 2: NaN
- 3: SyntaxError
- 4: -1

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1
The `indexOf` uses strict equality operator(===) internally and NaN === NaN evaluates to false. But `include` method compare data that is it exist or not. If it exists then it will return `true` otherwise `false`.
</p>
</details>

---

**[⬆ Back to Top](#Coding-Exercise)**

#### 29. What is the output of below code

```javascript
let [a, ...b,] = [1, 2, 3, 4, 5];
console.log(a, b);
```

- 1: 1, [2, 3, 4, 5]
- 2: 1, {2, 3, 4, 5}
- 3: SyntaxError
- 4: 1, [2, 3, 4]

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 3
When using rest parameters, trailing commas are not allowed and will throw a SyntaxError. If you remove the trailing comma then it displays 1st answer
</p>
</details>

---

**[⬆ Back to Top](#Coding-Exercise)**

#### 30. What is the output of below code

```javascript
async function func() {
  return 10;
}
console.log(func());
```

- 1: Promise {<fulfilled>: 10}
- 2: 10
- 3: SyntaxError
- 4: Promise {<resolved>: undefined}

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 4
The await expression returns value 10 with promise resolution and the code after each await expression can be treated as existing in a .then callback. In this case, there is no return expression at the end of the function. Hence, the default return value of undefined is returned as the resolution of the promise. The above async function is equivalent to below expression,
</p>
</details>

---

**[⬆ Back to Top](#Coding-Exercise)**


#### 31. What is the output of below code

```javascript
async function func() {
  await 10;
}
console.log(func());
```

- 1: Promise {<fulfilled>: 10}
- 2: 10
- 3: SyntaxError
- 4: Promise {<rejected>: 10}

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1
Async functions always return a promise. But even if the return value of an async function is not explicitly a promise, it will be implicitly wrapped in a promise. The above async function is equivalent to below expression,
</p>
</details>

---

**[⬆ Back to Top](#Coding-Exercise)**


#### 32. What is the output of below code

```javascript
function delay() {
  return new Promise(resolve => setTimeout(resolve, 2000));
}

async function delayedLog(item) {
  await delay();
  console.log(item);
}

async function processArray(array) {
  array.forEach(item => {
    await delayedLog(item);
  })
}

processArray([1, 2, 3, 4]);
```

- 1: SyntaxError
- 2: 1, 2, 3, 4
- 3: 4, 4, 4, 4
- 4: 4, 3, 2, 1

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1
In the forEach method inside the call back function there need to have a `async` function to exectue the `await` operation. Because to execute the `await` operation need to have a async function. 
</p>
</details>

---

**[⬆ Back to Top](#Coding-Exercise)**

#### 33. What is the output of below code

```javascript
function delay() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

async function delayedLog(item) {
  await delay();
  console.log(item);
}

async function process(array) {
  array.forEach(async (item) => {
    await delayedLog(item);
  });
  console.log("Process completed!");
}
process([1, 2, 3, 5]);
```

- 1: 1 2 3 5 and Process completed!
- 2: 5 5 5 5 and Process completed!
- 3: Process completed! and 5 5 5 5
- 4: Process completed! and 1 2 3 5

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 4
The forEach method will not wait until all items are finished but it just runs the tasks and goes next. Hence, the last statement is displayed first followed by a sequence of promise resolutions.
</p>
</details>

---

**[⬆ Back to Top](#Coding-Exercise)**

#### 34. What is the output of below code

```javascript
function delay() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

async function delayedLog(item) {
  await delay();
  console.log(item);
}
async function processArray(array) {
  for (const item of array) {
    await delayedLog(item);
  }
  console.log("Process completed!");
}
processArray([1, 2, 3, 5]);
```

- 1: 1 2 3 5 and Process completed!
- 2: 5 5 5 5 and Process completed!
- 3: Process completed! and 5 5 5 5
- 4: Process completed! and 1 2 3 5

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1
By using `for...of` loop first the `await` part will execute. After that the `console.log()` part will be execute.
</p>
</details>

---

**[⬆ Back to Top](#Coding-Exercise)**


#### 35. What is the output of below code

```javascript
let set = new Set();
set.add("+0").add("-0").add(NaN).add(undefined).add(NaN);
console.log(set);
```

- 1: Set(4) {"+0", "-0", NaN, undefined}
- 2: Set(3) {"+0", NaN, undefined}
- 3: Set(5) {"+0", "-0", NaN, undefined, NaN}
- 4: Set(4) {"+0", NaN, undefined, NaN}

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1
In Set() `+0` and `-0` are not same. They are not unique.
</p>
</details>

---

**[⬆ Back to Top](#Coding-Exercise)**


#### 36. What is the output of below code

```javascript
const sym1 = Symbol("one");
const sym2 = Symbol("one");

const sym3 = Symbol.for("two");
const sym4 = Symbol.for("two");

cnsooe.log(sym1 === sym2, sym3 === sym4);
```

- 1: true, true
- 2: true, false
- 3: false, true
- 4: false, false

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 3

Symbol follows below conventions,

Every symbol value returned from Symbol() is unique irrespective of the optional string.
Symbol.for() function creates a symbol in a global symbol registry list. But it doesn't necessarily create a new symbol on every call, it checks first if a symbol with the given key is already present in the registry and returns the symbol if it is found. Otherwise a new symbol created in the registry.
Note: The symbol description is just useful for debugging purposes.



</p>
</details>

---

**[⬆ Back to Top](#Coding-Exercise)**

#### 37. What is the output of below code

```javascript
const sym1 = new Symbol("one");
console.log(sym1);
```

- 1: SyntaxError
- 2: one
- 3: Symbol('one')
- 4: Symbol

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 3

Symbol is a just a standard function and not an object constructor(unlike other primitives new Boolean, new String and new Number). So if you try to call it with the new operator will result in a TypeError

</p>
</details>

---

**[⬆ Back to Top](#Coding-Exercise)**

#### 38. What is the output of below code

```javascript
console.log(
  JSON.stringify({ myArray: ["one", undefined, function () {}, Symbol("")] })
);
console.log(
  JSON.stringify({ [Symbol.for("one")]: "one" }, [Symbol.for("one")])
);
```

- 1: {"myArray":['one', undefined, {}, Symbol]}, {}
- 2: {"myArray":['one', null,null,null]}, {}
- 3: {"myArray":['one', null,null,null]}, "{ [Symbol.for('one')]: 'one' }, [Symbol.for('one')]"
- 4: {"myArray":['one', undefined, function(){}, Symbol('')]}, {}

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 2

The symbols has below constraints,

- 1. The undefined, Functions, and Symbols are not valid JSON values. So those values are either omitted (in an object) or changed to null (in an array). Hence, it returns null values for the value array.

- 2.  All Symbol-keyed properties will be completely ignored. Hence it returns an empty object({}).

</p>
</details>

---

**[⬆ Back to Top](#Coding-Exercise)**

#### 39. What is the output of below code

```javascript
class A {
  constructor() {
    console.log(new.target.name);
  }
}

class B extends A {
  constructor() {
    super();
  }
}

new A();
new B();
```

- 1: A, A
- 2: A, B

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 2

Using constructors, new.target refers to the constructor (points to the class definition of class which is initialized) that was directly invoked by new. This also applies to the case if the constructor is in a parent class and was delegated from a child constructor.

</p>
</details>

---

**[⬆ Back to Top](#Coding-Exercise)**

#### 40. What is the output of below code

```javascript
const [x, ...y] = [1, 2, 3, 4];
console.log(x, y);
```

- 1: 1, [2, 3, 4]
- 2: 1, [2, 3]
- 3: 1, [2]
- 4: SyntaxError

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1
Here `....` means `Rest` operator. Which wrap all rest data as a new array. 

</p>
</details>

---

**[⬆ Back to Top](#Coding-Exercise)**

#### 41. What is the output of below code

```javascript
const { a: x = 10, b: y = 20 } = { a: 30 };

console.log(x);
console.log(y);
```

- 1: 30, 20
- 2: 10, 20
- 3: 10, undefined
- 4: 30, undefined

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1
Here in the object distrutring part Both time a default value has been set. But when a data has been found from the object that time the particular default value will be ignored

</p>
</details>

---

**[⬆ Back to Top](#Coding-Exercise)**



#### 42. What is the output of below code

```javascript
function area({ length = 10, width = 20 }) {
  console.log(length * width);
}

area();
```

- 1: 200
- 2: Error
- 3: undefined
- 4: 0

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 3
Here in the parameter section it has been set a default value of object. But this is not a valid way to declare a paratmeter. That's why it will give a Error of undefined

</p>
</details>

---

**[⬆ Back to Top](#Coding-Exercise)**

#### 43. What is the output of below code

```javascript
function area({ length = 10, width = 20 } = {}) {
  console.log(length * width);
}

area();
```

- 1: 200
- 2: Error
- 3: undefined
- 4: 0

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1
Here in the parameter section it has been set a default value of object. But it has been distructure from an object. So that it will get as a regular value. 

</p>
</details>

---

**[⬆ Back to Top](#Coding-Exercise)**

#### 44. What is the output of below code

```javascript
function area({ length = 10, width = 20 } = {}) {
  console.log(length * width);
}

area({length: 5});
```

- 1: 200
- 2: Error
- 3: undefined
- 4: 100

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 4
Here in the parameter section it has been set a default value of object. But as a argument a object has been sent to that function and there a property exist name `lenght`. Sothat in the parameter section as a length it will get `5` and as a value of width it will get `20` which is the deafult value.

</p>
</details>

---

**[⬆ Back to Top](#Coding-Exercise)**


#### 45. What is the output of below code

```javascript
const props = [
  { id: 1, name: "John" },
  { id: 2, name: "Jack" },
  { id: 3, name: "Tom" },
];

const [, , { name }] = props;
console.log(name);
```

- 1: Tom
- 2: Error
- 3: undefined
- 4: John

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1
First it will distructure the array and then it will distucture the object property and got the value `Tom`.

</p>
</details>

---

**[⬆ Back to Top](#Coding-Exercise)**


#### 46. What is the output of below code

```javascript
function checkType(num = 1) {
  console.log(typeof num);
}

checkType();
checkType(undefined);
checkType("");
checkType(null);
```

- 1: number, undefined, string, object
- 2: undefined, undefined, string, object
- 3: number, number, string, object
- 4: number, number, number, number

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 3
First of all it will get the default value which is a `number`
Then it will get a undefined. Since it is a undefined sothat it will get the deafult paratmeter which is a `number`
Then it will get a `String` and `Object` respectively. 

</p>
</details>

---

**[⬆ Back to Top](#Coding-Exercise)**


#### 47. What is the output of below code

```javascript
function add(item, items = []) {
  items.push(item);
  return items;
}

console.log(add("Orange"));
console.log(add("Apple"));
```

- 1: ['Orange'], ['Orange', 'Apple']
- 2: ['Orange'], ['Apple']

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 2
Here both function call is separate sothat there don't have any relation between those. So each time it will create a new object of item.

</p>
</details>

---

**[⬆ Back to Top](#Coding-Exercise)**


#### 48. What is the output of below code

```javascript
function greet(greeting, name, message = greeting + " " + name) {
  console.log([greeting, name, message]);
}

greet("Hello", "John");
greet("Hello", "John", "Good morning!");
```

- 1: SyntaxError
- 2: ['Hello', 'John', 'Hello John'], ['Hello', 'John', 'Good morning!']

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 2
In the first example `Two` arguments has been passed but there have `Three` arguments. So default parameter will auto assign.
But in the next example when all `Three` argument has been passed that time it will give as expect result

</p>
</details>

---

**[⬆ Back to Top](#Coding-Exercise)**


#### 49. What is the output of below code

```javascript
function outer(f = inner()) {
  function inner() {
    return "Inner";
  }
}
outer();
```

- 1: ReferenceError
- 2: Inner

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1
When the `outer()` function has been invoked that time it will create the createion phase of the `outer()` function but in the creation phase it will first assign the `Arguments` part and then assign that value into the `local` variable but if ther don't have any argument and if there have any default value then it will auto assign that value. But here when the default will assigned it wll find the `inner()` function. But till now the `inner` function is not keep in the track. So it will thrown a Refference error.

</p>
</details>

---

**[⬆ Back to Top](#Coding-Exercise)**


#### 50. What is the output of below code

```javascript
function myFun(x, y, ...manyMoreArgs) {
  console.log(manyMoreArgs);
}
myFun(1, 2, 3, 4, 5);
myFun(1, 2);
```

- 1: [3, 4, 5], undefined
- 2: SyntaxError
- 3: [3, 4, 5], []
- 4: [3, 4, 5], [undefined]
<details><summary><b>Answer</b></summary>
<p>

##### Answer: 3
`Rest` operator always keep data into `array`. But if no data has been passed into the `Rest` paramenter then it will give a empty array.

</p>
</details>

---

**[⬆ Back to Top](#Coding-Exercise)**


#### 51. What is the output of below code

```javascript
const obj = { key: "value" };
const array = [...obj];
console.log(array);
```

- 1: ['key', 'value']
- 2: TypeError
- 3: []
- 4: ['key']

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 3
Inside an `Object` `Array` can be ittarable. But inside a `Array` an `Object` can not be ittarable.

</p>
</details>

---

**[⬆ Back to Top](#Coding-Exercise)**


