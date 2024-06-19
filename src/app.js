/* eslint-disable 
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};*/
let handle="www.";
let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let dominio=[".com",".gob",".es",".ar",".net"]
for(let i of pronoun){
 for(let j of adj){
   for(let k of noun){
      for(let m of dominio){
      console.log(handle+i+j+k+m);
      }    
   }
 }
}