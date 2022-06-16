/**
 * @param {number[]} nums
 * @return {boolean}
 */

const canBeIncreasing = nums => {
    let count = 0;
    for (let i = 0; i < nums.length; i++){
        if (nums[i] >= nums[i+1]) {
            if (++count > 1) {
                return false;
            }
            if(nums[i] >= nums[i + 2]) {
                nums.splice(i, 1);
                i -= 2
            }
            else {
                nums.splice(i+1, 1);
                i--
            }
        }
    } 
    return true
};

// var canBeIncreasing = function(nums) {
//     let canMake = true;
//     let alreadyRemoved = false;
//     nums.reduce((acc, next, index, array) => {
//         if (!acc.length) {
//             acc.push(undefined);
//             acc.push(next);
//             return acc;
//         } else {
//             const prePrev = acc[acc.length-2];
//             const prev = acc[acc.length-1];
            
//             if (prev >= next && prePrev >= next) {
//                 if (alreadyRemoved) {
//                     canMake = false;
//                     array = array.slice(index, 1);
//                     return acc;   
//                 }
//                 alreadyRemoved = true;
//                 return acc;
//             }

//             if (prePrev && prePrev >= next) {
//                 canMake = false;
//                 array = array.slice(index);
//                 return acc;
//             }
            
//             if (prev >= next) {
//                 if (alreadyRemoved) {
//                     canMake = false;
//                     array = array.slice(index);
//                     return acc;   
//                 }
//                 alreadyRemoved = true;
//                 acc[1] = next;
//                 return acc;
//             }
            
//             return [acc[1], next];
//         }
//     }, []);

//     return canMake;
// };

console.log(canBeIncreasing([1,2,10,5,7]))
console.log(canBeIncreasing([105,924,32,968]))
console.log(canBeIncreasing([2,3,1,2]))
console.log(canBeIncreasing([1, 1, 1]))