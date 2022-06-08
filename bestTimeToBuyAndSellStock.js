function max_profit(prices) {
    let profit = 0
    for (var i = 0; i < prices.length - 1; i++) {
        for (var j = i+1; j < prices.length; j++) {
            let currentProfit = prices[j] - prices[i]
            if (currentProfit > profit) profit = currentProfit
        }
    }
    return profit
}

let prices1 = [7,2,5,1,4,6] // Output: 5
let prices2 = [7, 6, 5, 4, 3] // Output: 0

console.log(max_profit(prices1))
console.log(max_profit(prices2))