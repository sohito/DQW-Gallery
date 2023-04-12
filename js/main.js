
// ドロワーメニュー
$(function() {
    $('.drawer-btn').on('click', function() {
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.drawer-nav').removeClass('open');
            $('.overlay').removeClass('hide');
        }else {
            $(this).addClass('active');
            $('.drawer-nav').addClass('open');
            $('.overlay').addClass('hide');
        }
    });
});

// オーバーレイをクリックしたらメニューを閉じたことになる仕様
$(function() {
    $('.overlay').on('click', function() {
        $(this).removeClass('hide');
        $('.drawer-nav').removeClass('open');
        $('.drawer-btn').removeClass('active');
    });
});

// ドロワーメニュー内の項目をクリックしたらメニューが閉じる仕様
$(function() {
    $('.drawer-nav li').on('click', function() {
        $('.drawer-nav').removeClass('open');
        $('.drawer-btn').removeClass('active');
        $('.overlay').removeClass('hide');
    });
});

// カルセールスライダー
$('.slider').slick({
    arrows: false,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: "10%",
    autoplay: true,
  });

// スクロールでフェードイン
$(function() {
    $(window).scroll(function() {
        $('.fade-in').each(function() {
            const elemPos = $(this).offset().top;
            // 位置を取得
            const scroll = $(window).scrollTop();
            // スクロールの位置（量）を取得
            const windowHeight = $(window).height();
            // 画面の高さを取得
            if(scroll > elemPos - windowHeight) {
                $(this).addClass('scroll-in');
            }
        });
    });
    jQuery(window).scroll();
})
