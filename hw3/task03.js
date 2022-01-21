function f(a, b, c) {
    if (typeof a != "number" || typeof b != "number" || typeof c != "number") {
        return 'Error: all parameters type should be a Number';
    } else
        return (a - b) / c;
}

console.log(f(9, 3, 2)); // 3
console.log(f('s', 9, 3)); // Error: all parameters type should be a Number