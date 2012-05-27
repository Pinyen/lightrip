/**import_map.js**/
/*$(function(){ 
  $('#myMap').tinyMap({ 
      center: {x: '25.03369510279853', y: '121.56480431556702'}, 
      zoom: 16 
  }); 

  $('#myMap').tinyMap({ 
      marker: [ 
          {addr: '25.037467, 121.564077', text: '台北市政府'}, 
          {addr: '25.100295, 121.549494', text: '國立故宮博物院'} 
      ] 
  }); 
});*/

google.load("jquery", "1.3");
google.load("jqueryui", "1.7");

google.setOnLoadCallback(function() {
	$('#main').css('-moz-user-select', 'none'); //禁止fx選取文字
	$('#main').get(0).onselectstart = function(){return false;}; //禁止IE選取文字
	
	// 所有行程
	$(function() {
		$( "#mapFrame, #mySchedule" ).sortable({
			connectWith: ".connectedSortable"
		}).disableSelection();
		
		/*$(".block").resizable({
			maxHeight: 300,
			maxWidth: 150,
			minHeight: 40,
			minWidth: 150,
		});*/

		/*$(".active").click(function() {
			//$("form").submit();
			$(".menu").hide();//嵌入body裡面會不會比較好
			$("#scheduleFrame").show();
			$("#buttonFrame").show();
			$(".firstpage").hide();
		});*/
		$("#home").click(function() {
			$(".menu").show();
			$(".firstpage").show();
			$("#scheduleFrame").hide();
			//嵌入body裡面會不會比較好
		});

		//$("#drag").draggable();
	});
});

//lightbox
function lightbox(content) {
	
	$("body").append("<div class='bg'></div>");
	$("body").append("<div class='lightbox'><div class='framebox'>" + content + "</div></div>");
	$(".lightbox").fadeIn(1000);
	$(".framebox").fadeIn(1000);
	$(".bg").click(function() {
		$(".lightbox").remove();//處裡消掉的東西
		$(".bg").remove();//嵌入body裡面會不會比較好
		
	});
	//if ($(".lightbox").attr("style:display") == "none"){
			//$(".lightbox").remove();}
}

	$(function() {
		$( "#slider" ).slider({
			orientation: "vertical",
			value:50,
			min: 0,
			max: 100,
			step: 20,
			slide: function( event, ui ) {
				$( "#amount" ).val( ui.value );
			}
		});
		$( "#amount" ).val( $( "#slider" ).slider( "value" ) );
		
		$( "#slider2" ).slider({
			orientation: "vertical",
			value:50,
			min: 0,
			max: 100,
			step: 20,
			slide: function( event, ui ) {
				$( "#amount2" ).val( ui.value );
			}
		});
		$( "#amount2" ).val( $( "#slider2" ).slider( "value2" ) );
		
		$( "#slider3" ).slider({
			orientation: "vertical",
			value:50,
			min: 0,
			max: 100,
			step: 20,
			slide: function( event, ui ) {
				$( "#amount3" ).val( ui.value );
			}
		});
		$( "#amount3" ).val( $( "#slider3" ).slider( "value3" ) );
		$( "#slider4" ).slider({
			orientation: "vertical",
			value:50,
			min: 0,
			max: 100,
			step: 20,
			slide: function( event, ui ) {
				$( "#amount4" ).val( ui.value );
			}
		});
		$( "#amount4" ).val( $( "#slider4" ).slider( "value4" ) );
		$( "#slider5" ).slider({
			orientation: "vertical",
			value:50,
			min: 0,
			max: 100,
			step: 20,
			slide: function( event, ui ) {
				$( "#amount5" ).val( ui.value );
			}
		});
		$( "#amount5" ).val( $( "#slider5" ).slider( "value5" ) );
	});

(function($){
	$(document).ready(function(){
		$('.active').click(function(){
			$(".menu").hide();
			$("#scheduleFrame").show();

			//alert("Handler for .click() called.");
			$.ajax({
				type: 'GET',
				data: { attr1: $( "#amount" ).val(),
				 attr2: $( "#amount2" ).val(),
				 attr3: $( "#amount3" ).val(),
				 attr4: $( "#amount4" ).val(),
				 attr5: $( "#amount5" ).val()
				},
				//$( "#amount" ).html(),
				url: "http://localhost:3000/step3",
				datatype: 'json',
				success: function(data, textSatus){
					//alert("ajax success");
					$(".firstpage").hide();//處裡消掉的東西
					$(".menu").hide();//嵌入body裡面會不會比較好
					$("#scheduleFrame").show();
					$("#buttonFrame").show();
					//$("li.block:even").append()
					//$('li.block:odd').append("<a href=javascript:lightbox('hahaha')>"+data['test']+"</a>");
					for ( var i = 0; i < data.length ; i++) {
						$('ul#mySchedule').append('<li class="block spotinfo" id="' + data[i]['id'] + '" name="' + data[i]['name'] + '" zoom="' + data[i]['zoom'] + '" lat="' + data[i]['lat'] + '" lon="' + data[i]['lon'] + '" ><a href=javascript:lightbox("' + data[i]['address'] + '")>' + data[i]['name'] + '</a></li>');
						$('li#' + data[i]['id'] ).append('<img src="/img/' + data[i]['id'] + '" height="60%" width="90%"><div class="travel_time_space"><div class="travel_time_content">4hr</div></div>');
						//$('li.block').appendTo('#mySchedule');
					/*$('li.block:odd').append("<a href=javascript:lightbox('hahaha')>"+data[0]['address']+"</a>");*/
					//data[i]['id'] != []
					console.log(data);
					}

				}
			}
			);
		});
	});
})(jQuery);
