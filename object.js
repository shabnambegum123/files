
let data = [
    {
        name :"hii",
        age : 45
    },
    {
       name :"hello",
       age : 67
    }
]

data = data.reduce ((acc,cur) =>{
    return acc+cur.age
    
},0)
if ( data > 100 ){
    console.log("yes")
}
else {
    console.log("no")
}


console.log(data)
