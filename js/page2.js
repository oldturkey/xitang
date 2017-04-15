$(function(){
$('.bd-text span').toggle(function(){
        $(this.parentNode.parentNode).next().animate({
           mul:{
                h : 153,
				o : 100
            }
        });
    },function(){
        $(this.parentNode.parentNode).next().animate({
            mul:{
                h:0,
                o:0
            }
        });
    });
});