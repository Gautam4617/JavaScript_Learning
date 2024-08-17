const name = "Gautam"
const repoCount = 50
    // console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo coount is ${repoCount}`) This is called string interpolation

const gameName = new String('Gautam Sharma')
    // console.log(gameName) // Output: Gautam Sharma
    // console.log(gameName[0])
    // console.log(gameName.__proto__)
    // // console.log(gameName.length)
    // console.log(gameName.toUpperCase())
    // console.log(gameName.charAt(2));
    // console.log(gameName.indexOf('u'));

// const newString = gameName.substring(0, 4);
// console.log(newString);

// const anotherString = gameName.slice(-13, 4)
// console.log(anotherString);

// const newStringOne = "   gautam   "
// console.log(newStringOne)
// console.log(newStringOne.trim())

const url = "https://gautam.com/gautam%sharma"
console.log(url.replace("%", "-"))
console.log(url)
console.log(url.includes('Mohut'))

const newStringTwo = "Gautam-sharma-dd-mm-yyyy"
console.log(newStringTwo.split('-'))