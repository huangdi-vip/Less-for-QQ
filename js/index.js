/**
 * Created by Administrator on 2017/2/14.
 */
$(function () {
    var index=0,timer=null;
    show(index);
    $('.gps li').on('click',function () {
        index=$(this).index();
        $(this).addClass('curr').siblings().removeClass('curr');
        $('section').eq(index).show().siblings('section').hide();
        show(index);
        setTimeout(function () {
            $('section').eq(index).removeClass('current').siblings('section').addClass('current');
        },10);
    });
    $(window).mousewheel(function (event,d) {
       clearTimeout(timer);
       timer = setTimeout(function () {
           index -= d;
           if(index > $('.gps li').length - 1){
               index=0;
           }else if(index<0){
               index=$('.gps li').length - 1;
           }
           $('.gps li').eq(index).addClass('curr').siblings().removeClass('curr');
           $('section').eq(index).show().siblings('section').hide();
           setTimeout(function () {
               $('section').eq(index).removeClass('current').siblings('section').addClass('current');
           },10);
           show(index);
       },400);
    });
    function show(index) {
        if(index == 0){
            $('.logo').hide();
            $('.scroll').show();
        }else{
            $('.logo').show();
            $('.scroll').hide();
        }
    };
});