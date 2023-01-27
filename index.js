var flag=0;
const marker=[0,0,0,0,0,0,0,0,0];
var turn=0;
var gameover=0;
$("#timeOver").hide()
function clicked(s){
    // clearTimeout(countdown)
    if(turn>0){
        timeLeft = 10;
    }
    else{
        timeLeft = 10;        
    }
    // timeOutFunction=setTimeout(countdown, 1000);
    if (turn==0){
        setTimeout(countdown, 1000);
    }
    if(flag==0 && marker[s-1]==0 && gameover==0){
        changeVisibility(s+'-x');
        flag=1;
        marker[parseInt(s)-1]=1;
        turn+=1
        console.log(marker)
        statusChecker();

        
    }
    else if(flag==1 && marker[s-1]==0 && gameover==0){
        changeVisibility(s+'-O');
        flag=0;
        marker[parseInt(s)-1]=2;
        turn+=1
        console.log(marker)
        statusChecker();
    }

}

function changeVisibility(param) { 
    console.log("write x or o")
    document.getElementById(param).style.visibility='visible'; 
    
}

function statusChecker(){
    console.log("Checking status")
    if (marker[0]==1 && marker[1]==1 && marker[2]==1){
        document.getElementById("1-x").style.backgroundColor = "yellow";
        document.getElementById("2-x").style.backgroundColor = "yellow";
        document.getElementById("3-x").style.backgroundColor = "yellow";
        xwins();
    }  
    else if(marker[3]==1 && marker[4]==1 && marker[5]==1){
        document.getElementById("4-x").style.backgroundColor = "yellow";
        document.getElementById("5-x").style.backgroundColor = "yellow";
        document.getElementById("6-x").style.backgroundColor = "yellow";
        xwins();
    }
    else if(marker[6]==1 && marker[7]==1 && marker[8]==1){
        document.getElementById("7-x").style.backgroundColor = "yellow";
        document.getElementById("8-x").style.backgroundColor = "yellow";
        document.getElementById("9-x").style.backgroundColor = "yellow";
        xwins();
    }
    else if(marker[0]==1 && marker[3]==1 && marker[6]==1){
        document.getElementById("1-x").style.backgroundColor = "yellow";
        document.getElementById("4-x").style.backgroundColor = "yellow";
        document.getElementById("7-x").style.backgroundColor = "yellow";
        xwins();
    }
    else if(marker[1]==1 && marker[4]==1 && marker[7]==1){
        document.getElementById("2-x").style.backgroundColor = "yellow";
        document.getElementById("5-x").style.backgroundColor = "yellow";
        document.getElementById("8-x").style.backgroundColor = "yellow";
        xwins();
    }
    else if(marker[2]==1 && marker[5]==1 && marker[8]==1){
        document.getElementById("3-x").style.backgroundColor = "yellow";
        document.getElementById("6-x").style.backgroundColor = "yellow";
        document.getElementById("9-x").style.backgroundColor = "yellow";
        xwins();
    }
    else if(marker[0]==1 && marker[4]==1 && marker[8]==1){
        document.getElementById("1-x").style.backgroundColor = "yellow";
        document.getElementById("5-x").style.backgroundColor = "yellow";
        document.getElementById("9-x").style.backgroundColor = "yellow";
        xwins();
    }
    else if(marker[2]==1 && marker[4]==1 && marker[6]==1){
        document.getElementById("5-x").style.backgroundColor = "yellow";
        document.getElementById("3-x").style.backgroundColor = "yellow";
        document.getElementById("7-x").style.backgroundColor = "yellow";
        xwins();
    }
    else if (marker[0]==2 && marker[1]==2 && marker[2]==2){
        document.getElementById("1-O").style.backgroundColor = "yellow";
        document.getElementById("2-O").style.backgroundColor = "yellow";
        document.getElementById("3-O").style.backgroundColor = "yellow";
        owins();
    }  
    else if(marker[3]==2 && marker[4]==2 && marker[5]==2){
        document.getElementById("4-O").style.backgroundColor = "yellow";
        document.getElementById("5-O").style.backgroundColor = "yellow";
        document.getElementById("6-O").style.backgroundColor = "yellow";
        owins();
    }
    else if(marker[6]==2 && marker[7]==2 && marker[8]==2){
        document.getElementById("7-O").style.backgroundColor = "yellow";
        document.getElementById("8-O").style.backgroundColor = "yellow";
        document.getElementById("9-O").style.backgroundColor = "yellow";
        owins();
    }
    else if(marker[0]==2 && marker[3]==2 && marker[6]==2){
        document.getElementById("1-O").style.backgroundColor = "yellow";
        document.getElementById("4-O").style.backgroundColor = "yellow";
        document.getElementById("7-O").style.backgroundColor = "yellow";
        owins();
    }
    else if(marker[1]==2 && marker[4]==2 && marker[7]==2){
        document.getElementById("2-O").style.backgroundColor = "yellow";
        document.getElementById("5-O").style.backgroundColor = "yellow";
        document.getElementById("8-O").style.backgroundColor = "yellow";
        owins();
    }
    else if(marker[2]==2 && marker[5]==2 && marker[8]==2){
        document.getElementById("3-O").style.backgroundColor = "yellow";
        document.getElementById("6-O").style.backgroundColor = "yellow";
        document.getElementById("9-O").style.backgroundColor = "yellow";
        owins();
    }
    else if(marker[0]==2 && marker[4]==2 && marker[8]==2){
        document.getElementById("1-O").style.backgroundColor = "yellow";
        document.getElementById("5-O").style.backgroundColor = "yellow";
        document.getElementById("9-O").style.backgroundColor = "yellow";
        owins();
    }
    else if(marker[2]==2 && marker[4]==2 && marker[6]==2){
        document.getElementById("5-O").style.backgroundColor = "yellow";
        document.getElementById("3-O").style.backgroundColor = "yellow";
        document.getElementById("7-O").style.backgroundColor = "yellow";
        owins();
    }
    else if(turn==9){
        drawmatch();
    }

    
}

function xwins(){
    gameover=1;
    console.log("X wins");
    changeVisibility('xWins');
    timeLeft=1;
    $("#counter").hide();

}

function owins(){
    gameover=1;
    console.log("O wins");
    changeVisibility('oWins');
    timeLeft=1;
    $("#counter").hide();
}

function drawmatch(){
    gameover=1;
    console.log("draw match");
    changeVisibility('draw');
    $("#counter").hide();
}

function reload(){
    location.reload()
}



function countdown() {

	timeLeft--;
	document.getElementById("counter").innerHTML = String( timeLeft );

	if (timeLeft > 0) {
		setTimeout(countdown, 1000);
	}
    if (timeLeft==0 && gameover==0){
        if (flag==1){
            $("#timeOver").show()
            xwins();
        }
        else{
            $("#timeOver").show()
            owins();
        }
    }
};


