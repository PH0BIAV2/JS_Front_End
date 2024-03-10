function solve(speed, zone) {
    function type_of_speeding(speed, limit) {
        if (Math.abs(limit - speed) <= 20) {
            return 'speeding'
        } else if (Math.abs(limit - speed) > 20 && Math.abs(limit - speed) <= 40) {
            return 'excessive speeding'
        } else {
            return 'reckless driving'
        }
    
    }
    
    if (zone == 'motorway') {
        if (speed <= 130) {
            console.log(`Driving ${speed} km/h in a 130 zone`)
        } else {
            let difference = Math.abs(130 - speed)
            console.log(`The speed is ${difference} km/h faster than the allowed speed of 130 - ${type_of_speeding(speed, 130)}`)
        }
    } else if (zone == 'interstate') {
        if (speed <= 90) {
            console.log(`Driving ${speed} km/h in a 90 zone`)
        } else {
            let difference = Math.abs(90 - speed)
            console.log(`The speed is ${difference} km/h faster than the allowed speed of 90 - ${type_of_speeding(speed, 90)}`)
        }
    } else if (zone == 'city') {
        if (speed <= 50) {
            console.log(`Driving ${speed} km/h in a 50 zone`)
        } else {
            let difference = Math.abs(50 - speed)
            console.log(`The speed is ${difference} km/h faster than the allowed speed of 50 - ${type_of_speeding(speed, 50)}`)
        }
    } else if (zone == 'residential') {
        if (speed <= 20) {
            console.log(`Driving ${speed} km/h in a 20 zone`)
        } else {
            let difference = Math.abs(20 - speed)
            console.log(`The speed is ${difference} km/h faster than the allowed speed of 20 - ${type_of_speeding(speed, 20)}`)
        }
    }
}

solve(120, 'interstate')