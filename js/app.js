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
		return player;
	} else player = players[0];
	return player;
};
// --- refactored for a single event
$(".gamesq").click(function () {
	let id = $(this).prop("id");
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
};
$(".reset").click(function () {
	gameOver();
});
makeNewBoard(3, 3);
