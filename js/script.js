$(document).ready(function () {

    (function () {

        $(".btn_next").click(function () {

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

        });

        $(".btn_prev").click(function () {

            var slide = $(".slide");
            var currentImg = $(".slide.active");
            var currentIndex = currentImg.index();
            var prevIndex = currentIndex  - 1;
            var prevImg = slide.eq(prevIndex);
            currentImg.removeClass("active");
            prevImg.addClass("active");
        });
    })();
});