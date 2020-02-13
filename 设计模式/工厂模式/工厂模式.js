function Car (name) {
    this.name = name
}

function createCar (name) {
    return new Car(name)
}

let car1 = createCar('Tom')