document.getElementById('btn_enviar').addEventListener('click',pedirvalores);

// function saludar(){
//     alert('hola shirley')

// }


function pedirvalores(){

    var varnombre= document.getElementById('txt_nombre').value;
    var varcorreo= document.getElementById('txt_correo').value;
    var varmsg=document.getElementById('txt_msg').value;
   
    alert('Su nombre es:' + varnombre + '\n'+ 'Su correo es:' + varcorreo + '\n'+ 'Mensaje es:' + varmsg)
}