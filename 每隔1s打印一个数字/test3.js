async function* Gen (start, end) {
    for (let i = start; i <= end; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000))
        yield i
    }
}

let gen = Gen(1, 5)

;(async () => {
    for await (let i of gen) {
        console.log(i)
    }
})()