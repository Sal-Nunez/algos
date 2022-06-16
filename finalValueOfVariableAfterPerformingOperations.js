/**
 * @param {string[]} operations
 * @return {number}
 */
const finalValueAfterOperations = (operations) => {
    let sum = 0;
    operations.forEach((operation) => {
        if (operation.includes("+")) {
            sum++
        } else sum--
    })
    return sum;
};