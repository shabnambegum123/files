// const Arithmetics = {             //first class function
// 	add: (a, b) => {
// 		return `${a} + ${b} = ${a + b}`;
// 	},
// 	subtract: (a, b) => {
// 		return `${a} - ${b} = ${a - b}`
// 	},
// 	multiply: (a, b) => {
// 		return `${a} * ${b} = ${a * b}`
// 	},
// 	division: (a, b) => {
// 		if (b != 0) return `${a} / ${b} = ${a / b}`;
// 		return `Cannot Divide by Zero!!!`;
// 	}

const { timeEnd } = require("console")

// }

// console.log(Arithmetics.add(100, 100));
// console.log(Arithmetics.subtract(100, 7))
// console.log(Arithmetics.multiply(5, 5))
// console.log(Arithmetics.division(100, 90));


// function unaryFunc(data){      //unary function
// 	console.log(data*33);
// }
// unaryFunc(5);
// unaryFunc(3);


// function unaryFunc(data){
//     console.log(data*32)
// }
// unaryFunc(8)


// function test(arg1, arg2){              // call 
//     console.log(this.num, arg1, arg2); 
//   }
  
//   test.call({num: 100}, 10, 20);



// function test(...arguments){          //apply
//     console.log(this.num, arguments);
//   }
  
//   test.apply({num: 100}, [1,2,3,4]);


// function test(arg){               //bind
//     console.log(this.number, arg);
//    }
   
//    let bindedFn = test.bind({number: 99},"argument");
   
//    bindedFn();


// function sum(a) {                 //currying function
//     return function (b) {
//         console.log(a + b);
//     };
//     }
//     sum(2)(3);
    

// when you declare globally in won't except .It depends only upon the I/p what u give
// let a = 10
// let b = 20
// function add(a, b) {                   //pure function
//     return a + b;
//     }
    
//     console.log(add(a,b));
    


// console.log(a)                         //Tempory dead zone
// var a ;
// a = 12                          



// let x =0                                  //switch
// switch (x) {
//     case 0:{
//       let name ="hii";
//       console.log(name)
//       break;
//     }
    
//     case 1:
//       {
//       let name ="hello";
//       console.log(name)
//       break;
//       } 
//   }
  
// const findsum = (n) =>{                  //memoization
//     let sum = 0
//     for(i=1;i<=n;i++){
//         sum+=i
//     }
//     return sum
// }
// console.time()
// console.log(findsum(5))
// console.timeEnd()

// console.log(findsum(5))


// var myvar =() =>{                //first class function
//     console.log("hii")
// }

// function hello(myvar){
//     myvar()
// }

// hello(myvar)

// ((a,b) =>{
// console.log(a+b)
// })(10,20)


//encode 
//  let a  = 'https://www.google.com//'
// let b = encodeURIComponent("https://www.google.com//")
// console.log(a)
// console.log(b)




// let b = decodeURIComponent("https%3A%2F%2Fwww.google.com%2F%2F")             //decode url
                    
// console.log(b)


const findsum = (n) =>{
    let sum = 0
    for(i=1;i<=n;i++){
        sum+=i
    }
    return sum
}
console.time()
console.log(findsum(7))
console.log(timeEnd)


