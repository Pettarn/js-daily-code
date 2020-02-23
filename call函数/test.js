Function.prototype.call = function (context, ...args) {
    if (context === null) {
        context = window
    } else {
        context = new Object(context)
    }
    let key = Symbol()
    context[key] = this
    let result = context[key](...args)
    delete context[key]
    return result
}

function func () {
    console.log(this.name)
    console.log(arguments)
}



func.call({
    name: 'fjh'
}, 1, 2, 3)