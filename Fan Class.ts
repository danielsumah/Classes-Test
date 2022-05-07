class Fan {
    #speed:number;
    #radius:number;
    #color:string;
    #on: boolean ; 

    constructor (speed = 1, radius = 5, color = 'blue', on= false) {
        this.#speed = speed;
        this.#radius = radius;
        this.#color = color;
        this.#on = on;
    }

    getSpeed ():string {
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

    getStatus ():string {
        if (this.#on == true) {
            return "On"
        }
        else {
            return "Off"
        }
    }

    set speed (speed:number) {
        this.#speed = speed;
    }

    set radius (radius) {
        this.#radius = radius
    }

    set color (color) {
        this.#color = color
    }

    set isOn (on:boolean) {
        this.#on = on
    }
}


const fan1 = new Fan(3, 10, 'yellow', true)
const fan2 = new Fan(2, 5, 'blue', false)

console.log("Fan1 \nspeed\t", fan1.getSpeed(), "\nradius\t", fan1.radius, "\ncolor\t", fan1.color, "\nOn/Off\t", fan1.getStatus())
console.log("\n\nFan2 \nspeed\t", fan2.getSpeed(), "\nradius\t", fan2.radius, "\ncolor\t", fan2.color, "\nOn/Off\t", fan2.getStatus())