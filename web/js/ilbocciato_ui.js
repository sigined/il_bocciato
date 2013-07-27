
$(document).ready(function(){
    $('#logo').hover(
        function(e) {          
            $("#logo").animate({"margin-top": "0px"}, "fast");
        }
        ,function(e) {          
            $("#logo").animate({"margin-top": "-20px"}, "fast");
        }
    )    
});
