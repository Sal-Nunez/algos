// solution 1
function solution(list) {
    let str = ""
    let temp = ""
    let num1 = [];
    let num2 = [];
    for (let i = 0; i < list.length; i++) {
        if (list[i + 1] - list[i] == 1) {
            if (temp == "") {
                num1 = checkNum(list[i])
                temp += list[i]
            }
        } else {
            str += temp
            if (i == 0) {
                str += `${list[i]},`
                num2 = checkNum(list[i])
            }
            else {
                if (list[i] - num1[1] == 1) {
                    if (i == list.length - 1) {
                        str += `,${list[i]}`
                    } else {
                        str += `,${list[i]},`
                    }
                } else {
                    if (list[i + 1] - list[i] != 1) {
                        if (i == list.length - 1) {
                            if (temp == "") {
                                str += `${list[i]}`
                            } else {
                                str += `-${list[i]}`
                            }
                        } else {
                            if (temp == "") {
                                str += `${list[i]},`
                            } else {
                                str += `-${list[i]},`
                            }
                        }
                    } else {
                        str += `-${list[i]},`
                    }
                    num2 = checkNum(list[i])
                }
            }
            temp = ""
        }
    }
    return str
}

function checkNum(num) {
    if (-10 < num && num < 0 || 9 < num && num < 100) {
        return [2, num]
    } else if (10 > num && num >= 0) {
        return [1, num]
    } else if (-100 < num && num < -9 || 99 < num & num < 1000) {
        return [3, num]
    }
}


// // solution 2
// function solution(individualIntegers) {
//     return individualIntegers
//         .reduce(splitIntoRanges, [])
//         .map(convertToRange)
//         .join(",");
// }

// function splitIntoRanges(ranges, number) {
//     if (!ranges.length) {
//         ranges.push([number]);
//         return ranges;
//     }

//     var lastRange = ranges[ranges.length - 1];
//     var lastNumber = lastRange[lastRange.length - 1];

//     number === lastNumber + 1 ? lastRange.push(number) : ranges.push([number]);
//     return ranges;
// }

// function convertToRange(range) {
//     return range.length < 3 ? range.join(",") : range[0] + "-" + range[range.length - 1];
// }


// // solution 3
// function solution(list) {
//     for (var i = 0; i < list.length; i++) {
//         var j = i;
//         while (list[j] - list[j + 1] == -1) j++;
//         if (j != i && j - i > 1) list.splice(i, j - i + 1, list[i] + '-' + list[j]);
//     }
//     return list.join();
// }


// // solution 4
// solution = (list) => list.reduce((acc, curr, i) => {
//     if (i == 0) return curr.toString();
//     if (list[i - 1] == curr - 1 && list[i + 1] == curr + 1) return acc;
//     if (list[i - 2] == curr - 2 && list[i - 1] == curr - 1) return acc + "-" + curr;
//     return acc + "," + curr;
// });




// console.log(solution([-69,-66,-64,-63,-61, -60, -59,-57,-54,-51,-50,-47,-46,-43,-42,-39,-36,-33,-32,-29,-28]))
// console.log(solution([-24, -22, -20, -19, -18, -8, -6, -5, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]))
console.log(solution([-88, -86, -84, -83, -81, -79, -76, -73, -70, -67, -65, -64, -62, -61, -60, -58, -55, -52, -49, -48, -46, -44, -41, -38, -37, -34, -31, -30, -28, -25]))