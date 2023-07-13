var str = "racecar";

reverse = "";
for (let j = str.length - 1; j >= 0; j--) {
  reverse = reverse + str.charAt(j);
}
if (str === reverse) console.log("Palidrome");
else console.log("Not Palidrome");
