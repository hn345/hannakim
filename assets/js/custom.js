// 포트폴리오 그리드 필터

var $btns = $('.btn').click(function() {
    if (this.id == 'all') {
        $('#elementList > div').fadeIn(800);
    } else {
        var $el = $('.' + this.id).fadeIn(800);
        $('#elementList > div').not($el).hide();
    }
    $btns.removeClass('active');
    $(this).addClass('active');
})


/* Demo purposes only */
$("figure").mouseleave(
    function () {
        $(this).removeClass("hover");
    }
);
