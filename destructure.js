// const {name,age} = {
//     name :"hii",
//     age:67
// }
// console.log(name)

const { get } = require("prompt")


// const data ={
//     name :"hello",
//     age : 56
// }
// Object.freeze(data)
// data.age = 90
// console.log(data)


// console.log(typeof [])


// setTimeout(() => {
//     console.log("hii")
// }, 0);

// console.log("hello")

// var x = 5
// x =0
// setTimeout(() => {
//     console.log(x)
// }, );
// console.log("hello")
// x = x+1

// fun2();

// console.log(x)
// console.log(y)

// fun1();
// const fun1 =() =>{
// console.log("fun1")
// }
// function fun2(){
//     console.log("fun2")
// }
// var x = 5
// let  y =7


// function hello(a,b){


// }
// console.log(hello.length)



// .this 

var obj = {
    name :"hii",
    getName:function(){
        console.log(this.name)
    }
}
obj.getName()

// constructor

// function Person(name,age,gender)  {
//        this.name = name;
//        this.age = age;
//        this.gender = gender
// }

// var person1 = new Person ("gaggu",34,"male")
// console.log(person1)

// let a = true
// let b = false

// a = String(a)
// b = String(b)

// let c = a
// a=b
// b=c

// console.log( a)
// console.log(b)



// let a = 'true'
// let b = 'false'

// a = bool.toString(a)
// b = bool.toString(b)

// let c = a
// a=b
// b=c

// console.log( a)
// console.log(b)

// swap the values 
// let a = 10
// let b = 20

// let c = a
// a=b
// b=c
// console.log(a)
// console.log(b)



// convert the km into miles  1km = 0.621371

// let  km  = 15 
// const mile= 0.621371   
// console.log(km*mile)


// let data =Math.floor(Math.random() * 1017);
// console.log(data)




// let alphabets ='abcdefghijklmnopqrstuvwxyz'
// let getword=""
// for(i=0;i<4;i++){
// getword += alphabets.charAt(Math.floor(Math.random()*alphabets.length))

// }

// console.log("getword",getword)



let arr = [1, 2, 3, 4, 87885, 2, 3, 1];

arr = arr.sort()
console.log(arr)

let c = arr.length - 1

console.log("the large value", arr[c])







