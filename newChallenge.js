class Car{
    constructor(model, color, year) {
        this.model = model;
        this.color = color;
        this.year = year;
    }
    static info() {
        console.log("this is a car")
    }
    start() {
        console.log(`${this.model} is starting...`)
    }
    stop() {
        
        console.log(`${this.model} is stopping...`)
    }
}

class Tesla extends Car {
    constructor(model, color, year) {
        super(model, color, year)
        // this.model = model;
        // this.color = color;
        // this.year = year;
    }
    // static describe() {
    //     console.log(`
    //     this.model =
    //     this.model =
    //     this.color = color
    //     this.year  = year;        `)
    // }
    charge() {
        console.log(`${this.model} is charging`)
    }

}

const newCar = new Tesla("model X", "red", "2023")
newCar.charge()
newCar.start()
newCar.stop()