// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
 


//API PARAMETERS
			//=====================================================
			var url_owm = "http://api.openweathermap.org/data/2.5/forecast";
			url_owm += '?';
			url_owm += "id=524901&APPID=9ca40e75e9f5ec1197766bf87c668827";
			
			var url_ss = "https://api.sunrise-sunset.org/json";
			url_ss += '?';
			url_ss += "lat=36.7201600";
			url_ss += "&";
			url_ss += "lng=-4.4203400";
			url_ss += "&";
			url_ss += "date=today";

			var url_tzdb = "http://api.timezonedb.com/v2/list-time-zone";
			url_tzdb += '?';
			url_tzdb += "key=ZHLZ5DVDFQE4&format=json";

			$.ajax({
						
			url: url_owm,
			method: "GET"
			}).done(function(response) {
			console.log(response);
			});

			$.ajax({
			url: url_ss,
			method: "GET"
			}).done(function(response) {
			console.log(response);
			});


			$.ajax({
			url: url_tzdb,
			method: "GET",
			}).done(function(response) {
			console.log(response);
			});

					
//initialize your Kartograph map 
//var map = kartograph.map('#map')

//var map = kartograph.map('#map', 600, 400);

	$("#MO, #MS, #MT, #NC, #ND, #NE, #NH, #NJ, #NM, #NV, #NY, #OH, #OK, #OR, #PA, #RI, #SC, #SD, #TN, #TX, #UT, #VA, #VT, #WA, #WI, #WV, #WY, #AK, #HI, #AL, #AR, #AZ, #CA, #CO, #CT, #DE, #FL, #GA, #IA, #ID, #IL, #IN, #KS, #KY, #LA, #MA, #MD, #ME, #MI, #MN").hover(function () {
   	 //stuff to do on mouse enter
	var col = "#FF69B4";
  	  $(this).attr("fill", col );
	var id = $(this).attr("id");

	// to get X & Y location on map
	var fc = $(this).attr("d");
	x= fc[1]+fc[2]+fc[3]+fc[4]+fc[5];
	y= fc[7]+fc[8]+fc[9]+fc[10]+fc[11];
	
	//console.log(' '+ x + ' ' + y + ' ');
	$("." + id).html('<text x='+ x +' y=' + y + ' font-family="Verdana" font-size="15">FL</text>');

	
	}, 
	function () {
    //stuff to do on mouse leave
    var origCol ="#D3D3D3";
     $(this).attr("fill", origCol);
      var id = $(this).attr("");
	console.log(id);
	$("." + $(this).attr("id")).html("");

	});

	$("#MO, #MS, #MT, #NC, #ND, #NE, #NH, #NJ, #NM, #NV, #NY, #OH, #OK, #OR, #PA, #RI, #SC, #SD, #TN, #TX, #UT, #VA, #VT, #WA, #WI, #WV, #WY, #AK, #HI, #AL, #AR, #AZ, #CA, #CO, #CT, #DE, #FL, #GA, #IA, #ID, #IL, #IN, #KS, #KY, #LA, #MA, #MD, #ME, #MI, #MN").click(function() {
  	console.log($(this).attr("id"));
  	 		$('#myModal').on('shown.bs.modal', function() {
            $('#myInput').focus()
            });
            
            var model = $("#myModal").find('#exampleModalLabel').html($(this).attr("data-info"));

            console.log(model);
  	 console.log($(this).attr("data-info"));

  	 });


});

