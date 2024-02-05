/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

// text processing function

function textProcesing (text) {

    // Enconding text
    let originalString = text.toLowerCase();
    let newString = originalString.replace(/[aeiou]/g, (match) => {
        if (match === "a") return "ai";
        else if (match === "i") return "imes";
        else if (match === "e") return "enter";
        else if (match === "o") return "ober";
        else if(match === "u") return "ufat";
        return "";
});
    return newString;
}

// button function

function createBtn () {
    let btn = document.createElement('button');
    let newDiv = document.getElementById('group');
    btn.textContent = 'Copiar';
    btn.classList.add("copy-btn");
    btn.addEventListener('click', copyButton);
    newDiv.appendChild(btn);
}

// encode funtion

function encode () {
    // get input text
    let inputContent = document.getElementById('txt-encode').value;
    // get div
    let newDiv = document.getElementById('group');
    // Enconding text
    let newString = textProcesing(inputContent);
    // put the text into the div
    newDiv.innerHTML = `<p>${newString}</p>`;
    // adding class
    newDiv.classList.add('text-encoded');
    // append button to the div
    createBtn();
    return;
}

// Replace function

function replaceText(text) {
    let stringCode = text.replace(/ai/g, "a")
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    return stringCode;
}

// Decode Funtion

function decode(){ 
    // get the input text    
    let inputEncoded = document.getElementById('txt-encode').value;
    let newDiv = document.getElementById('group');
    // replace the text value to Decode
    let stringCode = replaceText(inputEncoded);
    // put the decoding text into the div
    newDiv.innerHTML = `<p>${stringCode}</p>`;
    newDiv.classList.add('text-encoded');
    createBtn();
    return;
}

// Copy to clipboard funtion

function copyButton (){ 
    let newDiv = document.getElementById('group');
    navigator.clipboard.writeText(newDiv.firstChild.textContent);
    newDiv.lastChild.textContent = "Copiado";
    return;
}

