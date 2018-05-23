// .jf-home-services-icon
$(function(){
    autoIconfont();
    // 如果屏幕高度宽度发生了变化，再调用
    window.onresize = autoIconfont;
    $('.jf-home-services-icon').mouseover(function () {
        var height = $(".jf-home-services-wrap").css("height");
        $(this).css('line-height', height);
        var height_string = (parseFloat(height)/2).toFixed(0) + "px";
        $(this).css('font-size', height_string);
    });
    $('.jf-home-services-icon').mouseleave(function () {
        var height = $(".jf-home-services-wrap").css("height");
        $(this).css('line-height', height);
        var height_string = (parseFloat(height)/3).toFixed(0) + "px";
        $(this).css('font-size', height_string);
    })
    // 自动改变iconfont的行高
    function autoIconfont() {
        var height = $(".jf-home-services-wrap").css("height");
        $(".jf-home-services-icon").css('line-height', height);
        var height_string = (parseFloat(height)/3).toFixed(0) + "px";
        $(".jf-home-services-icon").css('font-size', height_string);
    };

});