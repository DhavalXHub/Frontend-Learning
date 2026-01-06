// console.log('Hello '); 
// console.error('This is an error');
// console.warn('warning!!!');

// var,let, const...

// const age = 18; -->more secure , less chances of error
// age =10;
// console.log(age); ----> error will occur as it cant be changed!

// let marks = 70;
// marks=60;
// console.log(marks);


//Data types...
// Strings, Numbers, Boolean, Null, Undefined

//Primitive data type

// const name = 'Walter';
// const age = 20;
// const rating = 9.5;
// const isCool = true;
// const x = null;
// const y = undefined;
// let z; //initialize

// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof rating);
// console.log(typeof isCool);
// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof z);

// const name = 'Batman';
// const age = 20;

//Concatenation
// console.log('My name is '+ name +' and I am '+ age +'');
// //Template String
// const Hello = `My name is  ${name} and I am ${age}`;
// console.log(Hello);

// const s = "Hello World";
// console.log(s.length); 
// console.log(s.substring(0,5).toUpperCase());
// console.log(s.toUpperCase());
// console.log(s.split(''))


//ARRAYS... --> variables that hold multiple values

// const numbers = new Array(1,2,3,4,5);
// console.log(numbers);

// // const fruits = ['apples', 'oranges', 'pears', 10, true];
// const fruits = ['apples', 'oranges', 'pears'];
// fruits[3] = 'grapes';
// fruits.push('mangos');
// fruits.unshift('strawberry');
// fruits.pop();
// console.log(Array.isArray(fruits));
// console.log(Array.isArray('Hello'));

// console.log(fruits.indexOf('oranges'));
// console.log(fruits);

// const person = {
//     firstName: 'Walter',
//     lastname: 'White',
//     age: 50,
//     hobbies: ['music','cooking','sports'],
//     address: {
//         street:'Boston',
//         state: 'MA'
      
//     }
// }

// // console.log(person.firstName,person.lastname);
// // console.log(person.hobbies[1]);


// const { firstName, lastName, address: {city} } = person ;
// console.log(city);

// person.email = 'cookingmath@gmail.com';
// console.log(person);

const todos = [
    {
        id:1,
        text: 'Take out trash',
        isCompleted: true,
    },
    {
        id:2,
        text: 'Meeting',
        isCompleted: true,
    },
    {
        id:3,
        text: 'Appointment',
        isCompleted: true,
    }

]

// console.log(todos);
// console.log(todos[2].id);

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);



// // For loop
// for (let i = 0; i <=10; i++){
//     console.log(`For loop number: ${i}`);
// }

// //While loop
// let i = 0;
// while(i<10){
//     console.log(`While loopnumber: ${i}`);
//     i++;


//forEach, map, filter
// todos.forEach(function(todo)
// {
//     console.log(todo.text);
// });

// const todoText = todos.map(function(todo){
//     return todo.text;
// })

// console.log(todoText);

// Filter
// const todoCompleted = todos.filter(function(todo){
//     return todo.isCompleted === true;
// }).map(function(todo) {
//     return todo.text;

// })
// console.log(todoCompleted);

// Condition

// const x = 20;
// if(x == 10){
//     console.log('x is 10');
// }
// else if(x>10){
//     console.log('x is greater than 10');
// }
// else{
//     console.log('x is not 10');

// const x =11;
// const color = x > 10 ? 'red' : 'blue';

// //switch
// switch(color){
//     case 'red':
//         console.log("color is red");
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default:
//         console.log('color is not red nor blue');
// }

// function addNums(num1=10, num2=20){
//     return num1 + num2;
// }

// console.log(addNums());

//Constructor function 
// function Person(firstName, lastName, dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob) ;

// }

// Person.prototype.getBirthYear = function(){
//     return this.dob.getFullYear();
// }

// Person.prototype.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`;
// }

// //Instantiate object 
// const person1 = new Person('John', 'Doe', '5-5-1985');
// const person2 = new Person('Joe', 'Goldberg', '7-8-1995');

// console.log(person2.getFullName);
// console.log(person1);


