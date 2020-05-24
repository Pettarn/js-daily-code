async function func (count) {
    for (let i = count; i > 0; i--) {
        await new Promise((resolve, reject) => {
            setTimeout(resolve, 1000)
        })
        console.log(i)
    }
}
func(100)