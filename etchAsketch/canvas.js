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
       ligne.appendChild(block);
    }
    cnv.appendChild(ligne);
  }
}

//Main
init_cnv(16);

