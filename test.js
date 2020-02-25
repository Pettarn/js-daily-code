let user = {
    name: 'Tom'
}

user = new Proxy(user, {
    get (target, prop) {
        return target[prop]
    },
    set (target, prop, value) {
        target[prop] = value
    },
    ownKeys (target) {
        return Object.keys(target)
    }
})

let a = 18

let another = {
    age: a
}

a = 19

user.age = a
console.log(another)
