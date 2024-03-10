function solve(input) {
    if (typeof input != 'number') {
        console.log(`We can not calculate the circle area, because we receive a ${typeof input}.`)
    } else {
        let circle_area = Math.PI * (input**2)
        console.log(circle_area.toFixed(2))
    }
}

solve(5)