let _2x = 0
let _1x = 0
let y = 0
let x = 0
let dx = 1
basic.forever(function () {
    basic.clearScreen()
    y = 0
    if (x == 4 && (_1x == 4 && _2x == 4)) {
        dx = -1
    } else if (x == 0 && (_1x == 0 && _2x == 0)) {
        dx = 1
    }
    x += dx
    _1x = dx
    _2x = dx
    for (let index = 0; index < 5; index++) {
        led.plotBrightness(_1x, y, 206)
        led.plotBrightness(_2x, y, 140)
        led.plot(x, y)
        y += 1
    }
    basic.pause(100)
})
