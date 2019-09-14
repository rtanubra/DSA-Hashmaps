const HashMap = require('./hashmap')

function remove_duplicates(str){
    const myHashMap = new HashMap()
    var newStr = ""
    var letter
    var currentValue

    for (const x in str){
        letter = str[x]
        currentValue=myHashMap.get(letter)
        //if letter is not present add it to hashTable and add to new string
        if (currentValue=== "ERROR - key does not exist"){
            newStr += letter
            myHashMap.set(letter,`Good value- ${letter}`)
        }
        //console.log(currentValue,myHashMap._hashTable)
    }
    return newStr 
}

const firstTest = remove_duplicates('google')
const secondTest = remove_duplicates("111223444444goooooogle")
console.log(`remove_duplicates('google') should equal "gole" - ${firstTest === "gole"? "pass": `got ${firstTest} instead`}`)
console.log(`remove_duplicates("111223444444goooooogle") should equal "1234gole" - ${secondTest === "1234gole"? "pass": `got ${secondTest} instead`}`)