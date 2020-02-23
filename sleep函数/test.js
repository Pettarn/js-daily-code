// 重新封装一个函数，在他被调用的时候延后 timeout s再执行

function sleep (func, delay) {
    return async (...args) => {
        await new Promise((resolve) => {
            setTimeout(resolve, delay)
        })
        func.apply(null, args)
    }
}

function log () {
    let time2 = Date.now()
    console.log(time2 - time1)
}

let time1 = Date.now()
log = sleep(log, 2000)
log()
