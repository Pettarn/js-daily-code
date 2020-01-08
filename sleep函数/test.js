async function sleep (ms) {
    let a = new Date().getTime()
    await new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
    let b = new Date().getTime()
    console.log(b - a)
}

sleep(2000)
