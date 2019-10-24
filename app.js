//document.querySelector("h1").innerHTML = "player game";
let list = Math.floor(Math.random() * 6) + 1;
let secondlist = Math.floor(Math.random() * 6) + 1;
let playergameimage = "image/dice" + list +".png";
let newagmelist = "image/dice" + secondlist +".png";
const bnutton = document.getElementById("button")

document.querySelector(".img1").setAttribute("src", playergameimage);
document.querySelector(".img2").setAttribute("src", newagmelist);


    if(playergameimage > newagmelist){
        document.querySelector("h1").innerHTML = " Player 1 Win"
    }else if(playergameimage < newagmelist){
        document.querySelector("h1").innerHTML = " Player 2 Win"
    }else {
        document.querySelector("h1").innerHTML = " Roll Again"
    }



// if(playergameimage > 6){
//     document.querySelector("h1").innerHTML = ""
// }