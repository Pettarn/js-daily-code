// 遍历左边变量的原型链，直到找到右边变量的prototype，返回true，否则返回false

function __instanceof (left, right) {
    left = left.__proto__
    if (left === right.prototype) {
        return true
    } else {
        if (left.__proto__) {
            return __instanceof(left, right)
        } else {
            return false
        }
    }
}

console.log(__instanceof('1', String))