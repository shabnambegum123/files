// let pattern = /test/;

// const input = 'test'
// const didmatch = pattern.test (input)
// console.log(didmatch)

// let pattern =  /[a-z]/;

// const input = '3 bh';
// const didmatch = pattern.test()
// console.log(didmatch)



// let pattern =  /[a-z3]/;
// const input = '3 bh';
// const didmatch = pattern.test()
// console.log(didmatch)

// let pattern =  /[0-9]/;
// const input = ' 3 8 f ';
// const didmatch = pattern.test(input)
// console.log(didmatch)

// let pattern =  /[a-s]/;
// const input = ' 3 8 f ';
// const didmatch = pattern.test(input)
// console.log(didmatch)


// let pattern =  /[a-zA-Z]/;
// const input = ' 3 8 f ';
// const didmatch = pattern.test(input)
// console.log(didmatch)


// [] [] means && should be next to that digit

// let pattern =  /[a-z][5]/;
// const input = ' f5 ';
// const didmatch = pattern.test(input)
// console.log(didmatch)


//  + means one or more

// let pattern =  /[a-z]+[0-8]/;
// const input = ' ac6 ';
// const didmatch = pattern.test(input)
// console.log(didmatch)

// * means 0 or more 
// let pattern =  /[a-z]*[0-7]/;
// const input = ' 5 ';
// const didmatch = pattern.test(input)
// console.log(didmatch)

// optional ? 0 or more
// let pattern =  /[a-z]?[0-7]/;
// const input = ' 5 ';
// const didmatch = pattern.test(input)
// console.log(didmatch)

// {2,4} minimum,maximum
// let pattern =  /[a-z]{3}[0-7]/;
// const input = ' abc6 ';
// const didmatch = pattern.test(input)
// console.log(didmatch)

// {2,} more than 2
// let pattern =  /[a-z]{3,}[0-7]/;
// const input = ' abcukjhd6 ';
// const didmatch = pattern.test(input)
// console.log(didmatch)

// ^ means should start from first no space 
// let pattern =  /^[a-z]{1,}[0-7]/;
// const input = 'ab5 ';
// const didmatch = pattern.test(input)
// console.log(didmatch)

// $ representing end sign
// let pattern =  /[a-z]{1,}[0-7]$/;
// const input = '  ab5';
// const didmatch = pattern.test(input)
// console.log(didmatch)

// ^ and $ entire term should be like this
// let pattern =  /^[a-z]{1,}[0-7]$/;
// const input = 'abcd6';
// const didmatch = pattern.test(input)
// console.log(didmatch)


// let pattern =  /[a-d]{1,}[0-5]|[7-9]/;
// const input = 'ab5';
// const didmatch = pattern.test(input)
// console.log(didmatch)

// grouping() | []

// let pattern =  /([a-z]{1,}[0-5])|[6-9]/;
// const input = 'ab5';
// const didmatch = pattern.test(input)
// console.log(didmatch)

// let pattern =  /^([a-z]{1,}[0-5]|[7-9])/;
// const input = 'ab5';
// const didmatch = pattern.test(input)
// console.log(didmatch)

// escape character
// let pattern =  /a$/;
// const input = '5a';
// const didmatch = pattern.test(input)
// console.log(didmatch)

// let pattern =  /a$/;
// const input = '5a';
// const didmatch = pattern.test(input)
// console.log(didmatch)


// let pattern =  /\$$/;
// const input = 'r$';
// const didmatch = pattern.test(input)
// console.log(didmatch)

// \d represents number

// let pattern =  /\d/;
// const input = 'this is something of a price 5$';
// const didmatch = pattern.test(input)
// console.log(didmatch)

// \d{3} number should be next
// let pattern =  /\d{2}/;
// const input = 'this is something of a price 55$';
// const didmatch = pattern.test(input)
// console.log(didmatch)

// \s represents space
// let pattern =  /\s\d/;
// const input = 'this is something of a price 5$';
// const didmatch = pattern.test(input)
// console.log(didmatch)

// to find individual word \b
// let pattern =  /\bsome\b/;
// const input = 'this is something of a price 5$';
// const didmatch = pattern.test(input)
// console.log(didmatch)

// \w means word character
// let pattern =  /\w/;
// const input = '444';
// const didmatch = pattern.test(input)
// console.log(didmatch)

// S D W means excluding this

// let pattern =  /\D/;
// const input = '87jh';
// const didmatch = pattern.test(input)
// console.log(didmatch)

// \[a-z]\i
// let pattern =  /[a-z]/i;
// const input = 'TEST';
// const didmatch = pattern.test(input)
// console.log(didmatch)

// [^a-z] means not 
// let pattern =  /[^a-z]/;
// const input = 'this';
// const didmatch = pattern.test(input)
// console.log(didmatch)

// ^[^a-b] first character should not equal to condition

// let pattern =  /^[^a-z]/;
// const input = '678';
// const didmatch = pattern.test(input)
// console.log(didmatch)



// let pattern =  /\s\d{10}/;
// const input = 'this is my number(91) 9999999999';
// const didmatch = pattern.test(input)
// console.log(didmatch)

// let pattern =  /\(\d{1,2}\)\s\d{10}/;
// const input = 'this is my number(91) 9999999999';
// const didmatch = pattern.test(input)
// console.log(didmatch)

// let pattern =  /\(\+\d{1,2}\)\s\d{10}/;
// const input = 'this is my number(+91) 9999999999';
// const didmatch = pattern.test(input)
// console.log(didmatch)


// let pattern = /^[a-z0-9]{1,}@\bgmail\b.\bcom\b$/
// const input = 'shabnambegum227@gmail.com';
// const didmatch = pattern.test(input)
// console.log(didmatch)



