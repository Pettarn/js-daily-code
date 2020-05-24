let xhr = new XMLHttpRequest()
xhr.open(method, URL)
// xhr.setRequestHeader('')
xhr.send()
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        console.log(xhr.response)
    }
}