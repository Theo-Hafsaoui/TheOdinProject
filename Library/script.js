const Form = document.getElementById("PopUpForm") ;


//PopUpForm function for window
function openForm() {
  Form.style.display = "flex";
}

function closeForm() {
  Form.style.display = "none";
  console.log("Inside closeForm")
} 


function Book(title,author,number,read) {
  this.title = title;
  this.author = author;
  this.number = number;
  this.read = read;
}

let Library = [];

var new_book = new Book("","","","");

Form.addEventListener('submit', update_from_form);

function update_from_form() {
  new_book.number = document.getElementById("Read").value ;
  new_book.title = document.getElementById("Author").value;
  new_book.author = document.getElementById("Title").value;
  new_book.read = document.getElementById("Page").value ;
  Library.push(new_book)
  add_card(new_book);
  console.log(Library)
  clear_form();
  closeForm();
}

function clear_form() {
  document.getElementById("Read").value = "" ;
  document.getElementById("Author").value = "";
  document.getElementById("Title").value = "";
  document.getElementById("Page").value  = "";
}


function add_card(new_book) {
  Library.push(new_book)
  const arr_att = ["Title: ","Author name: ","Number of page: ","Read: "];
  const arr_clss = ["title","author","number","read"]; console.log(Library)
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
  }
  board.appendChild(card); 
}

//Test
const b = new Book("Titre", "Author", "123", "NO");
add_card(b);
