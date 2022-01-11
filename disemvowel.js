const str1 = "This website is for losers LOL!"
// function disemvowel(str) {
//     newStr = ""
//     for (let i = 0; i < str.length; i++)
//         if (str[i] == 'a') { }
//         else if (str[i] == 'e') { }
//         else if (str[i] == 'i') { }
//         else if (str[i] == 'o') { }
//         else if (str[i] == 'u') { }
//         else if (str[i] == 'A') { }
//         else if (str[i] == 'E') { }
//         else if (str[i] == 'I') { }
//         else if (str[i] == 'O') { }
//         else if (str[i] == 'U') { }
//         else {
//             newStr += str[i]
//         }
//     return newStr;
// }
console.log(disemvowel(str1));

// function disemvowel(str) {
//     let vowels=['a','e','i','o','u']
//     return [...str].reduce((sum,item)=> !vowels.includes(item.toLowerCase())?sum+=item:sum,'')
    // }

function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
}

// disemvowel = str => str.replace(/[aeiou]/gi,'');