var cnv = document.querySelector('div.canvas');
var pen_color = "#800080"

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
        block.target.style.backgroundColor = pen_color;
       }, false);
       ligne.appendChild(block);
    }
    cnv.appendChild(ligne);
  }
}
//Clear button
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

//Clear button

const color_button = document.querySelector('input#color_picker');
color_button.addEventListener("change", change_color);

function change_color(event) {
 pen_color= event.target.value;
}

//Main
init_cnv(16);


