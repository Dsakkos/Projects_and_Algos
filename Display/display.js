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

	removeFront() {
		if (this.head == null) {
			return this.head;
		}
		var removedNode = this.head;
		this.head = removedNode.next;
		removedNode.next = null;
		return this.head;
	}

	front() {
		if (this.head == null) {
			return null;
		} else {
			return this.head.data;
		}
	}

	display() {
		var newStr = "";
		if (this.head == null) {
			return "Empty";
		}
		newStr += this.head.data;
		var runner = this.head.next;
		while (runner != null) {
			newStr += "," + runner.data;
			runner = runner.next;
		}
		return newStr;
	}
}

var SLI1Data = new newSLI1();
SLI1Data.newFront(18);
SLI1Data.newFront(73);
SLI1Data.newFront(5);
console.log(SLI1Data.display());
