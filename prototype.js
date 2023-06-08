// Object.create
// 

// Animal constructor
function Animal(name) {
    this.name = name;
  }
  
  // Method for Animal
  Animal.prototype.sound = function() {
    console.log(this.name + " makes a sound");
  };
  
  // Dog constructor
  function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
  }
  
  // Set Dog's prototype to Animal's prototype
  Dog.prototype = Object.create(Animal.prototype);
  
  // Method for Dog
  Dog.prototype.bark = function() {
    console.log(this.name + " barks");
  };
  
  // Creating instances of animals
  var animal = new Animal("Generic Animal");
  var dog = new Dog("Max", "Labrador");
  
  // Calling methods
  animal.sound(); // Output: Generic Animal makes a sound
  dog.sound();    // Output: Max makes a sound
  dog.bark();     // Output: Max barks
  