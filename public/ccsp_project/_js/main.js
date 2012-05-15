// JavaScript Document
var map = new GMap(document.getElementById("myMap"));

//設定要顯示的控制項
map.addControl(new GSmallMapControl());
map.addControl(new GMapTypeControl());

//決定你 Google 地圖的中心點位置和縮放大小
map.setCenter(new GLatLng(22.996733, 120.212465), 16);

//標記在 Google 地圖上的經緯度
var point = new GLatLng(22.996733, 120.212465);
var marker = new GMarker(point);
map.addOverlay(marker);

//在地圖上放置標點說明
var text = "台南火車站";
map.openInfoWindowHtml (point,'<div id="mapFrame"><div class="block"><a href=javascript:lightbox("'+text+'")>'+text+'</a></div></div>');
$('.info').draggable();

//==========================================================================
//							insert point
//==========================================================================

google.load("jquery", "1.3");
google.load("jqueryui", "1.7");

google.setOnLoadCallback(function() {
	$('#main').css('-moz-user-select', 'none'); //禁止fx選取文字
	$('#main').get(0).onselectstart = function(){return false;}; //禁止IE選取文字
	
	$(".block").draggable({revert:true}); //放開區塊回復原位
	// 所有行程
	$("#mySchedule").droppable({
		accept: ".block",
		activeClass: 'droppable-active',
		hoverClass: 'droppable-hover',
		drop: function(ev, ui) {
			$(this).append($(ui.draggable));
		}
	});
	// 地圖中的框框
	$("#mapFrame").droppable({
		accept: ".block",
		activeClass: 'droppable-active',
		hoverClass: 'droppable-hover',
		drop: function(ev, ui) {
			$(this).append($(ui.draggable));
		}
	});
});

