
var player_score = 0;
var comput_score = 0;

var fire = document.querySelector('input.Fire');
var water = document.querySelector('input.Water');
var grass = document.querySelector('input.Grass');

var score = document.querySelector('h1#sc');
var top_text = document.querySelector('h1#top');

fire.addEventListener('click', pick_fire);
water.addEventListener('click', pick_water);
grass.addEventListener('click', pick_grass);

function pick_fire() {
  com = computerPlay();
  round('fire', com)
  console.log("test");
}

function pick_water() {
  com = computerPlay();
  round('water', com)
  console.log("test");
}

function pick_grass() {
  com = computerPlay();
  round('grass', com)
  console.log("test");
}

function computerPlay() {
  //Function that randomly
  //return a string from l
  const l=["water","fire","grass"];
  rn=math.random()*3
  return l[math.round(rn)%3];
}

function round(player,computer) {
  //Return the result of the match
  player=player.toLowerCase()
  console.log(player,computer)
  computer=computer.toLowerCase()
  if (player == computer) {
    top_text.textContent = ("--Draw--")
  }
  else if (player == "fire") {
    if (computer== "water") {
     top_text.textContent = ("You Lose! Water beats Fire") 
     comput_score++;
    }
    else{
     top_text.textContent = ("You Win! Fire beats grass") 
     player_score++;
    }
  }
  else if (player == "water") {
    if (computer== "fire") {
     top_text.textContent = ("You Win! Water beats Fire") 
     player_score++;
    }
    else{
     top_text.textContent = ("You lose! Water beats Fire") 
     comput_score++;
    }
  }
  else if (player == "grass") {
    if (computer== "fire") {
     top_text.textContent = ("You lose! Fire beats Grass") 
     comput_score++;
    }
    else{
     top_text.textContent = ("You Win! Grass beats Water") 
     player_score++;
    }
  }
  score.textContent = ("score:"+player_score+"-"+comput_score);
}

