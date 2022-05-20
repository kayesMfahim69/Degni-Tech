$(window).scroll(function() {
  if ($(this).scrollTop() > 600) {
    $(".scrollup").fadeIn();
  } else {
    $(".scrollup").fadeOut();
  }
});
$(".scrollup").click(function() {
  $("html, body").animate({
    scrollTop: 0
  }, 600);
  return false;
});
  $(window).scroll(function () {

    if ($(this).scrollTop() > 200) {
      $('.navbar').addClass('menubg');
    }
    else {
      $('.navbar').removeClass('menubg');
    }
  });
