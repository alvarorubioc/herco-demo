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


$(function () {
  $(document).scroll(function () {
    var $nav = $(".sh-menu");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});


$(document).ready(function () {
  if ($(window).width() < 768) {
    $('#sh-navig').remove();
  }
});

$(document).ready(function () {

  if ($(window).width() > 769) {

    $('#menu-mobi').prop('id', 'nuevaID');
  }
});