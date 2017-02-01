var init = function() {
    var card = document.getElementsByClassName("card");  
    
    for (i=0;i < card.length;i++){
        card[i].addEventListener( 'click', function(){
            this.toggleClassName('flipped');
        }, false);
    }
    
    
    };


window.addEventListener('DOMContentLoaded', init, false);