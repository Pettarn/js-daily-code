function Super (foo) {
    this.foo = foo
}

Super.prototype.printFoo = function () {
    console.log(this.foo)
}

function Sub () {
    this.bar = bar
    Super.call(this)
}

Sub.prototype = Object.create(Super.prototype)

Sub.prototype.printBar = function () {
    console.log(this.bar)
}

Sub.prototype.constructor = Sub