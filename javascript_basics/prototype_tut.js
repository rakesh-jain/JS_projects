//prototype name implies that it is a property of an object or behaviour from which it is inherited from another object.
let animal = {
    eats: true,
    vegan: true,
    movement() {
        console.log("moves");
    }

};
console.log(typeof animal.movement)

let rabbit = {
    jumps: true,
    __proto__: animal //this is the prototype of rabbit
}

console.log(rabbit.jumps);
rabbit.movement();

//another example for protype is

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function () {
    console.log("hello i am" + this.name);
};

let p1= new Person("John", 25);

let p2 = new Person("Doe", 30);

p1.greet();
p2.greet();
