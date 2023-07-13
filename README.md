
# JavaScript_Assessment 1
---
## Question 1 
```javascript

var y = 1; 
if(void function f(){})
  {
     y += typeof f; 
  } 
console.log(y);
```
Output In Screenshot ------------------------
<img width="1138" alt="Screenshot 2023-07-13 at 3 58 21 PM" src="https://github.com/iamappinventiv/JavaScript_Assessment1/assets/139428101/97cf88cf-3fdc-411d-a03d-857168be80f4">

Explanation---->as we know void functions are undefined and show as false so if block statement is becoming  false then we are not entering in if block thats  directly print our assigned value of y.
---
---
## Question 2 
```javascript

(function () { 
    var a = b = 3; 
  })() ; 
console.log ("a defined? " + (typeof a !== 'undefined')); console.log ("b defined? " + (typeof b !== 'undefined'));
```
Output In ScreenShot ---->

<img width="1131" alt="Screenshot 2023-07-13 at 4 10 27 PM" src="https://github.com/iamappinventiv/JavaScript_Assessment1/assets/139428101/2f8f2340-56f5-4787-8602-30a9208e43ab">

Explanation----> In This js code we are using Immediately Invoked Function Expression (IIFE). variable is specially declared as var therefore its scope is this function only so outside this function a is undefined whereas b is not declared so , its scope is global thats why b is defined outside the function and type as number.
---
---
## Question 3
```javascript
console.log (typeof typeof 1);
```
Output In ScreenShot ---->

<img width="1136" alt="Screenshot 2023-07-13 at 4 24 30 PM" src="https://github.com/iamappinventiv/JavaScript_Assessment1/assets/139428101/105bcb45-2174-4cd6-b95a-45ee220a86bc">

Explanation---->In this Js code 1 is type of num and when num is returned it was in string ,  its shows output as string

---
---
## Question 4 
```javascript

var v1 = 10; 
(function(){ 
  console.log(v1); 
  v1 = 20; 
  console.log(v1); 
})(); 
console.log(v1); 
var v1 = 30;
```
Output In ScreenShot ---->

<img width="1131" alt="Screenshot 2023-07-13 at 4 25 55 PM" src="https://github.com/iamappinventiv/JavaScript_Assessment1/assets/139428101/8d45db2a-b442-4efa-b318-65f3b28db7db">

Explanation----> v1 is declared and assigned a value 10 and when the IIFE invoked it output the value of v1 has global scope and then we reassign the value of v1 as 20 so its output changes to 20 and also when we came out of the function the value remain 20 as we have reassigned not redeclared so output remain the same.
---
---
## Question 5
```javascript
for (let i = 1; i <= 100; i++) {
 let f = i % 3 == 0, 
 b = i % 5 == 0;
 console. log(f ? (b ? 'FizzBuzz': 'Fizz') : b ? 'Buzz' : i); 
}
```
Output In ScreenShot ---->

<img width="1116" alt="Screenshot 2023-07-13 at 4 27 13 PM" src="https://github.com/iamappinventiv/JavaScript_Assessment1/assets/139428101/8b7f79c1-7cf8-444e-b822-d9cd32bb1194">

Explanation----> In this Code No. from 1 to 100 will be printed if no. is divisible by 3 then fizz will be printed for divisiblew by 5 then buzz and for no. divisible by both then Fizzbuzz will printed. 
---
---

## Question 6 
```javascript

console.log(1 +  "2" + "2"); 
console.log(1 +  +"2" + "2"); 
console.log(1 +  -"1" + "2"); 
console.log(+"1" +  "1" + "2"); 
console.log( "A" - "B" + "2"); 
console.log( "A" - "B" + 2);
```
Output In ScreenShot ---->

<img width="1132" alt="Screenshot 2023-07-13 at 4 28 33 PM" src="https://github.com/iamappinventiv/JavaScript_Assessment1/assets/139428101/c38a2cc2-542f-41c3-be08-708c6c42e87b">

