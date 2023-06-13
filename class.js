class Animal {
    constructor(name) {
        this.name = name;
    }
    static info() {
        console.log("this is a class for animals")
    }
    sound() {
        console.log(this.name + " makes sound")
    }
}

class Dog extends Animal{
    constructor(name) {
        super(name)     //bind Animal class to dog class
        this.name = name
    }
    bark() {
        console.log(this.name + 'woof woof')
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name)     //bind Animal class to dog class
        this.name = name
    }
    meow() {
        console.log(this.name + "meow meow")
    }

}

const animal2 = new Dog("mark")

const animal = new Animal("dragon")
animal.sound()