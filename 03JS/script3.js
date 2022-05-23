class Car {
    constructor(brand, speed, millage, distance) {
            this.brand = brand;
            this.speed = speed;
            this.millage = millage;
            this.distance = distance;
        }
    }   

function brand() {
    return this.brand = "BMW"
}

function speed() {
    return this.speed = 90
}

function millage() {
    return this.millage = 145203
}

function distance() {
    return this.speed * 1
}

const car = new Car();

car.brand = this.brand();
car.speed = this.speed();
car.millage = this.millage();
car.distance = this.distance();

console.log(car); 

// function distance() {
//     var speed = car.speed
//     var time = 1
    
//     var distance = speed * time
//     console.log(distance)
// }   
// distance();