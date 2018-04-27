var total=0

function submitEntry(){
	//Code goes here
	console.log("you submited an entry")

	var amount = $("#newEntry").val()
	amount = parseFloat(amount)
	console.log(amount)

	//Insert and append the amount as a new table
	$("#entries").append("<tr><td></td><td>" + amount + "</td></tr>")

	//Add this amount to the total, to get new total
	total=total+amount

	//Update the total
	$("#total").html("$"+total)

	//Clear out the newEntry input box
	$("#newEntry").val("")

	event.preventDefault()
}


$("#entry").submit(submitEntry)