  $(document).ready(function(){
    function scroll(linkId) {
      $(linkId).on("click", function(e){
          var anchor = $(this);
          $('html, body').stop().animate({
              scrollTop: $(anchor.attr('href')).offset().top
          }, 777);
          e.preventDefault();
          return false;
      });
    }
    function clickImg(idImg) {
      var anchor = $(this);
      $(idImg).on("click", function(){
        if($(idImg).css("position") == "absolute") {
          $(idImg).removeClass("positionAbsolute");
        } else {
            $(idImg).addClass("positionAbsolute");
        }
      })
    }
    $('.menu-btn').on('click', function(e) {
      e.preventDefault();
      $(this).toggleClass('menu-btn_active');
      $('.menu-nav').toggleClass('menu-nav_active');
    });
    scroll("#btnQuestions");
    scroll("#btnParticipation");
    scroll("#btnExchange");
    scroll("#btnRegulations");
    scroll("#btnProd");
    clickImg("#icon1");
    clickImg("#icon2");
    clickImg("#icon3");
  });
