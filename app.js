// Obtener elementos del DOM
const textarea = document.getElementById('comentario');
const encryptButton = document.getElementById('encriptar');
const decryptButton = document.getElementById('desencriptar');
const imagenDerecha = document.getElementById('imagenDer');
const mensaje1 = document.getElementById('mensaje1');
const mensaje2 = document.getElementById('mensaje2');
const resultado = document.getElementById('resultado');

// Función para encriptar
function encriptarTexto() {
    let texto = textarea.value;
    
    // Encriptación simple: convertir a base64 (puedes cambiar esto con una lógica personalizada)
    let textoEncriptado = texto.replace(/e/g, "enter")
                                .replace(/i/g, "imes")
                                .replace(/a/g, "ai")
                                .replace(/o/g, "ober")
                                .replace(/u/g, "ufat");
    
    // Mostrar el resultado en el div de la derecha
    resultado.innerHTML = `${textoEncriptado}`;
    
    // Ocultar la imagen y mensajes iniciales
    imagenDerecha.style.display = 'none';
    mensaje1.style.display = 'none';
    mensaje2.style.display = 'none';
    
    // Mostrar el resultado
    resultado.style.display = 'block';
}

// Función para desencriptar
function desencriptarTexto() {
    let textoEncriptado = textarea.value;

    let textoDesencriptado = textoEncriptado.replace(/enter/g, "e")
                                            .replace(/imes/g, "i")
                                            .replace(/ai/g, "a")
                                            .replace(/ober/g, "o")
                                            .replace(/ufat/g, "u");

        // Mostrar el resultado en el div de la derecha
        resultado.innerHTML = `${textoDesencriptado}`;
        
        // Ocultar la imagen y mensajes iniciales
        imagenDerecha.style.display = 'none';
        mensaje1.style.display = 'none';
        mensaje2.style.display = 'none';
        
        // Mostrar el resultado
        resultado.style.display = 'block';
}

// Asignar eventos a los botones
encryptButton.addEventListener('click', encriptarTexto);
decryptButton.addEventListener('click', desencriptarTexto);
