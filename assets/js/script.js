// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
 
//Variables for Site Scraping
var state = "";
var stateDescription;
var url_hist;
var statehood;
var capital;

var population; 


var size;

var nickname;


var motto;
var start;
var capstart;
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
			url_tzdb +='&';
			url_tzdb += 'countryCode=US';
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
			
			function desc(s){
		$.ajax({
			url: s,
			method: "GET",
			}).done(function(states) {
			//console.log(response);
			stateDescription= $(states).find('p');
			start = $(states).find('p');
			start = start[10].innerText;
			start = start.split(":");
			if(start[0] === "Date of Statehood"){
			statehood = start[1];
			console.log(statehood);
			
			capstart= $(states).find('p');
			capstart = capstart[12].innerText;
			capstart = capstart.split(":");
			console.log(capstart);
				if (capstart[0] === "Population") {
				capital ="";
				capital= $(states).find('p');
				capital = capital[11].innerText;
				capital = capital.split(":");
				capital = capital[1];
				console.log(capital);
				population = $(states).find('p');
				population = population[12].innerText;
				population = population.split(":");
				population = population[1];
				console.log(population);
				size = $(states).find('p');
				size = size[13].innerText;
				size = size.split(":");
				size = size[1];
				console.log(size);
		
		nickname = $(states).find('p');
				nickname = nickname[14].innerText;
				nickname = nickname.split(":");
				nickname = nickname[1];
				console.log(nickname);
				motto = $(states).find('p');
				motto = motto[15].innerText;
				motto = motto.split(":");
				motto = motto[1];
				console.log(motto);
				}
				
				
			}
			if(start[0] !== "Date of Statehood"){
			statehood = "";
			statehood = $(states).find('p');
			statehood = statehood[9].innerText;
			statehood = statehood.split(":");
			statehood = statehood[1];
			console.log(statehood);
			capital = $(states).find('p');
			capital = capital[11].innerText;
			capital = capital.split(":");
			//capital = capital[1];
			if (capital[0] === "Population") {
				capital ="";
				capital= $(states).find('p');
				capital = capital[10].innerText;
				capital = capital.split(":");
				capital = capital[1];
				console.log(capital);
				population = $(states).find('p');
				population = population[11].innerText;
				population = population.split(":");
				population = population[1];
				console.log(population);
				size = $(states).find('p');
				size = size[12].innerText;
				size = size.split(":");
				size = size[1];
				console.log(size);
		
		nickname = $(states).find('p');
				nickname = nickname[13].innerText;
				nickname = nickname.split(":");
				nickname = nickname[1];
				console.log(nickname);
				motto = $(states).find('p');
				motto = motto[14].innerText;
				motto = motto.split(":");
				motto = motto[1];
				console.log(motto);
				}
			
			population = $(states).find('p');
			population = population[12].innerText;
			population = population.split(":");
			population = population[1];
			console.log(population);
			size = $(states).find('p');
			size = size[13].innerText;
			size = size.split(":");
			size = size[1];
			console.log(size);
			
		
	nickname = $(states).find('p');
			nickname = nickname[14].innerText;
			nickname = nickname.split(":");
			nickname = nickname[1];
			console.log(nickname);
			motto = $(states).find('p');
			motto = motto[15].innerText;
			motto = motto.split(":");
			motto = motto[1];
			console.log(motto);
			}

			if(start[0] === "Date of Statehood" && capstart[0] === "Capital"){
			statehood = start[1];
			console.log(statehood);
			capital= $(states).find('p');
			capital = capital[12].innerText;
			capital = capital.split(":");
			capital = capital[1];
			console.log(capital);
			population = $(states).find('p');
			population = population[13].innerText;
			population = population.split(":");
			population = population[1];
			console.log(population);
			size = $(states).find('p');
			size = size[14].innerText;
			size = size.split(":");
			size = size[1];
			console.log(size);
		
	nickname = $(states).find('p');
			nickname = nickname[15].innerText;
			nickname = nickname.split(":");
			nickname = nickname[1];
			console.log(nickname);
			motto = $(states).find('p');
			motto = motto[16].innerText;
			motto = motto.split(":");
			motto = motto[1];
			console.log(motto);
			}
					var tbl ="<tr><td>Date of Statehood:</td><td>" + statehood + "</td></tr>";
					tbl += "<tr><td>Capital:</td><td>" + capital + "</td></tr>";
					tbl += "<tr><td>Population:</td><td>" + population + "</td></tr>";
					tbl += "<tr><td>Size:</td><td>" + size + "</td></tr>";
					tbl += "<tr><td>Nick Name</td><td>" + nickname + "</td></tr>";
					tbl += "<tr><td>Motto:</td><td>" + motto + "</td></tr>";
					$("tbody").html(tbl);          			
			
			
			console.log(stateDescription);
			stateDescription = stateDescription[8].innerText;
				if(stateDescription === "A+E Networks"){
				stateDescription = '';
				stateDescription =$(states).find('p');
				stateDescription = stateDescription[9].innerText;
				console.log(stateDescription);
			}
				function mymodal(sd){
					$('#myModal').on('shown.bs.modal', function() {
           				 $('#myInput').focus()
		
          				  });
            
          		 		 
	 
	   		 		$("#description").html("<p class='blockquote' >" + sd + "</p>");
					 
  		
					}
					mymodal(stateDescription);
					
			
			});
				
			}	
			
			
			
			
			

					
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
	console.log($(this).attr("data-info"));
		state =$(this).attr("data-info");
		url_hist = "http://www.history.com/topics/us-states/";
		url_hist += state;
		console.log(url_hist);
		var model = $("#myModal").find('#exampleModalLabel').html($(this).attr("data-info").toUpperCase());
		desc(url_hist); 
		
		console.log(stateDescription);
  	 		
			
  	 });
					
});

