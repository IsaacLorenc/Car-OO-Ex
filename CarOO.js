class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        return "Beep";
    }
    toString() {
        return `This is a ${this.make} ${this.model} from ${this.year}.`;
    }
}

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine() {
        return 'VROOM!!!';
    }
}

class Garage {
    constructor(capacity) {
        this.vehicle = [];
        this.capacity = capacity;
    }
    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle)) {
            return 'Only vehicles are allowed in here!';
        }
        if (this.vehicle.length >= this.capacity) {
            return "Sorry, we're full.";
        }
        this.vehicle.push(newVehicle);
        return 'Vehicle added!';
    }
}

//suggestions and improvements
//1. There's a typo in the toString() method where this.maodel should be corrected to this.model.
//2.There's a missing super() call in the constructor, which is required when extending another class.
//3 Initialize the vehicle propertyin the constructor.
//4. There's a typo in this.vehicle.lenght, it should be corrected to this.vehicle.length.
//5. The capacity check in add() uses this.vehicle.length which should be corrected to this.vehicle.length.
//
//
//The 'Garage' class should have its own scope without inheriting from 'Vehicle'. See the code below

/* class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }

    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle)) {
            return 'Only vehicles are allowed in here!';
        }

        if (this.vehicles.length >= this.capacity) {
            return "Sorry, we're full.";
        }

        this.vehicles.push(newVehicle);
        return 'Vehicle added!';
    }
}
 */
