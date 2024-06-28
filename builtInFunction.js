// let data = [1, 2, 3, 4, 5];

//data.push(6) // stores in last

//data.unshift(0) // stores in first

//data.pop() // delete the last value

//data.shift() // delete the first number

//data = data.map(x => x + 2) // multiply by two numbers

//data = data.some(x => x == 5) // check all the value if condition exist return true or else false

// data = data.every(x => x >= 1);

//  data = data.find (x => x=== 1 );

// console.log( "data",data);

// data = data .filter ( data => data.Number === 1);


// let data = [
//     {
//         subject: "tamil",
//         mark: 67
//     },
//     {
//         subject: "tamil",
//         mark: 51
//     },
//     {
//         subject: "tamil",
//         mark: 98
//     },
//     {
//         subject: "tamil",
//         mark: 97
//     }, {
//         subject: "tamil",
//         mark: 76
//     }
// ]

// data = data. ((acc,cur) => {
//     return   acc+cur.mark
// } )

// console.log(data)









// let  datas = [{
//     "Name":"hello",
//     ID : 12
// },
// {
//     "Name":"world",
//     ID : 34

// }];

// let data = {
//     "Name":"hii",
//     ID : 50
// }
// datas.unshift(data);
// console.log(data);


// let data = {
//     "Name":"red",
//     ID : 80
// }
// datas.push(data);
// console.log(data);


// let data = datas.find (data => data.Name === "world");
// console.log(data);

// let worlddatas = datas . filter (data => data.Name === "world");
// console.log(worlddatas);


// let data = datas.pop (data => data.name ==="hello");
// console.log(data);


// let data = datas.shift (data => data.name ==="world");
// console.log(data);


// let ascendingOrder = datas.map(data => {
//     if (datas.ID <=15){
//     return "yes";
// }
//  if (datas.ID>=30){
//      return "No";
//  }
//  return "ok";
// });
// console.log(ascendingOrder);


//  let data = datas.some (data => data.Name ===  "world" && data.ID ===  34);
//  console.log(data);

//  let data = datas.every (data => data.ID >=9);
// console.log(data);



// let data = [
//     {
//         subject: "tamil",
//         mark: 67
//     },
//     {
//         subject: "tamil",
//         mark: 51
//     },
//     {
//         subject: "tamil",
//         mark: 98
//     },
//     {
//         subject: "tamil",
//         mark: 97
//     }, {
//         subject: "tamil",
//         mark: 76
//     }
// ]

// data = data.reduce((acc, cur) => {
//     return acc + cur.mark
// }, -100)

// console.log(data) 



// let a = null;


// console.log(a)


// let a =[ 1,2,3,4,5,5,3]
// a= new Set(a)
// console.log(a)




// let a = "10"

// if(a === 10){
//     console.log(true)
// }
// else {
//     console.log(false)
// }


//  let num = (data) =>{
//    console.log("hii")
//    setTimeout( () => {
//        console.log("hello")
//    },30000)
//  }
//  num()

// let num = (data) => {
//     console.log("hiii")
//     setInterval(() => {
//         console
//     })
// }





let data = [1,2,3,4,5,6,7,8]
// console.log(data.slice(0,1))

 data.splice(3,3,0)    //in position 3 it will add
console.log(data)






















