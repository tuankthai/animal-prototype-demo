function Animal(name) {
    this.name = name;
  }



  // Method for Animal
  Animal.prototype.sound = function() {
    console.log(this.name + " makes a sound");
  };


  const animal = new Animal("Generic Animal");