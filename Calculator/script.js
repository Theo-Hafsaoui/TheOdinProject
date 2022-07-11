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

function parse(str) {
  /**
   * Return an array of array of a parse str
   *
   * ex:[["n",5],["op","+"],["n",5]]
   */
  arr = []
  for (let i = 0; i < str.length; i++) {
    var ch = str[i];
    console.log(!Number.isNaN(Number(ch)));
    console.log(arr);
    if (!Number.isNaN(Number(ch))){
        i++;
        console.log(str[i]);
        while (i<str.length && !Number.isNaN(Number(ch+str[i]))) {
          console.log("ch=",ch)
          ch+=str[i];
          i++;
        } 
        i--;
        arr.push(["n",Number(ch)])
        continue;
    }
    switch (ch) {
      case "+":
        arr.push(["add","+"])
        break;
      case "-":
        arr.push(["minus","-"])
        break;
      case "*":
        arr.push(["mult","*"])
        break;
      case "/":
        arr.push(["div","/"])
        break;
      case "%":
        arr.push(["modulo","%"])
        break;
      default:
        console.log("syntax error")
        break;
    }
  }
  return arr;
}
//########main##########
console.log(parse(1+1))
update_screen();

