function cakes(recipe, available) {
    let amount = -1;
    for (let key in recipe) {
        let current = Math.floor(available[key] / recipe[key])
        if (Number.isNaN(current)) return 0
        if (amount == -1) amount = current
        if (current < amount) amount = current
    }
    return amount
}

function cakes(recipe, available) {
    return Object.keys(recipe).reduce(function (val, ingredient) {
        return Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val)
    }, Infinity)
}

const cakes = (needs, has) => Math.min(
    ...Object.keys(needs).map(key => Math.floor(has[key] / needs[key] || 0))
)

function cakes(recipe, available) {
    var numCakes = [];

    for (var key in recipe) {
        if (recipe.hasOwnProperty(key)) {
            if (key in available) {
                numCakes.push(Math.floor(available[key] / recipe[key]));
            } else {
                return 0;
            }
        }
    }

    return Math.min.apply(null, numCakes);

}

function cakes(recipe, initial) {
    return Math.floor(Object.keys(recipe).reduce(function (min, key) {
        return Math.min(initial[key] / recipe[key] || 0, min);
    }, Infinity));
}

function cakes(recipe, available) {
    return Math.min(...Object.keys(recipe).map(e => available[e] / recipe[e] >> 0));
}