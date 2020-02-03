document.addEventListener('DOMContentLoaded', function() {
  
    [].forEach.call(document.querySelectorAll('.link-ofuscado'), function(e) {
      
      var a = document.createElement('a');
      a.innerHTML = e.innerHTML;
      
      e.parentNode.insertBefore(a, e);
      e.parentNode.removeChild(e);
     
      a.setAttribute("href", e.dataset.url);
      
    });
  
  });