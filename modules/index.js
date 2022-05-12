"use strict";

import { slider } from "./slider";

window.addEventListener("DOMContentLoaded", init);

function init() {
  buttonEvents();
  slider();
}

function buttonEvents() {
  document
    .querySelectorAll(".article")
    .forEach((element) => element.addEventListener("mouseover", hover));

  document
    .querySelectorAll(".article")
    .forEach((element) => element.addEventListener("mouseout", unhover));
}

function hover(element) {
  console.log(element.target);
  document.querySelector(`h4#${element.target.id}`).classList.add("blur");

  if (`h4#${element.target.id}` == "h4#creative") {
    document.querySelector("#container-4").classList.remove("scroll");
    document.querySelector("#container-4").style.backgroundImage =
      "url('./assets/cube.jpg')";
    document.querySelector("#container-4").offsetHeight;
    document.querySelector("#container-4").classList.add("scroll");
  }
  if (`h4#${element.target.id}` == "h4#marketing") {
    document.querySelector("#container-4").classList.remove("scroll");
    document.querySelector("#container-4").style.backgroundImage =
      "url('./assets/market.jpg')";
    document.querySelector("#container-4").offsetHeight;
    document.querySelector("#container-4").classList.add("scroll");
  }
  if (`h4#${element.target.id}` == "h4#development") {
    document.querySelector("#container-4").classList.remove("scroll");
    document.querySelector("#container-4").style.backgroundImage =
      "url('./assets/grow.jpg')";
    document.querySelector("#container-4").offsetHeight;
    document.querySelector("#container-4").classList.add("scroll");
  }
}

function unhover(element) {
  document.querySelector(`h4#${element.target.id}`).classList.remove("blur");
}
