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
var images;
var weather;


//API PARAMETERS
//=====================================================
			
			
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
						
//function to retrieve site information from history.com
//=====================================================						
			function desc(s){
		$.ajax({
			url: s,
			method: "GET",
			}).done(function(states) {
			//console.log(response);
			images = $(states).find('img')
			images = images[1];
			$("#image").html(images);
			
			console.log(images);
			stateDescription= $(states).find('p');   // variable to get state description
				statehood = $(states).find('p');
				// if statements to get find Date of Statehood			
				if(statehood[10].innerText.split(":")[0] === "Date of Statehood"){
				statehood = $(states).find('p');
				statehood = statehood[10].innerText;
				statehood = statehood.split(":");
				statehood = statehood[1];
				console.log(statehood);
				
				}
				// if statements to get find Date of Statehood
				else if(statehood[9].innerText.split(":")[0] === "Date of Statehood"){
				statehood = "";
				statehood = $(states).find('p');
				statehood = statehood[09].innerText;
				statehood = statehood.split(":");
				statehood = statehood[1];
				console.log(statehood);
				}
				// if statements to get find Date of Statehood
				else if (statehood[9].innerText.split(":")[0] === "" || statehood[10].innerText.split(":")[0] === ""){
				statehood = "n/a";
				}
				// if statements to get find state capitals
				capital= $(states).find('p');
				
				if(capital[12].innerText.split(":")[0] === "Capital"){
				capital= "";
				capital= $(states).find('p');
				capital = capital[12].innerText;
				capital = capital.split(":");
				capital = capital[1];
				console.log(capital);
				}
				else if(capital[11].innerText.split(":")[0] === "Capital"){
				capital= "";
				capital= $(states).find('p');
				capital = capital[11].innerText;
				capital = capital.split(":");
				capital = capital[1];
				
				console.log(capital);
				}
				else if(capital[10].innerText.split(":")[0] === "Capital"){
				capital= "";
				capital= $(states).find('p');
				capital = capital[10].innerText;
				capital = capital.split(":");
				capital = capital[1];
				console.log(capital);
				}
				else if(capital[12].innerText.split(":")[0] === "" || capital[11].innerText.split(":")[0] === "" || capital[10].innerText.split(":")[0] === ""){
				capital= "n/a"
				}					
				// if statements to get find population
				population = $(states).find('p');
				
				if(population[13].innerText.split(":")[0] === "Population"){
				population= "";
				population= $(states).find('p');
				population = population[13].innerText;
				population = population.split(":");
				population = population[1];
				console.log(population);
				}
				else if(population[12].innerText.split(":")[0] === "Population"){
				population= "";
				population= $(states).find('p');
				population = population[12].innerText;
				population = population.split(":");
				population = population[1];
				console.log(population);
				}
				else if(population[11].innerText.split(":")[0] === "Population"){
				population= "";
				population= $(states).find('p');
				population = population[11].innerText;
				population = population.split(":");
				population = population[1];
				console.log(population);
				}
				else if(population[13].innerText.split(":")[0] === "" || population[12].innerText.split(":")[0] === "" || population[11].innerText.split(":")[0] === ""){
				population= "n/a";
				}
				// if statements to get find state size
				size = $(states).find('p');
				
				if(size[14].innerText.split(":")[0] === "Size"){
				size= "";
				size= $(states).find('p');
				size = size[14].innerText;
				size = size.split(":");
				size = size[1];
				console.log(size);
				}
				else if(size[13].innerText.split(":")[0] === "Size"){
				size= "";
				size= $(states).find('p');
				size = size[13].innerText;
				size = size.split(":");
				size = size[1];
				console.log(size);
				}
				else if(size[12].innerText.split(":")[0] === "Size"){
				size= "";
				size= $(states).find('p');
				size = size[12].innerText;
				size = size.split(":");
				size = size[1];
				console.log(size);
				}
				// if statements to get find state nick name
				nickname = $(states).find('p');

				if(nickname[15].innerText.split(":")[0] === "Nickname(s)"){
				nickname= "";
				nickname= $(states).find('p');
				nickname = nickname[15].innerText;
				nickname = nickname.split(":");
				nickname = nickname[1];
				console.log(nickname);
				}
				else if(nickname[14].innerText.split(":")[0] === "Nickname(s)"){
				nickname= "";
				nickname= $(states).find('p');
				nickname = nickname[14].innerText;
				nickname = nickname.split(":");
				nickname = nickname[1];
				console.log(nickname);
				}
				else if(nickname[13].innerText.split(":")[0] === "Nickname(s)"){
				nickname= "";
				nickname= $(states).find('p');
				nickname = nickname[13].innerText;
				nickname = nickname.split(":");
				nickname = nickname[1];
				console.log(nickname);
				}
		
		// if statements to get find state motto
				motto = $(states).find('p');
		
				if(motto[16].innerText.split(":")[0] === "Motto"){
				motto= "";
				motto= $(states).find('p');
				motto = motto[16].innerText;
				motto = motto.split(":");
				motto = motto[1];
				console.log(motto);
				}
				else if(motto[15].innerText.split(":")[0] === "Motto"){
				motto= "";
				motto= $(states).find('p');
				motto = motto[15].innerText;
				motto = motto.split(":");
				motto = motto[1];
				console.log(motto);
				}
				else if(motto[14].innerText.split(":")[0] === "Motto"){
				motto= "";
				motto= $(states).find('p');
				motto = motto[14].innerText;
				motto = motto.split(":");
				motto = motto[1];
				console.log(motto);
				}
				// variables to weather api
				var url_owm = "";
				url_owm = "http://api.openweathermap.org/data/2.5/weather?";
				url_owm += "&apikey=9ca40e75e9f5ec1197766bf87c668827";
				url_owm += '&q=';
				url_owm += capital;
				//weather function call
				Weather(url_owm);
				
				//table for state information 
					var tbl ="<tr><td>Date of Statehood:</td><td>" + statehood + "</td></tr>";
					tbl += "<tr><td>Capital:</td><td>" + capital + "</td></tr>";
					tbl += "<tr><td>Population:</td><td>" + population + "</td></tr>";
					tbl += "<tr><td>Size:</td><td>" + size + "</td></tr>";
					tbl += "<tr><td>Nick Name</td><td>" + nickname + "</td></tr>";
					tbl += "<tr><td>Motto:</td><td>" + motto + "</td></tr>";
					$("tbody").html(tbl);          			
			
					
			//state description variables and if statement 
			console.log(stateDescription);
			stateDescription = stateDescription[8].innerText;
				if(stateDescription === "A+E Networks"){
				stateDescription = '';
				stateDescription =$(states).find('p');
				stateDescription = stateDescription[9].innerText;
				console.log(stateDescription);
			}
				// modal function with state description
					function mymodal(sd){
					$('#myModal').on('shown.bs.modal', function() {
           				 $('#myInput').focus()
		
          				  });
            
          		 		 
	 
	   		 		$("#description").html("<p class='blockquote' >" + sd + "</p>");
					 
  		
					}
					mymodal(stateDescription);
			});
				
			}	
			
			//unused API's
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
			//Weather API function
			function Weather(u){
				$.ajax({
				url: u,
				method: "GET"
				}).done(function(response) {
				console.log(response.main);
					//list for weather information on modal
					var list = '<ul class="list-group">';
 					list += '<li class="list-group-item active">Today\'s weather</li>';
 					list += '<li class="list-group-item">humidity: '+ response.main.humidity  +'</li>';
 					list += '<li class="list-group-item">Temperature(F): '+ parseInt((9/5 * (response.main.temp  - 273) + 32))  +'</li>';
  					list += '<li class="list-group-item">Pressure: '+ response.main.pressure  +'</li>';
 					list += '</ul>';
					$("#temp").html(list);
				

				});
				}
			
			
			
			

					
