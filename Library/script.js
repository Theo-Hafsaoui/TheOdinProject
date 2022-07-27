Form = document.getElementById("PopUpForm") ;

read = document.getElementById("Read") ;
author = document.getElementById("Author");
title = document.getElementById("Title");
page = document.getElementById("Page") ;

const arr_att = ["Title:","Author name: ","Number of page: ","Read: "];

Form.addEventListener('submit', () => {
  console.log(page.value);
  console.log(title.value);
  console.log(author.value);
  console.log(read.value);
});

function old_add_cart() {
  var board = document.querySelector('div#board');
  var card = document.createElement('div');
  card.classList.add("card");
  var title = document.createElement('div');
  title.textContent = "Title"
  title.classList.add("boldText")
  card.appendChild(title); 
  board.appendChild(card); 
}

function add_cart() {
  const board = document.querySelector('div#board');
  var card = document.createElement('div');
  card.classList.add("card");
  for (let i = 0; i < arr_att.length; i++) {
    const att = arr_att[i];
    var ligne = document.createElement('div');
    ligne.classList.add("card_line");
    var boldText = document.createElement('div');
    boldText.classList.add("boldText");
    boldText.textContent = att;
    ligne.appendChild(boldText); 
    var Text = document.createElement('p');
    Text.textContent = "test";
    ligne.appendChild(Text); 
    card.appendChild(ligne); 
  }
  board.appendChild(card); 
}

function hello() {
 console.log("hello") 
}

function openForm() {
  Form.style.display = "flex";
}

function closeForm() {
  Form.style.display = "none";
} 

add_cart();
add_cart();
add_cart();
add_cart();
add_cart();
add_cart();
add_cart();
add_cart();
add_cart();
add_cart();
add_cart();
add_cart();
add_cart();
add_cart();
add_cart();
add_cart();
add_cart();
add_cart();
add_cart();
add_cart();
add_cart();
add_cart();
add_cart();
add_cart();
add_cart();
add_cart();
add_cart();
add_cart();
add_cart();
