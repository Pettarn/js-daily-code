// new的功能：定义一个空对象字面量，作为this ，最后返回this
function creater (func, ...args) {
    let __this = {}
    func.call(__this, ...args)
    return __this
}

function Car (name, money) {
    this.name = name
    this.money = money
}

let car = creater(Car, 'Tom', 100)
console.log(car.name)