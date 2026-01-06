// let marks1 = 90;
// let marks2 = 87;

// let marks = {
//     stud1: 90,
//     stud2: 87,
//     stud3: 78
// }

let marks = [90, 87, 78, 56, 45];
console.log(marks);
console.log(marks.length);// property of array

let heroes = ["Spiderman","Ironman", "Thor", "Hulk"];
console.log(heroes);

typeof heroes; // object , instead of key:value array has index:value.

//Indices 
//marks[0] --> 90

//change value using index
//marks[2] = 80;
//console.log(marks);
//Strings are immutable
//arrays are mutable   

//Loopings over an array
// loops --> iterable(strings,objects,arrays)

// for loop
// for(let i=0; i<marks.length; i++){
//     console.log(marks[i]);
// }

//for of loop
// for(let hero of heroes){
//     console.log(hero);
// }

// //Question 1
// let Marks = [85,97,44,37,76,60];
// let sum = 0;
// for (let value of Marks ){
//     sum = sum + value;
// }
// let avg = sum / Marks.length;
// console.log(`Avg marks of the class = ${avg}`) ;

// //Question 2
// let items = [250,645,300,900,50];
// for(let i=0; i<items.length; i++){
//     let offer = items[i] / 10;
//     items[i] = items[i] - offer;    
//     }
// console.log(`After applying the offer the new price  = ${items}`);

//Array methods
//push()
heroes.push("chhota bheem");
console.log(heroes);
//pop()
heroes.pop();
console.log("Deleted hero is " + heroes.pop());
//toString()
heroes.toString();
console.log(heroes.toString());
//concat()
let marvelHeroes =  ["Spiderman","Ironman", "Thor", "Hulk"];
let dcHeroes = ["Batman", "Superman", "Flash"];
let Heroess = marvelHeroes.concat(dcHeroes); 
console.log(Heroess);
//unshift()--> adds element at the start of the array
Heroess.unshift("antman");
//shift()--> removes element from the start of the array
Heroess.shift();
//slice()--> gives a new array from the given range
let newArray = Heroess.slice(1,4);
console.log(newArray);
//splice()--> adds/removes elements from the given index
let arr = [1,2,3,4,5,6,7,8,9];
arr.splice(2,3,10,11,12);
console.log(arr);








