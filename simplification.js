/**
 * @param {number[]} cont
 * @return {number[]}
 */
var fraction = function(cont) {
    
    function check (a, b) {
        console.log(a, b)
        let c = a % b

        if (c === 1) {
            return 1
        }

        if (c !== 0) {
            return check(b, c)
        } else {
            return 0
        }
    }

    function core (cont) {
        // console.log(cont)
        
        len = cont.length
        
        // if (cont.length === 2) {
        //     return cont
        // }
        
        if (len >= 3) {
            temp = cont[len-2]
            cont[len-3] = cont[len-2] * cont[len-3] + cont[len-1]
            cont[len-2] = temp
        }
        
        if (len === 2) {
            return cont
        } else {
            cont.pop()
            return core(cont)
        }
        
    }
    
    let len = cont.length

    cont[len] = 1
    
    let result = core(cont)

    return result

};
