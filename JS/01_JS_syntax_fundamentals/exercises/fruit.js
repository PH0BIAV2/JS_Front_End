function solve(fruit_type, weigh, price_per_kilo) {
    let weigh_in_kg = weigh / 1000

    console.log(`I need $${(weigh_in_kg * price_per_kilo).toFixed(2)} to buy ${weigh_in_kg.toFixed(2)} kilograms ${fruit_type}.`)
}

solve('apple', 1563, 2.35)