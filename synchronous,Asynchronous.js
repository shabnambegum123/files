console.log("synchronous");
console.log(1);
console.log(2);
console.log(3);



console.log("Asynchronous");
console.log(1);
setTimeout(() => {
    console.log(2)
}, 3000);
console.log(3);