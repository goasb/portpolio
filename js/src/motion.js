// 모션

(function($){
    const motion = $('.motion');
    const active = motion.find('.span');
    
    // setTimeout(function(){
    //     motion.addClass('active');
    // },700);
    motion.find('a').on('mouseenter',function(){
        motion.addClass('active');
    });
    motion.find('a').on('mouseleave',function(){
        motion.removeClass('active');
    });

})(jQuery);