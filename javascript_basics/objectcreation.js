
//JavaScript objects are key-value pairs used to store and manage data efficiently. 
// This guide covers object creation, manipulation, methods, inheritance, and advanced concepts.

console.log("Object creation.......................")
let person = {
  name :"Rakesh",
  age:23,
  address:"Shimoga"
}
console.log(person.age);
console.log(person.address);

//creation using the new keyword
let guys = new Object({name:"Rakesh",age:23});
//we can also add the key value to the guys object like below
guys.address =  "Bangalore";
console.log(guys.name);
console.log(guys.address);

console.log(guys);
// aslo get like below
console.log(guys["age"]); // 23 it is uswfull foe dynamics properties 
console.log()
//updating the properties 
guys.age=24;

console.log(guys.age);

delete guys.address;
if(guys.address === undefined){
  console.log("deleted successfully");
  console.log(guys.address);
}
console.log(Object.entries(person));//gives an array of value like[['foo','bar'],['baz',43]]

//object creation in method named as constuctor function 
function Student(name , age){
  this.name  = name;
  this.age = age;
}
let student1 = new Student("Ramesh",4);

console.log(student1.age);

//modern way of creating the object in javascript 
class Teacher{
   constructor(name, specialization){
    this.name = name;
    this.specialization = specialization;
   }
}

let t1 = new Teacher("Savitha","DBMS");
console.log(t1.name +"-"+t1.specialization);

//Object method
let clone = new Object(
{
  hello:"hello cloning",
  greet(){
    return this.hello;
  }
}
);
console.log(clone.greet());

//Object cloning and Copying 
console.log("Object cloning")
let objClone = Object.assign(clone);
console.log(objClone.greet());//Object cloning

//using spread Operator 


let spreadCloning = {...objClone}; //it is  called object cloning in using spread operator 
console.log(spreadCloning.greet());

