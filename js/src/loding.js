// 로딩창

(function($){
    const active = $('.img');
    setTimeout(function(){
        active.addClass('active');
    },700);

setTimeout(function(){
    window.location = "./main.html";
},3000);

})(jQuery);