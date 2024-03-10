function solve(num1, num2, num3) {
    let largest_num = Number.MIN_SAFE_INTEGER

    if (num1>largest_num) {
        largest_num = num1
    }
    if (num2>largest_num) {
        largest_num = num2
    }
    if (num3>largest_num) {
        largest_num = num3
    }

    console.log(`The largest number is ${largest_num}.`);
}

solve(5, -3, 16)