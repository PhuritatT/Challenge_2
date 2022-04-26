var array = [14, 14, 25, 2, 3, 4, 11, 1, 14, 21, 18, 14]
var sum = 2

var challenge_2 = (array, sum) => {
    let result = ''
    for (let i of array) {
        let pair = sum - i
        if (pair < 0) {
            continue;
        } else if (array.includes(pair, array.indexOf(i) + 1)) {
            let index = []
            result = [array.indexOf(i), array.indexOf(pair, array.indexOf(i) + 1)]
            break;
        } else {
            result = 'no output'
        }
    }
    console.log(`Input : nums = [${array}], sum = ${sum}`)
    if (typeof (result) === 'string') {
        console.log(`Output : ${result}`)
        console.log(`Explanation : There are no two numbers that add up to ${sum}`)
    } else {
        console.log(`Output : ${result[0]},${result[1]}`)
        console.log(`Explanation : Because nums[${result[0]}] + nums[${result[1]}] = ${sum}`)
    }
}

challenge_2(array, sum)
