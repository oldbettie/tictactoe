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
//once they click a sq change turns
const changePlayer = function () {
	if (player === players[0]) {
		player = players[1];
		return player;
	} else player = players[0];
	return player;
};

// target individual squares
$(".board-0-0").click(function () {
	$(".board-0-0").text(player.character);
	$(".board-0-0").addClass("taken");
	updateBoard(0, 0);
	changePlayer(player);
});
$(".board-0-1").click(function () {
	$(".board-0-1").text(player.character);
	$(".board-0-1").addClass("taken");
	updateBoard(0, 1, players.character);
	changePlayer(player);
});
$(".board-0-2").click(function () {
	$(".board-0-2").text(player.character);
	$(".board-0-2").addClass("taken");
	updateBoard(0, 2);
	changePlayer(player);
});
$(".board-1-0").click(function () {
	$(".board-1-0").text(player.character);
	$(".board-1-0").addClass("taken");
	updateBoard(1, 0);
	changePlayer(player);
});
$(".board-1-1").click(function () {
	$(".board-1-1").text(player.character);
	$(".board-1-1").addClass("taken");
	updateBoard(1, 1);
	changePlayer(player);
});
$(".board-1-2").click(function () {
	$(".board-1-2").text(player.character);
	$(".board-1-2").addClass("taken");
	updateBoard(1, 2);
	changePlayer(player);
});
$(".board-2-0").click(function () {
	$(".board-2-0").text(player.character);
	$(".board-2-0").addClass("taken");
	updateBoard(2, 0);
	changePlayer(player);
});
$(".board-2-1").click(function () {
	$(".board-2-1").text(player.character);
	$(".board-2-1").addClass("taken");
	updateBoard(2, 1);
	changePlayer(player);
});
$(".board-2-2").click(function () {
	$(".board-2-2").text(player.character);
	$(".board-2-2").addClass("taken");
	updateBoard(2, 2, player);
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
	// --- horizontal
	if (player === players[0]) {
		if (
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
			console.log("Player One X Wins!!!");
		}
	} else if (player === players[1]) {
		if (
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
			console.log("Player Two O Wins!!!");
		}
	}
};
const updateBoard = function (x, y) {
	blankBoard[x][y] = player.character;
	board = blankBoard;
	turnCount += 1;
	console.log(turnCount);
	if (turnCount > 8) console.log("no winners");
	checkWinner();
};
makeNewBoard(3, 3);
console.log(blankBoard);
