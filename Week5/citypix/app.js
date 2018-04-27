$(document).ready(function(){

  function updateCity(){

    //add city and store it as the city variable
    var city = $("#city-type").val().trim().toLowerCase()
    //city=city.toLowerCase()

    //if city is la change image to la
    if(city=="la" || city=="los angeles"){
    $("body").attr("class","la")
    }

    if(city=="nyc" || city=="new york"){
    $("body").attr("class","nyc")
    }

    if(city=="san francisco"){
    $("body").attr("class","sf")
    }

    if(city=="austin"){
    $("body").attr("class","austin")
    }

    if(city=="sydney"){
    $("body").attr("class","sydney")
    }

    //blank out the text box
    $("#city-type").val("")
    
    //Prevent the default action after form submit
    event.preventDefault()

  }


  $("#city-form").submit(updateCity)




})





/*
    if(city  == "new york") {
      $("body").attr("class","nyc")
    }

    else if (city == "san francisco") {
    	$("body").attr("class","sf")    
    }
	
	else if (city == "austin") {
      $("body").attr("class","austin");
    }

    else if (city == "los angeles") {
      $("body").attr("class","la");
    }

    else if (city == "sydney") {
      $("body").attr("class","sydney");
    }

  })*/