// Car constructor
function Car(make, model) {
    this.make = make;
    this.model = model;
}

// Add method to Car prototype
Car.prototype.getMakeModel = function () {
    return this.make + " " + this.model;
};

// SportsCar constructor
function SportsCar(make, model, topSpeed) {
    // call Car constructor
    Car.call(this, make, model);
    this.topSpeed = topSpeed;
}

// Inherit prototype from Car
SportsCar.prototype = Object.create(Car.prototype);

// Reset constructor pointer
SportsCar.prototype.constructor = SportsCar;

// Add method to SportsCar prototype
SportsCar.prototype.getTopSpeed = function () {
    return this.topSpeed;
};





