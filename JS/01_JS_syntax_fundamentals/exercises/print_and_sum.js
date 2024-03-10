function solve(start, end) {
    let total_sum = 0;
    let numbers= "";
    for (i = start; i <= end; i++) {
        total_sum += i;
        numbers += i + " ";
    }
    console.log(numbers)
    console.log(`Sum: ${total_sum}`)
}

solve(5, 10)