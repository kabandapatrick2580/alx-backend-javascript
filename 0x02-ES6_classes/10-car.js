class Car {
    constructor(brand, motor, color) {
      this._brand = brand;
      this._motor = motor;
      this._color = color;
    }
  
    // Method to clone the Car object
    cloneCar() {
      const clonedCar = new Car(this._brand, this._motor, this._color);
      return clonedCar;
    }
  }
  