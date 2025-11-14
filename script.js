// --------------------------
// Car Constructor
// --------------------------
function Car(make, model) {
    this.make = make;
    this.model = model;
}

Car.prototype.getMakeModel = function () {
    return `${this.make} ${this.model}`;
};


// --------------------------
// SportsCar Constructor
// --------------------------
function SportsCar(make, model, topSpeed) {
    Car.call(this, make, model); // inherit Car properties
    this.topSpeed = topSpeed;
}

// inherit Car prototype
SportsCar.prototype = Object.create(Car.prototype);

// restore constructor
SportsCar.prototype.constructor = SportsCar;

// sports car method
SportsCar.prototype.getTopSpeed = function () {
    return this.topSpeed;
};


// --------------------------
// VERY IMPORTANT FOR CYPRESS
// Expose constructors globally
// --------------------------
window.Car = Car;
window.SportsCar = SportsCar;


