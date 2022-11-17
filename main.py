y = 0
x = 0
dx = 1

def on_forever():
    global y, dx, x
    basic.clear_screen()
    y = 0
    if x == 4:
        dx = -1
    elif x == 0:
        dx = 1
    x += dx
    for index in range(5):
        # 計次一個變數重複四次，所以要點亮的燈乘上此變數
        # 
        # 原始亮度為255減掉你要減少的亮度，再除以自己想要的間距，因為是此迴旋，所以index是會持續增加或減少的
        for index2 in range(5):
            led.plot_brightness(x - dx * index2, y, 255 - index2 * 45 + 30)
        y += 1
    basic.pause(150)
basic.forever(on_forever)
