basic.forever(function () {
    pins.servoWritePin(AnalogPin.P13, 0)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P13, 90)
    basic.pause(1000)
})
