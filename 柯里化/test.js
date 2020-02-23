// 参数不够返回偏函数，参数够了返回正常的值
function __curry (func) {
    return function (...args) {
        if (args.length < func.length) {
            return __curry(func.bind(null, ...args))
        } else if (args.length > func.length) {
            throw new Error('Extend the specific argument count!')
        } else {
            return func(...args)
        }
    }
}

function test (arg1, arg2, arg3) {
    console.log(arg1, '+', arg2, '+', arg3)
}

test = __curry(test)

test = test(1)(2, 4)
