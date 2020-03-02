const MyComponent = function () {}
MyComponent.prototype.data = {
    a: 1,
    b: 2
}

const component1 = new MyComponent()
const component2 = new MyComponent()

console.log(component1.data === component2.data)
