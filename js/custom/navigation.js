$("#open-filters").click(function (e) {
  e.stopPropagation();
  $("#sh-products-subcategory").toggleClass("is-open");
  if ($(window).width() < 769) {
    $("body").addClass("mm--open");
  }
});

$('#close-aside-mobile').click(function (e) {
  if ($("#sh-products-subcategory").toggleClass('is-open')) {
    $("#sh-products-subcategory").removeClass("is-open");
    $("body").removeClass("mm--open");
  }
});

//add to cart buttom 
$('.add-to-cart-btn').click(function (){
  $(this).addClass('added');
});

//read more dropdown testimonial 
$('.readmore').on('click', function(){
  $(this).toggleClass('closed').siblings('.showmore-content').slideToggle(300);
  if ($(this).hasClass('closed')) {
    $(this).text('Leer menos');
  }
  else if ($(this)) {
    $(this).text('Leer más');
  }
});

//progress bar cart & checkout
setTimeout(function(){
  $('.checkout #step2').addClass('active');
  $('.thanks #step3').addClass('active');
}, 600);
$('.thanks #step2').addClass('active');


// List & Grid view list products
listButton = $('button.list-view');
gridButton = $('button.grid-view');
wrapper = $('div.sh-products__grid');

listButton.on('click', function () {
  gridButton.removeClass('active');
  listButton.addClass('active');
  wrapper.removeClass('sh-products__grid').addClass('sh-products__list animation');

});

gridButton.on('click', function () {
  listButton.removeClass('active');
  gridButton.addClass('active');
  wrapper.removeClass('sh-products__list').addClass('sh-products__grid');

});

// sh-nav on desktop -> products mega menu
$(".sh-nav-products--categories > li").hover(function() {
  $('.hover').removeClass('hover');
  $(this).addClass("hover");
});

$(".sh-nav-products").hover(
  function(){ $(this).addClass('megamenu-active'); },
  function(){ $(this).removeClass('megamenu-active'); }
);

$(document).ready(function () {
  
  'use strict';
  
   var c, currentScrollTop = 0,
       navbar = $('.sh-top-nav');

   $(window).scroll(function () {
      var a = $(window).scrollTop();
      var b = navbar.height();
     
      currentScrollTop = a;
     
      if (c < currentScrollTop && a > b + b) {
        navbar.addClass("scrollUp");
      } else if (c > currentScrollTop && !(a <= b)) {
        navbar.removeClass("scrollUp");
        navbar.addClass("scrollDown");
      }
        else if (c > currentScrollTop && !(a = 0 )) {
        navbar.removeClass("scrollDown");
      }
      c = currentScrollTop;
  });
  
});


// Dropdown

( function( $ ) {
	const dropdownContainer = $( '.dropdown' );

	// Toggles the sub-menu when dropdown toggle button clicked
	dropdownContainer.find( '.dropdown-btn' ).click( function( e ) {
		e.preventDefault();
		$( this ).toggleClass( 'dropdown-open' );

		//$( this ).nextAll( 'div' ).contents().unwrap();
		$( this ).nextAll( '.dropdown-content' ).slideToggle( 300 );

		// jscs:disable
		$( this ).attr( 'aria-expanded', $( this ).attr( 'aria-expanded' ) === 'false'
			? 'true' : 'false' );
		// jscs:enable
	} );

}( jQuery ) );

//C 
$('#closeSaveCart').click(function (){
  $('.dropdown-content').slideToggle( 300 );
});