$(document).ready(function(){ 
      /*########VALIDAÇÃO PERSONALIZADA########*/
      var cont = 0;
      $('#frmSac2').submit(function(event){

            event.preventDefault();

            $('#frmSac2 .validar ').each(function(index,el) {
                  var $el = $(el);
                  $el.css("border","1px solid #ccc");
                  $el.css("background-color","white");  

                  if ( $el.val().length === 0) {

                            $el.css("background-color","#f2dede");
                            $el.css("border","2px solid red");

                            $el.popover({
                                title: "Atenção!",
                                content: "Preencha o campo.", 
                                placement: "bottom" // (top, right, bottom, left)
                            });

                            $el.popover('show');
                            setTimeout(function() { $el.popover('hide'); }, 2000);  
                            $el.focus();
                            cont = -1;

                            return false;
                }else{
                     cont =1;
                }

            });
            if(cont == 1)
               $el.unbind('submit').submit();  
      });
     
});