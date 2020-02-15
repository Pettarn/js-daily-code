Function.prototype.bind = function (context, ...argList1) {
    return (...argList2) => this.call(context, ...argList1, ...argList2)
}

function func1 (a, b, c) {
    console.log(a, '-', b, '-', c)
}

func1 = func1.bind(null, 1)
func1(2, 3)