// 闭包实现

let Car = (function () {
    let instance = 1

    function __constructor (name) {
        this.name = name
    }

    return function (name) {
        if (!instance) {
            instance = new __constructor(name)
        }
        return instance
    }
})()

let car1 = Car('Tom')
let car2 = Car('Keven')

console.log(car1 === car2)