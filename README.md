# JavaScript_Assessment1

## Question 1 

var y = 1; 
if(void function f(){})
  {
     y += typeof f; 
  } 
console.log(y);

Output In Screenshot ------------------------
<img width="1138" alt="Screenshot 2023-07-13 at 3 58 21 PM" src="https://github.com/iamappinventiv/JavaScript_Assessment1/assets/139428101/97cf88cf-3fdc-411d-a03d-857168be80f4">

Explanation---->

## Question 2 

(function () { 
    var a = b = 3; 
  })() ; 
console.log ("a defined? " + (typeof a !== 'undefined')); console.log ("b defined? " + (typeof b !== 'undefined'));

Output In ScreenShot ---->

<img width="1131" alt="Screenshot 2023-07-13 at 4 10 27 PM" src="https://github.com/iamappinventiv/JavaScript_Assessment1/assets/139428101/2f8f2340-56f5-4787-8602-30a9208e43ab">

Explanation---->

## Question 3

console.log (typeof typeof 1);

Output In ScreenShot ---->

<img width="1136" alt="Screenshot 2023-07-13 at 4 24 30 PM" src="https://github.com/iamappinventiv/JavaScript_Assessment1/assets/139428101/105bcb45-2174-4cd6-b95a-45ee220a86bc">

Explanation---->

##Question 4 

var v1 = 10; 
(function(){ 
  console.log(v1); 
  v1 = 20; 
  console.log(v1); 
})(); 
console.log(v1); 
var v1 = 30;

Output In ScreenShot ---->

<img width="1131" alt="Screenshot 2023-07-13 at 4 25 55 PM" src="https://github.com/iamappinventiv/JavaScript_Assessment1/assets/139428101/8d45db2a-b442-4efa-b318-65f3b28db7db">

Explanation---->

##Question 5

for (let i = 1; i <= 100; i++) {
 let f = i % 3 == 0, 
 b = i % 5 == 0;
 console. log(f ? (b ? 'FizzBuzz': 'Fizz') : b ? 'Buzz' : i); 
}

Output In ScreenShot ---->

<img width="1116" alt="Screenshot 2023-07-13 at 4 27 13 PM" src="https://github.com/iamappinventiv/JavaScript_Assessment1/assets/139428101/8b7f79c1-7cf8-444e-b822-d9cd32bb1194">





