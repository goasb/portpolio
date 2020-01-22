// 모션

(function($){
    const motion = $('.motion_dell');
    const motionT = $('.motion_tesla');
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


    motionT.find('a').on('mouseenter',function(){
        motionT.addClass('active');
    });
    motionT.find('a').on('mouseleave',function(){
        motionT.removeClass('active');
    });

})(jQuery);