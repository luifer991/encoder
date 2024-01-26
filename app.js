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
    let newDiv = document.getElementById('div');
    let originalString = inputContent.toLowerCase();
    let newString = originalString.replace(/[aeiou]/g, (match) => {
        if (match === "a") return "ai";
        else if (match === "i") return "imes";
        else if (match === "e") return "enter";
        else if (match === "o") return "ober";
        else if(match === "u") return "ufat";
        return "";
});
    console.log(newString);
    newDiv.innerHTML = `<p>${newString}</p>`;
    newDiv.classList.add('text-encoded')
    return;
}


function decode(){
    let inputEncoded = document.getElementById('txt-encode').value;
    let newDiv = document.getElementById('div');
    let stringCode = inputEncoded.replace(/ai/g, "a")
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
    newDiv.innerHTML = `<p>${stringCode}</p>`;
    newDiv.classList.add('text-encoded');
    return;
  }

function createCopyButton (){
    let newButton = document.createElement('button');
    newButton.innerText = "Copiar";
    
}

