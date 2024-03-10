function solve(group_size, group_type, day) {
    let total_price;
    if (group_type == "Students") {
        if (day == "Friday") {
            total_price = group_size * 8.45
        } else if (day == "Saturday") {
            total_price = group_size * 9.8
        } else if (day == "Sunday") {
            total_price = group_size * 10.46
        }

        if (group_size >= 30) {
            total_price *= 0.85
        }
    } else if (group_type == "Business") {
        let price_for_stay;
        if (day == "Friday") {
            price_for_stay = 10.9
        } else if (day == "Saturday") {
            price_for_stay = 15.6
        } else if (day == "Sunday") {
            price_for_stay = 16
        }

        if (group_size >= 100){
            total_price = (group_size - 10) * price_for_stay
        } else {
            total_price = group_size * price_for_stay
        }
    } else if (group_type == "Regular") {
        if (day == "Friday") {
            total_price = group_size * 15
        } else if (day == "Saturday") {
            total_price = group_size * 20
        } else if (day == "Sunday") {
            total_price = group_size * 22.5
        }

        if (group_size >= 10 && group_size <= 20) {
            total_price *= 0.95
        }
    }

    console.log(`Total price: ${total_price.toFixed(2)}`)
}

solve(30, "Business", "Sunday")