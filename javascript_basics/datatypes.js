
//single line comment 
// Statements A statement is a unit of instruction made up of one or more lines of code that represent an action. For example, you can use the following statement to assign a value to a variable named myVariable:
/**
 * multi line comment
 */

//variable declaration
let myVariable = 4;

let myvaiable = 23;
myvaiable
console.log(myvaiable);
console.log("Hello, World!");
console.log("The sum of 5 + 3 is:", 5 + 3);

/**
 * 
 Block statements
A block statement groups any number of statements and declarations inside a pair of braces ({}). It lets you combine statements in places where JavaScript expects only one.

You'll most frequently see block statements alongside control flow statements, such as if:
 */


x = 83;
if (x & 1 == 0) {
  //some behavior;
  console.log("it is even")
} else {
  console.log("its odd");
}


/**
 * Expressions
An expression is a unit of code that results in a value, 
and can therefore be used wherever a value is expected.
 2 + 2 is an expression that results in the value 4:
 */


//data types and structure in javascript
let t = Number(10);
console.log(t instanceof Number);// false
console.log(Number(false)); //0
console.log(Number(null)); //0
console.log(Number(undefined));//NAN
console.log(Number("dkjfhah" * 4)); // NAN
Number("The number 3."); // NAN
console.log(typeof Number(29));

// String 
console.log("hello i am Rakesh R");
//console.log( '"I'm a string," I said.' );  error in console
console.log("I\'m a string, I said.");
console.log("I\'m a brave man");


console.log(typeof String(10));
console.log(String(20));// string as an Object 

//string concatanatiion 
let str = "hello" + " my name is Rakesh R";
console.log(str);
str.concat(" I am java Developer as well as Javascript Developer");

console.log(str);
const str1 = "hello good     what it is a new line without the sinle inverted comma  morning";
console.log(str1);
console.log(str1.concat(str));

//where to use single inveted comma 

console.log("sum of two number is" + (4 + 7) + ",");

//instead of make useing use single tick 
//Template literals can contain placeholder expressions marked by a dollar sign and curly braces (${}). 
// These placeholders are "interpolated" by default, 
// meaning that the result of the expression replaces the placeholder in the final string.
console.log(`there are 2 people and there amount is ${700 + 800}.`);

//boolean 
console.log(".....................boolean start here........................");
console.log(Boolean(1));
console.log(Boolean(undefined));
console.log(Boolean(true) + "" + Boolean(false));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(0) + "" + Boolean(2));
console.log(Boolean("I am is a String"));
console.log(Boolean('r'));


//null and undefined
console.log(">>>>>>>> null and undefined start here<<<<<<<<<<<<<<<<<<<")
console.log(typeof null);
console.log(typeof undefined);
console.log(undefined == null);//true because it is loosely equal but not strictly equal
console.log(undefined === null);

//BigInt primitives are a relatively new addition to JavaScript, 
// allowing mathematical operations on numbers outside the range allowed by Number. To create a BigInt, 
// append n to the end of a number literal, or pass an integer or numeric string value to the BigInt() function.
console.log("BigInt start here>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.")
const myNum = 324788387374;
const myBigInt = 3875472734871234771234n;

console.log(typeof myBigInt);//bigint
console.log(typeof myNum);//number

try {
  console.log(83287742364n + 3);//error occured instead follows below
} catch (BigInt) {
  console.log(BigInt);
}

console.log(3284787238974897892374n + 10n);

/**
 * A symbol primitive represents a unique value that never collides with any other value,
 * including the value of other symbol primitives. 
 * Two string primitives made up of identical characters evaluate as strictly equal:
 */

console.log(Symbol("hello my name is Rakesh") == Symbol("hello my name is Rakesh"));
console.log(Symbol.for("String") === Symbol.for("String")); // only when for 
try {
  console.log("symbol creation  not possible using new keyword");
  let c = new Symbol("hello i am fast");
} catch (Symbol) {
  console.log(Symbol);
}
console.log(Symbol("hello everyone.description"));

/**
 * Use let or var to declare a variable that can be changed at any time. 
 * These keywords tell the JavaScript interpreter that a string of characters is an identifier that might contain a value.
When working in a modern codebase, use let instead of var. var still works in modern browsers, but it has some unintuitive behaviors that were defined in the earliest versions of JavaScript, 
and then couldn't be changed later to preserve backwards compatibility. let was added in ES6 to address some issues with the design of var.
A declared variable is initialized by assigning a value to the variable. Use a single equals sign (=) to assign or reassign a value to a variable. You can do this as part of the same statement that declares it:
 */

var value;
value = 3;
console.log(value);
let value1 = 9;
console.log(value1);

/**
 * Use the const keyword to declare a constant, a type of variable that must be immediately initialized, 
 * and then can't be changed. 
 * Identifiers for constants follow all the same rules as variables declared using let (and var):
 */


const myName = "Rakesh";//must be initiialized earlier
try {
  myName = "Ganesh";
} catch (error) {
  console.log(error);
}
console.log(myName);//myName will never change
const tell = { "hello": "greeting", "help": "seeking" };
console.log(tell.hello);




//comparsion operators
console.log(7 == "7");// true, it just checks the content fof the both variables   or object
console.log(7 === "7"); // false, it checks strictly;
let val = new String("Hello");
let val2 = new String("Hello");
console.log(val == val2);//false
console.log(2 != "7");//true
console.log(2 !== "2");//true


console.log(true ?? "my string") // true works like logical or || but it is stricter 
console.log(undefined ?? "hello"); // it gives hello because ?? operand evaluate at first
console.log(undefined || "hello");//hello
console.log(true || "hello");
console.log(true ?? undefined);//true
console.log(false ?? "hi");//false
console.log(34 ?? "hello");//return 34

// nullish coalescing - ?? operator provides a  concise way to handle default values when dealing with null and undefined, it returns the right hand side operand when left hand side operand is null or undefined, 
// otherwisw it returns the left hand operand.

