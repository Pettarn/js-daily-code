// 事件监听 事件触发

// var event = new EventEmitter(); 
// event.on('some_event', function() { 
//     console.log('some_event 事件触发'); 
// }); 
// setTimeout(function() { 
//     event.emit('some_event'); 
// }, 1000); 

function __EventEmitter () {
    __EventEmitter.union = {}

    this.on = (e, callback) => {
        if (__EventEmitter.union instanceof Array) {
            __EventEmitter.union[e].push(callback)
        } else {
            __EventEmitter.union[e] = []
            __EventEmitter.union[e].push(callback)
        }
    }

    this.emit = (e) => {
        if (__EventEmitter.union[e]) {
            __EventEmitter.union[e].forEach(cb => cb())
        } else {
            throw new Error('No such event.')
        }
    }
}

let event = new __EventEmitter()
event.on('some', function () {
    console.log('This event is emitting.')
})

setTimeout(() => {
    event.emit('some')
}, 3000)