/// <reference types="../@types/jquery"/>

// $('button').on('click', function (e) {
//     let hide = $('#S-head').next("p").toggleClass('d-none')
// });

// $(document).ready(function() {
//     $('.S-head').on('click', function(e) {

//       var $nextBody = $(this).next('.S-body');
      
//       $('.S-body').not($nextBody).addClass('d-none');

//       $nextBody.toggleClass('d-none');
//     });
//   });

$(document).ready(function() {
    $('#menu-open').on('click', function(e) {
    
      $('#head').addClass('ml-25');
      $('#menu').addClass('w-25').removeClass('w-0 d-none');
      $('#menu').animate({ width: '25%' }, 15000);
    });
});

$(document).ready(function() {
    $('.close').on('click', function(e) {
      $('#menu').addClass('d-none');
      $('#head').removeClass('ml-25');
    });
});
  

// $(document).ready(function() {
//     $('#menu-open').on('click', function(e) {
//       e.preventDefault();
//       $('#menu').removeClass('d-none').animate({
//         width: 'toggle'
//       }, 15000); // Adjust the duration (in milliseconds) for slower appearance
//     });
//   });


  
  
$('.S-head').on('click', function(e) {
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

$('#text-area').on('keyup', function (e) {
    let massage = $('textarea').val();
    let characterCount = massage.length;

    const fixedLength = 100;
    let result = fixedLength - characterCount;

    $('#remainingCharacters').text(result);
});




  



