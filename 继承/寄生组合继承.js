// 前提：父类的构造函数用来保存属性，prototype用来保存方法
// 通过apply实现属性的继承， 通过Object.create(Super.prototype)实现方法的继承

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