const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const nota1 = document.querySelector(".nota1");
const nota2 = document.querySelector(".nota2");



function btnEncriptar(){

    if (textArea.value !=0) {
        const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage ="none"
    nota1.textContent = "TEXTO CORRECTAMENTE ENCRIPTADO"
      } else {
        nota1.textContent = "Ningún mensaje fue encontrado"
        nota2.textContent = "Ingresa el texto que desees encriptar o desencriptar."
      }

    
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()

  

    for(let i=0; i<matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
       
    }
     
    return stringEncriptado
}

function btnDesencriptar(){
    if (textArea.value !=0) {
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
     nota1.textContent = "TEXTO CORRECTAMENTE DESENCRIPTADO"
    } else {
        nota1.textContent = "Ningún mensaje fue encontrado"
        nota2.textContent = "Ingresa el texto que desees encriptar o desencriptar."
      }
}
function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(let i=0; i<matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
       

    }
    return stringDesencriptado
}


function btnCopiar() {
    if (mensaje.value !=0) {
    let textoCopiado =  mensaje.value;
    
    navigator.clipboard.writeText(textoCopiado).then(function() {
        alert("Texto copiado al portapapeles");
    }, function(err) {
        console.error("Error al copiar el texto: ", err);
    });
    mensaje.value = "";
    textArea.value = "";
     nota1.textContent = "TEXTO CORRECTAMENTE COPIADO"
} else {
    nota1.textContent = "NO HAY RESULTADOS PARA COPIAR"
    
  }
}