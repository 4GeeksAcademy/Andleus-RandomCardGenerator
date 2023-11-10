/* eslint-disable */
// import "bootstrap";
// import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  const randomCard = newRandomCard();

  document.getElementById("randomCard").innerHTML = `
    <div class="row symbol">${randomCard.symbol}</div>
    <div class="row number">${randomCard.number}</div>
    <div class="row symbol bottom fa-rotate-180"">${randomCard.symbol}</div>
  `;

};

function newRandomCard(){

  let symbols = ['<i class="fa-solid fa-heart fa-2xl" style="color: #ff0000;"></i>', '<i class="fa-solid fa-diamond fa-2xl"></i>', '<i class="fa-brands fa-space-awesome fa-2xl"></i>', '<i class="fa-solid fa-spa fa-2xl"></i>'];
  let numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];


  const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
  const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

  return{
    symbol: randomSymbol,
    number: randomNumber
  };

};