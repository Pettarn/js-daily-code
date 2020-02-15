// 返回一个函数，绑定了上下文和部分参数
Function.prototype.bind = function (context) {
    let argList = [].slice.call(arguments, 1)
    let __this = this
    return function () {
        let argList2 = [].slice.call(arguments)
        __this.apply(context, argList.concat(argList2))
    }
}

function func1 (a, b, c) {
    console.log(a, '-', b, '-', c)
}

func1 = func1.bind(null, 1)
func1(2, 3)