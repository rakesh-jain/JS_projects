
//control flow
let goal = 1;
if (goal === 0) {
    console.log(`goal poin is ${goal}`);
} else {
    console.log("next you will get a some extra point");
}

//ternary operator 
const goalPoint = (goal == 0) ? `goal point is ${goal}` : "next you will get some extra point";

console.log(goalPoint);

let check = 7;
switch (check) {
    case 1: console.log("your printing " + check);
        break;
    case 7: console.log("your printing " + check);
        break;
    default: console.log("not printing there is no elelment");
}

//loops 

for (let i = 0; i < 7; i++) {
    console.log("hello good morning");
}

//while
let a = 0;
while (a < 3) {
    console.log(a++);
}
a = 0;
do {
    console.log(a);
    a++;
} while (a <= 3);


/**
 * for […] of […]
Use for…of… loops to iterate over the values stored in an iterable data structure, such as an array, set, or map.
 */


let arr = [3457, 34, 35, 6, 53, 3];

for (let ele of arr) {
    console.log(ele); //used for-of, to itrate the elements in the array. 
}
//used for-in, to itrate the index of the array.
for (let ele in arr) {
    console.log(ele);// for in loopes through the properties of the object;
}
//use of for in 

let map = { "i": "love", "studies": "without stress" };
for (let i in map) {
    console.log(i);//for accessing the key
    let value = map[i];
    console.log(value);// for accessing the value of the map
}

const game = { "cricket": "thrill" };

const games = Object.create(game, {
    funnyGame: {
        value: "topi beka topi",
        enumerable: true
    }
});

console.log();
for (const mykey in games) {
    const value = games[mykey];
    console.log(value);
}

console.log(Object.values(games)); // Object has set of built in methods there one is Object.values() and Object.keys()
console.log(Object.keys(games));
/**
 * JavaScript provides built-in methods for determining whether a property is a direct property of the object 
 * rather than a property on the object's prototype chain: the modern Object.hasOwn() and legacy
 */
for (const i in games) {
    console.log(`key: ${i} values:${games[i]}`);
    console.log();
}

let array = [2, 4, 5, 7, 8, 95, 3, 2, 5];
array.forEach(() => {

});
let maps = new Map([['name', "Rakesh"], ['id', 10]]);
maps.forEach((key, value) => {
    console.log(key, value);
});


/**
 * Iterators
An iterable is any data structure made up of individual elements that can be iterated over using the approaches detailed previously. An iterator is an iterable object that follows iterator protocol,
 which means it must implement a next() method that advances through the elements it contains one at a time, each time that method is called, '
returning an object for each sequential element in a specific format.
 */

const itera = [7, 8, 6, 4, 3, 3];
const myIterator = itera[Symbol.iterator]();
console.log(itera);
console.log(myIterator);
//myIterator.next();
//{ value: 8, done: false }
/**
 * Calling the next() method on an iterator steps through the elements it contains one at a time, 
 * with each call returning an object containing two properties: value, 
 * which contains the value of the current element, and done, 
 * a boolean that tells us if the iterator has passed the last element in the data structure. 
 * The value of done is true only when a call to next() results in an attempt to access an element beyond the last element in the iterator.
 */
while (myIterator.next().value != undefined) {
    console.log(myIterator.next());
}

// generators in javascript 
/**
 * it is a special type of function we can pause and resume feature, 
 * however instead of generating all the values, we are fetching the values on demand 
 */
function* myFun() {
    yield "good morning";
    yield "good afternoon";
    yield "good evening";
    yield "good night";
}

const greet = myFun(); // creating a objects 

// while (greet.next.value!=undefined){
//     console.log(greet.next());
// }
console.log(greet.next());
//yield pauses execution and returns a value.
//next() resumes the execution from where it is stoped.
console.log(greet.next());
console.log(greet.next());
console.log(greet.next());

function* myGen() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

let as = myGen(); // object creation

for (let i of as) {
    console.log(i);
}

function* genA() {
    yield "rakesh";
}

function* genB() {
    yield* genA();//delegate to genA
    yield "Ramesh";
}

for (let i of genB()) {
    console.log(i);
}
/**
 * Feature	Description
yield	Pauses function execution and returns a value.
next()	Resumes execution from the last yield.
return	Ends the generator and marks done: true.
yield*	Delegates to another generator.
for...of	Iterates over a generator’s values.
Generators are powerful for handling asynchronous operations, lazy evaluations, and infinite sequences.
 */

/**
 * A Promise in JavaScript is an object that represents the eventual completion (or failure) of 
 * an asynchronous operation and its resulting value.
 * promise takes 2 function resolve and reject
 */


// const prm = new Promise((resolve, reject)=>{
//   let l= true;
//   setTimeout(()=>{
//    if(l){
//     resolve("Payment done");
//    }else{
//     reject("payment not done");
//    }
//   },3000)
// });

// prm.then((message)=>console.log("payment line completed"+message)) //used to handle the resolved value of promise
// .catch((error)=>console.log(error))
// .finally((message)=>console.log("transaction completed"));



const myPromise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve(1)
    }, 200);//it will take 200ms to resolve the promise
});
myPromise.then((message) => {
    console.log(message);
    return message * 2;
}).then((message) => {
    console.log(message)
    return message * 2;
}).then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
}).finally(() => { console.log("completed") }
);

// //taking input in node.js

// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     outpu: process.stdout
// });

// rl.question("what is your favourite colour: ",(color)=>{
//     console.log(`your favourite colour is ${color}`);
//     rl.close();
// }); //taking input from the user

//taking multiple 
// const readline1 = require("readline");

// const re = readline1.createInterface({
//     input:process.stdin,
//     output: process.stdout
// });


// re.question("hello tell  me your name :", (name)=>{
//     re.question("whera are you from",(place)=>{
//         console.log((`hello ${name}, its good to see you i am also from ${place}`));
//         re.close();
//     });
// });

const pr1 = new Promise((resolve, reject) => {
    resolve("hello good morning");
});

const pr2 = new Promise((resolve, reject) => {
    resolve("hello good morning1");
});
const pr3 = new Promise((resolve, reject) => {
    resolve("hello good morning2");
});

//returns which one resolves first promises even if other reject
Promise.any([pr1, pr2, pr3]).then((message) => {
    console.log(message);
});


const perm1 = new Promise((resolve, reject)=> {
    setTimeout(()=>{
        resolve("i good at java");
    },200);
});

const perm2 = new Promise((resolve, reject)=> {
    setTimeout(()=>{
        resolve("i good at javascript");
    },20);
});
const perm3 = new Promise((resolve, reject)=> {
    setTimeout(()=>{
        resolve("i good at python");
    },100);
});

//returns which one is came first, iif iis reject or resolve - like race
Promise.race([perm1,perm2,perm3])
.then((message)=>{console.log(message)})
.catch
((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("completed");
});



