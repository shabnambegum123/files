// let prompt = require('prompt-sync')()

// function data(num1, num2, num3) {

//    console.log("num1", typeof num2)

//     if (typeof num1 === 'string' && typeof num2 === 'string' && typeof num3 === 'string') {

//         let a = Number(num1);
//         let  b = Number(num2);
//          let c = Number(num3);
//         let multiply = a * b * c

//         console.log(multiply);
//     }
//     else {
//         console.log("String only allowed!....")
//     }
// }

// let value = prompt("Enter the value 1 ")

// let value2 = prompt("Enter the value 2 ")

// let value3 = prompt("Enter the value 3 ")



// data(value, value2, value3);



// let prompt = require('prompt-sync')()
// function data (num1,num2){
//     console.log(num1+num2);
//     if(data){
//         let a = num1
//         let b = num2
//         let add = a+b;
//         console.log(add);
//     }


// }


// let value = prompt("Enter the value 1")
// let value2 = prompt("Enter the value 2")

// data (value,value2)



// let data =async () => {
// console.log("test")

//  setTimeout (() => {
//     console.log("hii")
// }, 1000)



// }

// data()

let data = async () => {
    console.log("test");

    await new Promise(resolve => {
        setTimeout(() => {
            console.log("hiiiii");
            resolve();
        }, 0);
        setImmediate(() => {
            console.log("hii");
            resolve();
        });
    });

    console.log("qwegjqrhq");
};

data();














