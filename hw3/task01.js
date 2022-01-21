function f(x) {
    if (typeof x == "number") {
        return Math.pow(x, 3);
    } else {
        return 'Error: parameter type is not a Number';
    }
}

console.log(f(2)); //8
console.log(f('Content'));