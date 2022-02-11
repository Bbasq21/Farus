$(document).ready(function () {
    $('#plazo').change(function () {
        var opval = $(this).val();
        if (opval == "3dias") {
            $('#alert1').modal("show");
        }
        if (opval == "5dias") {
            $('#alert2').modal("show");
        }
        if (opval == "10dias") {
            $('#alert3').modal("show");
        }
    });

    /* Create sound to be used later */
    $('.audio #track').jWebAudio('addSoundSource', {
        'url': '../audio/prueba.mp3',
    });

    /* Control sound with UI elements */
    var isLoaded = false;
    $(this).attr('disabled', 'disabled');
    $('.audio .bar').removeAttr('disabled');
    $('.audio #volumeBtn').removeAttr('disabled');
    $('.audio #pauseBtn').removeAttr('disabled');
    $('.audio .time').removeAttr('disabled');
    /* Play button */
    $('.audio #playBtn').click(function () {
        if (!isLoaded) {
            $('.audio #track').jWebAudio('load', function () {
                // Remember that play should be called inside
                // this callback function
                $('.audio #track').jWebAudio('play');
                $('.audio .bar').val(
                    $('.audio #track').jWebAudio('options')
                        .volume);
                $('.audio .time').removeAttr('disabled');
                
                /* Update position */
                var total = $('.audio #track').jWebAudio('duration');
                setInterval(function () {
                    var pos = 0;
                    if (total !== 0) {
                        pos = $('.audio #track').jWebAudio('seek')
                            / total * 100;
                    }
                    $('.time').val(pos);
                }, 100);
            });
            isLoaded = true;
            $('.audio #playBtn').hide();
            $('.audio #pauseBtn').show();
        } else {
            $('.audio #track').jWebAudio('play');
        }
        $(this).attr('disabled', 'disabled');
        $('.audio .bar').removeAttr('disabled');
        $('.audio #volumeBtn').removeAttr('disabled');
        $('.audio #pauseBtn').removeAttr('disabled');
        $('.audio .time').removeAttr('disabled');
    });
    $('.audio #pauseBtn').hide();
    /* Pause button */
    $('.audio #pauseBtn').attr('disabled', 'disabled').click(function () {
        $('.audio #track').jWebAudio('pause');
        $(this).attr('disabled', 'disabled');
        $('.audio #playBtn').removeAttr('disabled');
        $('.audio #playBtn').show();
        $('.audio #pauseBtn').hide();
    });

    /* Volume change */
    $('.audio .bar').attr('disabled', 'disabled')
        .attr('min', 0).attr('max', 100)
        .change(function () {
            $('.audio #track').jWebAudio('options', {
                'volume': parseInt($(this).val())
            });
        });

    $('.audio #volumeBtn').attr('disabled', 'disabled').change(function () {
        $('.audio #track').jWebAudio('options', {
            'muted': $(this).is(':checked')
        });
    });

    /* Seek position */
    $('.audio .time').attr('disabled', 'disabled')
        .attr('min', 0).attr('max', 100)
        .change(function () {
            var pos = parseInt($(this).val());
            if (pos !== 0) {
                var total = $('.audio #track').jWebAudio('duration');
                var seek = Math.ceil(total * pos / 100);
                $('.audio #track').jWebAudio('seek', seek);
            }
        });


});
// var vid = document.getElementById("track");

// function playvid() {
//     document.getElementById("playBtn").innerHTML = "<span class='icon-play colorGrey'></span>";
//     var vid = document.getElementById("track");
//     if (vid.paused){
//         vid.play();
//         document.getElementById("playBtn").innerHTML = "<span class='icon-pause colorGrey'></span>";
//     }
//     else{
//         vid.pause(); 
//         document.getElementById("playBtn").innerHTML = "<span class='icon-play colorGrey'></span>";
//     }
// }
