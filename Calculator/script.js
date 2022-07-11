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
    if (!Number.isNaN(Number(ch))){
        i++;
        while (i<str.length && !Number.isNaN(Number(ch+str[i]))) {
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

function pre_evaluate(parse_arr) {
  /**
   * Take a parse arr from an str
   * and return an array with the evaluation
   * of the expresion of highest priority
   */
  for (let i = 0; i < parse_arr.length; i++) {
    const type = parse_arr[i][0];
    switch (type) {
      case "mult":
        parse_arr.splice(i-1, 3, ["n",parse_arr[i-1][1]*parse_arr[i+1][1]])
        i++;
        break;
      case "div":
        parse_arr.splice(i-1, 3, ["n",parse_arr[i-1][1]/parse_arr[i+1][1]])
        i++;
        break;
      case "%":
        parse_arr.splice(i-1, 3, ["n",parse_arr[i-1][1]%parse_arr[i+1][1]])
        i++;
        break;
    }
  }
  return parse_arr;
}


function evaluate(parse_arr) {
  /**
   * Take a parse arr from an str
   * and return the result of the expresion
   */
  res=0;
  for (let i = 0; i < parse_arr.length; i++) {
    const type = parse_arr[i][0];
    switch (type) {
      case "n":
        if (res==0) {
         res=parse_arr[i][1]; 
        }
        break;
      case "add":
        res+=parse_arr[i+1][1]
        i++;
        break;
      case "minus":
        res-=parse_arr[i+1][1]
        i++;
        break;
      default:
        console.log("syntax error")
        break;
    }
  }
 return res; 
}
//Equal button
const equal_button = document.querySelector('input#equal');
equal_button.addEventListener("click", function () {
  pars_arr=parse(screen.current);
  pars_arr=pre_evaluate(pars_arr);
  const res = evaluate(pars_arr);
  screen.top2_screen= screen.top1_screen;
  screen.top1_screen= res;
  screen.current = " \n";
  update_screen();
},false);



//########main##########
pars_arr=parse("1+4*2-2")
console.log(pars_arr);
pars_arr=pre_evaluate(pars_arr)
console.log(evaluate(pars_arr))
update_screen();

