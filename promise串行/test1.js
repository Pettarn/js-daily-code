function delay (time) {
    return new Promise((resolve, reject) => {
        console.log('await ' + time)
        setTimeout(() => {
            console.log('execute!')
            resolve()
        }, time * 1000)
    })
}

const arr = [3, 4, 5]

async function func (arr) {
    for (let i = 0; i < arr.length; i++) {
        await delay(arr[i])
    }
}

func(arr)