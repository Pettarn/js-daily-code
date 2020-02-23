// 函数B(模拟情况);
function myAsync(myGenerator) {
    let gen = myGenerator()
    const handler = (genNext) => {
        if (genNext.done === true) {
            return
        } else if (genNext.value instanceof Promise) {
            genNext.value.then((value) => {
                gen.next(value)
            })
        } else {
            gen.next()
        }
    }
    try {
        handler(gen.next())
    } catch (e) {
        console.log(e)
    }
}
function* myGenerator() {
    const data = yield Promise.resolve("success");
    console.log(data); // success
}
const test = myAsync(myGenerator);

