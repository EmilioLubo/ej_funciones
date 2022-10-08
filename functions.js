/* JavaScript String Functions
Exercise 1
Exercise 1: Write a JavaScript function that reverses a number. For example, if x =
32443 then the output should be 34423.
Save your JavaScript file and reload the page. Make sure you see the correct output. If not, investigate and fix.*/
function reverseNumber(number){
    const reversedNumber = number.toString().split("").reverse().join("")
    return Number(reversedNumber)
}
/* console.log(reverseNumber(456789)) */
/*Exercise 2: Write a JavaScript function that returns a string in alphabetical order. For example, if x = 'webmaster' then the output should be 'abeemrstw'. Punctuation and numbers aren't passed in the string.
Save your JavaScript file and reload the page. Make sure you see the correct output. If not, investigate and fix.*/
function orderString(string){
    const orderedString = string.toLowerCase().split("")
    orderedString.sort()
    return orderedString
}
/* console.log(orderString("Murcielago")) */
/*Exercise 3: Write a JavaScript function that converts the first letter of every word to uppercase. For example, if x = "prince of persia" then the output should be "Prince Of Persia".
Save your JavaScript file and reload the page. Make sure you see the correct output. If not, investigate and fix.*/
function upperFirstChar(string){
    const returnArray = []
    const stringArray = string.toLowerCase().split(" ")
    for(let word of stringArray){
        let returnWord = word[0].toUpperCase() + word.substring(1)
        returnArray.push(returnWord)
    }
    return returnArray.join(" ")
}
/* console.log(upperFirstChar('Hola que tal')) */
/*Exercise 4: Write a JavaScript function that finds the longest word in a phrase. For example, if x = "Web Development Tutorial", then the output should be "Development".
Save your JavaScript file and reload the page. Make sure you see the correct output. If not, investigate and fix. */
function findLongestWord(string){
    const stringArray = string.split(" ")
    let longestWord = stringArray[0]
    for(let word of stringArray){
        if(word.length > longestWord.length){
            longestWord = word
        }else if(word.length === longestWord.length){
            longestWord += `, ${word}`
        }
    }
    return longestWord
}
console.log(findLongestWord("mi tia patea calefones espectaculares impresionantes"))