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
    scroll("#btnQuestions");
    scroll("#btnParticipation");
  });
