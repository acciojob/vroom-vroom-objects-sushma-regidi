// --------------------------
// Car Constructor
// --------------------------
function Car(make, model) {
    this.make = make;
    this.model = model;
}

// Add method to Car prototype
Car.prototype.getMakeModel = function () {
    return `${this.make} ${this.model}`;
};


// --------------------------
// SportsCar Constructor
// --------------------------
function SportsCar(make, model, topSpeed) {
    // Call Car constructor to inherit make & model
    Car.call(this, make, model);

    this.topSpeed = topSpeed;
}

// Inherit Car prototype
SportsCar.prototype = Object.create(Car.prototype);

// Fix constructor pointer
SportsCar.prototype.constructor = SportsCar;

// Add getTopSpeed method
SportsCar.prototype.getTopSpeed = function () {
    return this.topSpeed;
};

