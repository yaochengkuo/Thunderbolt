let y = 0
let x = 0
let dx = 1
basic.forever(function () {
    basic.clearScreen()
    y = 0
    if (x >= 4) {
        dx = -1
    } else if (x <= 0) {
        dx = 1
    }
    x += dx
    for (let index = 0; index < 5; index++) {
        led.plot(x, y)
        y += 1
    }
    basic.pause(100)
})
