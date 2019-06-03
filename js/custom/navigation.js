function openFilters() {
   var element = document.getElementById("wrap");
   element.classList.toggle("is-open");
}

function openFiltersSearch() {
  var element = document.getElementById("wrap-search");
  element.classList.toggle("is-open");
}

function classToggle() {
  this.classList.toggle('icon-menu');
  this.classList.toggle('icon-cancel');
}
document.querySelector('#btn-filters').addEventListener('click', classToggle);



listButton = $('button.list-view');
gridButton = $('button.grid-view');
wrapper = $('div.sh-products__grid');


listButton.on('click',function(){
  gridButton.removeClass('sh-btn');
  listButton.removeClass('sh-btn-outline');
  gridButton.addClass('sh-btn-outline');
  listButton.addClass('sh-btn');
  wrapper.removeClass('sh-products__grid').addClass('sh-products__list');
  
});

gridButton.on('click',function(){
  gridButton.removeClass('sh-btn-outline');
  listButton.removeClass('sh-btn');
  gridButton.addClass('sh-btn');
  listButton.addClass('sh-btn-outline');
  wrapper.removeClass('sh-products__list').addClass('sh-products__grid');
  
});