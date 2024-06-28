var a = 10;

try{
    var c = a*b;
console.log(c)
}catch (error){
    console.log(error)
}finally{
    console.log("finally")
}



// const { message } = require("prompt")


// var  x = 7
// console.log(x)


// destruction


// let a = 1;
// let b = 2;
// [a,b] = [b,a]
// console.log(a)
// console.log(b)


// const colors = ["red","yellow","black","white","green"];

// [colors[0],colors[4]] = [colors[4],colors[0]];

// console.log(colors)


// const colors = ["red","blue","green","white","black"]

// const [firstColor,secondColor,thirdColor,...extraColor] = colors;

// console.log(firstColor);
// console.log(secondColor);
// console.log(extraColor)


// const person1 = {
//    firstName :'hii',
//    secondName :"world",
//    age  : 45,
//    job : "fry cook"

// }

// const person2 = {
//     firstName : "hello",
//     secondName  :"world",
//     age : 54

// }
// const{firstName,secondName,age,job} = person1
// console.log(firstName)
// console.log(secondName)
// console.log(age)
// console.log(job)


// const {FirstName,secondName,age,job = "unemployed"} = person2
// console.log(job)


// this 


// const person = {
//     firstName  : "John",
//     lastName   : "Doe",
//     id         : 5566,
//     myFunction : function() {
//       return this;
//     }
//   }
// console.log( person.myFunction())


// .then

// new Promise(function(resolve, reject) {
//     setTimeout(() => resolve(5), 1000); 
//   })
//   .then(function(result) { 
//     console.log(result); 
//     return result * 2;
//   })
//   .then(function(result) { 
//     console.log(result);
//     return result * 2;
//   })
//   .then(function(result) {
//     console.log(result);
//     return result * 2;
//   });


// promises

// let p = new Promise ((reject,resolve) => {
//    let a =  1+2
//    if(a == 2){
//        resolve('success')
//    }
//    else {
//        reject ('failure')
//    }
// })
// console.log (p)
// p.then ((message)  => {
//   console.log('This is the then ' + message)
// }).catch ((message) => {
//     console.log('This is the catch ' + message)
// })



//   prototype

// function Person(name, job, yearOfBirth){ 
// 	this.name= name; 
// 	this.job= job; 
// 	this.yearOfBirth= yearOfBirth; 
// } 

// console.log(Person.prototype); 



// constructor function


function Person () {
    this.name = "John",
    this.age = 23
}


const person = new Person();


console.log(person.name);
console.log(person.age);

