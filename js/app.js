//players/score/peice object
const players = [
	{
		name: "one",
		score: 0,
		character: "x",
	},
	{
		name: "two",
		score: 0,
		character: "o",
	},
]; // ---start positions
let player = players[0];
let board = [];
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
	changePlayer(player);
});
$(".board-0-1").click(function () {
	$(".board-0-1").text(player.character);
	$(".board-0-1").addClass("taken");
	changePlayer(player);
});
$(".board-0-2").click(function () {
	$(".board-0-2").text(player.character);
	$(".board-0-2").addClass("taken");
	console.log(player.character);
	changePlayer(player);
});
$(".board-1-0").click(function () {
	$(".board-1-0").text(player.character);
	$(".board-1-0").addClass("taken");
	console.log(player.character);
	changePlayer(player);
});
$(".board-1-1").click(function () {
	$(".board-1-1").text(player.character);
	$(".board-1-1").addClass("taken");
	changePlayer(player);
});
$(".board-1-2").click(function () {
	$(".board-1-2").text(player.character);
	$(".board-1-2").addClass("taken");
	changePlayer(player);
});
$(".board-2-0").click(function () {
	$(".board-2-0").text(player.character);
	$(".board-2-0").addClass("taken");
	changePlayer(player);
});
$(".board-2-1").click(function () {
	$(".board-2-1").text(player.character);
	$(".board-2-1").addClass("taken");
	changePlayer(player);
});
$(".board-2-2").click(function () {
	$(".board-2-2").text(player.character);
	$(".board-2-2").addClass("taken");
	changePlayer(player);
});

//check for end of game
const updateBoard = function () {};

const makeNewBoard = function (x, y) {
	for (let i = 0; i < x; i++) {
		board.push([]);
		for (let j = 0; j < y; j++) {
			board[i][j] = "";
		}
	}

	return board;
};

makeNewBoard(3, 3);
console.log(board);
