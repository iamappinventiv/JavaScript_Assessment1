 // ###### Question 1 ######
var y = 1;
if (void function f() {}) {
  y += typeof f;
}
console.log(y);

