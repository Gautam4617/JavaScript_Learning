const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Shaktiman", "power rangers"]
const myArr3 = new Array(1, 2, 3, 4)
    // console.log(myArr[3])

//Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
//myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(3))
// console.log(myArr.indexOf(3))

const newArr = myArr.join()
    // console.log(myArr);
    // console.log(newArr);
    // console.log(typeof newArr)



//slice splice

// console.log("A ", myArr)
const myn1 = myArr.slice(1, 3)
console.log("B ", myn1)
console.log("A ", myArr)

//Splice

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr)
console.log("B ", myn2)