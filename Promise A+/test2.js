new Promise((resolve, reject) => {
    // 1
    setTimeout(() => {
        // 2
        resolve(1)
        console.log(1)
    })
})
.then((value) => {
    // return new Promise((resolve, reject) => {
    //     // 3
    //     setTimeout(() => {
    //         resolve(value + 1)
    //         console.log(2)
    //     })
    // })
    return value
})
.then((value) => {
    console.log(value + 1)
})