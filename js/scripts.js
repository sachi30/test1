///facebook-button
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// google map
var map;
function initMap() {
  var myLatLng = {lat: 25.0445614, lng: 55.1201896};

  map = new google.maps.Map(document.getElementById('map'), {
    center:myLatLng,
    zoom: 14
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });
}


$(document).ready(function(){

  // Smooth scrolling
  var $root = $('html, body');
    $('.navbar-nav a').click(function() {
        var href = $.attr(this, 'href');
        $root.animate({
            scrollTop: $(href).offset().top
        },500, function () {
            window.location.hash = href;
          });
        return false;
  });

  // Stellar
  $("#faq").stellar();

  // Tooltips
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  //text-area
  $(".message-box").css("background-color","#fff");

  //submit button click
  $("#button").on("click", function() {
    
    var comment = $('.message-box').val();    
    console.log(comment);
    var message = "Submission successful :"+comment.toUpperCase();
   
    if(comment === ""){
      $(".message-box").css("border","2px solid red");
    }else{
      $("#visible-comment").html(message);
      $('.message-box').hide();
      $("#char-count").hide();
    }    
    return false;
  });

  //text area key up event catch
  $(".message-box").on("keyup", function(){
    console.log("Key up happened");
   
    var charCount = $('.message-box').val().length;
    console.log(charCount);
    $("#char-count").html(charCount);
    if(charCount > 50){
      $("#char-count").css("color","red");
    }else {
      $("#char-count").css("color","black");
    }
  }); 

  // work section
  var i=0;
  while(i < works.length) {
    $("#work").append('<div class="col-md-3 col-xs-6">\
      <a href="'+works[i].url+'" class="work-img" target="_blank">\
      <img src="'+works[i].pic+'" class="img-responsive">\
      <span class="info"><p class="proj-title">Title:</p> '+works[i].title+' </span>\
      </a></div>');
    var images = $("#work img");
    console.log(images); 
    if(i%2 === 0){
      $(images[i]).css("border", "2px solid DodgerBlue");
    } else {
      $(images[i]).css("border", "2px solid salmon");
    };
    i++;
  };

  // title loading mouse enter
  $(".work-img").mouseenter(function(){
     $(".info",this).show();
  });

  // title hide mouse leave
  $(".work-img").mouseleave(function(){
     $(".info",this).hide();
  });
  

});

 







