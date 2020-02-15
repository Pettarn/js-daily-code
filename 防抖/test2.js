// 把一个函数重新封装，让他每个一段时间才能触发
function debounce (func, timeout) {
    let timer = null
    return function () {
        let args = [].slice.call(arguments)
        if (timer) {
            clearTimeout(timer)
        } 
        timer = setTimeout(() => {
            func.apply(null, args)
        }, timeout)
    }
}

let func1 = function () {
    console.log('bug')
}

func1 = debounce(func1, 500)

let timer = setInterval(func1)
setTimeout(() => {
    clearInterval(timer)
}, 5000)

