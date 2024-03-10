function solve(input) {
    let total_sum = 0
    let input_as_str = String(input)
    for (i = 0; i < input_as_str.length; i++) {
        total_sum += Number(input_as_str[i]);
    }

    console.log(total_sum)
}

solve(245678)