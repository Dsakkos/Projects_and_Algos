// pushFront([5,7,2,3], 8) => [8,5,7,2,3]
// pushFront([99], 7) => [7,99]
// PUSH FRONT
function pushFront(arr, value) {
	for (let i = arr.length; i >= 0; i--) {
		arr[i] = arr[i - 1];
	}
	arr[0] = value;
	return arr;
}

console.log(pushFront([5, 7, 2, 3], 8));

// POP FRONT
// popFront([0,5,10,15]) => 0 returned, with [5,10,15] printed in the function
// popFront([4,5,7,9]) => 4 returned, with [5,7,9] printed in the function

function popFront(arr) {
	let Value = arr[0];
	for (let i = 0; i < arr.length; i++) {
		arr[i] = arr[i + 1];
	}
	arr.length = arr.length - 1;
	console.log(arr);
	return Value;
}

console.log(popFront([0, 5, 10, 15]));

// Insert At
// insertAt([100,200,5], 2, 311) => [100,200,311,5]
// insertAt([9,33,7], 1, 42) => [9,42,33,7]

const value = [100, 200, 5];
const deletedArray = value.splice(2, 0, 311);
console.log(value);
