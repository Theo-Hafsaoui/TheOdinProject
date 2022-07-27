Form = document.getElementById("PopUpForm") ;

read = document.getElementById("Read") ;
author = document.getElementById("Author");
title = document.getElementById("Title");
page = document.getElementById("Page") ;

function Book(title,author,number,read) {
  this.title = title;
  this.author = author;
  this.number = number;
  this.read = read;
}

let myLibrary = [];

const arr_att = ["Title: ","Author name: ","Number of page: ","Read: "];
const arr_clss = ["title","author","number","read"];

Form.addEventListener('submit', () => {
  console.log(page.value);
  console.log(title.value);
  console.log(author.value);
  console.log(read.value);
  const book = new Book(title.value, author.value, page.value, read.value);
  add_cart(book);
});

function add_cart(book) {
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
    Text.textContent = book[arr_clss[i]]
    ligne.appendChild(Text); 
    card.appendChild(ligne); 
  }
  board.appendChild(card); 
}

function openForm() {
  Form.style.display = "flex";
}

function closeForm() {
  Form.style.display = "none";
} 


