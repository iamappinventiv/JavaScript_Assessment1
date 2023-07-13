function countFrequency(arr) {
  let frequency = {};
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (frequency[element]) {
      frequency[element]++;
    } else {
      frequency[element] = 1;
    }
  }
  return frequency;
}

let input = ["check", "wait", "work", "check", "go"];
let output = countFrequency(input);
console.log(output);
