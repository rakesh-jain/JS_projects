//exception handling in javascript 
function ecion() {
    try {
        console.log("hello i am error");
         throw new Error("this is my new error");
    } catch (err) {
        console.log("There is a syntax error at line " + err.message);
    }
}

ecion();

//custom exception 
function myAge(age) {
    if (age < 18) {
        throw "You are not eligible to vote";
        //it will throw the exception or use new Error("You are not eligible to vote")
    }
    else {
        console.log("You are eligible to vote");
    }
}

try {
    myAge(17);
}
catch (err) {
    console.log(err);
}
finally {
    console.log("This is finally block");
}


// custom exception in js

class Error{
    constructor(message){
        this.message = message;
        this.name = "Error";
        this.stack = (new Error()).stack;
    }
}
class ValidateException extends Error{
    constructor(message){
        super(message);
        this.name = "ValidateException";
    }
}
function test(){
    throw new ValidateException("This is custom exception");
}


try{
    test();
}catch(err){
    console.log(err.message);
    console.log(err.name);
    console.log(err.stack);
}

// error handling in async function
async function asyncFunction() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");
        let data = await response.json();
        let i = 0;

        let intervalId = setInterval(() => {
            if (i < data.length) {
                console.log(data[i]);
                i++;
            } else {
                clearInterval(intervalId);
            }
        }, 20);
    } catch (err) {
        console.log(err);
    }
}
asyncFunction();

