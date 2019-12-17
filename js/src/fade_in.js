// 사라졌다가 나오기

(function($){

const win = $(window);
const pro = $('.profile');

let winH = win.outerHeight(); 
let pro_offset = pro.offset().top;
let myPro_offset = pro_offset - (winH/2);

win.on('scroll', function(){
   let winScroll = win.scrollTop();

   if(winScroll > myPro_offset){
       pro.addClass('action');
   }else{
       pro.removeClass('action');
   };
});
})(jQuery);