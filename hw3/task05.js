arr = Array(1, 2, -4, 3, -9, -1, 7);

function isPositive(x) {
    if (typeof x != "number") {
        return 'Error: parameter type is not a Number';
    } else return x >= 0;
}

var newArr = Array();

function f(x) {
    for (var i = 0; i < x.length; i++) {
        if (isPositive(x[i])) newArr.push(x[i]);
    }
    return newArr;
}

console.log(f(arr));