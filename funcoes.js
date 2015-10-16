$(document).ready(function(){ 
      /*########VALIDAÇÃO PERSONALIZADA########*/
      var cont = 0;
      $('#frmSac2').submit(function(event){

            event.preventDefault();

            $('#frmSac2 .validar ').each(function(index,el) {

                  $(this).css("border","1px solid #ccc");
                  $(this).css("background-color","white");  

                  if ( $(this).val().length === 0) {

                            $(this).css("background-color","#f2dede");
                            $(this).css("border","2px solid red");

                            $(this).popover({
                                title: "Atenção!",
                                content: "Preencha o campo.", 
                                placement: "bottom" // (top, right, bottom, left)
                            });

                            $(this).popover('show');
                            setTimeout(function() { $("#"+el.id+"").popover('hide'); }, 2000);  
                            $(this).focus();
                            cont = -1;

                            return false;
                }else{
                     cont =1;
                }

            });
            if(cont == 1)
               $(this).unbind('submit').submit();  
      });
     
});