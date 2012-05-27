
$(".travel_time_content").click(function(){
	alert("click!!");
	$(this).parentsUntil("li").append("<input class='input_travel_time' value='?? hr' size='2'/>");
	$(this).css("display","none");
	 $(".input_travel_time").keypress(function(e){
      if(e.keyCode == 13){
        $(this).blur();
        $(this).css("display","none");
       	//$(this).parentsUntil("li").after($(this).val());
        var playing_time = $(this).val()
        if (playing_time.slice(-2) == 'hr'){
          playing_time = playing_time.slice(0,-2);
        }
        if (playing_time.slice(-4) == 'hour'){
          playing_time = playing_time.slice(0,-4);
        }


        $(this).after("<div class='travel_time_self'>" + playing_time + " hr</div>");




      }
    }); 

})

        /**/
        $(".travel_time_self").dblclick(function(){
            alert("DBLclick!!");
            $(this).parentsUntil("li").append("<input class='input_travel_time' value='?? hr' size='2'>");
            $(this).css("display","none");
             $(".input_travel_time").keypress(function(e){
                if(e.keyCode == 13){
                  $(this).blur();
                  $(this).css("display","none");
                  //$(this).parentsUntil("li").after($(this).val());
                  var playing_time = $(this).val()
                  if (playing_time.slice(-2) == 'hr'){
                    playing_time = playing_time.slice(0,-2);
                  }
                  if (playing_time.slice(-4) == 'hour'){
                    playing_time = playing_time.slice(0,-4);
                  }


                  $(this).after("<div class='travel_time_self'>" + playing_time + " hr</div>");
                }
              }); 

})