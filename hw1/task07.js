var arr = [1, 2, 3, 4];
var sum = 0;
for (var i = 0; i < 4; i++) {
    if (arr[i] % 2 == 0) {
        sum += arr[i];
    }
}
console.log(sum);