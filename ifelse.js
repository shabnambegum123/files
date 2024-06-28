let score = 45;


if (score >= 50) {
    console.log("You passed the examination");
}
else {
    console.log("You failed the examination");
}


let  rating = 10

if( rating<=4){
    console.log("bad rating")
}
else if (rating>=7){
    console.log("good rating")
}
else {
    console.log("average rating")
}
 
function data(){
    let
}

let hour = 3

if (hour < 4) {

    console.log("good day")

  }
  let datas = [
    {
        Sno: 12,
        name: "hello",
        mobileNumber: 987654321,
        age: 56




    }, {
        Sno: 56,
        name: "hii",
        mobileNumber: 987654321,
        age: 56


    },
    {
        Sno: 23,
        name: "world",
        mobileNumber: 987654321,
        age: 56


    },
    {
        Sno: 90,
        name: "red",
        mobileNumber: 987654321,
        age: 56


    },


]


let prompt = require('prompt-sync')()

let a = prompt('enter the number')

function data(a) {

    let result = datas.filter(x => {

        return x.Sno === a


    })
    return result
}

a = Number(a)

console.log(a)

if (a) {
    let finalOutput = data(a)
    if (finalOutput.length > 0) {
        console.log(finalOutput)
    }
    else {
        console.log("Data not found")
    }

} else {
    console.log('not allowed')
}
  