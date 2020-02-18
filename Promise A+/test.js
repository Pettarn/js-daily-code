new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(args)
    })
}).then((data) => {
    console.log(data)
})

function Promise (func) {
    
}