class Super {
    constructor (foo) {
        this.foo = foo
    }

    printFoo () {
        console.log(this.foo)
    }
}

class Sub extends Super {
    constructor (foo, bar) {
        super(foo)
        this.bar = bar
    }

    printBar () {
        console.log(this.bar)
    }
}

let sub = new Sub(1, 2)
sub.printFoo()