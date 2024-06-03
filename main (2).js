// Start with the scrambled array
var scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
// Initialize an empty array to hold the rearranged words
var rearrangedArray = [];
// Rearrange the array to form the sentence
rearrangedArray.push(scrambledArray.splice(scrambledArray.indexOf("I"), 1)[0]);
rearrangedArray.push(scrambledArray.splice(scrambledArray.indexOf("am"), 1)[0]);
rearrangedArray.push(scrambledArray.splice(scrambledArray.indexOf("a"), 1)[0]);
rearrangedArray.push(scrambledArray.splice(scrambledArray.indexOf("student"), 1)[0]);
rearrangedArray.push(scrambledArray.splice(scrambledArray.indexOf("of"), 1)[0]);
rearrangedArray.push(scrambledArray.splice(scrambledArray.indexOf("GIAIC"), 1)[0]);
// Combine elements back into a single string
var result = rearrangedArray.join(" ");
// Output the result
console.log(result);
