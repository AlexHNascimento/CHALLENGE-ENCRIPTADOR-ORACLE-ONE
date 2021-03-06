const inputText = document.querySelector(".input-text");
const mensage = document.querySelector(".mensage");

function btnEncriptar() {
  const textoEncriptado = encriptar(inputText.value);
  mensage.value = textoEncriptado;
  mensage.style.backgroundImage = "none";

  if (textoEncriptado == false) {
    alert("Você precisa digitar o texto antes.");
  }
}

function encriptar(stringEncriptada) {
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  stringEncriptada = stringEncriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return stringEncriptada;
}

function btnDesencriptar() {
  const textoDesencriptado = desencriptar(inputText.value);
  mensage.value = textoDesencriptado;
  mensage.style.backgroundImage = "none";

  if (textoDesencriptado == false) {
    alert("Você precisa digitar o texto antes.");
  }
}

function desencriptar(stringDescriptada) {
  let matrizCodigo = [["ai", "a"], ["enter", "e"], ["imes", "i"], ["ober", "o"], ["ufat", "u"]];
  stringDescriptada = stringDescriptada;

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDescriptada.includes(matrizCodigo[i][0])) {
      stringDescriptada = stringDescriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return stringDescriptada;
}

function btnCopy() {
  let textCopy = mensage;
  textCopy.select();
  document.execCommand("copy");
  alert("Texto copiado para a área de transferência!!");

  inputText.value = "";
  mensage.value = "";
  mensage.style.backgroundImage = "";
  inputText.focus();
  localStorage.reload();
}

