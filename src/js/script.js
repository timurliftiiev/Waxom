"use strict";

// Loader
var $loader = $('.loader');
var $scale = $('.loader__scale');
var $percentage = $('.loader__perc');
var $images = $('img');
var $imagesAmount = $images.length;
var $imagesLoaded = 0;



for (var i = 0; i < $imagesAmount; i++) {
  var imageClone = new Image();
      imageClone.onload = imageLoaded;
      imageClone.onerror = imageLoaded;
      imageClone.src = $images[i].src;
}

function imageLoaded() {
  $imagesLoaded++;

  var $perc = Math.round((100 / $imagesAmount) * $imagesLoaded);

  $percentage.html($perc);
  $scale.css("width", $perc + '%');

  if ($imagesLoaded >= $imagesAmount) {
      setTimeout(function() {
                  if (!$loader.hasClass('js-hidden')) {
                      $loader.addClass('js-hidden');
                  }
              }, 1000);
  }
};

$(document).ready(function(){

  // Sandwich button
  $('#js-sandwich').click(function() {
    // Button Animation
    $(this).toggleClass('js-close');

    // Mobile Menu
    $('.mobile').toggleClass('js-show');
  });

  // Active Button Mobile Menu
  $('.mobile__link').click(function(e) {

    $('.mobile__link').removeClass('js-active');
    $(e.target).addClass('js-active');

    // Remove Classes after click on menu item
    $('body').removeClass('no-scroll');
    $('.mobile').removeClass('js-show');
    $('#js-sandwich').removeClass('js-close');
  });

  // Slick Slider
  $('.slider').slick({
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: false,
      speed: 1000
    });

    // MixitUP
    $('.portfolio__list').mixItUp();

    // Active Button Portfolio
    $(".portfolio__btn").click(function() {
  		$(".portfolio__btn").removeClass("portfolio__btn--active");
  		$(this).addClass("portfolio__btn--active");
    }); 

    // Scroll
    $("a").on('click', function(event) {

      if (this.hash !== "") {
        event.preventDefault();

        var hash = this.hash;

        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1000, function(){
          window.location.hash = hash;
        });
      } 
  });
// End Scroll

  // WOW
  new WOW().init();
});