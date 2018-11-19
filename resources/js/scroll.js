$(function(){
      //Keep track of last scroll
      var lastScroll = 0;
      $(window).scroll(function(event){
          //Sets the current scroll position
          var st = $(this).scrollTop();
          //Determines up-or-down scrolling
          if (st > lastScroll){
            $(".landing").css("display","none");
          }
          else {
           $("landing").css("display","block");
          }
          //Updates scroll position
          lastScroll = st;
      });
    });
