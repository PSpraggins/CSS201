$(document).ready(function(){
    $("div.collapsed-menu").click(function() {
        $("#side-nav-menu").css("display", "inherit");
    });
});
$(document).ready(function(){
    $("div.menu-close").click(function() {
        $("#side-nav-menu").hide();
    });
});

$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 150) {
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  });