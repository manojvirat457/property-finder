$(document).ready(function() {
    $.ajax({
    	url: "http://api.myjson.com/bins/2sadq?pretty=1",
    	dataType: "json",
    	success: function(response) {
    		$.each(response.apartments, function(i, apartment){
    			var apartmentClass = apartment.city.toLowerCase().replace(" " ,"-");
				var listing = "<a href='#' id ="+ apartment.id +" class = 'list-group-item "+ apartmentClass +" listings'><h4 class = 'list-group-item-heading'>"+  apartment.neighborhood + " - " + apartment.city +"<br>" + apartment.bedrooms + "BHK / Rent - " + apartment.price + "</h4><p class = 'list-group-item-text'>"+apartment.description +"</p></a>";
    			$(".apartments").append(listing);
    		});
    	},
    	error: function(error){
    		innerHTML("error");
    	}
    });

   $(".filter").click(function(){
    	var city = $(this).attr("id");

    	$(".filter").removeClass("active");
    	$(this).addClass("active");

    	$(".listings").show();

    	if(city != "all"){
    		$(".listings").not("." + city).css("display", "none");
    	}
    	
    });
   $(document).on("click", ".listings",function(){
   		var id = $(this).attr("id");
    	$.ajax({
            url: "http://api.myjson.com/bins/2sadq?pretty=1",
            dataType: "json",
            success: function(response) {
                var selectedApartment = $.grep(response.apartments, function(apartment){
                    return apartment.id == id;
                })
                var address = selectedApartment[0].address;
                window.open("http://maps.google.com/?q="+ address);
                },
           	 error: function(error){
           	 console.log(error);
           	}
        	});
    	});
	});



