// jquery.main.js
google.load("jquery", "1.3");
google.load("jqueryui", "1.7");

google.setOnLoadCallback(function() {
	$('#main').css('-moz-user-select', 'none'); //禁止fx選取文字
	$('#main').get(0).onselectstart = function(){return false;}; //禁止IE選取文字
	
	$("#ruler").draggable();
	$("#ruler").resizable();
	
	// 所有行程
	$(function() {
		$( "#mapFrame, #mySchedule" ).sortable({
			connectWith: ".connectedSortable"
		}).disableSelection();
		
		$(".block").resizable({
			maxHeight: 300,
			maxWidth: 300,
			minHeight: 40,
			minWidth: 300,
		});
		$(".active").click(function() {
			$(".firstpage").remove();//處裡消掉的東西
			$(".menu").remove();//嵌入body裡面會不會比較好
			$("#mySchedule").show();
			//$("#myMap").append("<ul id='mySchedule' class='connectedSortable'><h2>Schedule</h2><li class='block'><a href=javascript:lightbox('hahaha')>hahaha</a></li></ul>");
			$("#buttonFrame").show();
		});
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
				$( "#amoun2t" ).val( ui.value );
			}
		});
		$( "#amount3" ).val( $( "#slider3" ).slider( "value3" ) );
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
		$( "#amount5" ).val( $( "#slider5" ).slider( "value5" ) );
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