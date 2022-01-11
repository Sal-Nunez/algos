String.prototype.camelCase = function () {
    let cCase = "";
    let pattern = /^[a-zA-Z]+$/
    for (let i = 0; i < this.length; i++) {
        if (this[i].match(pattern) && this[i - 1] == " " || this[i].match(pattern) && i == 0) {
            cCase += this[i].toUpperCase()
        } else if (this[i].match(pattern)) {
            cCase += this[i].toLowerCase()
        }
    }
    return cCase
}

String.prototype.camelCase = function () {
    return this.split(' ').map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join('');
}

String.prototype.camelCase = function () {
    return this.trim().replace(/(?:^|\s+)(\w)/g, (_, c) => c.toUpperCase())
}

String.prototype.camelCase = function () {
    return this.split(' ').map(w => w.slice(0, 1).toUpperCase() + w.slice(1)).join('');
}

String.prototype.camelCase = function () {
    const capitalize = (word) => {
        return word.slice(0, 1).toUpperCase() + word.slice(1)
    }

    return this
        .split(' ')
        .map(capitalize)
        .join('')
}