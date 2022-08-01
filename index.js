
let n1 = Math.random();
n1 = n1*6;
let result = Math.floor(n1+1);
console.log(result);
let dest = "./images/dice"+result+".png";
let  randDice1 = document.querySelector(".img1").setAttribute("src",dest);

let n2 = Math.random();
n2 = n2*6;
let result1 = Math.floor(n2+1);
console.log(result1+" this is second random number");
let dest1 = "./images/dice"+result1+".png";
let randomDice2 = document.querySelector(".img2").setAttribute("src",dest1);

if(result < result1){
  document.querySelector("h1").textContent = "Player 1 wins!";
}
else if(result1 < result){
  document.querySelector("h1").textContent = "Player 2 wins! ";
}
else{
  document.querySelector("h1").textContent = "It's a draw";
}
