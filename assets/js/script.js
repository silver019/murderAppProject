// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
 

//initialize your Kartograph map 
var map = kartograph.map('#map')

var map = kartograph.map('#map', 600, 400);

	$("#MO, #MS, #MT, #NC, #ND, #NE, #NH, #NJ, #NM, #NV, #NY, #OH, #OK, #OR, #PA, #RI, #SC, #SD, #TN, #TX, #UT, #VA, #VT, #WA, #WI, #WV, #WY, #AK, #HI, #AL, #AR, #AZ, #CA, #CO, #CT, #DE, #FL, #GA, #IA, #ID, #IL, #IN, #KS, #KY, #LA, #MA, #MD, #ME, #MI, #MN").hover(function () {
   	 //stuff to do on mouse enter
	var col = "#FF69B4";
  	  $(this).attr("fill", col );
	var id = $(this).attr("id");
	// to get X & Y location on map
	var fc = $(this).attr("d");
	x= fc[1]+fc[2]+fc[3]+fc[4]+fc[5];
	y= fc[7]+fc[8]+fc[9]+fc[10]+fc[11];
	console.log(' '+ x + ' ' + y + ' ');
	
	
	
	}, 
	function () {
    //stuff to do on mouse leave
    var origCol ="#D3D3D3";
     $(this).attr("fill", origCol);
      var id = $(this).attr("");
	console.log(id);

	});

	$("#MO, #MS, #MT, #NC, #ND, #NE, #NH, #NJ, #NM, #NV, #NY, #OH, #OK, #OR, #PA, #RI, #SC, #SD, #TN, #TX, #UT, #VA, #VT, #WA, #WI, #WV, #WY, #AK, #HI, #AL, #AR, #AZ, #CA, #CO, #CT, #DE, #FL, #GA, #IA, #ID, #IL, #IN, #KS, #KY, #LA, #MA, #MD, #ME, #MI, #MN").click(function() {
  	console.log($(this).attr("id"));
	var text = $("text").val();
	console.log('txt: ' + text);
	
	});

});