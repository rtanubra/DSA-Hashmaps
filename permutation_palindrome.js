const {genAnagram} = require('./helpers')

const HashMap = require('./hashmap')
function permutation_palindrome(str){
    return false
}

const q1 = 'acecarr'
const a1_e = true
const a1 = permutation_palindrome(q1)
const q2 = 'other'
const a2_e = false
const a2 = permutation_palindrome(q2)
const q3 = 'north'
const a3_e = false
const a3 = permutation_palindrome(q3)


console.log(`given ${q1} - test should return ${a1_e} - ${a1_e ===a1 ? "pass": `failed got ${a1} instead` } `)
console.log(`given ${q2} - test should return ${a2_e} - ${a2_e ===a2 ? "pass": `failed got ${a2} instead` } `)
console.log(`given ${q3} - test should return ${a3_e} - ${a3_e ===a3 ? "pass": `failed got ${a3} instead` } `)