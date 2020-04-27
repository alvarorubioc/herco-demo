


function utf8_to_b64(str) {
            return window.btoa(encodeURIComponent(escape(str)));
        }

function b64_to_utf8(str) {
            return unescape(decodeURIComponent(window.atob(str)));
        }
function b64_to_utf82(str) {
              return decodeURIComponent(escape(window.atob(str)));
        }
      $(document).ready(function () {
         $(".link-ofuscado").click(function(event) {
        alert("Ahora irás a la p&aacute;gina "+b64_to_utf8($(this).attr("atributo")));
        window.location.href=b64_to_utf8($(this).attr("atributo"));
        });

      });
     
      function cargarDivCodificado(div,url)
        {
              $(div).load(decodeURIComponent(b64_to_utf82(url)));
        }