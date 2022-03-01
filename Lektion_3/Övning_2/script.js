function Punkt(x, y) {
    this.y = y;
    this.x = x;
}

const getDistance = function(punkt1, punkt2) {
    const x = punkt1.x - punkt2.x;
    const y = punkt1.y - punkt2.y;

    return Math.sqrt(x * x + y * y);
};

const punkt1 = new Punkt(1, 1);
const punkt2 = new Punkt(2, 2);

console.log(getDistance(punkt1, punkt2));

class Position {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    destination(x, y) {
        let a = this.x - x;
        let b = this.y - y;
        return Math.sqrt(a*a + b*b)
    }
}

const pos = new Position(1, 1);
console.log(pos.destination(2, 2));

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    calculate(pointOne, pointTwo) {
        let number = (pointOne.x - pointTwo.x) * (pointOne.x - pointTwo.x) + (pointTwo.y - pointOne.y) * (pointTwo.y - pointOne.y)
        number = Math.sqrt(number);
        return number;
    }
}

const pointOne = new Point(1, 1);
const pointTwo = new Point(2, 2);

console.log(pointOne.calculate(pointOne, pointTwo));
