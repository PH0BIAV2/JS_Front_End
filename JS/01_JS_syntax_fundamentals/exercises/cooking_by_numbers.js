function solve(num, ...args) {
    let num_as_int = Number(num)

    for (i = 0; i < args.length; i++) {
        let operation = args[i]

        if (operation == 'chop') {
            num_as_int /= 2
        } else if (operation == 'dice') {
            num_as_int = Math.sqrt(num_as_int)
        } else if (operation == 'spice') {
            num_as_int += 1
        } else if (operation == 'bake') {
            num_as_int *= 3
        } else if (operation == 'fillet') {
            num_as_int = (num_as_int *0.8).toFixed(1)
        }
        
        console.log(num_as_int)
    }
    
}

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')