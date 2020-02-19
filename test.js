function Car () {
    this.call = function () {
        console.log('bug')
    }
    call()
}

let car = new Car()