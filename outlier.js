let givenArrEven = [4, 6, 8, 10, 12, 15]

let givenArrOdd = [3, 5, 7, 9, 12]

function findOutlier(arr) {
    let evenArr = []
    let oddArr = []
    for(let i = 0; i < arr.length; i++)
    if(arr[i] % 2 === 0) {
        evenArr.push(arr[i])
    } else {
        oddArr.push(arr[i])
    }
    // console.log(evenArr)
    // console.log(oddArr)

    if (evenArr.length < oddArr.length) {
        return evenArr
    } else {
        return oddArr
    }
}


console.log(findOutlier(givenArrEven))
console.log(findOutlier(givenArrOdd))


