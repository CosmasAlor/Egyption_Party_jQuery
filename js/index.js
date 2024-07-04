/// <reference types="../@types/jquery"/>


$('.btn-close-white').on('click', function () {
    $('.menu').animate({ width: '0%' }, 700);
    $('ul').animate({ width: '0' }, 700, function() {
        $(this).hide();
    });
    $('#head').animate({ marginLeft: '0' }, 700, function() {
        $(this).removeClass('ml-25');
    });
    $('#menu-open').animate({ marginLeft: '0' }, 700, function() {
        $(this).removeClass('ml-25');
    });
});
$('#menu-open').on('click', function () {
    $('.menu').animate({ width: '250px' }, 700);
    $('#head').animate({ marginLeft: '250px' }, 700, function() {
        $(this).addClass('ml-25');
    });
    $('#menu-open').animate({ marginLeft: '250px' }, 700, function() {
        $(this).addClass('ml-25');
    });
    $('ul').removeClass('d-none').show();
});


$('.S-head').on('click', function() {
    var $nextBody = $(this).next('.S-body');
    $('.S-body').not($nextBody).addClass('d-none');
    $nextBody.slideToggle(300).toggleClass('d-none');
});

$('#timer').countdown('2024/8/1', function(e) {
    $('.col-lg-3:eq(0) h3').html(e.strftime('%D Days'));
    $('.col-lg-3:eq(1) h3').html(e.strftime('%H H'));
    $('.col-lg-3:eq(2) h3').html(e.strftime('%M M'));
    $('.col-lg-3:eq(3) h3').html(e.strftime('%S S'));
});

$('#text-area').on('keyup', function() {
    let message = $(this).val();
    let characterCount = message.length;
    const fixedLength = 100;
    let result = fixedLength - characterCount;
    $('#remainingCharacters').text(result);
});



$('a').on('click', function(event) {

    var targetId = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(targetId).offset().top
    }, 1000); // Duration of the animation in milliseconds (1000ms = 1 second)
});

