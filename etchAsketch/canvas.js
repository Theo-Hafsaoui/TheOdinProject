var cnv = document.querySelector('div.canvas');

function init_cnv(s) {
/**
 *Create a canvas of sxs div
 */
  for (let _ = 0; _ < s; _++) {
    var ligne = document.createElement('div');
    ligne.classList.add('ligne')
    for (let _ = 0; _ < s; _++) {
       var block = document.createElement('div');
       block.classList.add('block')
       block.addEventListener("mouseenter", function(block) {
        block.target.style.backgroundColor = "purple";
       }, false);
       ligne.appendChild(block);
    }
    cnv.appendChild(ligne);
  }
}

const clear_button = document.querySelector('input#clear');
clear_button.addEventListener("click", reset_cnv);

function reset_cnv(){
  for (let i = 0; i < cnv.childNodes.length; i++) {
    const ligne = cnv.childNodes[i];
    for (let j = 0; j < ligne.childNodes.length; j++) {
      const block = ligne.childNodes[j];
      block.style.backgroundColor = "white";
    }
  }
}

//Main
init_cnv(16);


