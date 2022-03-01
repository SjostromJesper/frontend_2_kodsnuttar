class Stack {
    constructor(arr = []) {
        this.arr = arr;
    }

    push(push) {
        this.arr = [...this.arr, push];
        return console.log(this.arr);
    }

    pop() {
        let newArr = [];
        for(let i = 0 ; i < this.arr.length - 1 ; i++) {
            newArr = [...newArr, this.arr[i]]
        }
        this.arr = [...newArr];

        return console.log(this.arr)
    }
}

const stack = new Stack();

stack.push(5);
stack.push(5);
stack.push(5);

stack.pop();
stack.pop();
stack.pop();
