let energy = document.getElementById("energy").innerHTML;
let power = document.getElementById("power").innerHTML - 1;
let count = document.getElementById("count").innerHTML;
let countMinute = document.getElementById("countHour").innerHTML;
//let costPower = document.getElementById("costPower").innerHTML;

function tapB(){
    if(energy >= power){
        energy = energy - power;
        count = Number(count) + Number(power);

        document.getElementById("count").innerHTML=Math.floor(count);
        document.getElementById("energy").innerHTML=energy;
    }
}

document.getElementById("buttonbuggy").addEventListener("mousedown", newPoint)

function newPoint(event){
    if(energy >= power){
        let newImg = document.createElement("img");
        newImg.src = "photo/pngegg (2).png";
        newImg.style.position="absolute";
        newImg.style.width="20px";
        newImg.style.height="20px";
        newImg.style.left=event.pageX+"px";
        newImg.style.top=event.pageY+"px";
        document.getElementById("buttonbuggy").appendChild(newImg);

        let startPoint = event.pageY;
        let animatePoint = setInterval(function(){
            startPoint = startPoint - 2;
            newImg.style.top = startPoint + "px";
        }, 10);
    
        setTimeout(function(){
            clearInterval(animatePoint);
            newImg.remove();
        }, 1000)
}
}

setInterval(addEnergy, 500)

function addEnergy(){
    if (energy <= 100 - power) {
        energy +=power; 
        document.getElementById("energy").innerHTML = energy;
    }  
    count = Number(count) + document.getElementById("countHour").innerHTML/120;
    document.getElementById("count").innerHTML=Math.floor(count);
}

function buyPower(){
    if(count >= document.getElementById("costPower").innerHTML){
        power++;
        document.getElementById("power").innerHTML = power;
        count -= document.getElementById('costPower').innerHTML
        document.getElementById("costPower").innerHTML *= 2;
        
    }
}
function openeda(){
    document.getElementById("Semki").showModal();
}
function Close1(){
    document.getElementById("Semki").close();
}
function opendom(){
    document.getElementById("ferma").showModal();
}
function Close2(){
    document.getElementById("ferma").close();
}
function BuyCard(numberCard){
    if(count >= document.getElementById("costcardid"+numberCard).innerHTML){
        count = Number(count) - document.getElementById("costcardid"+numberCard).innerHTML
        document.getElementById("countHour").innerHTML = Number(document.getElementById("countHour").innerHTML) + Number(document.getElementById("countcardid"+numberCard).innerHTML);
        document.getElementById("Levelcardid"+numberCard).innerHTML = Number( document.getElementById("Levelcardid"+numberCard).innerHTML)+ 1;
        document.getElementById("costcardid"+numberCard).innerHTML = Number( document.getElementById("costcardid"+numberCard).innerHTML)*1.5;
        document.getElementById("countcardid"+numberCard).innerHTML = Math.floor(Number(document.getElementById("countcardid"+numberCard).innerHTML)*1.5);
    }
}
