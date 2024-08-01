
// Immediately Invoked Function Expressions (IIFE)

// Interview question write two iffi's 
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();//semicolon ki mistake hoti hai

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
