//% weight=100 color=#0fbc11 icon=""
namespace custom {
    //% block="plot %n from %inMin to %inMax"
    export function mapFillScreen (n: number, inMin: number, inMax: number) {
        let index = 0
        let lights = Math.map(n, inMin, inMax, 0, 25)
        let dim = lights - Math.floor(lights)
        
        for (let y = 4; y >= 0; y--) {
            for (let x = 0; x < 5; x++) {
                if (index < lights - 1) {
                    led.plot(x, y)
                } else if (index == Math.floor(lights)) {
                    led.plotBrightness(x, y, dim * 255)
                } else {
                    led.unplot(x, y)
                }
                index++
            }
        }
    }
}
