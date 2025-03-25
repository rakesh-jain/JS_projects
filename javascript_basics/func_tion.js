//function is a logical block of code that can be used for soving specific or reusable task.
//function declaration
function add(a, b) {
    return a + b;
}
console.log(add(2, 3));//it will give the output as 5

//function expression

const va = function (a, b) {
    return a + b;
};

console.log(va(2.3));//it will give the output as 5


//arrow function 
let print = (name, age) => {
    console.log(`my name is ${name} and my age is ${age}.`);
}
print("Rakesh R", 24);

//immediate invoke function - it is used to call the function immediately after the declaration
(function () {
    console.log("i am Immediate invoke function")
})();

//function with default parametet
let details  = (name="Rakesh", age=24)=>{
    console.log(`my name is ${name} and my age is ${age}`);
};

details();// it will give the output as my name is Rakesh and my age is 24
details("Rahul", 25);//it will give the output as my name is Rahul and my age is 25


//function with rest parameter- it is used to pass the multiple arguments in the function
let sum= (...args)=>{
 let sum=0;
 for(let i of args){
     sum+=i;
 }
return sum;
}
console.log(sum(1,2,3,4,5,6,7,8,9,10));//it will give the output as 55

//function with spread operator
let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];
let arr3 = [...arr1,...arr2];
console.log(arr3);//it will give the output as [1,2,3,4,5,6,7,8,9,10]

//function with arguments object - is used to pass the multiple arguments in the function, 
// only used in the function declaration
function myGames(){
 for(let i  in arguments){
    console.log(arguments[i]);
 } 
}

myGames("Cricket","football","volleyball","basketball");//it will give the output as Cricket,football,volleyball,basketball

//call back function - is used to pass the function as an argument in the function

function printe(sum){
 console.log(sum);
}

function sums(a,b,callback){
    let result =a+b;
    callback(result);
}
/**
 * here the sum function is called with the arguments as 2,5 and the callback function as print()
 * so the sum function will be executed
 * and the result will be passed to the callback function
 * and the callback function will be executed
 */
sums(2,5,printe);//it will give the output as 7 

function sort(arr,callback1){
     if(arr.length === 0){
         return [];
     }
     for(let i=0;i<arr.length;i++){
         for(let j=1;j<arr.length-i;j++){
             if(arr[j]<arr[j-1]){
                 let temp = arr[j];
                 arr[j] = arr[j-1];
                 arr[j-1] = temp;
             }
         }
     }
    callback1(arr);
}

function printArr(arr){
    for(let i of arr){
        console.log(i);
    }
}
console.log("sorted items are")
sort([2,4,5,6,7,8,9,1,3],printArr);//it will give the output as 1,2,3,4,5,6,7,8,9


"use strict";//it is used to avoid the global variables
// function myFunction()       
{
    x = 10; // This will cause an error because x is not declared
    myFunction();
    function myFunction() {
        console.log( "This is my function." );
    };
}
"use strict";
{
    function myFunction() {
        console.log( "This is my functions." );
    };
}

myFunction();


