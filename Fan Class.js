class Fan {
    #speed = 'SLOW';
    #radius = 5;
    #color = 'blue';
    #on = false; 

    constructor (speed, radius, color, on) {
        this.#speed = speed;
        this.#radius = radius;
        this.#color = color;
        this.#on = on;
    }

    get speed () {
        if (this.#speed == 1) {
            return "SLOW";
        }
        else if (this.#speed == 2) {
            return "MEDIUM";
        }
        else {
            return "FAST";
        }
    }

    get radius () {
        return this.#radius;
    }

    get color () {
        return this.#color;
    }

    get isOn () {
        if (this.#on == true) {
            return "On"
        }
        else {
            return "Off"
        }
    }

    set speed (speed) {
        this.#speed = speed;
    }

    set radius (radius) {
        this.#radius = radius
    }

    set color (color) {
        this.#color = color
    }

    set isOn (on) {
        this.#on = on
    }
}


const fan1 = new Fan(3, 10, 'yellow', true)
const fan2 = new Fan(2, 5, 'blue', false)

console.log("Fan1 \nspeed\t", fan1.speed, "\nradius\t", fan1.radius, "\ncolor\t", fan1.color, "\nOn/Off\t", fan1.isOn)
console.log("\n\nFan2 \nspeed\t", fan2.speed, "\nradius\t", fan2.radius, "\ncolor\t", fan2.color, "\nOn/Off\t", fan2.isOn)