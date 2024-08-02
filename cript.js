let comp = Math.floor(Math.random()*5);
let gameUser = true;
function choise(user){
    if(gameUser ==true){
        document.getElementById("box"+user).style.animation="shake 0.3s 3";
        setTimeout(function(){
            if (comp==user){
                document.getElementById("box"+user).src = "photo/pngwing.com (4).png";
                document.getElementById("restartButton").style.display="flex";
                document.getElementById("hi").style.display ="none";
                document.getElementById("win").style.display ="block";
                }
            else{
                document.getElementById("box"+user).src = "photo/pngegg.png";
                document.getElementById("restartButton").style.display="flex";
                document.getElementById("hi").style.display ="none";
                document.getElementById("lose").style.display ="block";
            }
        },1500)
        gameUser = false
   }
}
function reoladGame(){
    location.reload();
}


    
