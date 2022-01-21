function f(...args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++)
        if (typeof args[i] === "number") {
            sum += args[i];
        } else {
            return 'Error: all parameters type should be a Number';
        }
    return sum;
}

console.log(f(1, 2, 3));//6
console.log(f(1, 1, 1, 1, 1, 1, 1, 1));//8
console.log(f(1, 2, 's', 4)); //Error: all parameters type should be a Number