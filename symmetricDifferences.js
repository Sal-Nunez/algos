const test1NumsA = [1, 2];
const test1NumsB = [2, 1];
const expected1 = [];
// Explanation: 1 and 2 are in both arrays so are excluded

const test2NumsA = [1, 2, 3];
const test2NumsB = [4, 5, 6];
const expected2 = [1, 2, 3, 4, 5, 6];
// Explanation: neither array has shared values, so all are included

const test3NumsA = [4, 1, 2, 3, 4];
const test3NumsB = [1, 2, 3, 5, 5, 2];
const expected3 = [4, 5];
/* 
    Explanation: 1, 2, and 3 are shared so are excluded
    4 and 5 are included because they exist only in 1 array,
    but have duplicates, so only one copy of each is kept.
*/

/**
 * Produces the symmetric differences, aka disjunctive union of two sets.
 * Venn Diagram Visualization:
 * @see https://miro.medium.com/max/3194/1*N3Z94nCNu8IHsFenIAELJw.jpeg
 * - Time: O(?).
 * - Space: O(?).
 * @param  {Array<number>} numsA
 * @param  {Array<number>} numsB
 *    Both given sets are multisets in any order (contain dupes).
 * @returns {Array<number>} The union of the given sets but excluding the shared
 *    values (union without intersection).
 *    i.e., if the element is in one array and NOT the other, it should be
 *    included in the return.
 */
function symmetricDifferences(numsA, numsB) {
    let answer = [];
    let i = 0;
    let j = 0;
    while (i < numsA.length || j < numsB.length) {
        if (!numsB.includes(numsA[i]) && !answer.includes(numsA[i])) {
            if (numsA[i] != undefined) answer.push(numsA[i])
        }
        if (!numsA.includes(numsB[j]) && !answer.includes(numsB[j])) {
            if (numsB[j] != undefined) answer.push(numsB[j])
        }
        i++
        j++
    }
    return answer.sort();
}

console.log(symmetricDifferences(test3NumsA, test3NumsB));