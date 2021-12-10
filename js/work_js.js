$(document).ready(function(){
    $('.slider').bxSlider();
    
    $("#close_icon").click(function(){
        $("#banner").addClass("active");
        $("section").css("margin-top", "0");
    });
    
    $("#menubtn").click(function(){
        var arrow_class_name = $("#button-icon").attr("class");
        
        var left_class = "svg-inline--fa fa-arrow-left fa-w-14";
        
        var right_class = "svg-inline--fa fa-arrow-right fa-w-14";
        
        if(arrow_class_name == left_class){
            $("#button-icon").attr("class", right_class);
            $("aside").css("display", "inline-flex");
            $("#menubtn").removeClass("active");
            $(".submenu").fadeToggle(300);
            
        }else{
            $("#button-icon").attr("class", left_class);
            $("aside").css("display", "");
            $("#menubtn").addClass("active");
            $(".submenu").hide();
        }
    });
    
});