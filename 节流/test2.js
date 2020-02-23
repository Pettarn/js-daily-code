// 直接调Date

function throttle (func, timeout) {
    let lastTime = Date.now()
    return function (...args) {
        let now = Date.now()
        if (now - lastTime > timeout) {
            lastTime = now
            func(...args)
        } else {
            return
        }
    }
}