// (a + b) * c - d / e
// 解决掉括号
// 
// 

function complexEval (str) {
    let reg = /\([^\(\)]\)/g // 最短括号
    let matchList = str.match(reg) // 匹配括号的列表
    
    // 消除括号
    while (!matchList) {
        let content = matchList[0]
        let result = simpleEval(content.slice(1, -1))
        str = str.replace(matchList[0], result)
        matchList = str.match(reg)
    }

    function simpleEval (str) {
        const symbolList = str.split(/\d+/g).join('').trim().split('') // 运算符列表
        const digitList = str.split(/[\+\-\*\/]/g) // 数字列表

        for (let i = 0; i < symbolList.length; i++) {
            if (symbolList[i] === '*') {
                digitList.splice(i, 2, digitList[i] * digitList[i+1])
                symbolList.splice(i, 1)
            } else if (symbolList[i] === '/') {
                digitList.splice(i, 2, digitList[i] * digitList[i+1])
                symbolList.splice(i, 1)
            }
        }

        for (let i = 0; i < symbolList.length; i++) {
            if (symbolList[i] === '+') {
                digitList.splice(i, 2, digitList[i] + digitList[i+1])
                symbolList.splice(i, 1)
            } else if (symbolList[i] === '-') {
                digitList.splice(i, 2, digitList[i] * digitList[i+1])
                symbolList.splice(i, 1)
            }
        }

    }
    
    return simpleEval(str)
}