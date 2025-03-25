class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    display() {
        console.log(`my name is ${this.name} and my age is ${this.age}`);
    }
}
let p1 = new Person("Rakesh", 24);
p1.display();

//static keyword belong to the class we are accessing directly without creating the object
class MathUtils {
    static PI = 3.14;
}
console.log(MathUtils.PI);

class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log(this.name+" sound");
    }
}

class Dog extends Animal{
    constructor(name, breed){
    super(name);
    this.breed = breed;
    }

    bark(){
        console.log(`${this.name} is barking like bow bow`);
    }
}

class Cat extends Animal{
    constructor(name, breed){
        super(name);
        this.breed = breed;
    }
    meow(){
        console.log(`${this.name} is meowing like meow meow`);
    }
}

const dog = new Dog("Tommy", "Pug");
dog.makeSound();
dog.bark();


const cat = new Cat("Kitty", "Persian");
cat.makeSound();
cat.meow();

//getter and setter in javascript
class Student{
    constructor(){}
    // constructor(name, age){
    //     this.name = name;
    //     this.age = age;
    // }
    set studentName(name){
        this.name= name;
    }
    set studentAge(age){
        this.age = age;
    }
    get studentAge(){
        return this.age
    }

    get studentName(){
        return this.name;
    }
    toString(){
        return `my name is ${this.name} and my age is ${this.age}`;
    }
}

let st = new Student();
st.studentName = "Rakesh";
st.studentAge = 24;
let details = st.toString();
console.log(details);
