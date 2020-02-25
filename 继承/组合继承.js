function Super (foo) {
    this.foo = foo
}

Super.prototype.printFoo = function () {
    console.log(this.foo)
}

function Sub (foo, bar) {
    Super.call(this, foo)
    this.bar = bar
}

Sub.prototype = new Super()

Sub.prototype.constructor = Sub