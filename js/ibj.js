//메뉴
$(function(){
$(".navi>li").mouseover(function(){
    $(this).find(".submenu").stop().slideDown(500);
});
            
$(".navi>li").mouseout(function(){
    $(this).find(".submenu").stop().slideUp(500); 
});
            
//modal
$("#m").click(function(){
    $("#modal").addClass("active"); 
});
            
$(".btn").click(function(){
    $("#modal").removeClass("active"); 
});

//css
$(".notice").mouseover(function(){
    $("#op1").css("opacity", "0.7"); 
});
            
$(".notice").mouseout(function(){
    $("#op1").css("opacity", "1.0"); 
});
          
$(".banner1").mouseover(function(){
    $("#op2").attr("src", "image/prod1.jpg");
});
            
$(".banner1").mouseout(function(){
    $("#op2").attr("src", "image/prod2.jpg");
});
            
$(".banner2").mouseover(function(){
    $("#op3").fadeIn("slow");
});
            
$(".banner2").mouseout(function(){
    $("#op3").fadeOut("slow");
});
//유형1
//$(".slider div:gt(0)").hide();
//  setInterval(function(){
//$(".slider div:first-child").fadeOut().next("div").fadeIn().end().appendTo(".slider");}, 3000);
//유형2
//var c=0;
//var s;
//setInterval(function(){
//  if(c<2){c++;}
//  else{c=0;}
//  s=c*(-500)+"px";
//  $(".ibox").animate({top:s});
//}, 3000);
//유형3
//var c=0;
//var s;
//setInterval(function(){
//  if(c<2){
//      c++;
//  }
//  else{
//      c=0;
//  }
//  s=c*(-2000)+"px";
//  $(".ibox").animate({left:s}, 400);
//}, 3000);
//유형4
var current=0;
setInterval(function(){
    var next=(current+1)%3;
    $(".slider").find("div").eq(current).fadeOut();
    $(".slider").find("div").eq(next).fadeIn();
    current=next;
}, 3000);
});