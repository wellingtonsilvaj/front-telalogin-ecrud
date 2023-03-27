$(document).ready(function (){
    //Apresentar ou ocultar o Menu
    $('.sidebar-toggle').on('click', function (){
        $('sidebar').toggleclass('toggled');
    });
    
    //carregar aberto o submenu
    var active = $('.sidebar .active');
    if (active.lenght && active.parent('.collapse').length){
        var parent = active.parent('.collapse');
        
        parent.prev('a').attr('aria-expanded', true);
        parent.addClass('show');
    }
});