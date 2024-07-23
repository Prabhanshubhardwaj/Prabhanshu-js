const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.8966

 console.log(otherNumber.toPrecision(4));  // ek dum accurate value print krta hai for ex if we have three precision and the 
// value is 23.8889 then they print 23.9 and we have three precision and value is 123.898 then they print 124

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2)); --> top vala no. choose krega 4 se jyada hua to 5 choose krega
// console.log(Math.floor(4.9)); --> lowest valueprint krta hai
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());  // maths random 0 adn 1 ke between value deta hai
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)