function scrollToAnchor(aid) {
    var aTag = $("p[id='" + aid + "']");
    $('html,body').animate({ scrollTop: aTag.offset().top }, 'slow');
}

$("#link").click(function () {
    scrollToAnchor('id3');
});
