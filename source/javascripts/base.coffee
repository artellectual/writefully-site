$(document).ready ->
  $(window).scroll ->
    x = $("html").scrollTop() * -.05
    $(".hero").animate({top: x + "px"}, 0)
