// let a = [1, 2, 3, 4, 5]

//  a = a.forEach((x)=> {
//     x = x * 5
// })

// console.log("re2r3f", a)
 


//  let text = ["Hello","Text","Data","DoodleBlue"]
    
//         for (let x of text ){
    
//             text = text.map(x =>{
//                  x = x.split("").reverse().join("")
//                 return x
               
                
//             })
         
//           console.log(text)
    
//         }

//  }
// let datas = [ {
//     name :"hii",
//     age :45,
//     Sno :67,
//     mobileNumber:987654332

// },
// {
//     name :"hello",
//     age :45,
//     Sno :56,
//     mobileNumber:987654332

// },
// {
//     name :"world",
//     age :94,
//     Sno :68,
//     mobileNumber:987654332

// }
// ]

// let prompt = require('prompt-sync')()
// let a = prompt('enter the number')

// function data (a){

//    let result = datas.filter(x =>{
//    return  x.Sno ===a
// })
// return result
// }



// a = Number(a)

// if(a){
//     console.log("this is  a number")
//       let finalOutput = data(a)
//       if(finalOutput.length>0){
//           console.log(finalOutput)
//       }else{
//           console.log("data no found")
//       }
    
// }
// else if (!a){
//     console.log("error")
// }
// else{
//     console.log("this is a string")

// }








// let datas = [ {
//     name :"hii",
//     age :45,
//     Sno :67,
//     mobileNumber:987654332

// },
// {
//     name :"hello",
//     age :45,
//     Sno :68,
//     mobileNumber:987654332

// },
// {
//     name :"world",
//     age :94,
//     Sno :68,
//     mobileNumber:987654332

// }
// ]

// let prompt = require('prompt-sync')()
// let a = prompt('enter the number')

// function data(a) {
// let hello = []
//     for (let x of datas) {

//         if( x.Sno == a){
//           hello.push(x)


//         }


//     }
//    return hello
// }






// a = Number(a)
// console.log(a)
// if(a){
//     console.log("this is  a number")
//       let finalOutput = data(a)
      
//       if(finalOutput.length>0){
//           console.log(finalOutput)
//       }else{
//           console.log("data not found")
//       }
    
// }


// else if ( !a ||  ''){
//     console.log("error")
// }


// let object  = {}

// object.number = 10
// object.name ="hello"
// object.boolean = true
// object.datas ={
//     number : 10,
//      name :"hello",
//      age :90
// }

// object.values =[{
//     number : 10,
//     name :"hello",
// age :89
// }]

// console.log(object)


//  console.log(delete object.name);
 
// console.log(object);


// let prompt = require('prompt-sync')()
// let name = prompt('enter the name')
// let age;

// age = Number(age)
// let data = (name, age) => {


// }

// if (!name) {

//     return console.log('name not allowed to be empty')
// } else {
//     age = prompt('enter the age')
//     if (age) {
//         console.log(`my name is ${name} and my age is ${age}`)
//     }
//     else {
//         console.log('age not allowed to be empty')
//     }
// }




// data(name, age)


// global scope,local scope

// var data = "heloo"
// function key(){
// console.log(data)
// var y = 5
//     function newkey(){
// console.log(y)
//     }newkey()
// }key()
// console.log(y)


// var is the function scope
// function foo(){
//    if(true){
//    var   name = "hello"
  
//    }
//    console.log(name)
// }foo()



// let and const are block scope
// function foo(){
//    if(true){
//    let    name = "hello"
//    console.log(name)
//    }
  
// }foo()


// let x = 5
// let result;

// ternary operator(shortened form of if and else)
// result = x >= 5? "hello" :"hii"
// console.log(result)



// let data = [1,2,3,4,5,6]
// console.log(data.splice())


// let data = [1,2,3,4,5,6,7]
// data[0] = 8
// console.log(data)


// console.log(Array.isArray({

// }))


// let a = 'test'
// let B = 'Test'

//  let result = B==a?true:false
// console.log(result)

// let  datas = [
//     "hii",
//     "i",
//     "am",
//     "from",
//     "doodleblue"
// ];


// let result = datas.sort();


// console.log(result)




