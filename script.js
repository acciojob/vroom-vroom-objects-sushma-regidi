<script>
// Car constructor
function Car(make, model) {
    this.make = make;
    this.model = model;
}

// Add method to Car prototype
Car.prototype.getMakeModel = function () {
    return this.make + " " + this.model;
};

// SportsCar constructor (inherits from Car)
function SportsCar(make, model, topSpeed) {
    // call parent constructor
    Car.call(this, make, model);
    this.topSpeed = topSpeed;
}

// Inherit from Car
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Add method to SportsCar prototype
SportsCar.prototype.getTopSpeed = function () {
    return this.topSpeed;
};

// EXPOSE to window for Cypress
window.Car = Car;
window.SportsCar = SportsCar;
</script>






