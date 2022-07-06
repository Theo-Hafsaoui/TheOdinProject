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

//Main
init_cnv(16);

