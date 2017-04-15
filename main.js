$(function(){
    //轮播器初始化
    $('#slideBox img').opacity(0);
    $('#slideBox img').eq(1).opacity(100);
    
    var  banner_index=1;
    var banner_timer=setInterval(banner_fn,2500);
    
    function banner(obj,prev){
        //$('#banner img').css('display','none');
        //$('#banner img').eq($(obj).index()).css('display','block');
           
        //$('#banner img').opacity(0);使用opacity切换图片时会从白底开始，影响体验
        $('#slideBox img').eq(prev).animate({
            attr:'o',
            target:0,
            t:50,
            step:10
        });
        $('#slideBox img').eq($(obj).index()).animate({
            attr:'o',
            target:100,
            t:50,
            step:10
        });
     
        
    }
    function banner_fn(){
        if(banner_index>=$('#slideBox ul li').length())banner_index=0; 
        banner($('#slideBox ul li').eq(banner_index).first(),banner_index==0?$('#slideBox ul li').length()-1:banner_index-1);
        banner_index++;
    }
    
//    alert($('.in-desp .in-desp-cover').length());
    $('.in-desp ul li').hover(function(){
        $('this .in-desp-cover').eq($(this).index()).css('opacity','100');
    },function(){
        $('this .in-desp-cover').eq($(this).index()).css('opacity','0');
    })
})
