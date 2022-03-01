class Stack {
    constructor() {
        this.arr = []
    }

    push(input) {
        this.arr[this.arr.length] = input;
    }

    pop() {
        let returnValue = this.arr[this.arr.length];
        let temp = [];

        for(let i = 0 ; i < this.arr.length - 1 ; i++) {
            temp[i] = this.arr[i];
        }

        this.arr = temp;
        return returnValue;
    }
}

const stack = new Stack();

stack.push(5);
stack.push(5);
stack.push(5);


console.log(stack.arr);

stack.pop();
stack.pop();

console.log(stack.arr);
