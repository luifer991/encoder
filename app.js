/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function encode () {
    // extraer el texto del input
    let inputContent = document.getElementById('txt-encode').value;
    // eextraer el div
    let newDiv = document.getElementById('group');
    // crear boton 
    let btn = document.createElement('button');
    btn.textContent = 'Copiar';
    btn.classList.add("copy-btn");
    btn.addEventListener('click', copyButton);
    // codificar texto
    let originalString = inputContent.toLowerCase();
    let newString = originalString.replace(/[aeiou]/g, (match) => {
        if (match === "a") return "ai";
        else if (match === "i") return "imes";
        else if (match === "e") return "enter";
        else if (match === "o") return "ober";
        else if(match === "u") return "ufat";
        return "";
});
    // colocar el texto dentro del nuevo div
    newDiv.innerHTML = `<p>${newString}</p>`;
    // asignarle una clase
    newDiv.classList.add('text-encoded');
    newDiv.appendChild(btn);
    return;
}


function decode(){
    let inputEncoded = document.getElementById('txt-encode').value;
    let newDiv = document.getElementById('group');
    let stringCode = inputEncoded.replace(/ai/g, "a")
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
    newDiv.innerHTML = `<p>${stringCode}</p>`;
    newDiv.classList.add('text-encoded');
    return;
  }

function copyButton (){ 
    let newDiv = document.getElementById('group');
    navigator.clipboard.writeText(newDiv.firstChild.textContent);
    return;

}

