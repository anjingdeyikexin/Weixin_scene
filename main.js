/**
 * Created by wen on 2016/9/23.
 */
(function () {
    var vd=document.getElementById("vd");
    console.log(vd)
    var MusicBJ=document.getElementById("MusicBJ");
    console.log(MusicBJ);
    var a=0;
    MusicBJ.onclick=function () {
        a++;
        vd.play();

    }






    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        direction: 'vertical',
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素
            swiperAnimate(swiper); //初始化完成开始动画
            setTimeout(function() {  /*0.01s延迟时间 infinite是循环*/
                select(".ZFJ","changebg 1s linear infinite alternate");
                select(".baozha","BZ 1s linear 0.01s infinite alternate");
                select(".yuncai","YC 1s linear 0.01s infinite alternate");
            },2000);
        },
        
        onSlideChangeEnd: function(swiper){
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画

            switch (swiper.activeIndex) {/*判断当前动画页数*/
                case 0:
                    setTimeout(function() {  /*0.01s延迟时间 infinite是循环*/
                        select(".ZFJ","changebg 1s linear infinite alternate");
                        select(".baozha","BZ 1s linear 0.01s infinite alternate");
                        select(".yuncai","YC 1s linear 0.01s infinite alternate");
                    },2000);
                    break;
                case 3:
                    setInterval(function() {
                        select(".Txt_lighten","turnFlash 0.7s linear infinite alternate");
                    },2100);
                    break;

            }
    }

    });
    //第一张计时器
    function select(Name,type) {
        var a=document.querySelector(Name);
        a.style.webkitAnimation=type;
        // console.log(a);
    }

})();