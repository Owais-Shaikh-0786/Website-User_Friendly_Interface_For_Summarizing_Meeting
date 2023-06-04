$( document ).ready(function() {
    $('.task-box').on( "click", function() {
        console.log( "window loaded" );
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.transcription').addClass('active');
        } else {
            $(this).addClass('active');
        }
    });
});
$('.next-btn').on('click', function() {
    window.location.href = "./transcript.html";
});