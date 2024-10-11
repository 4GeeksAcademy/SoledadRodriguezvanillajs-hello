/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  function generarExcusas() {
    let who = ["The dog", "My grandma", "The mailman", "My bird"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "my phone", "the car"];
    let when = [
      "before the class",
      "when I was sleeping",
      "while I was exercising",
      "during my lunch",
      "while I was praying"
    ];

    let numwho = Math.floor(Math.random() * who.length);

    let randomWho = [who.find(numwho)];
  }
  console.log(generarExcusas());

  let paragraph = document.getElementById("excuse");
  paragraph.innerText = "randomText";

  console.log("Hello Rigo from the console!");
};
