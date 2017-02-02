var init = function() {
    var order_btn = $('.order_btn');  
    console.log(order_btn);
    for (i=0;i < order_btn.length;i++){
        $(order_btn[i]).click(function (evt) {
            $(evt.target).parent().parent().parent().toggleClass('flipped');
        });
    }
    
    
    };


window.addEventListener('DOMContentLoaded', init, false);