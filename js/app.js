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
];
// figure out which players turn it is
let player = players[0];

//once they click a sq change turns
const changePlayer = function () {
	if (player === players[0]) {
		player = players[1];
		return player;
	} else player = players[0];
	return player;
};
// update display tbf
// const render = function() {
//  // render screen updates here

// }
// target individual squares
$(".board-0-0").click(function () {
	$(".board-0-0").text(player.character);
	changePlayer(player);
});
$(".board-0-1").click(function () {
	$(".board-0-1").text(player.character);
	console.log(player.character);
	changePlayer(player);
});

//check for end of game
