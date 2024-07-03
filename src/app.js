/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let palos = ["♠", "♣", "♥", "♦"];
  let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "A", "J", "Q", "K"];

  function random(arr) {
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
  }

  let paloRandom = random(palos);
  let numeroRandom = random(numeros);

  let htmlNumber = document.querySelector("#card-number");
  let htmlPaloTop = document.querySelector("#card-palo-top");
  let htmlPaloBottom = document.querySelector("#card-palo-bottom");

  htmlNumber.innerHTML = numeroRandom;
  htmlPaloTop.innerHTML = paloRandom;
  htmlPaloBottom.innerHTML = paloRandom;

  if (paloRandom === "♥" || paloRandom === "♦") {
    htmlPaloTop.style.color = "red";
    htmlPaloBottom.style.color = "red";
  }
};
