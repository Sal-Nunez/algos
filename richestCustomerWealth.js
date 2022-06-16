/**
 * @param {number[][]} accounts
 * @return {number}
 */
const maximumWealth = accounts =>  Math.max(...accounts.map(account => account.reduce((a, b) => a + b, 0)))

console.log(maximumWealth([[1,2,3],[3,2,1]]))
console.log(maximumWealth([[2,8,7],[7,1,3],[1,9,5]]))