jQuery(document).ready(function($) {
    $(".btn-about>a").click(function(event){
        event.preventDefault();
         $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
    });
});

$( "#btn-port" ).click(function() {
    $( "#contato, #sobre" ).hide("fast");
    $( "#portfolio" ).show("slow");
});

$( "#btn-cont" ).click(function() {
    $( "#portfolio, #sobre" ).hide("fast");
    $( "#contato" ).show("slow");
});

$( "#btn-sobre" ).click(function() {
    $( "#contato, #portfolio" ).hide("fast");
    $( "#sobre" ).show("slow");
});