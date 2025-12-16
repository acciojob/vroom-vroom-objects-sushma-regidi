// Car constructor function
function Car(make, model) {
    this.make = make;
    this.model = model;
}

// Method on Car prototype
Car.prototype.getMakeModel = function () {
    return this.make + " " + this.model;
};

// SportsCar constructor function
function SportsCar(make, model, topSpeed) {
    // Call parent constructor
    Car.call(this, make, model);
    this.topSpeed = topSpeed;
}

// Inherit from Car prototype
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Method on SportsCar prototype
SportsCar.prototype.getTopSpeed = function () {
    return this.topSpeed;
};







