var cnv = document.querySelector('.canvas');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

function init_cnv(size) {
/**
 *Create a canvas of 16x16 div
 */
  for (let _ = 0; _ < size; _++) {
   const content = document.createElement('div');
   cnv.appendChild(content);
   console.log("test") ;
  }
}

cnv.appendChild(content);
