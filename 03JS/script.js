class Car {
    constructor(brand, speed, millage, distancePerHour) {
        this.brand = brand;
        this.speed = speed;
        this.millage = millage;
        this.distancePerHour = distancePerHour
    }

    setBrand(brand) {
        return this.brand = brand;
    }

    setSpeed(speed) {
        return this.speed = speed;
    }

    setMillage(millage) {
        return this.millage = millage;
    }

    getDistance() {
        return this.speed * 1;
    }
}  

const arrayCars = [];

const car0 = new Car();
car0.brand = car0.setBrand("BMW")
car0.speed = car0.setSpeed(90);
car0.millage = car0.setMillage(1452036);
car0.distancePerHour = car0.getDistance();

const car1 = new Car();
car1.brand = car1.setBrand("Audi")
car1.speed = car1.setSpeed(120);
car1.millage = car1.setMillage(448206);
car1.distancePerHour = car1.getDistance();

const car2 = new Car();
car2.brand = car2.setBrand("Volkswagen")
car2.speed = car2.setSpeed(70);
car2.millage = car2.setMillage(503206);
car2.distancePerHour = car2.getDistance();

const car3 = new Car();
car3.brand = car3.setBrand("Toyota")
car3.speed = car3.setSpeed(130);
car3.millage = car3.setMillage(48206);
car3.distancePerHour = car3.getDistance();

const car4 = new Car();
car4.brand = car4.setBrand("Mercedes")
car4.speed = car4.setSpeed(60);
car4.millage = car4.setMillage(748206);
car4.distancePerHour = car4.getDistance();
// console.log(car0, car1, car2, car3, car4)

arrayCars.push(car0, car1, car2, car3, car4);
// console.log(arrayCars);

var carsList = document.getElementById("cars");
    carsList.style.visibility = "hidden";

arrayCars.forEach((car) => {
    // console.log(car.brand, car.speed, car.millage, car.distancePerHour)
    let h3 = document.createElement("h3");
    let p = document.createElement("p");
    let small = document.createElement("small");
    let strong = document.createElement("strong");
    let br = document.createElement("br");
    let hr = document.createElement("hr");

    h3.innerHTML = car.brand
    p.innerHTML = "speed: "+car.speed+ "km/h"
    small.innerHTML = "millage: "+car.millage+ "km"
    strong.innerHTML = "distance: "+car.distancePerHour
        
    carsList.append(h3, p, small, br, strong, hr)
});

function displayCars() {
    carsList.style.visibility = "visible"; 
}