Explanation---->
Line 1: This line combines one number and two strings through concatenation (when a number is added to a string, they are joined together instead of being added numerically). The resulting output is "122".

Line 2: The operation "++" converts the string "2" into a number. Then, the numbers 1 and 2 are added together, resulting in 3. The number 3 is then concatenated with the string "2", giving an output of "32".

Line 3: In this line, the operation +-* is used. Similar to Line 2, the string "1" is converted into a number. However, in this case, subtraction is performed. Subtracting 1 from 1 results in 0, and the number 0 is concatenated with the string "2". The output will be "02".

Line 4: The operation "+1" converts the string "1" into a number, while the other operands are strings. They are concatenated together, resulting in the output of "112".

Line 5 & 6: When subtracting two strings in JavaScript, it produces a value called NaN (Not a Number). However, when a number is added to NaN, it remains NaN. If a string is added to NaN, it is concatenated instead. In the 5th statement, the output becomes "NaN2" because it concatenates the string. In the 6th statement, since it performs addition, the output remains NaN.
---
---
## Question 7
```javascript

console.log("0 || 1 = "+(0 || 1));
console.log("1 || 2 = "+(1 || 2)); 
console.log("0 && 1 = "+(0 && 1)); 
console.log("1 && 2 = "+(1 && 2));
```
Output In ScreenShot ---->

<img width="932" alt="Screenshot 2023-07-13 at 4 31 06 PM" src="https://github.com/iamappinventiv/JavaScript_Assessment1/assets/139428101/0291b876-4136-49cd-87e7-656a24cd08bc">

Explanation---->Line 1 and 2: In the logical OR operation, if any of the arguments is true, the result is true. When dealing with numbers, the output is determined by the value with which the evaluation ends. In the first statement, it checks the second argument because the first argument is 0. However, in the second statement, it ends with the first argument itself.

Line 3: In the logical AND operation, both arguments must be true for the result to be true. In this case, the first argument is 0, so the evaluation stops there, and the output is 0.

Line 4: The first argument is true, so it proceeds to check the second argument, which results in 2. Thus, the output is 2.
---
---
## Question 8
```javascript

var a; 
typeof a; 
a = "hello world"; 
typeof a; 
a = 42; 
typeof a; 
a = true; 
typeof a; 
a = null; 
typeof a; 
a = undefined; 
typeof a;
```
Output In ScreenShot ---->

<img width="669" alt="Screenshot 2023-07-13 at 5 12 09 PM" src="https://github.com/iamappinventiv/JavaScript_Assessment1/assets/139428101/4b0d9c8b-812f-4512-9c11-962723bcd9fb">

Explanation---->
In this example, we didn't use the console to display the output, so it appears empty. However, if we use console.log with each typeof statement, we will see different outputs for each type. Since we update the variable 'a' multiple times, the outputs will be undefined, string, number, boolean, null, and undefined, respectively.
---
---
## Question 9

# Write a program to check if a string is palindrome or not.

Output In ScreenShot ---->

<img width="794" alt="Screenshot 2023-07-13 at 5 18 52 PM" src="https://github.com/iamappinventiv/JavaScript_Assessment1/assets/139428101/59c94908-6c31-47e0-b2ab-830925af5806">

Explanation---->
This program takes a string as input from the user and uses the is_palindrome function to check if the string is a palindrome. The function returns True if the string is equal to its reverse, and False otherwise. The result is then printed to the screen.
---
---
## Question 10

# Find the frequency of elements in the array. 
```javascript

Input - ["check", "wait", "work", "check", "go"]
Output - { check: 2, wait: 1, work: 1, go:1 }
```
Output In ScreenShot ---->

<img width="1133" alt="Screenshot 2023-07-13 at 5 24 10 PM" src="https://github.com/iamappinventiv/JavaScript_Assessment1/assets/139428101/4bcf7957-b3e9-4d3b-81d9-9d6d9ad810fd">

