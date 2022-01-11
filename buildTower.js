function towerBuilder(nFloors) {
    let tower = []
    for (let i = 0; i < nFloors; i++) {
        let str = ""
        if (i == 0) {
            str += " ".repeat(nFloors - 1)
            str += "*"
            str += " ".repeat(nFloors - 1)
        } else if (i == nFloors - 1) {
            str += "*".repeat(i * 2 + 1)
        } else {
            str += " ".repeat(nFloors - i - 1)
            str += "*".repeat(i * 2 + 1)
            str += " ".repeat(nFloors - i - 1)
        }
        tower.push(str)
    }
    return tower
}

function towerBuilder(n) {
    return Array.from({ length: n }, function (v, k) {
        const spaces = ' '.repeat(n - k - 1);
        return spaces + '*'.repeat(k + k + 1) + spaces;
    });
}

function towerBuilder(nFloors) {
    var tower = [];
    for (var i = 0; i < nFloors; i++) {
        tower.push(" ".repeat(nFloors - i - 1)
            + "*".repeat((i * 2) + 1)
            + " ".repeat(nFloors - i - 1));
    }
    return tower;
}

function towerBuilder(n) {
    return [...Array(n)].map((_, i) => " ".repeat(n - 1 - i) + "*".repeat(i * 2 + 1) + " ".repeat(n - 1 - i))
}

function towerBuilder(nFloors) {
    var tower = [];

    for (var i = 1; i <= nFloors; i++) {
        tower.push(makeFloor((nFloors * 2), (i * 2)));
    }

    return tower;
}

function makeFloor(width, stars) {
    var padding = Math.floor((width - stars) / 2) + 1;
    return Array(padding).join(' ') + Array(stars).join('*') + Array(padding).join(' ');
}