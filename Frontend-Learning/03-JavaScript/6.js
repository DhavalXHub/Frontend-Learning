// console.log("hello");
// alert("heyyy");
 
//window object in JS -- Global object
// window.console.log("Hii");

// DOM - Document Object Model
// It represents the HTML document as a tree structure
// where each node is an object representing a part of the document.

// console.dir(window);
// console.dir(document);
// console.dir(document.body);

//  console.log(document.body);

//DOM Manipulation
// selecting by element id
// let heading = document.getElementById("heading");//h1
// console.dir(heading);
// console.log()

// Selecting with class name -- gives html collection like array
// let headings = document.getElementsByClassName("head");
// console.dir(headings);

// Selecting with tag name 
// let buttons = document.getElementsByTagName("button");
// console.dir(buttons);

// Selecting with query selector -- returns first matching element
// let FirstEl = document.querySelector("p");// 1st element
// console.dir(FirstEl);

// let allEl = document.querySelectorAll("p");
// console.dir(allEl);

// //class
// let classEl = document.querySelectorAll(".head");
// console.dir(classEl);

// //Id
// let IdEl = document.querySelector("#unique");
// console.dir(IdEl);

// Properties
// 1 tagname
// 2 innerText
// let div = document.querySelector("div");
// console.dir(div);
// 3 innerHTML
// console.log(div.innerHTML);
// 4 textContent


//Q1
// let h2 = document.querySelector("h2");
// console.dir(h2);
// console.dir(h2.innerText);
// h2.innerText = h2.innerText + " Welcome to DOM Learning";
// console.dir(h2.innerText);

// Q2
// let divs = document.querySelectorAll(".box");
// console.dir(divs[0]);

//DOM PART2
// let divv = document.querySelector("div");
// console.log(divv);

// let id = divv.getAttribute("id")
// console.log(id);

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));   

// let para = document.querySelector("p");
// console.log(para.setAttribute("class","newClass"));   

// let div = document.querySelector("div");
// // node.style 
// div.style.backgroundColor = "lightblue";
 
// Insert Elements
// let newBtn = document.createElement("button");
// newBtn.innerText = "Click Me!";

// console.log(newBtn);

// // Append
// // let div = document.querySelector("div");
// // div.append(newBtn);

// //prepend
// let div = document.querySelector("div");
// div.prepend(newBtn);

// // Before
// div.before(newBtn);

// // After
// div.after(newBtn);

// // Remove
// newBtn.remove();













