//1-SWAPPING TWO VARIABLES
// let arr = ["Ahmed", "Hemdan"];
// let arr2 = arr;
// console.log("Array 1 : " ,arr);
// console.log("Array 2 : " ,arr2);

// ----------------------------------------
//2- Function to return min and max using rest and spread operator
// function minAndMax(...arr) {
//   const min = Math.min(...arr);
//   const max = Math.max(...arr);
//   return [min, max];
// }
// const [minValue, maxValue] = minAndMax(3, 5, 1, 8, 2);
// console.log("Min value:", minValue);
// console.log("Max value:", maxValue);

// ----------------------------------------
// 3- Check if all elements in an array are strings

// let fruits = ["Apple","strawbery","banana","orange","mango"];
// let value = fruits.every((fruit) => {
//   return typeof fruit === "string";
// });
// console.log(value);

// // (B) Test Some Element Start With a
// let str = fruits.some((fruit) => {
//     return fruit.startsWith("a");
// });
// console.log(str);

// // (C) Filtered Names That Start With b || s
// const FilterNames = fruits.filter(fruit => fruit.startsWith("b") || fruit.startsWith("s"));
// console.log("Filtered Names Will Be : " ,FilterNames)

// // c. filter elements starting with "b" or "s"
// let filtered = fruits.filter(fruit => fruit.startsWith("b") || fruit.startsWith("s"));
// console.log("Filtered:", filtered); // ["strawberry", "banana"]

// // d. new array : I like fruit
// let likedFruits = fruits.map(fruit => `I like ${fruit}`);
// console.log("Liked fruits:", likedFruits);

// // e. use forEach to display all elements
// likedFruits.forEach(msg => console.log(msg));

// ----------------------------------------
// 4- array of number and return a positive number
// let numbers = [-5,3,8,4];
// numbers = numbers.filter(num => num >= 0);
// console.log("Positive numbers:", numbers);

// ----------------------------------------
// 5- Using Reduce to find the sum of an array of numbers
//  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = numbers.reduce((acc, curr) => acc + curr, 0);
// console.log("Sum of numbers:", sum);

// ----------------------------------------
// 6-Function take Array Of Names and return Capitalized Names
// function capNames(names) {
//     return names.map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
//     }
//     capNames(["ahmed", "hemdan", "ali"])
//     console.log(capNames(["ahmed", "hemdaN", "ali"]));

// ----------------------------------------
// 7- Check if a string is in a lowercase
// function LowerCase(str) {
//     return str === str.toLowerCase();
// }
// console.log(LowerCase("hello")); 
// console.log(LowerCase("Hello"));

// ----------------------------------------
// 8- Filter an array by length
// const filterByLength = (arr, length) => arr.filter(str => str.length > length);
// console.log(filterByLength(["apple", "Horse", "Orange", "Car"], 3));

// ----------------------------------------

// inheritance

import { Rectangle, Square, Circle } from './shapes.js';
const rect = new Rectangle(8, 4);
const square = new Square(5);
const circle = new Circle(3);
rect.display();
square.display();
circle.display();
