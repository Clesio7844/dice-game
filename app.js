//document.querySelector("h1").innerHTML = "player game";
// let list = Math.floor(Math.random() * 6) + 1;

let list = [0, 0];
let round = 0;
let plyerlist = 0;



// document.querySelector ('#curre-' + plyerlist).textContent = dice

// document.querySelector(".dice1").style.display = "none";

document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("curre-0").textContent = "0";
document.getElementById("curre-1").textContent = "0";


// document.getElementsByClassName("#score").textContent = "0";
// document.getElementsByClassName("#score").textContent = "0";
// document.getElementsByClassName("#curre-0").textContent = "0";
// document.getElementsByClassName("#curre-1").textContent = "0";



function btn (){
    let dice = Math.floor(Math.random() * 6) + 1;

    let newdice = document.querySelector(".dice1");
    newdice.style.display = "block";
    newdice.src = "image/dice-" + dice + ".png"
}
document.querySelector('.roll').addEventListener ("click", btn)
