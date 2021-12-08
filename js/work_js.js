$(document).ready(function(){
    $('.slider').bxSlider();
    
    $("path").click(function(){
        $("#banner").addClass("active");
        $("section").css("margin-top", "0");
    })
    
});