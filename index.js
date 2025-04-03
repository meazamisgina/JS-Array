// 1. Find the last element of the arrays
let arr1 = [3, 7, 34, 90, 12];
let arr2 = [true, "green", "where", 12, 56];
console.log(arr1[arr1.length - 1]);
console.log(arr2[arr2.length - 1]); 

// 2. Join array elements into a string
let myPets = ["Cow", "Bird", "Snake", "Dog"];
let petString = myPets.join(", ");
console.log({petString}); 

// 3. Sort array items
var arr3 = [-5, 9, 5, 3, 2, -3, 6, 8, 4, 1];
arr3.sort((a, b) => a - b);
console.log(arr3); 


// 4. Remove duplicates and console arrays
let arr = ["boy", "man", "girl", "school", "girl", "woman"];
let uniqueArray = [...new Set(arr)];
let duplicatesArray = arr.filter((item, index) => arr.indexOf(item) !== index);
console.log(uniqueArray); 
console.log(duplicatesArray); 

// 5. Search for the word "food" in the array
let arr5 = ["the", "way", "x", 4];
let searchWord = "food";
if (arr5.includes(searchWord)) {
  console.log(searchWord); 
} else {
  console.log("The search word was not found"); 
}


// 6. Sort the string
let word = "renniw";
let sortedWord = word.split("").sort().join("");
console.log(sortedWord);

// 7. Insert 'Tomato' at the 5th index in a fruits array of length 10
let fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes", "Pineapple", "Peach", "Cherry", "Strawberry", "Watermelon"];
console.log("Initial Fruits Array:", fruits);
fruits[5] = 'Tomato'; 
console.log("Fruits Array after inserting 'Tomato':", fruits);
