// 在一定时间段内，调用了 N 次该函数，只有最后一次触发了
function debounce (funcName, timeout) {
    let timer = null
    return function () {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(funcName, timeout)
    }
}