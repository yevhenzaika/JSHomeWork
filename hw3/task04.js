function f(x) {
    if (typeof x != "number") {
        return 'Error: parameter type is not a Number';
    } else if (x < 1 || x > 7) {
        return 'Error: parameter should be in the range of 1 to 7 ';
    } else
        days = Array('Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг',
            'Пятница', 'Суббота')
    return days[x - 1];
}

console.log(f(1)) // Воскресенье
console.log(f(2)) // Понедельник
console.log(f(8)) // Error: parameter should be in the range of 1 to 7
console.log(f('1')) // Error: parameter type is not a Number