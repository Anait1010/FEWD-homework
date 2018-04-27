$("#submit").click(compareClicked)

function compareClicked(){
	 var num1=$("#a").val()
	 var num2=$("#b").val()

	 if (num1>num2){
	 	 $("#comparison").html(">")
	 }
	 if (num1<num2){
	 	 $("#comparison").html("<")
	 }
	 if (num1==num2){
	 	 $("#comparison").html("==")
	 }
}