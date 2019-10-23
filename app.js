//document.querySelector("h1").innerHTML = "player game";
let list = Math.floor(Math.random() * 6) + 1;
let playergameimage = "image/dice" + list +".png";

document.querySelector(".img1").setAttribute("src", playergameimage);

if(playergameimage > 6){
    document.querySelector("h1").innerHTML = ""
}