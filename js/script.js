// Add custom JavaScript here
function typingEffect() {
	const typingElement = document.getElementById("typingText");
	const typingDelay = 100;
	const text = "I am Brad Traversy.";
	const textArray = text.split("");
	console.log(textArray);
	// typeText(text, typingElement, typingDelay);
	typeText(textArray, typingElement, typingDelay);
}

// function typeText(text, element, delay) {
// 	for (let i = 0; i < text.length; i++) {
// 		setTimeout(() => {
// 			element.textContent += text.charAt(i);
// 		}, delay * i);
// 	}
// }

function typeText(textArray, element, delay) {
	textArray.forEach((text, i) => {
		// console.log(text, i);
		setTimeout(() => {
			element.textContent += text;
		}, delay * i);
	});
}
document.addEventListener("DOMContentLoaded", typingEffect);

//footer date
const currentDate = document.getElementById("date");
const currentYear = new Date().getFullYear();

currentDate.textContent = currentYear;
