async function *Generator (count) {
    for (let i = 1; i <= count; i++) {
        await new Promise((resolve, reject) => {
            setTimeout(resolve, 1000)
        })
        yield i
    }
}

const gen = Generator(3)

;(async function () {
    for await (let i of gen) {
        console.log(i)
    }
})()