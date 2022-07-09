
var list_result = new Array(3);
const screen = {
  current : "",
  top1_screen: "",
  top2_screen: "",
};



function update_screen() {
  if (typeof screen == "undefined") {
   console.log("screen object not defined")
   return  -1
  }
  var bottom_screen = document.querySelector('div#current')
  var top1_screen = document.querySelector('div#top1')
  var top2_screen = document.querySelector('div#top2')
  bottom_screen.textContent = screen.current;
  top1_screen.textContent = screen.top1_screen;
  top2_screen.textContent = screen.top2_screen;
}

//Clear button

const clear_button = document.querySelector('input#clear');
clear_button.addEventListener("click", function () {
  screen.current = "";
  screen.top1_screen= "";
  screen.top2_screen= "";
  update_screen();
},false);


screen.current = "c"
screen.top1_screen = "t1"
screen.top2_screen = "t2"

update_screen();

