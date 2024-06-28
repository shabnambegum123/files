let data = function (a) {

  return a = a.filter((x) => {
    let ab = x.age >= 45 ? x.age : x;
    return ab
  })

}

let a = [{
  name: "hii",
  age: 45
},
{
  name: "hii",
  age: 78
}]

console.log(data(a))
















