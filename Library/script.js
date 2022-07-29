const Form = document.getElementById("PopUpForm") ;


//PopUpForm function for window
function openForm() {
  Form.style.display = "flex";
}

function closeForm() {
  Form.style.display = "none";
} 


function Book(id,title,author,number,read) {
  this.title = title;
  this.author = author;
  this.number = number;
  this.read = read;
  this.id = id;
}

let Library = [];

var new_book = new Book("","","","");

Form.addEventListener('submit', update_from_form);

function update_from_form() {
  new_book.number = document.getElementById("Read").value ;
  new_book.title = document.getElementById("Author").value;
  new_book.author = document.getElementById("Title").value;
  new_book.read = document.getElementById("Page").value ;
  new_book.id = Library.length;
  Library.push(new_book)
  add_card(new_book);
  clear_form();
  closeForm();
}

function update_from_library(library) {
 clear_board(); 
 for (let i = 0; i < library.length; i++) {
   const book = library[i];  
   add_card(book);
 } 
}

function clear_form() {
  document.getElementById("Read").value = "" ;
  document.getElementById("Author").value = "";
  document.getElementById("Title").value = "";
  document.getElementById("Page").value  = "";
}

function clear_board() {
  const body = document.querySelector('body');
  const board = document.querySelector('div#board');
  if (board == undefined) {
   return -1;
  }
  body.removeChild(board);
  const new_board = document.createElement('div');
  new_board.setAttribute('id', 'board')
  body.appendChild(new_board); 
}



function add_card(new_book) {
  const arr_att = ["Title: ","Author name: ","Number of page: ","Read: "];
  const arr_clss = ["title","author","number","read"]; 
  const board = document.querySelector('div#board');
  var card = document.createElement('div');
  card.classList.add("card");
  for (let i = 0; i < arr_att.length; i++) {
    //Create a line with bold text
    const att = arr_att[i];
    var ligne = document.createElement('div');
    ligne.classList.add("card_line");
    var boldText = document.createElement('div');
    boldText.classList.add("boldText");
    boldText.textContent = att;
    ligne.appendChild(boldText); 
    var Text = document.createElement('p');
    Text.textContent = new_book[arr_clss[i]]
    ligne.appendChild(Text); 
    card.appendChild(ligne); 
 
    card.setAttribute('id', new_book.id)
  }
  var del = document.createElement('div');
  del.classList.add("delete_button");
  var button = document.createElement('button');
  button.type="button"
  button.setAttribute("onclick", "delete_button(this)")
  button.textContent="X"
  del.appendChild(button); 
  card.appendChild(del);
  board.appendChild(card); 
}

function delete_button(btn) {
  //TODO
 const changing_card= btn.parentNode.parentNode.id;
 console.log(changing_card);
 for (let i = changing_card; i < Library.length; i++) {
   Library[i].id--;
 }
 Library.splice(changing_card,1);
 console.log(Library);
 update_from_library(Library);
}

//Test
const b = new Book(0,"Titre", "Author", "123", "NO");
const c = new Book(1,"Titre2", "Author", "124", "NO");
 console.log(Library);
Library.push(b);
 console.log(Library);
Library.push(c);
 console.log(Library);
//update_from_library(Library);
add_card(b);
add_card(c);
