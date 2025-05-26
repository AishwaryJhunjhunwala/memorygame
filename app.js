let gameseq=[];
let userseq=[];
let btns=["red","yellow","green","purple"];
let started=false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function () {
    if(started==false){
       console.log("game started");
       started=true;
    
    levelUp();
    }

});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },300);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    },250);
}

function levelUp(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;

    let ranIdx=Math.floor(Math.random()*3);
    let randColor=btns[ranIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    console.log(gameseq);
    gameFlash(randBtn);
}

function checkAns(idx){
    // console.log("curr level: ",level);
    // let idx=level-1;
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelUp(),1000);
        }
        // console.log("same value");
    }else{
        h2.innerHTML=`Game Over! Your Score was <b> ${level}</b> .press any key to start.`;
        document.querySelector("body").style.backgroundColor="Red";
        setTimeout(function ( ) {
            document.querySelector("body").style.backgroundColor="white";
        },150)
        
        reset();
    }
}
// random btn choose;

function userPress(){
    let btn=this;
    userFlash(btn);
    console.log("button was pressed");
    console.log(this);

    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    // console.log(usercolor);

    checkAns(userseq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",userPress);
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}