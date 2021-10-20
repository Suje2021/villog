basic.forever(function () {
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    basic.pause(200)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    basic.pause(200)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
})
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) <= 6) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 60)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 60)
        basic.pause(500)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 60)
    }
})
