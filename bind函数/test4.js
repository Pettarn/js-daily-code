// 绑定一个函数的上下文，并提供部分参数，返回绑定后的函数，如果被绑定的函数是构造函数，那么

Function.prototype.bind = function (context, ...args1) {
    let func = this

    // 返回一个绑定后的函数
    let result = (...args2) => {
        func.call(
            this instanceof func ? this : (context === null ? window : new Object(context))
            , ...args1, ...args2
            )
    }
    result.prototype = Object.create(func.prototype)
    return result
}


function Car (name) {
    this.name = name
}