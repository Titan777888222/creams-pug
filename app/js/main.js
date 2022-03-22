'use strict';
$(document).ready(function(){
    $('.header-burger').click(function(event){
        $('.header__burger_menu, .header-burger').toggleClass('active');
    });
});

$(function(){
    $('.viewModal').modal({
    target : '#modal',
    animation : 'top',
    position : 'center',
    overlayColor : '#CCC',
    close : '.closeMe'
    });
    
    $('.viewModal1').modal({
    target : '#modal1',
    animation : 'left',
    position : 'center',
    overlayColor : 'lightblue',
    close : '.closeMe'
    });
    
    $('.viewModal2').modal({
    target : '#modal2',
    animation : 'right',
    position : 'center',
    overlayColor : 'lightgreen',
    close : '.closeMe'
    });
    
    $('.viewModal3').modal({
    target : '#modal3',
    animation : 'bottom',
    position : 'center',
    overlayColor : 'cyan',
    close : '.closeMe'
    });
    
    $('.viewModal4').modal({
    target : '#modal4',
    animation : 'zoom',
    position : '10px auto', //top 10px left auto
    easing : 'easeOutElastic',
    on : 'mouseenter',
    overlayClose : false,
    overlayColor : 'black',
    overlayOpacity : 0.5,
    close : '.closeMe'
    });
    
    });