Explanation---->
This JavaScript program calculates the frequency of elements in an array using the countFrequency function. The function iterates over the input array and keeps track of the frequency of each element using an object. The result is then printed to the console
---
---
## Question 11 

# Remove duplicates from a given unsorted array.  //Take an unsorted array of your choice.

Output In ScreenShot ---->

<img width="1008" alt="Screenshot 2023-07-13 at 5 34 49 PM" src="https://github.com/iamappinventiv/JavaScript_Assessment1/assets/139428101/ddaf5529-67ea-4cac-acd1-39b93946ffad">

Explanation---->
In this example, the function removeDuplicates takes an array as an argument and returns a new array with the duplicates removed. The input array [1,3,3,2,8,5,8,3,5,4,5] is passed to the function and the output is [1, 3, 2, 8, 5, 4], which is an array with all the duplicates removed.
---
---
## Question 12

# How to empty an array in JavaScript?

Output In ScreenShot ---->

<img width="1022" alt="Screenshot 2023-07-13 at 5 36 52 PM" src="https://github.com/iamappinventiv/JavaScript_Assessment1/assets/139428101/4b35efc4-22d8-4844-bd56-e96ddcf5991b">

Explanation----> Simple This code empty the arr length with arr.length = 0
---
---
## Question 13

# What do you understand by the term “Hoisting”?

Answer -Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their scope before code execution. This means that you can use a variable or call a function before it has been declared, as long as it’s declared within the same scope.

Here’s an example  hoisting with a variable:
```javascript
console.log(x); // undefined
var x = 5;
```
In this example, the variable x is declared after it’s used in the console.log statement.  due to hoisting, the declaration of x is moved to the top of the scope, so the code is actually look like this:
```javascript
var x;
console.log(x); // undefined
x = 5;
```
As we can see, the declaration of x is hoisted to the top of the scope, but its assignment to 5 is not. This means that when we try to log the value of x before it’s assigned a value, we get undefined.

Another example hoisting with a function:
```javascript
hello(); // "Hello World"

function hello() {
  console.log("Hello World");
}
```

In this example, the function hello is called before it’s declared. However, due to hoisting, the declaration of the function is moved to the top of the scope, so the code is actually interpreted like this:

```javascript
function hello() {
  console.log("Hello World");
}

hello(); // "Hello World"
```

As we can see, the declaration of the function is hoisted to the top of the scope, so we can call it before it’s declared in the code

But , in case of Let and  Const  if we use variable  before initialisation it will show error as hoisting is only  done for declaration and not for initialisation .




---
---
## Question 14

# What is the difference between function declaration and function expression?

Answer -
Function declaration is the basic declaration of function which follows function name then its definition, example:

```javascript
Function mFunction(){
     //
        code..
     //
}
```


Function expression is of two types, one with variables, example - 

```javascript
Const func = function f1(){
  //
     code..
  //
}
   
```
 And another with  arrow function, example - 
 ```javascript
    Let myFunction = (a,b) => a * b;
 ```
Another difference between function declaration and expression is that declaration is 
hoisted while expression is not, hence we cannot use function expression before we 
define it and this is very major difference between them. 

---
---
## Question 15

# Given a string, reverse each word in the sentence. //Take a string of your choice.

Output In ScreenShot ---->

<img width="1123" alt="Screenshot 2023-07-13 at 5 47 40 PM" src="https://github.com/iamappinventiv/JavaScript_Assessment1/assets/139428101/dbf11e88-33f9-436a-996d-46200958fa1b">

Explanation---->
function reverseWords that takes a string as an argument and returns a new string with the words reversed. The function first splits the input string into an array of words using the split method with a space as the separator. Then, it uses the map method to create a new array of reversed words. For each word, the split method is used again to split it into an array of characters, which is then reversed using the reverse method and joined back into a string using the join method. Finally, the array of reversed words is joined back into a string using the join method with a space as the separator.

In this example, the input string "Shivam" is passed to the function and the output is "mavihS", which is the reversed word.
---

