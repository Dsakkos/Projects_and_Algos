// ADD FRONT
Examples:
// SLL1 = new SLL()
// SLL1.addFront(18) => Node { data: 18, next: null }
// SLL1.addFront(5) => Node { data: 5, next: Node { data: 18, next: null } }
// SLL1.addFront(73) => Node { data: 73, next: Node { data: 5, next: Node { data: 18, next: null } } }

class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

class newSLI1 {
constructor() {
        this.head = null;
    }
    newFront(data) {
        var newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }
}

var SLI1Data = new newSLI1();
SLI1Data.newFront(73);
SLI1Data.newFront(5);
SLI1Data.newFront(18);
console.log(SLI1Data);

console.log(SLI1Data.head.next);


// RemoveFront
// Examples:
// SLL1.removeFront() => Node { data: 5, next: Node { data: 18, next: null } }
// SLL1.removeFront() => Node { data: 18, next: null }
class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

class newSLI1 {
    constructor() {
        this.head = null;
    }
    newFront(data) {
        var newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }

    removeFront(){
        if(this.head == null){
            return this.head;
        }
        var removedNode = this.head;
        this.head = removedNode.next;
        removedNode.next = null;
        return this.head;
    }
}

var SLI1Data = new newSLI1();
SLI1Data.newFront(73);
SLI1Data.newFront(18);
SLI1Data.newFront(5);
console.log(SLI1Data);
SLI1Data.removeFront();
console.log(SLI1Data);

// Front
// Examples:
// SLL1.front() => 18
// SLL1.removeFront() => null
// SLL1.front() => null

class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

class newSLI1 {
    constructor() {
        this.head = null;
    }
    newFront(data) {
        var newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }

    removeFront(){
        if(this.head == null){
            return this.head;
        }
        var removedNode = this.head;
        this.head = removedNode.next;
        removedNode.next = null;
        return this.head;
    }

    front(){
        if (this.head == null){
            return null;
        }else{
            return this.head.data;
        }
    }
}

var SLI1Data = new newSLI1();
SLI1Data.newFront(18);
console.log(SLI1Data.front());
SLI1Data.removeFront();
console.log(SLI1Data.front());
console.log(SLI1Data.front());

