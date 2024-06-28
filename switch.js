// const  prompt  = require('prompt-sync')()

// let a = prompt("Enter the number ")

// let b = prompt("Enter the number ")
// console.log(a,b)

let day = 3
let dayName ;

switch (day){
    
    case 1 :
        dayName = "monday";
        break ;

        case 2 :
            dayName ="tuesday";
            break ;

        case 3 :
            dayName ="wednesday";
            break ;

        default :
        dayName ="invalidDay";
}

console.log(dayName);
