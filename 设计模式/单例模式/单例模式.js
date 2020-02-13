// 类静态属性方法实现

function Car (name) {
    this.name = name
}

Car.createCar = function (name) {
    if (!Car.instance) {
        Car.instance = new Car(name)
    }
    return Car.instance
}

let car1 = Car.createCar('Tom')
let car2 = Car.createCar('Keven')

console.log(car1 === car2)

