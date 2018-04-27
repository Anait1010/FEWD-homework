var score = 0

$("#zero").click(zeroButton)
$("#add5").click(addFive)
$("#add10").click(addTen)
$("#sub1").click(subOne)

function zeroButton(){
	// zero out the score variable
	score=0

	$("#result").html(score)
	//console.log ("zero button clicked")
}

function addFive(){
	//add 5 to the current score
	score=score+5
	// score+=5
	//output the value of score in the result
	$("#result").html(score)
}
function addTen(){
	//add 10 to the current score 
	score=score+10
	$("#result").html(score)
}
function subOne(){
	//subtract 1 from the current score
	score=score-1
	$("#result").html(score)
}