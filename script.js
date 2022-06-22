//document.querySelector()

// 変数名に＄をつける（jQueryのオブジェクト)
var $btnIcon = $('#btn i')

$('#btn').on('click', function () {

    //.classList.toggle('open')と同じ
    $('body').toggleClass('open')
    console.log($('body').hasClass('open'))

    if ($('body').hasClass('open')) {

        // removeclassの戻り値を確認するとObject
        $btnIcon
            .removeClass('ri-menu-line')
            .addClass('ri-close-line')
    }
    else {
        $btnIcon
            .removeClass('ri-close-line')
            .addClass('ri-menu-line')
    }

})