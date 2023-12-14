const p1btn=document.querySelector("#p1");
const p2btn=document.querySelector("#p2");
const p1h1=document.querySelector("#p1score");
const p2h1=document.querySelector("#p2score");
const reset=document.querySelector("#reset");
const SelectToWin=document.querySelector("#scoreToWin");

let p1Score=0;
let p2Score=0;
let win=5;
let gameOver=false;

p1btn.addEventListener('click',function(){
    if(!gameOver){
        p1Score+=1;
        if(p1Score===win){
            gameOver=true;
            p1h1.classList.add("winner");
            p2h1.classList.add("loser");
        }
        p1h1.textContent=p1Score;
    }
});
p2btn.addEventListener('click',function(){
    if(!gameOver){
        p2Score+=1;
        if(p2Score===win){
            gameOver=true;
            p2h1.classList.add('winner');
            p1h1.classList.add('loser');
        }
        p2h1.textContent=p2Score;
    }
});
SelectToWin.addEventListener('change',function(){
    win=parseInt(this.value);
    Reset();
});
reset.addEventListener('click',Reset);
function Reset(){
    p1Score=0;
    p2Score=0;
    gameOver=false;
    p1h1.textContent=0;
    p2h1.textContent=0;
    p1h1.classList.remove("winner","loser");
    p2h1.classList.remove("winner","loser");
}