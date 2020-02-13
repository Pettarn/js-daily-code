let HunterUnion = {
    topics: Object.create(null)
}

HunterUnion.subscribe = function (target, callback) {
    if (!this.topics[target]) {
        this.topics[target] = []
    }
    this.topics[target].push(callback)
}

HunterUnion.publish = function (target) {
    this.topics[target].forEach((item) => {
        item()
    })
}

function Hunter (name, level) {
    this.name = name
    this.level = level
}

Hunter.prototype.subscribe = function (target, callback) {
    HunterUnion.subscribe(target, callback)
}

Hunter.prototype.publish = function (target) {
    HunterUnion.publish(target)
}