
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
  if(screen.current.length>17){
   bottom_screen.textContent = screen.current.slice(0,15)+"..";
  }
  else{
    bottom_screen.textContent = screen.current;
  }
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

//numpad
const num = document.querySelectorAll("input.numpad");
console.log(num);
for (let i = 0; i < num.length; i++) {
  const button = num[i];
  const nb = button.value;
  button.addEventListener("click", function () {
    screen.current+=nb
    update_screen();
  },nb);
}

//########main##########

update_screen();

