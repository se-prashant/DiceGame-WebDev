var randomNumber1,randomNumber2;
var result;
var player1Name ="Player 1"
var player2Name = "Player 2";
var score1 =0,score2 = 0;
function role(){
  randomNumber1 = Math.floor(Math.random()*6)+1;
  document.querySelector("img.img1").src = "images/dice"+ randomNumber1+".png"
  randomNumber2 = Math.floor(Math.random()*6)+1;
  document.querySelector("img.img2").src = "images/dice"+ randomNumber2+".png"

  if(randomNumber1>randomNumber2){
    result = "🏁"+ player1Name+ "  Wins!";
    score1++;
  }
  else if(randomNumber1<randomNumber2){
    result = player2Name+ " Wins!🏁";
    score2++;
  }else{
    result = "Draw!"
  }
  document.querySelector("#score1").innerHTML = "Score: " +score1;
  document.querySelector("#score2").innerHTML = "Score: " +score2;
  document.querySelector("h1").innerHTML  = result;
}
function resetGame(){
  document.querySelector("img.img1").src = "images/dice6.png";
  document.querySelector("img.img2").src = "images/dice6.png";
  document.querySelector("#score1").innerHTML = "Score: 0";
  document.querySelector("#score2").innerHTML = "Score: 0";
  document.querySelector("h1").innerHTML  = "Let's Play";
  score1 = score2 =0;
  player1Name = "Player 1";
  player2Name ="Player 2";
  document.querySelectorAll(".names")[0].innerHTML = player1Name;
  document.querySelectorAll(".names")[1].innerHTML = player2Name

}
function editName(){
  player1Name = prompt("Enter Player1 Name:");
  player2Name = prompt("Enter Player2 Name:");
  if(player1Name=="") player1Name = "Player 1";
  if(player2Name=="") player2Name = "Player 2";
  document.querySelectorAll(".names")[0].innerHTML = player1Name;
  document.querySelectorAll(".names")[1].innerHTML = player2Name;
}
