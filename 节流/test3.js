// 一定时间段内调用了N次该函数，最后只有第一次执行了

function throttle (funcName, timeout) {
    let flag = 1
    return function () {
        if (flag === 0) return
        flag = 0
        setTimeout(() => {
            flag = 1
            funcName()
        }, timeout)
    }
}