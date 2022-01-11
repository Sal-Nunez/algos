class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLStack {
    constructor() {
        this.head = null;
    }

    isEmpty() {
        // return true if SLStack is empty
        // return false if SLStack is not empty
        return this.head === null;
    }

    size() {
        // return length of SLStack
        if (this.isEmpty()) {
            return 0;
        }
    }

    push(data) {
        // push newVal to top of stack
        let newNode = new Node(data);
        if (this.isEmpty()) {
            this.head = newNode;
        } else {
            let runner = this.head;
            while (runner.next != null) {
                runner = runner.next;
            }
            runner.next = newNode;
        }
        return this;
    }

    pop() {
        // remove and return data at top of stack
        if (this.isEmpty()) return null;
        let runner = this.head;
        while (runner.next != null) {
            runner = runner.next;
        }
        let removedNode = runner;
        runner.next = null;
        return removedNode.data;
    }

    peek() {
        // return data at top of stack without removing
        if (this.isEmpty()) {
            return null;
        }
        if (this.head.next == null) {
            return this.head.data;
        }
        let pointer = this.head;
        while (pointer.next != null) {
            pointer = pointer.next;
        }
        return pointer.data;
    }

    // EXTRA
    contains(value) {
        // return true if SLStack contains value
        // return false if SLStack does not contain value
    }

    // EXTRA
    print() {
        // print out the values of the SLStack
    }
}

const list = new SLStack()
    .push(10);

console.log(list);