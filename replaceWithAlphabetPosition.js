function alphabetPosition(text) {
    let newText = ""
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    for (let letter = 0; letter < text.length; letter++) {
        for (let i in alphabet) {
            if (text[letter].toLowerCase() == alphabet[i]) {
                console.log(letter, text[letter], text.length)
                newText += (parseInt(i) + 1)
                newText += " "
                break
            }
        }
    }
    return newText.substring(0, newText.length - 1);
}

function alphabetPosition(text) {
    return text
        .toUpperCase()
        .match(/[a-z]/gi)
        .map((c) => c.charCodeAt() - 64)
        .join(' ');
}

function alphabetPosition(text) {
    var result = "";
    for (var i = 0; i < text.length; i++) {
        var code = text.toUpperCase().charCodeAt(i)
        if (code > 64 && code < 91) result += (code - 64) + " ";
    }
    return result.slice(0, result.length - 1);
}