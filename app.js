/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function encode () {
    // get input text
    let inputContent = document.getElementById('txt-encode').value;
    // get div
    let newDiv = document.getElementById('group');
    // create button 
    let btn = document.createElement('button');
    btn.textContent = 'Copiar';
    btn.classList.add("copy-btn");
    btn.addEventListener('click', copyButton);
    // Enconding text
    let originalString = inputContent.toLowerCase();
    let newString = originalString.replace(/[aeiou]/g, (match) => {
        if (match === "a") return "ai";
        else if (match === "i") return "imes";
        else if (match === "e") return "enter";
        else if (match === "o") return "ober";
        else if(match === "u") return "ufat";
        return "";
});
    // put the text into the div
    newDiv.innerHTML = `<p>${newString}</p>`;
    // adding class
    newDiv.classList.add('text-encoded');
    // append the button to the div
    newDiv.appendChild(btn);
    return;
}


function decode(){
    // create button 
    let btn = document.createElement('button');
    btn.textContent = 'Copiar';
    btn.classList.add("copy-btn");
    btn.addEventListener('click', copyButton);
    // get the input text    
    let inputEncoded = document.getElementById('txt-encode').value;
    let newDiv = document.getElementById('group');
    // replace the text value to Decode
    let stringCode = inputEncoded.replace(/ai/g, "a")
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
    // put the decoding text into the div
    newDiv.innerHTML = `<p>${stringCode}</p>`;
    newDiv.classList.add('text-encoded');
    newDiv.appendChild(btn);
    return;
  }

function copyButton (){ 
    let newDiv = document.getElementById('group');
    navigator.clipboard.writeText(newDiv.firstChild.textContent);
    newDiv.lastChild.textContent = "Copiado";
    return;

}