//initialize your Kartograph map 
//var map = kartograph.map('#map')

//var map = kartograph.map('#map', 600, 400);
	// hover effects on map
	$("#MO, #MS, #MT, #NC, #ND, #NE, #NH, #NJ, #NM, #NV, #NY, #OH, #OK, #OR, #PA, #RI, #SC, #SD, #TN, #TX, #UT, #VA, #VT, #WA, #WI, #WV, #WY, #AK, #HI, #AL, #AR, #AZ, #CA, #CO, #CT, #DE, #FL, #GA, #IA, #ID, #IL, #IN, #KS, #KY, #LA, #MA, #MD, #ME, #MI, #MN, #DC2").hover(function () {
   	 //stuff to do on mouse enter
	var col = "#FF69B4";
  	  $(this).attr("fill", col );
	var id = $(this).attr("id");

	// to get X & Y for each state location on map (not used)
	var fc = $(this).attr("d");
	x= fc[1]+fc[2]+fc[3]+fc[4]+fc[5];
	y= fc[7]+fc[8]+fc[9]+fc[10]+fc[11];
	
	//console.log(' '+ x + ' ' + y + ' ');
	//$("." + id).html('<text x='+ x +' y=' + y + ' font-family="Verdana" font-size="15">FL</text>');

	
	}, 
	function () {

    //stuff to do on mouse leave
    var origCol ="#D3D3D3";
     $(this).attr("fill", origCol);
      var id = $(this).attr("");
	
	$("." + $(this).attr("id")).html("");

	});

	// on click for each state on map
	$("#MO, #MS, #MT, #NC, #ND, #NE, #NH, #NJ, #NM, #NV, #NY, #OH, #OK, #OR, #PA, #RI, #SC, #SD, #TN, #TX, #UT, #VA, #VT, #WA, #WI, #WV, #WY, #AK, #HI, #AL, #AR, #AZ, #CA, #CO, #CT, #DE, #FL, #GA, #IA, #ID, #IL, #IN, #KS, #KY, #LA, #MA, #MD, #ME, #MI, #MN, #DC2").click(function() {
  	console.log($(this).attr("id"));
	console.log($(this).attr("data-info"));
		// to generate state name on modal header
		state =$(this).attr("data-info");
		// variables to pull data from history.com
		url_hist = "http://www.history.com/topics/us-states/";
		// append to var state to add search parameter
		url_hist += state;
		console.log(url_hist);
		//adding state to header
		var model = $("#myModal").find('#exampleModalLabel').html($(this).attr("data-info").toUpperCase());
		desc(url_hist); 
		
		
  	 		
			
  	 });  //close click function
					
}); // close



$.ajax({
      url: "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=9ca40e75e9f5ec1197766bf87c668827",
      method: "GET"
    }).done(function(response) {
		console.log(response);
    });

    $.ajax({
      url: "https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&date=today",
      method: "GET"
    }).done(function(response) {
		console.log(response);
    });


    $.ajax({
      url: "http://api.timezonedb.com/v2/list-time-zone?key=ZHLZ5DVDFQE4&format=json",
      method: "GET",
    }).done(function(response) {
		console.log(response);
    });


    //needs CORS!
   // $.ajax({
   //   url: "http://api.timezonedb.com/v2/list-time-zone?key=ZHLZ5DVDFQE4&format=xml",
   //   method: "GET",
   // }).done(function(response) {
	//	console.log(response);
    //});


$("path, circle").hover(function(e) {
  $('#info-box').css('display','block');
  $('#info-box').html($(this).data('info'));
});

$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});

$(document).mousemove(function(e) {
  $('#info-box').css('top',e.pageY-$('#info-box').height()-30);
  $('#info-box').css('left',e.pageX-($('#info-box').width())/2);
}).mouseover();


//animate on scroll begins here