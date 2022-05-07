// Creating a rectangle class

class Rectangle {
    private _width: number;
    private _height: number;
    constructor(width = 1, height = 2) {
        this._width = width;
        this._height = height;
    }

    // Get width 
    get width() {
        return this._width;
    }

    // Get height
    get height() {
        return this._height;
    }

    // Set width 
    set width(updateWidth) {
        this._width = updateWidth 
    }

    // Set height
    set height(updateHeight:number) {
        this._height = updateHeight
    }

    // Get area
    get area() {
        return this._width * this._height
    }

    // Get Perimeter
    get perimeter() {
        return 2 * (this._width + this._height)
    }
}


const a = new Rectangle(4, 40);
const b = new Rectangle(3.5, 35.7);
console.log(a.area, a.perimeter);
console.log(b.area, b.perimeter);