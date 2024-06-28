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
    function data (a){
let result = datas.filter( x =>{
    return x.Sno === a
})
return result
    }

a = Number(a)

if (a){
    console.log("success")
    
    let finalResult = data(a)
    if(finalResult.length > 0){
        console.log(finalResult)
    }
    else {
        console.log('not found')
    }


}
else {
    console.log("not allowed")
}