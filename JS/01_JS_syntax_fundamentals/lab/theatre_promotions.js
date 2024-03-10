function solve(day, age) {
    if (day=="Weekday") {
        if (age<=18 && age>=0) {
            console.log("12$")
        } else if (age>18 && age<=64) {
            console.log("18$")
        } else if (age>64 && age<=122) {
            console.log("12$")
        }else {
            console.log("Error!")
        }
    } else if (day=="Weekend") {
        if (age<=18 && age>=0) {
            console.log("15$")
        } else if (age>18 && age<=64) {
            console.log("20$")
        } else if (age>64 && age<=122) {
            console.log("15$")
        }else {
            console.log("Error!")
        }
    } else if (day=="Holiday") {
        if (age<=18 && age>=0) {
            console.log("5$")
        } else if (age>18 && age<=64) {
            console.log("12$")
        } else if (age>64 && age<=122) {
            console.log("10$")
        }else {
            console.log("Error!")
        }
    } else {
        console.log("Error!")
    }
}

solve('Holiday', 1)