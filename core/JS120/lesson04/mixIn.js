/*
If we have a Car class and a Truck class, how can you use the Speed object as a mix-in to make them goFast? How can you check whether your Car or Truck can now go fast?
*/
// const Speed = {
//   goFast() {
//     console.log(`I'm a ${this.constructor.name} and going super fast!`);
//   },
// };

// class Car {
//   goSlow() {
//     console.log(`I'm safe and driving slow.`);
//   }
// }

// class Truck {
//   goVerySlow() {
//     console.log(`I'm a heavy truck and like going very slow.`);
//   }
// }

// Object.assign(Car.prototype, Speed);
// Object.assign(Truck.prototype, Speed);
// let car1 = new Car();
// let truck1 = new Truck();
// console.log(car1.goFast());
// console.log(truck1.goFast());
// console.log("goFast" in car1);
// console.log("goFast" in truck1);

/*
In the last question, we used a mix-in named Speed that contained a goFast method. We included the mix-in in the Car class and then called the goFast method from an instance of the Car class. You may have noticed that the string printed when we call goFast includes the name of the type of vehicle we are using. How is that done?

It is using the current constructor's name property at the time of execution
this refers to the instance that invoked `goFast` method. The constructor property of an instance references the class tha the instance belongs to. Constructors have a name property that contains the name of the class as a string and that's what we output in `goFast`.
*/

/*
Ben and Alyssa are working on a vehicle management system. Thus far, they have created classes named Auto and Motorcycle to represent automobiles and motorcycles. After they noticed that the information and calculations performed was common to both vehicle types, they decided to break out the commonality into a separate class named WheeledVehicle. Their code, thus far, looks like this:
Their boss now wants them to incorporate a new type of vehicle: a Catamaran.
*/
const Moveable = {
  range() {
    return this.fuelCap * this.fuelEfficiency;
  },
};

class WheeledVehicle {
  constructor(tirePressure, kmTravelledPerLiter, fuelCapInLiter) {
    this.tires = tirePressure;
    this.fuelEfficiency = kmTravelledPerLiter;
    this.fuelCap = fuelCapInLiter;
  }

  tirePressure(tireIdx) {
    return this.tires[tireIdx];
  }

  inflateTire(tireIdx, pressure) {
    this.tires[tireIdx] = pressure;
  }
}

Object.assign(WheeledVehicle.prototype, Moveable);

class Auto extends WheeledVehicle {
  constructor() {
    // the array represents tire pressure for four tires
    super([30, 30, 32, 32], 50, 25.0);
  }
}

class Motorcycle extends WheeledVehicle {
  constructor() {
    // array represents tire pressure for two tires
    super([20, 20], 80, 8.0);
  }
}

class Catamaran {
  constructor(propellerCount, hullCount, kmTravelledPerLiter, fuelCapInLiter) {
    // catamaran specific logic

    this.propellerCount = propellerCount;
    this.hullCount = hullCount;
    this.fuelEfficiency = kmTravelledPerLiter;
    this.fuelCap = fuelCapInLiter;
  }
}

Object.assign(Catamaran.prototype, Moveable);
