// 闭包实现
function Car (name) {
    this.name = name
}

Car.prototype.toUpperCase = function () {
    this.name = this.name.charAt(0).toUpperCase() + this.name.slice(1)
}

let car1 = new Car('tom')
car1.toUpperCase()
console.log(car1.name)