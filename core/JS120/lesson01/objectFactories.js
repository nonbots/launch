/*
Object factories: functions that create and return objects of a particular type.
*/

function createCar(make, fuelLevel, engineOn) {
    return {
        make: make,
        fuelLevel: fuelLevel,
        engineOn: engineOn,
        
        startEngine() {
            this.engineOn = true;
        },
        
        drive(){
            this.fuelLevel -= 0.1;
        },
        
        stopEngine(){
            this.engineOne = false;
        },
        
        refuel(percent) {
            if((this.fuel + (percent / 100)) <= 1) {
                this.fuelLevel += (percent / 100);
            } else {
                this.fuelLevel = 1;
            }
        }
    };
}

let raceCar1 = createCar('BMW', 0.5, false);
raceCar1.drive();

let raceCar2 = createCar('Ferrari', 0.7, true);
raceCar2.drive();

let raceCar3 = createCar('Jaguar', 0.4, false);
raceCar2.drive();

console.log(raceCar1);
console.log(raceCar2);
console.log(raceCar3);