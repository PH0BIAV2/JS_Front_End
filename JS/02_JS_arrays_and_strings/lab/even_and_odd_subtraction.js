function solve(input) {
    let oddSum = 0;
    let evenSum = 0;
    for (let elem of input) {
        if (elem % 2 == 1) {
            oddSum += elem
        } else {
            evenSum += elem
        }
    }

    console.log(evenSum - oddSum);
}

solve([1,2,3,4,5,6])