$( document ).ready(function() {
  $('.second-nav').affix({
    offset: {
      top: 760
    }
  });
  count=3

  $(".add-btn").click(function(){
    $(".violation-input").append('<input type="text" placeholder="Violation Number"  class="mar-20 mar-small" id=' + '"violation-' + count + '">' )
  });

  var path = window.location.pathname
  if(path == '/resources/' || path == '/glossary/' || path == '/faq/' || path == '/violations/' || path == '/agencies/' || path == '/services/' || path == '/contact/') {
    $('ul.nav a[href="'+ path.slice(0,-1) +'"]').parent().addClass('active');
    $('ul.nav a').filter(function() {
      return this.href == url;
    }).parent().addClass('active');
  } else {
    $('#secondary-nav  ul.nav li a').click(function() {
      var $this = $(this);
      $this.parent().siblings().removeClass('active').end().addClass('active');
    });
  }

  $(".search").click(function(){
    var boro_no = $('#borough-select').val();
    var house_no = $('#house-no').val();
    var street = $('#street').val();
    var params = { 
      boro: boro_no,
      houseno: house_no,
      street: street
    }

    var url = "http://a810-bisweb.nyc.gov/bisweb/PropertyProfileOverviewServlet?" + $.param(params)

    var redirectWindow = window.open(url, '_blank');
    redirectWindow.location;
  });


  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top - 100
          }, 1000);
          return false;
        }
      }
    });
  });
});
