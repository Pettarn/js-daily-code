Function.prototype.apply = function (context, arr) {
    context = context === null ? window : new Object(context)
    let key = Symbol()
    context[key] = this
    let result = context[key](...arr)
    delete context[key]
    return result
}

function func () {
    console.log(this.name)
    console.log(arguments)
}

let arr = [1, 2, 3]

func.apply({
    name: 1
}, arr)