let zahl = 0
function zeigeEins () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
}
function zeigeFünf () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        . . . . .
        `)
}
function zeigeDrei () {
    basic.showLeds(`
        . . . . .
        . . . # .
        . . # . .
        . # . . .
        . . . . .
        `)
}
function zeigeVier () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # . # .
        . . . . .
        `)
}
function zeigeSechs () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . # . # .
        . # . # .
        . . . . .
        `)
}
input.onGesture(Gesture.Shake, function () {
    zahl = randint(1, 6)
    if (zahl == 1) {
        zeigeEins()
    } else if (zahl == 2) {
        zeigeZwei()
    } else if (zahl == 3) {
        zeigeDrei()
    } else if (zahl == 4) {
        zeigeVier()
    } else if (zahl == 5) {
        zeigeFünf()
    } else if (zahl == 6) {
        zeigeSechs()
    } else {
        basic.showIcon(IconNames.No)
    }
})
function zeigeZwei () {
    basic.showLeds(`
        . . . . .
        . # . . .
        . . . . .
        . . . # .
        . . . . .
        `)
}
