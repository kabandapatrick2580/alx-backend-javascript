import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // Override the cloneCar() method to return an instance of Car
  cloneCar() {
    // Create a new instance of Car with the same attributes
    return new Car(this._brand, this._motor, this._color);
  }
}
