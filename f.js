// let prompt = require('prompt-sync')()

// function data(num1, num2, num3) {

//     console.log(num2, num1,num3)

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



// let add = (num1,num2) =>{
//     console.log(num1,num2)
// }
// add (5,6)

// let data = [{
//     Name: "hii"
// },
// {
//     Name: " hello"
// }
// ]

// console.log(data);

// data.map (x => {[
//     x.parentsdetails ={
//         name : "hii",
//         age : 45
//     },
//     x.grandparentsdetails = {
//         name : "hello",
//         age : 34
//     }

    

    
// ]
// return(x);

// })
// console.log(data);



// let data =[ {
//     Name : " hii"
  
//   },
//    {
//   Name : " hii"
//   }
//   ] 
  
//   data=data.map (x =>{
//       x.age = 20,
  
//       x.Number = 123456,
//       x.isAlive = true 
//       x.Adress = {
//           StreetName : "abc street",
//           DoorName : 12/24,
  
  
//       } ,
//       x.ParentsName =[{
  
//           MothersName : "world",
//           FathersName: " redd",
  
//       },
//       {
//           MothersName : "green",
//           FathersName: " white",
  
  
//       }
//   ]
//   return (x);
         
      
  
function parenter(name, age, gender) {
    let data = {
        name: name,
        age: age,
        gender: gender,
        address: "chennai",
        isHouseRental: false,
        isHasTwoEyes: true
    }

    return data

}

let childValue = async ()=> {
    try {
        console.log
        let parents = parenter("daddy", 35, "male");
        let child = parenter("daughter", 30, "gender")
        return child

    } catch (error) {
        console.error("shanum error", error)
    }

}

console.log(childValue())




          
  
  
      
           
      
      
//   },
  
//   )
  
//   console.log(data);
  
  
//   let datas = []

//   let data = [{
//       name: "hii",
//       age: 56,
//   },
//   {
//       name: "hello",
//       age: 56
//   }
//   ]
  
//   datas.push(data)
//   console.log(datas)
  
  
  
  
  
  
//   const promise = new Promise(function (resolve, reject) {
// 	const string1 = "hello";
// 	const string2 = "hello";
// 	if (string1 === string2) {
// 		resolve();
// 	} else {
// 		reject();
// 	}
// });

// promise
// 	.then(function () {
// 		console.log("Promise resolved successfully");
// 	})
// 	.catch(function () {
// 		console.log("Promise is rejected");
// 	});


	// arrow function

	// let hii =() =>{
	// 	console.log("help")
	// }
	// hii()
	
	
	// function data (){
	// 	console.log("help")
	// }
	// data()


let data = [{
	name :"hii",
	age : 45
},
{
	name :"hii",
	age : 45
}]

	data = data.reduce((acc,cur) =>{
	  cur = acc+cur.age
	  return cur
	},0)

console.log(data)




	

