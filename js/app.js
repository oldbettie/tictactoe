// --- players/score/peice object
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
// --- start positions
let player = players[0];
let blankBoard = [];
let turnCount = 0;
let winner = false;

// --- once they click a sq change turns
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
	if ($(this).text() === "X" ? $(this).addClass("cross") : $(this).addClass("circle"));
	changePlayer(player);
});
// --- board layout
const makeNewBoard = function (x, y) {
	for (let i = 0; i < x; i++) {
		blankBoard.push([]);
		for (let j = 0; j < y; j++) {
			blankBoard[i][j] = "";
		}
	}
	return blankBoard;
};
// --- logic to find the winner
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
			$(".score").text("Winner!! player one");
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
			$(".score").text("Winner!! player two");
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
	if (turnCount === 9 && winner === false) {
		$(".score").text("No one won try again!");
	}
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
	$(".gamesq").removeClass("cross");
	$(".gamesq").removeClass("circle");
	$(".score").text("Play to see who wins!");
};
$(".reset").click(function () {
	gameOver();
});
// --- light - dark toggle
$(".toggle").click(function () {
	$("body").toggleClass("lightmode");
	$(".gamesq").toggleClass("lightmode-cubes");
	$("button").toggleClass("lightmode-buttons");
	if ($(this).text() === "light mode") {
		$(this).text("Dark Mode");
	} else $(this).text("Light Mode");
});
makeNewBoard(3, 3);
