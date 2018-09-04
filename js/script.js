$(document).ready(function () {

    (function () {

        var slider = $(".slider");

        function play() {

            var slide = $(".slide");
            var currentImg = $(".active");
            var currentIndex = currentImg.index();
            var nextIndex = currentIndex  + 1;
            var nextImg = slide.eq(nextIndex);
            var lastImg = slide.eq(-1);
            var lastIndex = lastImg.index();
            currentImg.removeClass("active");

            if(lastIndex  === currentIndex) {
                slide.eq(0).addClass("active");

            } else {
                nextImg.addClass("active");
            }
        }

        var slideAutoPlay = setInterval(play, 3000);

        slider.mouseenter(function () {
            clearInterval(slideAutoPlay);
        });

        slider.mouseleave(function () {
            slideAutoPlay = setInterval(play, 3000);
        });

        $(".btn_next").click(function () {
            play();
        });

        function prev() {
            var slide = $(".slide");
            var currentImg = $(".slide.active");
            var currentIndex = currentImg.index();
            var prevIndex = currentIndex  - 1;
            var prevImg = slide.eq(prevIndex);
            currentImg.removeClass("active");
            prevImg.addClass("active");
        }

        $(".btn_prev").click(function () {
            prev();
        });

        $(function() {

            $(slider).swipe( {
                swipeLeft:function() {
                    clearInterval(slideAutoPlay);
                    prev();
                },
                threshold:0
            });
        });

        $(function() {

            $(slider).swipe( {
                swipeRight:function() {
                    clearInterval(slideAutoPlay);
                    play();
                },
                threshold:0
            });
        });
    })();
});