/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function getRandom(number) {
  return Math.floor(Math.random() * number);
}

let getSuits = () => {
  let suits = ["♠", "♦", "♣", "♥"];
  let suitsIndex = getRandom(suits.length);
  let suit = suits[suitsIndex];
  let suitsColor = document.querySelectorAll(".color");
  if (suit === "♥" || suit === "♦") {
    for (let iterator of suitsColor) {
      iterator.style.color = "red";
    }
  }
  console.log(suitsIndex);
  document.querySelector(".suits1").innerHTML = suit;
  document.querySelector(".suits2").innerHTML = suit;
};

let getNumVal = () => {
  let numVal = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  let numValIndex = getRandom(numVal.length);
  console.log(numValIndex);
  return numVal[numValIndex];
};

window.onload = function() {
  getSuits();
  document.querySelector(".numVal").innerHTML = getNumVal();
};
