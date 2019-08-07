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

$('.add-to-cart-btn').click(function (){
  $('.add-to-cart-btn .icon').addClass('icon-check').removeClass('icon-basket');
  setTimeout(function() {
    $('.add-to-cart-btn .icon').removeClass('icon-check').addClass('icon-basket');
  }, 2000);

});


function openFiltersSearch() {
  var element = document.getElementById("wrap-search");
  element.classList.toggle("is-open");
}


listButton = $('button.list-view');
gridButton = $('button.grid-view');
wrapper = $('div.sh-products__grid');


listButton.on('click', function () {
  gridButton.removeClass('active');
  listButton.addClass('active');
  wrapper.removeClass('sh-products__grid').addClass('sh-products__list');

});

gridButton.on('click', function () {
  listButton.removeClass('active');
  gridButton.addClass('active');
  wrapper.removeClass('sh-products__list').addClass('sh-products__grid');

});

// hide sh-nav on desktop & sh-nav-desktop on mobile and tablet
$(document).ready(function () {
  if ($(window).width() < 1025) {
    $('#sh-nav-desktop').remove();
  }
  if ($(window).width() > 1025) {
    $('#sh-nav').remove();
  }
});


