class Car {
    constructor(brand, speed, millage, distancePerHour) {
        this.brand = brand;
        this.speed = speed;
        this.millage = millage;
        this.distancePerHour = distancePerHour
    }

    setDistance() {
        return this.distancePerHour =  this.speed * 1;
    }
}   

let car1 = new Car("BMW", 90, 11235, this.setDistance());
let car2 = new Car("Audi", 120, 561235);
console.log(car1, car2)