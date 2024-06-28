// let data = [{                 //map
//         Name: "hii"
//     },
//     {
//         Name: " hello"
//     }
//     ]

//     console.log(data);

//     data.map (x => {[
//         x.parentsdetails ={
//             name : "hii",
//             age : 45
//         },
//         x.grandparentsdetails = {
//             name : "hello",
//             age : 34
//         }




//     ]
//     return(x);

//     })
//     console.log(data);


// let data = [
//     {
//         name:"nick",
//         age:34,
//         number:'7654321'
//     },
//     {
//         name:"harry",
//         age:64,
//         number:'7654321'
//     },
// ]

// let data2 =
//     {
//         name:"sam",
//         age:24,
//         number:'7654321'
//     }

// data.push(data2)               //push
// console.log(data)


// data.pop(data2)                 //pop
// console.log(data)

// data.shift(data2)                   //shift
// console.log(data)

// data.unshift(data2)             //unshift
// console.log(data)

// console.log(data.length)              //length


//  let result = data.concat(data2)         //concat
// console.log(result)


// data= data.reduce((acc,cur) =>{         //reduce
//       return acc+cur.age

// },0)
// console.log(data)

// let obj= {                         //some
//     name:"harry",

// }

// let result = data.some(x=>{
//     return  x.name ===obj.name
// })
// console.log(result)



// let obj= {                   // every
//     name:"harry",

// }

// let result = data.every(x=>{
//     return  x.name ===obj.name
// })
// console.log(result)

// let result = data.filter(x=>{              //filter
//     return  x = x.name ==="harry"
// })
// console.log(result)


// let result = data.find (x=>{            //find
//    return   x = x.name==="nick"
// })
// console.log(result)

// let result = data.map(x=>{      
//    return x = x.age
// })

// console.log(result.reverse())      //reverse
// console.log(result.sort())          //sort

//  data.forEach(x => {           //filter
//      x.age = x.age * 5

// })
// console.log(data)


// let result = data.map( x =>{       //join
//      return x = x.name
// })
// console.log(result.join("-"))


// let result = data.map( x =>{          //fill
//        return x = x.age
// })

// console.log(result.fill(0,0,1))


// let result = data.map( x =>{          //slice

//     return x = x

// })

// console.log(result.slice(0,1))


// let result = data.map( x =>{          //index
//            return x = x.age
//     })
// console.log(result.indexOf(64))




// let data = [1, 2, 3, 4, 5]
// let c = 0
// let result = data.map(x => {
//     return c += x
// })

// console.log(c)


// let data = [1,2,3,4,5,6,7,8,9]       //chunck

// function hello (data,chunck){
//     let c =[]
//     while(data.length>0){
//         let hii = data.splice(0,chunck)
//         c.push(hii)
//     }
//     return c 
// }
//  console.log(hello(data,3))


 //let data =[1,2,3,4]     //empty an array
//    data=[]
// console.log(data)


// while(data.length>0){
//     data.pop()
// }
// console.log(data)


// function data (arr){               //repeat in array
//     return arr.concat(arr)
// }
// console.log(data([1,2,3,4,5]))


// let data = ["red","blue","black","white","yellow","orange"]

// let result = data.filter(x => x.match("blue"))
// console.log(result)


// let data = [{
//     name :"james",
//     ID:"1001"
// },{
//     name :"harsh",
//     ID:"1002"
// },{
//     name :"elezibeth",
//     ID:"1003"
// },{
//     name :"aryan",
//     ID:"1004"
// },{
//     name :"nick",
//     ID:"1005"
// },{
//     name :"harry",
//     ID:"1006"
// }]


// let result = data.filter((x) =>{
//  if(x.name.startsWith("h") || x.ID.includes()){
//      return x
//  }

    
// })

// console.log(result)






