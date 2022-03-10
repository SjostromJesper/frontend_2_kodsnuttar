class Vec{
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(vector) {
        return new Vec(this.x + vector.x, this.y + vector.y);
    }

    minus(vector) {
        return new Vec(this.x - vector.x, this.y - vector.y);
    }

    length() {
        return {x: this.x, y: this.y}
    }

}

const vector1 = new Vec(5, 5);
const vector2 = new Vec(2, 2);

console.log(vector1.plus(vector2));
console.log(vector1.minus(vector2));
console.log(vector1.length);
