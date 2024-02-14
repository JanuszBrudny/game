const startPage = document.querySelector(".startpage-popup");
const playerNameInput = document.querySelector(".player-name");
const nameBtn = document.querySelector(".nameBtn");
const playerNameInfo = document.querySelector(".player-name-info");
const gameInfo = document.querySelector(".game-info");
const startGameBtn = document.querySelector(".gameBtn");
const gamePlay = document.querySelector(".gamePlay");
const stoneBtn = document.querySelector(".stone");
const paperBtn = document.querySelector(".paper");
const scisorsBtn = document.querySelector(".scisors");

const scorePlayerName = document.querySelector(".score-name");

const scorePlayerNumber = document.querySelector(".score-number-player");
const scoreCpuNumber = document.querySelector(".score-number-cpu");
const playerChiceName = document.querySelector(".player-choice-name");
const playerChoiceInfo = document.querySelector(".player-choice-info");

const cpuName = document.querySelector(".cpu-name");
const cpuchoiceInfo = document.querySelector(".cpu-choice-info");
const winOrLoseInfo = document.querySelector(".win-or-lose");
const nextRoundBtn = document.querySelector(".next-round-btn");
const leaveGamePopup = document.querySelector(".end-game");
const leaveGameBtn = document.querySelector(".end-game-btn");
const leaveGameText = document.querySelector(".end-game-text");

let playerScore = 0;
let cpuScore = 0;
const restoreGame = () => {
	window.location.reload(true);
	startPage.style.display = "flex";
};

const showAboutme = () => {
	playerNameInfo.textContent = playerNameInput.value;
	startPage.style.display = "none";
};
const goToGame = () => {
	gameInfo.classList.remove("active");
};
const removeChoiceButtons = () => [
	gamePlay.classList.remove("active-gameplay"),
	(scorePlayerName.textContent = playerNameInput.value),
	(playerChiceName.textContent = playerNameInput.value),
];

const createCpuMove = () => {
	const randomNumber = Math.floor(Math.random() * 3 + 1);
	if (randomNumber === 1) {
		return (cpuchoiceInfo.textContent = "kamień");
	} else if (randomNumber === 2) {
		return (cpuchoiceInfo.textContent = "nożyce");
	} else if (randomNumber === 3) {
		return (cpuchoiceInfo.textContent = "papier");
	}
};

const stoneGame = () => {
	if (
		playerChoiceInfo.textContent == "kamień" &&
		cpuchoiceInfo.textContent == "kamień"
	) {
		winOrLoseInfo.textContent = "remis";
	} else if (
		playerChoiceInfo.textContent == "kamień" &&
		cpuchoiceInfo.textContent == "nożyce"
	) {
		winOrLoseInfo.textContent = "wygrałeś";
	} else if (
		playerChoiceInfo.textContent == "kamień" &&
		cpuchoiceInfo.textContent == "papier"
	) {
		winOrLoseInfo.textContent = "przegrałeś";
	}
};

const scisorsGame = () => {
	if (
		playerChoiceInfo.textContent == "nożyce" &&
		cpuchoiceInfo.textContent == "nożyce"
	) {
		winOrLoseInfo.textContent = "remis";
	} else if (
		playerChoiceInfo.textContent == "nożyce" &&
		cpuchoiceInfo.textContent == "papier"
	) {
		winOrLoseInfo.textContent = "wygrałeś";
	} else if (
		playerChoiceInfo.textContent == "nożyce" &&
		cpuchoiceInfo.textContent == "kamień"
	) {
		winOrLoseInfo.textContent = "przegrałeś";
	}
};
const paperGame = () => {
	if (
		playerChoiceInfo.textContent == "papier" &&
		cpuchoiceInfo.textContent == "papier"
	) {
		winOrLoseInfo.textContent = "remis";
	} else if (
		playerChoiceInfo.textContent == "papier" &&
		cpuchoiceInfo.textContent == "kamień"
	) {
		winOrLoseInfo.textContent = "wygrałeś";
	} else if (
		playerChoiceInfo.textContent == "papier" &&
		cpuchoiceInfo.textContent == "nożyce"
	) {
		winOrLoseInfo.textContent = "przegrałeś";
	}
};

const scorePointsCount = () => {
	if (winOrLoseInfo.textContent == "wygrałeś") {
		playerScore++;
	} else if (winOrLoseInfo.textContent == "przegrałeś") {
		cpuScore++;
	}

	scorePlayerNumber.textContent = playerScore;
	scoreCpuNumber.textContent = cpuScore;

	setTimeout(endGameInfo, 2000);
};

const endGameInfo = () => {
	if (playerScore == 3) {
		leaveGamePopup.classList.add("end-game-active");
		leaveGameText.textContent = "Gratulacje wygrałeś z komputerem";
	} else if (cpuScore == 3) {
		leaveGamePopup.classList.add("end-game-active");
		leaveGameText.textContent = "Niestety nie udało ci się wygrać z komputerem";
	}
};

const delayTime = () => {
	setTimeout(removeChoiceButtons, 1000);
};
const stoneChoice = () => {
	delayTime();
	playerChoiceInfo.textContent = "kamień";
	createCpuMove();
	stoneGame();
	scorePointsCount();
};
const scisorsChoice = () => {
	delayTime();
	playerChoiceInfo.textContent = "nożyce";
	createCpuMove();
	scisorsGame();
	scorePointsCount();
};
const paperChoice = () => {
	delayTime();
	playerChoiceInfo.textContent = "papier";
	createCpuMove();
	paperGame();
	scorePointsCount();
};

const nxtRound = () => {
	gamePlay.classList.add("active-gameplay");
};

nameBtn.addEventListener("click", showAboutme);
startGameBtn.addEventListener("click", goToGame);
stoneBtn.addEventListener("click", stoneChoice);
scisorsBtn.addEventListener("click", scisorsChoice);
paperBtn.addEventListener("click", paperChoice);
nextRoundBtn.addEventListener("click", nxtRound);
leaveGameBtn.addEventListener("click", restoreGame);
