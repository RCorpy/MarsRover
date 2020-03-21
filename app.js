let amount = 0;
let radians = 0
let x_mov = -150;
let y_mov = -150;
let directionDict = {"d":1, "a": -1, "w": 1, "s": -1}
let movement_distance= 50;
let degreeOfTurn = 90


let root = document.documentElement;


const position_div= document.getElementById("position")
const roseta_div= document.getElementById("roseta")
const piedra_div= document.getElementById("contenedor-imagen")


window.addEventListener("keypress", function (e) {calcularRotacion(e.key) })

function calcularRotacion(pressedKey){
    if (pressedKey =="d" || pressedKey =="a"){
        let direction = directionDict[pressedKey]
        amount=(amount + degreeOfTurn*(direction))
        radians =(radians + degreeOfTurn*Math.PI*(direction/180)) // %(Math.PI*2)
        root.style.setProperty('--amount', amount-90 + "deg");
}
    move(radians, pressedKey)
}

function move(degrees, pressedKey) {
    let sin = Math.sin(degrees)
    let cos = Math.cos(degrees)
    let x = sin*directionDict[pressedKey]
    let y = cos*directionDict[pressedKey]

if(pressedKey=="w"|| pressedKey=="s"){


    x_mov += movement_distance*x
    y_mov -= movement_distance*y

    root.style.setProperty('--x-mov', x_mov + "px")
    root.style.setProperty('--y-mov', y_mov + "px")
    }
    roseta_div.innerHTML = `Mirando al ${getCardinals(sin, cos)}`

    x= 0, y= 0
    position_div.innerHTML = `x= ${(x_mov+150)/movement_distance}, y= ${(y_mov+150)/movement_distance}`
}

function getCardinals(sin, cos) {
    if (sin==1){ return "Este"}
    else if (sin==-1){return "Oeste"}
    else if (cos==1){return "Norte"}
    else{return "Sur"}

}