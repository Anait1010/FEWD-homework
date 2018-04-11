
$("#rock").click(popRock)

//document.getElementById('rock').onclick = popRock
document.getElementById('paper').onclick = popPaper
document.getElementById('scissors').onclick = popScissors

function popRock() {
	$("body").css("background-color", "green")
	$("rock").fadeOut ()
}
function popPaper() {
	console.log ("You choose Paper!")
}
function popScissors() {
	console.log ("You choose Scissors!")
}