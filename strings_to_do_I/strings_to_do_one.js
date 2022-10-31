// Examples:
// Remove Blanks
// removeBlanks(" Pl ayTha tF u nkyM usi c ") => "PlayThatFunkyMusic"
// removeBlanks("I can not BELIEVE it's not BUTTER") => "IcannotBELIEVEit'snotBUTTER"
function removeBlanks(string) {
	let newString = "";
	for (let i = 0; i < string.length; i++) {
		if (string[i] != " ") {
			newString += string[i];
		}
	}
	return newString;
}
console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "));

// Get Digits
// Examples:
// getDigits("abc8c0d1ngd0j0!8") => 801008
// getDigits("0s1a3y5w7h9a2t4?6!8?0") => 1357924680
function getDigits(string) {
	let newString = "";
	for (let character in string) {
		if (!isNaN(string[character])) {
			newString += string[character];
		}
	}
	console.log(Number(newString));
}
getDigits("0s1a3y5w7h9a2t4?6!8?0");

// Examples:
// Acronyms
// acronym(" there's no free lunch - gotta pay yer way. ") => "TNFL-GPYW".
// acronym("Live from New York, it's Saturday Night!") => "LFNYISN".
function acronym(string) {
	let sentenceArr = string.split(" ");
	let acronymStr = "";
	for (let sentence in sentenceArr) {
		if (sentenceArr[sentence].length > 0) {
			acronymStr += sentenceArr[sentence][0].toUpperCase();
		}
	}
	return acronymStr;
}
console.log(acronym(" there's no free lunch - gotta pay yer way. "));

// Examples:
// Count Non-Spaces
// countNonSpaces("Honey pie, you are driving me crazy") => 29
// countNonSpaces("Hello world !") => 11
function countNonSpaces(string) {
	let count = 0;
	for (let character in string) {
		if (string[character] != " ") {
			count++;
		}
	}
	return count;
}
console.log(countNonSpaces("Honey pie, you are driving me crazy"));

// Examples:
// Remove Shorter Strings
// removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4) => ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
// removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3) => ['There', 'bug', 'the', 'system']
function removeShorterStrings(arr, len) {
	let newString = [];
	let Index = 0;
	for (let value in arr) {
		if (arr[value].length >= len) {
			newString[Index++] = arr[value];
		}
	}
	return newString;
}
console.log(removeShorterStrings(["Good morning", "sunshine", "the", "Earth", "says", "hello"], 4));
