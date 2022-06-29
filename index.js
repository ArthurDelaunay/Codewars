// const spinWords = (string) => {
//     words = string.split(" ")
//     result = ""
//     words.forEach( (word) => {
//         letters = word.split("")
//         if (word.length >= 5){
//             letters.reverse()
//         }
//         word = letters.join("")
//         result += `${word}_`
//     })
//     result = result.substring(0, result.length -1)
//     return result
// }
// spinWords("Hey fellow warriors")

// const isSquare = (n) => {
//     return Number.isInteger(Math.sqrt(n))
// }
// console.log(isSquare(-1))
// console.log(isSquare( 0))

// const printerError = (string) => {
//     const testLetters = ["n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//     const letters = string.split("")
//     let errorNumber = 0
//     testLetters.forEach( (testLetter) => {
//         filteredLetters = letters.filter((letter) => {
//             return letter === testLetter
//         })
//         errorNumber += filteredLetters.length
//     })
//     return `${errorNumber}/${string.length}`
// }
// const test = printerError("aaaxbbbazeazeazeafdvscbyyhwawiwjjjwwm")
// console.log(test)

// const DNAStrand = (dna) => {
//     const DNALetters = dna.split("")
//     let result = ""
//     DNALetters.forEach( (letter) => {
//         // console.log(letter)
//         if (letter == "A") {
//             result += "t"
//         }
//         if (letter === "T") {
//             result += "a"
//         }
//         if (letter === "C") {
//             result += "g"
//         }
//         if (letter === "G") {
//             result += "c"
//         }
//     })
//     result = result.toUpperCase()
//     return result
// }
// const test1 = DNAStrand("AAAA")
// const test2 = DNAStrand("ATTGC")
// console.log(test1, test2)

// const squareDigits = (num) => {
//     const digits = num.toString().split("")
//     let result = ""
//     digits.forEach( (digit) => {
//         result = result + digit**2
//     }) 
//     result = Number(result)
//     return result
// }
// console.log(squareDigits(3212))
// console.log(squareDigits(21512))

// const persistence = (num) => {
//     let count = 0
//     while (num > 9) {
//         numbers = num.toString().split("")
//         let total = 1
//         numbers.forEach( (number) => {
//             total *= number
//         })
//         num = total
//         count += 1
//     }
//     return count
// }
// console.log(persistence(39))
// console.log(persistence(999))

const towerBuilder = (nFloors) => {
    const maxSize = nFloors * 2 - 1
    const char = "*"
    let ligns = []
    for (i = 0; i < nFloors; i += 1) {
        let lign = char
        for (j = 1; j <= i; j += 1) {
            lign += `${char.repeat(2)}`
        }
        // console.log(lign)
        ligns.push(lign)
    }

console.log(ligns)
}
towerBuilder(3)