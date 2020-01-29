function replaceSpace(str)
{
    // str = 'We are family.'
    // result = 'We%20are%20family.'
    let result = []
    for (let item of str) {
        if (item === ' ') {
            result.push('%20')
        } else {
            result.push(item)
        }
    }
    result = result.join('')
    return result
}

console.log(replaceSpace('We are family.'))