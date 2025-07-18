function abrirChat() {
    document.getElementById('chatbox').style.display = 'block';
}
function enviarMensaje(){
    const entrada =
    document.getElementById('entradaUsuario').value;
    const contenedormensajes =
    document.getElementById('messages');
    if (entrada.trim() === "") return;

    contenedormensajes.innerHTML += `<div class="user"> ${entrada}</div>`;
    const respuesta =
    responderNovaMind(entrada);
    contenedormensajes.innerHTML += `<div
     class="nova"> ${respuesta}</div>`;

    document.getElementById('entradaUsuario').value = '';
    contenedormensajes.scrollTop = 
    contenedormensajes.scrollHeight;

}
function responderNovaMind(pregunta){
    const respuestas = {
        "hola": "Hola! Soy NovaMind, tu guia estelar. En que puedo ayudarte?",
        "luna": "La luna se encuentra actualmente en fase creciente. queres saber mas?",
        "sol": "Aunque lo veas amarillo, el Sol es blanco. Curioso verdad?",
        "planetas": "En este momento, Marte y Jupiter son visibles desde tu zona."

    };
    const preguntaLimpia = 
    pregunta.toLowerCase();
    return respuestas[preguntaLimpia] || 
    "Lo siento, aun estoy aprendiendo. Queres preguntarme otra cosa?";

}

function cerrarChat(){
    const chatbox =
    document.getElementById("chatbox");
    chatbox.style.display = "none";
}