$( function() {
    $( "#tabs" ).tabs();
  } );

  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      items:5,
      loop: true,
      nav: true,
      autoplay: true,
      autoplayTimeout: 7000,
    });
  });
  var header = document.getElementById("tabs");
var btns = header.getElementsByClassName("tab");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 6,
    autoplay: true,
    loop: true,
    autoplayTimeout: 7000,
  });
});

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


 
jQuery(document).ready(function(){
  $(".dropdown").hover(
      function() { $('.dropdown-menu', this).fadeIn("fast");
      },
      function() { $('.dropdown-menu', this).fadeOut("fast");
  });
});

$(window).scroll(function(){
  if($(this).scrollTop()>100)
  {
    $("nav").addClass("sticky")
  }
  else{
    $("nav").removeClass("sticky")
  }
});



 