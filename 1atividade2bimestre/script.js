function autenticar(event){ 
    event.preventDefault();
 
    let usuario = document.getElementById("login").value;
    let senha = document.getElementById("senha").value;

    if (usuario==="usuario" && senha ==="123") {
        document.getElementById("mensagem").innerHTML = "usuário autenticado.";
    } else {
        document.getElementById("mensagem").innerHTML = "usuário não autenticado.";
    }
}


