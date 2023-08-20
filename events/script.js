// $('#btn1').click(function () {
//     alert('Button Clicked');
// })

// $('#btn1').on('click', function () {
//     alert('Button Clicked');
// })

// $('#btn1').click(function () {
//     $('p').show();
// });

// $('#btn2').click(function () {
//     $('p').hide();
// });

// $('#btn3').click(function () {
//     $('p').toggle();
// });

// $('#btn1').mouseenter(function () {
//     $('p').hide();
// });
// $('#btn1').mouseleave(function () {
//     $('p').show();
// });

$('#btn2').hover(function () {
    $('p').toggle();
});

$('#btn3').dblclick(function () {
    $('p').toggle();
});

$('#btn1').click(function (e) {
    console.log(e);
});

$(document).mousemove(function (e) {
    $('#coords').html(`Coords -- X: ${e.clientX} Y: ${e.clientY}`)
});

$('input[type="text"]').focus(function () {
    $(this).css('background-color', 'orange');
});

$('input[type="text"]').blur(function () {
    $(this).css('background-color', 'white');
});
