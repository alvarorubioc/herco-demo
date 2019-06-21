function openFilters() {
   var element = document.getElementById("wrap");
   element.classList.toggle("is-open");
}

function openFiltersSearch() {
  var element = document.getElementById("wrap-search");
  element.classList.toggle("is-open");
}


listButton = $('button.list-view');
gridButton = $('button.grid-view');
wrapper = $('div.sh-products__grid');


listButton.on('click',function(){
  gridButton.removeClass('active');
  listButton.addClass('active');
  wrapper.removeClass('sh-products__grid').addClass('sh-products__list');
  
});

gridButton.on('click',function(){
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

//-----JS for Price Range slider-----

$(function() {
	$( "#slider-range" ).slider({
	  range: true,
	  min: 130,
	  max: 500,
	  values: [ 130, 250 ],
	  slide: function( event, ui ) {
		$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
	  }
	});
	$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
	  " - $" + $( "#slider-range" ).slider( "values", 1 ) );
});