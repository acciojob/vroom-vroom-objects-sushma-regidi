// Car constructor
function Car(make, model) {
  this.make = make;
  this.model = model;
}

Car.prototype.getMakeModel = function () {
  return this.make + " " + this.model;
};

// SportsCar constructor
function SportsCar(make, model, topSpeed) {
  Car.call(this, make, model);
  this.topSpeed = topSpeed;
}

// Inherit from Car prototype
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

SportsCar.prototype.getTopSpeed = function () {
  return this.topSpeed;
};

// ⭐ VERY IMPORTANT ⭐
// Expose them to Cypress via window
window.Car = Car;
window.SportsCar = SportsCar;




