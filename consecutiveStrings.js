function longestConsec(strarr, k) {
    let longestString = ""
    let str = ""
    for (let i = 0; i < strarr.length; i++) {
        str = ""
        for (let j = 0; j < k; j++) {
            str = str.concat(strarr[i + j])
            if (strarr[i + j] == undefined) {
                if (strarr.length < k) {
                    longestString = ""
                }
                break
            } else {
                if (str.length > longestString.length) {
                    longestString = str
                }
            }
        }
    }
    return longestString
}


function longestConsec(strarr, k) {
    var longest = "";
    for (var i = 0; k > 0 && i <= strarr.length - k; i++) {
        var tempArray = strarr.slice(i, i + k);
        var tempStr = tempArray.join("");
        if (tempStr.length > longest.length) {
            longest = tempStr;
        }
    }
    return longest;
}

function longestConsec(strarr, k) {
    if (k <= 0 || k > strarr.length) {
        return '';
    }

    return strarr.reduce((long, item, i) => {
        const currString = strarr.slice(i, i + k).join('');
        return (currString.length > long.length)
            ? currString
            : long;
    }, '');
}

function longestConsec(strarr, k) {
    if (k <= 0 || k > strarr.length) {
        return "";
    }

    return strarr
        .map((value, index) => (
            strarr.slice(index, index + k).join('')
        ))
        .reduce((longest, current) => current.length > longest.length ? current : longest)

}