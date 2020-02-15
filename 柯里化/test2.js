// 参数不够返回偏函数， 参数够了就执行
function __curry (func) {
    return function curried (...args) {
        if (args.length < func.length) {
            return function (...args2) {
                return curried.apply(null, args.concat(args2))
            } 
        } else if (args.length > func.length) {
            throw new Error('Extend specific argument count')
        } else {
            func(...args)
        }
    }
}

function test (arg1, arg2, arg3) {
    console.log(arg1, '+', arg2, '+', arg3)
}

test = __curry(test)

test = test(1)(2, 4)