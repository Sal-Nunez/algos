// foo bar: when a number is a multiple of three, print foo
// when a number is a multiple of 5 print bar
// when a number is a multiple of both, print foobar
var Jacob = {
    name: "Jacob",
    age: 26,
    personality: "bad"
};
var Sal = {
    name: "Sal",
    age: 30,
    personality: "bad"
};
var citizens = [Jacob, Sal];
console.log(citizens);
// const fooBar = (arr: number[]): void => {
//     arr.forEach((num) => {
//         if (num % 5 === 0 && num % 3 === 0) console.log("foobar")
//         else if (num % 3 === 0) console.log("foo")
//         else if (num % 5 === 0) console.log("bar")
//     })
// }
var fooBar = function (arr) {
    arr.forEach(function (num) {
        num % 5 === 0 && num % 3 === 0 ? console.log("foobar") :
            num % 3 === 0 ? console.log("foo") :
                num % 5 === 0 ? console.log("bar") :
                    console.log("");
    });
};
fooBar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
