const removeDuplicates = arr => [...new Set(arr)];

let input = [1,3,3,2,8,5,8,3,5,4,5]
let output = removeDuplicates(input)
console.log(output);