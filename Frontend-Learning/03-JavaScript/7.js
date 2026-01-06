let btn1 = document.querySelector("#btn1");

// Event handling
// btn1.onclick = (evt) =>{
//     // console.log("btn1 was clicked using js -Handler 1");
//     // let a = 20;
//     // a++;
//     // console.log(a);
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX);
//     console.log(evt.clientY);   
// }

// let div = document.querySelector("div");
// div.onmouseover = () =>{
//     console.log("You are inside div using js");


btn1.addEventListener("click", () => {
    console.log("Button was clicked - Handler 2");
});

const handler3 = () => {
    console.log("Button was clicked - Handler 3");
}
btn1.addEventListener("click", handler3);


btn1.addEventListener("click", () => {
    console.log("Button was clicked - Handler 4");
});
//Remove Event Listener

btn1.removeEventListener("click", handler3);

//js > html > inline 


 
