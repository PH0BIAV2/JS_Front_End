function solve(size, input) {
    let newArray = input.slice(0, size)
    console.log(newArray.reverse().join(' '));
}

solve(3, [10, 20, 30, 40, 50])