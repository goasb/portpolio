(function($){

 const win = $(window);
 const htmlEl = $('html,body');
 const wrap = $('#wrap');
 const scrollEl = wrap.find('.scroll');

 const gnb = $('.gnb');
 const gnbUl = gnb.find('ul');
 const gnbLi = gnbUl.find('li');
 const gnbLink = gnbLi.find('a');

 const pro = $('.profile');

 let winH = win.outerHeight(); 
 let pro_offset = pro.offset().top;
 let myPro_offset = pro_offset - (winH/2);

 let aboutMe = $('.aboutme');
 let aboutCar = $('.career');
 win.on('scroll', function(){
    let winScroll = win.scrollTop();

    if(winScroll > myPro_offset){
        pro.addClass('action');
    }else{
        pro.removeClass('action');
    };
 });


//  마우스 휠 ===================================
 htmlEl.animate({scrollTop:0});
 let myScrollElTop = [];
 let scrollLen = scrollEl.length;
 let timed = 500;

 for(let i = 0; i < scrollLen; i++){
    let scTop = scrollEl.eq(i).offset().top;
    myScrollElTop.push(scTop);
 }

 let myStatus = true , n , useN = 0;




 const ScrollMagic = function(){
     htmlEl.animate({scrollTop:myScrollElTop[useN]},
        timed,'easeOutSine',function(){
            myStatus = true;
   });
 }; // scrollMagic()

 $(window).on('mousewheel DOMMouseScroll',function(e){
     if(e.originalEvent.wheelDelta){
         n = e.originalEvent.wheelDelta * -1;
     }else{n = e.originalEvent.delta * 40;}
     
     if(myStatus){
         myStatus = false;
       if(n > 0){useN++;
        if(useN >= scrollLen){useN = scrollLen-1;} ScrollMagic();
      }else{useN--;
        if(useN < 0){useN = 0;} ScrollMagic();}
     }
 });
 //  마우스 휠 ===================================
    gnbLink.on('click',function(e){
        e.preventDefault();
        useN = $(this).parents('li').index();
        ScrollMagic();
    });
// ==============================================
// 터치 사용시
   let startP,endP;
   $(window).on('touchstart',function(e){
    startP = e.originalEvent.touches[0].pageY;
   }); // touchstart

   $(window).on('touchmove',function(){
    htmlEl.animate({scrollTop:myScrollElTop[useN]},0);
   }); // touchmove

   $(window).on('touchend',function(e){
       endP = e.originalEvent.changedTouches[0].pageY;
      
    if(myStatus){
        myStatus = false;
        if(startP > endP){
            useN++;
            if(useN >= scrollLen){useN = scrollLen-1;}
            ScrollMagic();
        }else{
            useN--;
            if(useN < 0){useN = 0;}
            ScrollMagic();
        }
    }
   });

})(jQuery);