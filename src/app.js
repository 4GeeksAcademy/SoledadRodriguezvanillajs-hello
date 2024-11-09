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

    let numWho = Math.floor(Math.random() * who.length);
    console.log(numWho);
    let randomWho = who[numWho];
    console.log(randomWho);

    let numAction = Math.floor(Math.random() * action.length);
    console.log(numAction);
    let randomAction = action[numAction];
    console.log(randomAction);

    let numWhat = Math.floor(Math.random() * what.length);
    console.log(numWhat);
    let randomWhat = what[numWhat];
    console.log(randomWhat);

    let numWhen = Math.floor(Math.random() * when.length);
    console.log(numWhen);
    let randomWhen = when[numWhen];
    console.log(randomWhen);

    return randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen;
  }

  let randomText = generarExcusas();

  let paragraph = document.getElementById("excuse");
  paragraph.innerText = randomText;
};
