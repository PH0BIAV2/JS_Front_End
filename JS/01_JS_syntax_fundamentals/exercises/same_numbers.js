function solve(num) {
    let numbers_as_str = String(num)
    let last_num = numbers_as_str[0]
    let total_sum = Number(numbers_as_str[0])
    let all_the_same = true

    for (i = 1; i < numbers_as_str.length; i++) {
        if (numbers_as_str[i] != last_num) {
            all_the_same = false
        }

        total_sum += Number(numbers_as_str[i])
    }

    console.log(all_the_same)
    console.log(total_sum)
}

solve(1234)