// const { promises } = require("fs");


// let data = function(a){
  
//     return a
// }


// let data2 = function  (){
//     setTimeout(() => {
//         console.log("milkboiled")
//     }, 2000);
// }


// let data3 =  function (a,b){
    
//     console.log (a,b)
    
// }


// let data4 = function(){
//     setTimeout(() => {
//         console.log("boiled")
//     }, (4000));
// }






// let process =    () => {
//     console.log(data("passingmilk"))
//        data2()


//        data3("teapower","sugar")

//         data4()
// }

// process()



// let data = new Promise((resolve, reject) => {
//     console.log("passing milk");
//      setTimeout(() => {
//         console.log("milkboiled");
//         resolve(true);
//     }, 3000);

// });

// data.then(() => {
//     console.log("teapowder,sugar" );

// })


// data.then(() => {
//     setTimeout(() => {
//         console.log("boiled")
//     },2000);

// })



function step1(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data)
        }, 4000)
    })

}


function step2(a, b) {
    return (` add ${a}, ${b}`)

}

function step3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("stiring")
        }, 6000)
    })
}

function step4(c) {
    return c
}

let data = async function () {
    let data = "milk boiling"
    let step_1 = await step1(`currently ${data}`)
    
    console.log(step_1)
    let a = "tea"
    let b = "sugar"
    let step_2 = step2(a,b)
    console.log(step_2)
    let step_3 = await step3()
    console.log(step_3)
    let c = "filtered"
    let step_4 = step4(c)
    console.log(step_4)

}


data()













