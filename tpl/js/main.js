$(function() {
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    var o = !1;
    $(".toggle").bind("click", function() {
        console.log("toggle"), 0 == o && ($(".toggle").addClass("open"), $(".menu").fadeIn("slow", function() {
            o = !0
        })), 1 == o && ($(".toggle").removeClass("open"), $(".menu").fadeOut("slow", function() {
            o = !1
        }))
    });
    if( !isMobile.any() ) {}

    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var player;
    function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
            videoId: 'iPSOsvsW4e4',
            playerVars: {'rel':0},
        });
    }
    function stopVideo() {
        player.pauseVideo();
    }
    function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }
    $('#send_button button').click(function(e){
        e.preventDefault();
        var form = $('.animate.ajax_form');
        if ($('#phone_input').val()!='' || ($('#email_input').val() && isEmail($('#email_input').val()))) {
            form.submit();
        } else {
            $('#phone_input').addClass('error');
            $('#email_input').addClass('error');
        }
    });
    $('document').ready(function () {
        $('#pauseYoutube').click(function () {
            stopVideo();
        });
    });

});