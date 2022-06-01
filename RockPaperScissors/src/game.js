function computerPlay() {
  //Function that randomly
  //return a string from l
  const l=["rock","paper","scissor"];
  rn=math.random()*3
  return l[math.round(rn)%3];
}

function round(player,computer) {
  //Return the result of the match
  player=player.toLowerCase()
  computer=computer.toLowerCase()
  if (player == computer) {
    return("--Draw--")
  }
  if (player == "rock") {
    if (computer== "paper") {
     return("You Lose! Paper beats Rock") 
    }
    else{
     return("You Win! Rock beats scissor") 
    }
  }
  if (player == "paper") {
    if (computer== "rock") {
     return("You Win! Paper beats Rock") 
    }
    else{
     return("You lose! Paper beats Rock") 
    }
  }
  if (player == "scissor") {
    if (computer== "rock") {
     return("You lose! Rock beats Scissor") 
    }
    else{
     return("You Win! Scissor beats Paper") 
    }
  }
}

function game() {
  continu= 1;
  const l=["rock","paper","scissor"];
  while (continu) {
    let choice = prompt("0:rock\n1:paper\n2:scissor");
    if (Number(choice)>2) {
     continu=NaN; 
     break;
    }
    let player_choice=l[Number(choice)];
    let computer_choice=computerPlay()
    console.log(round(player_choice,
      computer_choice))
  }
  return 0;
}

//MAIN
game();
