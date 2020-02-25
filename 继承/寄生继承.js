function Super (foo) {
    this.foo = foo
}

Super.prototype.printFoo = function () {
    console.log(this.foo)
}

function blank () {

}

blank.prototype = Super.prototype

function Sub (foo, bar) {
    this.bar = bar
    Super.call(this, foo)
}

Sub.prototype = new blank()

Sub.prototype.constructor = Sub