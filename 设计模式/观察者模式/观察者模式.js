function Hunter (name, level) {
    this.name = name
    this.level = level
    this.list = []
}

Hunter.prototype.subscribe = function (target, callback) {
    target.list.push(callback)
}

Hunter.prototype.publish = function () {
    this.list.forEach((item) => {
        item()
    })
}