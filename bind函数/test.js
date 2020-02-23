// 绑定上下文，提供固定的参数

function __bind (func, context, ...args) {
    if (args.length <= func.length) {
        return function (...args2) {
            if (args2.length + args.length > func.length) {
                throw new Error('bug')
            }
            func.apply(context, args.concat(args2))
        }
    } else {
        throw new Error('Extend specific argument count.')
    }
}

function test (arg1, arg2, arg3) {
    console.log(arg1, '+', arg2, '+', arg3)
}

test = __bind(test, null, 1, 2, 3, 5)
test(5, 3)