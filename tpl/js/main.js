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
        $('html').css('overflow','hidden');
        console.log("toggle"), 0 == o && ($(".toggle").addClass("open"), $(".menu").fadeIn("slow", function() {
            o = !0
        })), 1 == o && ($(".toggle").removeClass("open"), $(".menu").fadeOut("slow", function() {
            o = !1;

            $('html').css('overflow','auto');
        }))
    });


    $("#top-menu a.item").click(function(){
        $("#navToggle").click();
        $('html').css('overflow','auto');
    })
    if( !isMobile.any() ) {}



});