const ball = document.querySelector("img");
const input = document.querySelector("input");
const answer = document.querySelector(".answer");
const error = document.querySelector(".error");

const randoms = [
	"Yes!",
	"No!",
	"Maybe",
	"Maybe not",
	"Probably!",
	"Do I look like I care?",
	"Dude, get yourself together",
	"Are you bored already?",
];

const shake = () => {
	ball.classList.add("shake-animation");
	setTimeout(checkInput, 300);
};

const checkInput = () => {
	if (input.value !== "" && input.value.slice(-1) === "?") {
		answerGenerator();
		error.textContent = "";
		input.textContent = "";
	} else if (input.value !== "" && input.value.slice(-1) !== "?") {
		error.textContent = "Question mark has to be added";
		answer.textContent = "";
	} else {
		error.textContent = "You have to ask a question first";
		answer.textContent = "";
	}

	ball.classList.remove("shake-animation");
};

const answerGenerator = () => {
	const number = Math.floor(Math.random() * 9);
	answer.innerHTML = `<span>Answer:</span> ${randoms[number]}`;
};

ball.addEventListener("click", shake);
