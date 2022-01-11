// Complete the function/method (depending on the language) to return true/True when its argument is an array that has the same nesting structures and same corresponding length of nested arrays as the first array.

// For example:

//  // should return true
// [ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );          
// [ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );  

//  // should return false 
// [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );  
// [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );  

// // should return true
// [ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] ); 

// // should return false
// [ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] );     
// For your convenience, there is already a function 'isArray(o)' declared and defined that returns true if its argument is an array, false otherwise.


Array.prototype.sameStructureAs = function (other) {
    return JSON.stringify(this).replace(/[0-9]/g, ' ').replace(/"]"/g, '').replace(/[,]/g, '').replace(/"\["/g, '') === JSON.stringify(other).replace(/[0-9]/g, ' ').replace(/"]"/g, '').replace(/[,]/g, '').replace(/"\["/g, '')
}

const answer1 = [1, 1, 1].sameStructureAs([2, 2, 2])
const answer2 = [1, [1, 1]].sameStructureAs([2, [2, 2]])
const answer3 = [1, [1, 1]].sameStructureAs([[2, 2], 2])
const answer4 = [1, [1, 1]].sameStructureAs([[2], 2])
const answer5 = [[[], []]].sameStructureAs([[[], []]])
const answer6 = [[[], []]].sameStructureAs([[1, 1]])
const answer7 = [1, '[', ']'].sameStructureAs(['[', ']', 1])

console.log(answer1, answer1 === true)
console.log(answer2, answer2 === true)
console.log(answer3, answer3 === false)
console.log(answer4, answer4 === false)
console.log(answer5, answer5 === true)
console.log(answer6, answer6 === false)
console.log(answer7, answer7 === true)


// other solutions

// Array.prototype.sameStructureAs = function (other) {
//     return (this.length === other.length) ? this.every(function (el, i) {
//         return Array.isArray(el) ? el.sameStructureAs(other[i]) : true;
//     }) : false;
// };


// Array.prototype.sameStructureAs = function (other) {
//     if (!Array.isArray(other) || this.length != other.length)
//         return false;

//     for (var i = 0; i < this.length; ++i) {
//         if (Array.isArray(this[i])) {
//             if (!this[i].sameStructureAs(other[i])) {
//                 return false;
//             }
//         } else if (Array.isArray(other[i])) {
//             return false;
//         }
//     }

//     return true;
// };


// Array.prototype.sameStructureAs = function (other) {
//     return isArray(other) && this.length == other.length && this.every(function (a, i) {
//         var b = other[i];
//         return isArray(a) ? a.sameStructureAs(b) : isArray(a) == isArray(b);
//     });
// };


// Array.prototype.sameStructureAs = function (other) {
//     return this.length == other.length && this.every((x, i) => isArray(x) == isArray(other[i]) && (!isArray(x) || x.sameStructureAs(other[i])));
// };