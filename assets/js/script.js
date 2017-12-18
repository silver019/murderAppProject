// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
 

$("#MO, #MS, #MT, #NC, #ND, #NE, #NH, #NJ, #NM, #NV, #NY, #OH, #OK, #OR, #PA, #RI, #SC, #SD, #TN, #TX, #UT, #VA, #VT, #WA, #WI, #WV, #WY, #AK, #HI, #AL, #AR, #AZ, #CA, #CO, #CT, #DE, #FL, #GA, #IA, #ID, #IL, #IN, #KS, #KY, #LA, #MA, #MD, #ME, #MI, #MN").hover(function () {
    //stuff to do on mouse enter
var col = "#FF69B4";
    $(this).attr("fill", col );
}, 
function () {
    //stuff to do on mouse leave
    var origCol ="#D3D3D3";
     $(this).attr("fill", origCol);
});


});


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