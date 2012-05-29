/**import_map.js**/
/*$(function(){ 
  $('#myMap').tinyMap({ 
      center: {x: '25.03369510279853', y: '121.56480431556702'}, 
      zoom: 16 
  }); 

  $('#myMap').tinyMap({ 
      marker: [ 
          {addr: '25.037467, 121.564077', text: '台北政府'}, 
          {addr: '25.100295, 121.549494', text: '國立故宮博物院'} 
      ] 
  }); 
});*/

google.load("jquery", "1.3");
google.load("jqueryui", "1.7");

google.setOnLoadCallback(function() {
	$('#main').css('-moz-user-select', 'none'); //禁止fx選取文字
	$('#main').get(0).onselectstart = function(){return false;}; //禁止IE選取文字
	var temp_counter = 0;
	// 所有行程
	$(function() {
		$( "#mapFrame, #mySchedule" ).sortable({
			connectWith: ".connectedSortable",
			cancel: ".ui-state-disabled",
			change: function(event, ui) {
			//alert("activate!!")
			if(temp_counter == 0){
				console.log("next html:" + ui.item.next().html());
				if (ui.item.prev().attr('class') == "trans ui-state-disabled" ) {
				ui.item.prev().remove();
				};

				if (ui.item.next().attr('class') == "trans ui-state-disabled" ) {
					ui.item.next().remove();
				};
				$('<li class="trans ui-state-disabled">middle</li>').insertAfter(ui.item);
			};
			temp_counter = 1;

			},

			stop: function(event, ui) {
			//alert("stop!!");
			temp_counter = 0;	
			//alert('class:' + ui.item.prev().attr('class'));
			if (ui.item.prev().attr('class') == "trans ui-state-disabled" ) {
				ui.item.prev().remove();
			};

			if (ui.item.next().attr('class') == "trans ui-state-disabled" ) {
				ui.item.next().remove();
			};
			
			$('<li class="trans ui-state-disabled">after</li>').insertAfter(ui.item);
			$('<li class="trans ui-state-disabled">before</li>').insertBefore(ui.item);
			//ui.item.append('<li class="trans ui-state-disabled" id="trans_' + data[i]['id'] + '">');
			//ui.item.prepend('<li class="trans ui-state-disabled" id="trans_' + data[i]['id'] + '">');
			//ui.item.append('<li class="trans ui-state-disabled" id="trans_' + data[i]['id'] + '">');
			if ( $('ul#mySchedule li:last').attr('class') == "trans ui-state-disabled" ) {
				$('ul#mySchedule li:last').remove();
			};
			
			if ( $('ul#mySchedule li:first').attr('class') == "trans ui-state-disabled" ) {
				$('ul#mySchedule li:first').remove();
			};

			}
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
			$(".firstpage").hide();
			$(".menu").hide();
			$("#scheduleFrame").show();
			$("#buttonFrame").show();
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
				//url: "http://lightrip-cytms.herokuapp.com/step3",
				datatype: 'json',
				success: function(data, textSatus){
					//alert("ajax success");
					//$(".firstpage").hide();//處裡消掉的東西
					//$(".menu").hide();//嵌入body裡面會不會比較好
					//$("#scheduleFrame").show();
					//$("#buttonFrame").show();
					//$("li.block:even").append()
					//$('li.block:odd').append("<a href=javascript:lightbox('hahaha')>"+data['test']+"</a>");
					$('ul#mySchedule').append("<p><div onclick='calculateDistances();'>Calculate distances_driving(default) 打開console log</div></p>");
					var origin1 = "台北市羅斯福路四段一號";
					var destinationA = "台北火車站";

					var return_value = 0;
					return_value = calculateDistances(origin1,destinationA,data);
					//console.log("return:");
					//console.log(return_value);
					for ( var i = 0; i < data.length ; i++) {
						$('ul#mySchedule').append('<li class="block spotinfo" id="' + data[i]['id'] + '" name="' + data[i]['name'] + '" zoom="' + data[i]['zoom'] + '" lat="' + data[i]['lat'] + '" lon="' + data[i]['lon'] + '" ><a href=javascript:lightbox("' + data[i]['address'] + '")>' + data[i]['name'] + '</a></li>');



						if( i != (data.length - 1)){
							return_value = 0;
								//$('ul#mySchedule').append('<li class="trans ui-state-disabled" id="trans_' + data[i]['id'] + '"><div id="outputDiv_'+origin1+'_'+destinationA+'">default</div></li>');
								$('ul#mySchedule').append('<li class="trans ui-state-disabled" id="trans_' + data[i]['id'] + '"><div id="outputDiv">'+ $('#traffic_info_temp').html() +'</div></li>');
						}
						$('li#' + data[i]['id'] ).append('<img src="/img/' + data[i]['id'] + '" height="60%" width="90%"><div class="travel_time_space"><div class="travel_time_content">4hr</div></div>');
						//console.log($('#traffic_info_temp2').html() == 1);
						//$('li.block').appendTo('#mySchedule');
					/*$('li.block:odd').append("<a href=javascript:lightbox('hahaha')>"+data[0]['address']+"</a>");*/
					//console.log(data);
					}

				}
			}
			);
		});
	});
})(jQuery);
