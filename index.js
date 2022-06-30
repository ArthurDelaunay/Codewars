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

// const towerBuilder = (nFloors) => {
//     const maxSize = nFloors * 2 - 1
//     const char = "*"
//     let ligns = []
//     for (i = 0; i < nFloors; i += 1) {
//         let lign = char
//         for (j = 1; j <= i; j += 1) {
//             lign += `${char.repeat(2)}`
//         }
//         // console.log(lign)
//         ligns.push(lign)
//     }

// console.log(ligns)
// }
// towerBuilder(3)

// const solution = (number) => {
//     let total = 0
//     for (let i = 0; i < number; i += 1){
//         if (i % 3 === 0 || i % 5 === 0){
//             if (i % 3 === 0 && i % 5 === 0) {
                
//             } 
//             else {
//                 total += i
//             }
//         }
//     }
//     return total
// }
// solution(10)

// const consecutive = (arr, a, b) => {

//     indexA = arr.indexOf(a)
//     indexB = arr.indexOf(b)
//     return indexA === indexB -1 || indexB === indexA - 1
//   }
//   console.log(consecutive([1, 3, 5, 7], 3, 1))



//                []          []  
// const winner = (deckSteve, deckJosh) => {
//     const listCards = ['2','3','4','5','6','7','8','9','T','J','Q','K','A']
//     let winSteve = 0
//     let winJosh = 0
//     deckSteve.forEach((card, index) => {
//         const cardSteve = deckSteve[index]
//         const cardJosh = deckJosh[index]
//         if (listCards.indexOf(cardSteve) > listCards.indexOf(cardJosh)) {
//             winSteve += 1
//         }
//         else if (listCards.indexOf(cardSteve) < listCards.indexOf(cardJosh)){
//             winJosh += 1
//         }
//     })
//     if (winSteve > winJosh){
//         return `Steve wins ${winSteve} to ${winJosh}`
//     }
//     else if (winSteve < winJosh){
//         return `Josh wins ${winJosh} to ${winSteve}`
//     }
//     else {
//         return "Tie"
//     }
// }
// console.log(winner(['T'], ['T']))

// const XO = (string) => {
//     string = string.toLowerCase().split("")
//     // console.log(string)
//     const letterX = string.filter((letter) => {
//         return letter === "x"
//     })
//     const letterO = string.filter((letter) => {
//         return letter === "o"
//     })
//     return letterX.length === letterO.length
// }

// console.log(XO('azzaza'))
// console.log(XO("ooom"))

// const likes = (names) => {
//     let result = ""
//     if (names.length === 0){
//         result += "no one likes this"
//     }
//     else if (names.length === 1){
//         result += `${names[0]} likes this`
//     }
//     else if (names.length === 2){
//         result += `${names[0]} and ${names[1]} like this`
//     }
//     else if (names.length === 3){
//         result += `${names[0]}, ${names[1]} and ${names[2]} like this`
//     }
//     else {
//         result += `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
//     }
//     return result
//   }
//   console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']))
//   console.log(likes(['Jacob', 'Alex']))

// const pigIt = (string) =>{
    
// }
const pigIt = (string) => {
    const words = string.split(" ")

    let result = ""
    words.forEach((word) => {
        const firstLetter = word.charAt(0)
        if (firstLetter !== "!"){
          if (firstLetter !== "?"){
            word = word + firstLetter + "ay"
            word = word.substring(1)
          }  
        }
        result += word + " "
    })
    result = result.substring(0, result.length -1 )
    return result
}
console.log(pigIt("This is my string !"))


    