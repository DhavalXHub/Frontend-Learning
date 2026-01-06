//Functions

//function definition
//  function functionName(){
//  do something
//  }

//function call or invoke
// functionName()

// function myfunction(){
//     console.log("Hey buddy!");
// }
// myfunction();

// function Sum(a,b){
//     let c = a+b;
//     console.log(c);
//     return c;
//     console.log("Bye");--> not executed
// }
// Sum(28,28);


//Arrow functions OR =>
// function sum(a,b){
//     return a+b;
// }

// const sum  = (a,b) => {
//     console.log(a + b);
// }

// //Multiplication
// function mul(a,b){
//     return a*b;
// }

//Question1 

// function countVowels(str){
//     //"HelloWorld"
//     let count = 0;
//     str = str.toLowerCase();
//     for(const char of str){
//         if(char==='a'|| char==='e'|| char==='i'|| char==='o'|| char==='u')
//         {
//             count++;
//         }
//     }
//     console.log(count);

// }


// const vowel = (str) => {
//     let i = 0;
//     for(const char of str){
//         if(char==='a'|| char==='e'|| char==='i'|| char==='o'|| char==='u')
//         {
//             i++;
//         }
//     }
//     console.log(i);
// }


//forEach loop
// const arr = [1,2,3,4,5];
// arr.forEach((element) => {
//     console.log(element*element);
// })   

// const arr2 = ["apple","banana","mango"];
// arr2.forEach((e) => {
//     console.log(e.toUpperCase());
// })
 
//Map - gives new array of same length and it is used it transform each element
// const arr = [1,2,3,4,5];
// let newArr = arr.map((val) =>{
//     console.log(val*val);
//     return val*val;
// })
// console.log(newArr); //undefined


//Filter - gives new array of lesser length and it is used to filter elements based on condition
//  let arr = [1,2,3,4,5,6,7,8,9,10];
//  let newArr = arr.filter((val) => {
//     return val%2===0;
//  })
// console.log(newArr);



//reduce - reduces the array to a single value
// let arr = [1,2,3,4,5];
// let sum = arr.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// },0) //0 is initial value of accumulator
// console.log(sum); //15


//Question2
// let marks = [80, 90, 98, 60, 50];
// let newMarks = marks.filter((e) => {
//    return e>=90;
// })
// console.log(newMarks);

// //Question3
// let n = prompt("Enter a number");
// let arr = [];
// for(let i = 1; i<=n;i++)
// {
//    arr[i-1] = i ;
// }
// console.log(arr);

// let sum = arr.reduce((res,curr) => {
//    return res + curr;
// })
// console.log(sum);