// let data ={
//     name :"hii",
//     age:89,
//     dob:'12-03-2003',
//   region :  {
//        caste:'BC'
//     }
// }
// let {region,...datawithoutregion} = data
// console.log(datawithoutregion)


// let  data ={
//     name :"hii",
//     age:90,
//     dob :'12-04-2003'
// }
// const {name,age,dob} = data
// const newdata = {name,age}
// console.log(newdata)

// let data = "hii i am from doodleblue"
// let note= data.split(" ").sort().join(" ")

// console.log(note)


// console.log(new Date())

// date(year,month,day,hour,minute,second,ms)
// const date = new Date(2024, 0, 1, 2, 3, 4, 5);

// console.log(date);

// const date = new Date(1.7000000000000)

// console.log(date)

// const date = new Date()
// const year = date.getFullYear()
// const month = date.getMonth()
// const day = date.getDate()
// const hour = date.getHours()
// const minute = date.getMinutes()
// const second = date.getSeconds()
// const dayOfWeek = date.getDay()

// console.log(year)
// console.log(month)
// console.log(day)
// console.log(hour)
// console.log(minute)
// console.log(second)
// console.log(dayOfWeek)


// const date = new Date()
// date.setFullYear(2024)
// date.setMonth(5)
// // to set day we need to use date
// date.setDate(11)

// console.log(date)


// const date1 = new Date(2023-12-31)
// const date2 = new Date(2024-01-01)

// if(date2 > date1){
//     console.log("happy new year")
// }


// let data1 = [1]
// let data2 =[2]
// let data3 =[3]
// let data = data1.concat(data2,data3)

// console.log(+"1"+1-1)
// console.log("1"+1-1)

// console.log(true+ false)
// console.log(true +false +"1")

// console.log(true+false+1+ +"test")





// let a = 9
// let data =[]

// for(i=a;i>0;i--){
//     data.push(i)
     
// }
// console.log(data)

// let data = [1, 2, 3, 4, 5]           // factorial 

// let datas = data.reduce((acc,cur) => {
//   return cur = acc*cur

// },)

// console.log(datas)

// let data = {
//     name :"hii",
//     age :67
// }
// Object.freeze (data)
// data.dob = "12-02-2007"
// console.log(data)

// (async()=>{
//  console.log("wefwef")

// })()


// var obj1 = {                   //call
//     num :2
// }

// var obj2 ={
//     f1:function(a){
//         console.log(this.num+a)
//     }
// }
// obj2.f1.call(obj1,2)



// var obj1 = {                   //apply 2 parameters
//     num :2
// }

// var obj2 ={
//     f1:function(a,b,c,d,e){
//         console.log(this.num+a+b+c+d+e)
//     }
// }
// var arr = [1,2,3,4,5]
// obj2.f1.apply(obj1,arr)

// var obj1 ={
//     num : 2
// }

// var obj2 ={                           //bind
//     f1:function(a,b,c){
//         console.log(this.num+a+b+c)
//     }
// }

//  var r =obj2.f1.bind(obj1,2,"hello","hii")
//  r()

// let data =[1,2,3,4,5,6,7]

// function hello(a,b,c,d,e,f,g){
//    console.log(a+b+c+d+e+f)
// }
// hello(1,2,3,4,5,6,7)


// var obj1 = {
//     num:9
// }
// var obj2 ={
//     fi:function(a,b,c,d,e,f){
//         console.log(this.num+a+b+c+d+e+f)
//     }
// }
//  var a = obj2.fi.bind(obj1,5,7,5,4,3,6)
// a()

//  export const pI = 3.14159;

//   export function getcircumference(radius){
//      return 4 * pI *radius
//  }
// export function getvolume (radius){
//     return 5  *pI  *radius * radius
// }


const personObject = {                       //difference btw object and map 
    name :"hii",
    age :90,
    occupation:"developer"
}
const personMap = new Map();

personMap.set((a=10,b=70) =>{return a+b},"hello");
personMap.set("age" ,90);
personMap.set("occupation","developer")

for (const [key,value] of personMap) {
    console.log(`${key} => ${value}`)
}



console.log(personObject)
console.log(personMap)















