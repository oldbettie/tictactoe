// import { initializeApp } from "firebase/app";

// // TODO: Replace the following with your app's Firebase project configuration

// const firebaseConfig = {
// 	apiKey: "AIzaSyAOYJTxTnzyI5n74XVGnMEvxX4whjzeCM0",
// 	authDomain: "tictactoe-408c3.firebaseapp.com",
// 	projectId: "tictactoe-408c3",
// 	storageBucket: "tictactoe-408c3.appspot.com",
// 	messagingSenderId: "455684682761",
// 	appId: "1:455684682761:web:865b7936e17125470174d8",
// 	measurementId: "G-J6LM93PD36",
// };

// const app = initializeApp(firebaseConfig);

//players/score/peice object
const players = [
	{
		name: "one",
		score: 0,
		character: "X",
	},
	{
		name: "two",
		score: 0,
		character: "O",
	},
];
// ---start positions
let player = players[0];
let blankBoard = [];
let turnCount = 0;
let winner = false;

//once they click a sq change turns
const changePlayer = function () {
	if (player === players[0]) {
		player = players[1];
	} else player = players[0];
};
// --- refactored for a single event
$(".gamesq").click(function () {
	let currentsq = $(this).prop("id").split("-");
	$(this).text(player.character);
	$(this).addClass("taken");
	updateBoard(currentsq[0], currentsq[1]);
	changePlayer(player);
});

const makeNewBoard = function (x, y) {
	for (let i = 0; i < x; i++) {
		blankBoard.push([]);
		for (let j = 0; j < y; j++) {
			blankBoard[i][j] = "";
		}
	}
	return blankBoard;
};

const checkWinner = function () {
	if (player === players[0]) {
		if (
			// horizontal
			(board[0][0] === "X" && board[0][1] === "X" && board[0][2] === "X") ||
			(board[1][0] === "X" && board[1][1] === "X" && board[1][2] === "X") ||
			(board[2][0] === "X" && board[2][1] === "X" && board[2][2] === "X") ||
			// --- vertical
			(board[0][0] === "X" && board[1][0] === "X" && board[2][0] === "X") ||
			(board[0][1] === "X" && board[1][1] === "X" && board[2][1] === "X") ||
			(board[0][2] === "X" && board[1][2] === "X" && board[2][2] === "X") ||
			// --- diaginal
			(board[0][0] === "X" && board[1][1] === "X" && board[2][2] === "X") ||
			(board[0][2] === "X" && board[1][1] === "X" && board[2][0] === "X")
		) {
			$(".score").text("Winner!! player one").css("color", "yellow");
			players[0].score += 1;
			$(".player-one-score").text(`player one score: ${players[0].score}`);
			winner = true;
			setTimeout(gameOver, 4000);
		}
	} else if (player === players[1]) {
		if (
			// --- horizontal
			(board[0][0] === "O" && board[0][1] === "O" && board[0][2] === "O") ||
			(board[1][0] === "O" && board[1][1] === "O" && board[1][2] === "O") ||
			(board[2][0] === "O" && board[2][1] === "O" && board[2][2] === "O") ||
			// --- vertical
			(board[0][0] === "O" && board[1][0] === "O" && board[2][0] === "O") ||
			(board[0][1] === "O" && board[1][1] === "O" && board[2][1] === "O") ||
			(board[0][2] === "O" && board[1][2] === "O" && board[2][2] === "O") ||
			// --- diaginal
			(board[0][0] === "O" && board[1][1] === "O" && board[2][2] === "O") ||
			(board[0][2] === "O" && board[1][1] === "O" && board[2][0] === "O")
		) {
			$(".score").text("Winner!! player two").css("color", "yellow");
			players[1].score += 1;
			$(".player-two-score").text(`player one score: ${players[1].score}`);
			winner = true;
			setTimeout(gameOver, 4000);
		}
	}
};
const updateBoard = function (x, y) {
	blankBoard[x][y] = player.character;
	board = blankBoard;
	turnCount += 1;
	checkWinner();
	if (turnCount === 9 && winner === false) $(".score").text("No one won try again!").css("color", "red");
};
const gameOver = function () {
	player = players[0];
	blankBoard = [];
	turnCount = 0;
	makeNewBoard(3, 3);
	winner = false;
	board = blankBoard;
	$(".gamesq").text("");
	$(".gamesq").removeClass("taken");
	$(".score").text("Play to see who wins!").css("color", "aliceblue");
};
$(".reset").click(function () {
	gameOver();
});
makeNewBoard(3, 3);
