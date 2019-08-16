let display = document.querySelector("#text");
const numbers = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");
const equal = document.querySelector("#equal");

let numCheck = /^\d*\.?\d*$/;

let num1 = 0;
let num2 = 0;
let op = "";

operator.forEach(button => {
	button.addEventListener("click", e => {
		num1 = parseFloat(display.textContent);
		op = button.id;
		display.textContent = button.textContent;
	});
});

op;

numbers.forEach(button => {
	button.addEventListener("click", e => {
		if (display.textContent == "0") {
			display.textContent = button.textContent;
		} else if (
			numCheck.test(display.textContent) &&
			display.textContent.length < 9
		) {
			display.textContent += button.textContent;
		} else {
			display.textContent = button.textContent;
		}
	});
});

let clearContent = () => {
	display.textContent = "";
	num1 = 0;
	num2 = 0;
	op = null;
};

function eval(op1, a, b) {
	switch (op1) {
		case "add":
			return a + b;
			break;
		case "subtract":
			return a - b;
			break;
		case "multiply":
			return a * b;
			break;
		case "divide":
			return a / b;
			break;
	}
}

equal.addEventListener("click", e => {
	num2 = parseFloat(display.textContent);

	if (op == "divide" && num2 == 0) {
		alert("You cannot divide by zero!!!");
	} else {
		let result = eval(op, num1, num2);
		display.textContent = result;
	}
});
