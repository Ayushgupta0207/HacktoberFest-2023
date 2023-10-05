
// @ts-nocheck
/* eslint-disable no-use-before-define */
/* eslint-disable func-style */
// ! Note: Logical operators have a lower priority than comparison operators and math operators.

let score = JSON.parse(localStorage.getItem("score")) ?? {
	wins: 0,
	losses: 0,
	ties: 0,
};

const updateScoreElement = () => {
	document.querySelector(
		"p.js-score",
	).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
};

updateScoreElement();

/**
 * @returns {"rock" | "paper" | "scissors"}
 */
const pickComputerMove = () => {
	const randomNumber = Math.random();

	return randomNumber < 1 / 3
		? "rock"
		: randomNumber < 2 / 3
		? "paper"
		: "scissors";
};

/**
 * @param {"rock" | "paper" | "scissors"} playerMove
 * @returns {void}
 */
const playGame = (playerMove) => {
	const computerMove = pickComputerMove();

	const result =
		computerMove === playerMove
			? "Tie"
			: (computerMove === "rock" && playerMove === "scissors") ||
			  (computerMove === "paper" && playerMove === "rock") ||
			  (computerMove === "scissors" && playerMove === "paper")
			? "You lose"
			: "You win";

	result === "You win"
		? score.wins++
		: result === "You lose"
		? score.losses++
		: score.ties++;

	localStorage.setItem("score", JSON.stringify(score));

	updateScoreElement();

	document.querySelector("p.js-result").innerHTML = `${result}.`;

	document.querySelector("p.you-computer").innerHTML =
		"You &centerdot; Computer";

	document.querySelector("p.js-moves-chosen").innerHTML = `
	<div class="result-image-container">
		<img alt="${playerMove[0].toUpperCase}${playerMove.slice(
		1,
	)} Emoji" src="images/${playerMove}-emoji.png" class="move-icon" />

		<img alt="${computerMove[0].toUpperCase}${computerMove.slice(
		1,
	)} Emoji" src="images/${computerMove}-emoji.png" class="move-icon" />
	</div>
	`;
};

let intervalID;

const resetScore = () => {
	score = {wins: 0, losses: 0, ties: 0};
	updateScoreElement();
	localStorage.removeItem("score");
};

// Better than onclick attribute.
const rockButton = document.querySelector("button.js-rock-button");

rockButton.addEventListener("click", () => playGame("rock"));

const paperButton = document.querySelector("button.js-paper-button");

paperButton.addEventListener("click", () => playGame("paper"));

const scissorsButton = document.querySelector("button.js-scissors-button");

scissorsButton.addEventListener("click", () => playGame("scissors"));

const confirmationContainerDiv = document.querySelector(
	"div.js-confirmation-container",
);

const resetConfirmation = () => {
	confirmationContainerDiv.innerHTML = "";
};

const resetScoreConfirmationPopup = () => {
	confirmationContainerDiv.innerHTML = `
			<p class="reset-score-confirmation-message">
				Are you sure you want to reset the score?
			</p>

			<button class="yes-button js-yes-button">Yes (Y)</button>
			<button class="no-button js-no-button">No (N)</button>
			`;

	const yesButton = document.querySelector("button.js-yes-button");
	const noButton = document.querySelector("button.js-no-button");

	yesButton.addEventListener("click", () => {
		resetScore();
		resetConfirmation();
	});

	noButton.addEventListener("click", () => {
		resetConfirmation();
	});
};

const resetScoreButton = document.querySelector("button.js-reset-score-button");

resetScoreButton.addEventListener("click", resetScoreConfirmationPopup);

const autoPlayButton = document.querySelector("button.js-auto-play-button");

autoPlayButton.addEventListener("click", autoPlay);

document.addEventListener("keydown", (event) => {
	switch (event.key) {
		case "r":
			playGame("rock");
			break;
		case "p":
			playGame("paper");
			break;
		case "s":
			playGame("scissors");
			break;
		case "a":
			autoPlay();
			break;
		case "Backspace":
			resetScoreConfirmationPopup();
			break;
		case "y":
			document.querySelector("button.js-yes-button") &&
				(resetScore() || resetConfirmation());
			break;
		case "n":
			document.querySelector("button.js-no-button") && resetConfirmation();
			break;
	}
});

// Personal preference if arrow function or not.
function autoPlay() {
	if (autoPlayButton.innerHTML.trim() === "Auto Play (A)") {
		autoPlayButton.innerHTML = "Stop Auto Play (A)";

		intervalID = setInterval(() => playGame(pickComputerMove()), 1000);
	} else {
		// Stops a setInterval function.
		clearInterval(intervalID);

		autoPlayButton.innerHTML = "Auto Play (A)";
	}
}
