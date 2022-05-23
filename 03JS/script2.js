class Car {
    constructor(brand, speed, millage) {
        this.brand = brand;
        this.speed = speed;
        this.millage = millage;
    }
        
    static brand(brand) {
        return this.brand = brand
    }
        
    static speed(speed) {
        return this.speed = speed
    }
        
    static millage(millage) {
        return this.millage = millage
    }

    static distance() {
        var distance = this.speed * 1
        return distance;
    }
} 

let car11 = Car.brand("BMW")+" "+Car.speed(90)+" "+Car.millage(452036)+" distance per hour: "+Car.distance()
let car22 = Car.brand("Audi")+" "+Car.speed(110)+" "+Car.millage(1528337)+" distance per hour: "+Car.distance()
console.log(car11, car22)