let y = 0
let x = 2
let dx = 1
basic.forever(function () {
    basic.clearScreen()
    y = 0
    if (x == 4) {
        dx = -1
    } else if (x == 0) {
        dx = 1
    }
    x += dx
    for (let index = 0; index < 5; index++) {
        // 計次一個變數重複四次（決定你要有幾行尾巴），所以要點亮的燈乘上此變數
        // 
        // 因為是迴旋，所以index是會持續增加或減少的
        for (let index = 0; index <= 4; index++) {
            led.plotBrightness(x - dx * index, y, 255 - index * 60)
        }
        y += 1
    }
    basic.pause(100)
})
