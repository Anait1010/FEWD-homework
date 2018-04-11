
$("#readMoreLink").click(function(){
	$("#readMoreLink").hide()
	$("#readLessLink").show()
	$("#show-this-on-click").slideDown()
	event.preventDefault()
})

 $("#readLessLink").click(function(){
 	$("#readLessLink").hide()
    $("#readMoreLink").show()
    $("#show-this-on-click").slideUp()
    event.preventDefault()
  })

$("#learnMoreLink").click(function(){
	$("#learnMoreLink").hide()
    $("#learnmoretext").slideDown()
    event.preventDefault()
  })

/*$("#learnMoreLink").click(learMoreLinkClicked)
function learnMoreLinkClicked(){
	$("#learnMoreLink").hide()
    $("#learnmoretext").slideDown()
    event.preventDefault()
}*/