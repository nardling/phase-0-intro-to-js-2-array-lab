// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    return cats.splice(cats.length - 1, 1);
}

function destructivelyRemoveFirstCat() {
    return cats.splice(0, 1);
}

function appendCat(name) {
    return [...cats, name]
}

function prependCat(name) {
    return [name, ...cats]
}

function removeLastCat() {
    return cats.slice(0, cats.length - 1)
}

function removeFirstCat() {
    return cats.slice(1);
}