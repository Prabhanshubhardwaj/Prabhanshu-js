
// singleton
// Object.create

// object literals

    // ===>objects mai hum key  bhi acces kr skte hai but arrays mai nhi kr skte 

const mySym = Symbol("key1")   //==> important question ek symbol lo usko object ki key mai add/define  kro aur print kra do


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",  //==> yha pr agr hum brackets nhi lgaye to vo srting type print krega but with brackets they print symbol
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])  //==> yha pr bhi hum close brackets use krenge 

JsUser.email = "hitesh@chatgpt.com"
JsUser.name="prabhanshubhardwaj"
// Object.freeze(JsUser)
// JsUser.email = "hitesh@microsoft.com"
// JsUser.name="nitishbhardwaj"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");  //==> yeh print isliye nhi hua tha because humne js freeze kr diya tha
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());
