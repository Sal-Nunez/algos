/* 
Given in an alumni interview in 2021.
String Encode
You are given a string that may contain sequences of consecutive characters.
Create a function to shorten a string by including the character,
then the number of times it appears. 

If final result is not shorter (such as "bb" => "b2" ),
return the original string.
  */

// const str1 = "aaaabbcddd";
// const expected1 = "a4b2c1d3";

// const str2 = "";
// const expected2 = "";

// const str3 = "a";
// const expected3 = "a";

// const str4 = "bbcc";
// const expected4 = "bbcc";

// const str5 = "aaaabbcdddaaa";
// const expected5 = "a4b2c1d3a3";

// /**
//  * Encodes the given string such that duplicate characters appear once followed
//  * by a number representing how many times the char occurs only if the
//  * character occurs more than two time.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {string} str The string to encode.
//  * @returns {string} The given string encoded.
//  */
// function encodeStr(str) {
//     newString = ""
//     tempString = 1
//     for (var i=0; i < str.length; i++) {
//         if (str[i] == str[i+1]){
//             tempString++
//         }
//         else {
//             newString += str[i] + tempString
//             tempString = 1
//         }
//     }
//     if (newString.length >= str.length){
//         return str
//     }
//     else{
//         return newString
//     }
// }
// console.log(encodeStr(str5));


/* 
String Decode  
*/

const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";

const str2 = "a3b2c12d10";
const expected2 = "aaabbccccccccccccdddddddddd";

/**
 * Decodes the given string by duplicating each character by the following int
 * amount if there is an int after the character.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str An encoded string with characters that may have an int
 *    after indicating how many times the character occurs.
 * @returns {string} The given str decoded / expanded.
 */

function decodeStr(str) {
    newString = ""
    stringNum = ""
    number = ""
    for (var i = 0; i < str.length; i++){
        if (isNumeric(str[i])){
            for( var j = 0; j < str[i]; j++){
                newString += stringNum;
            }
            if (isNumeric(str[i+1])){
                number = str[i] + str[i+1]
                for( var k = 0; k < number; k++){
                    newString += stringNum;
                }
            }
            else{
                stringNum = ""
            }
        }
        else{
            stringNum += str[i]
        }
    }
    return newString
}

console.log(decodeStr(str2));