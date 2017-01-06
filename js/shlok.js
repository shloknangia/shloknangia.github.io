      /////////////////////////////////
     //         Loader            
    //////////////////////////////////
$(document).ready(function() {

  $(".btn").click(function() {
           $(".home").toggleClass("telaCheia");
           $("body").toggleClass("telaCheia");
           $("#about img").toggleClass("imgPequena");
           $("article").toggleClass("textoPequeno");
           $("h1.animated").toggleClass("esconde");
           $("h2.animated").toggleClass("mostra");
           $(".btn").toggleClass("btn-grande");
           $("#mysocial").toggleClass("mostra");
           $("#projects").toggleClass("mostra");
  });


  $("#menu").click(function () {
    $("#sidemenu").toggle( "slow" );
  })
});