"use strict";
const p1name=document.getElementById("name--0");
const p1score=document.getElementById("score--0");
const p1curr_score=document.getElementById("current--0");


const newbt=document.querySelector(".btn--new");
const rollbt=document.querySelector(".btn--roll");
const holdbt=document.querySelector(".btn--hold");
const card=document.querySelector(".dice");

const p2name=document.getElementById("name--1");
const p2score=document.getElementById("score--1");
const p2curr_score=document.getElementById("current--1");
// const imgs=[
//     "images/dice-1.png",
//     "images/dice-2.png",
//     "images/dice-3.png",
//     "images/dice-4.png",
//     "images/dice-5.png",
//     "images/dice-6.png"
// ]
let numplayer;
let activePlayer;
let activescore;
let activecurr_score;
let summ;
let score;
const start=function(){
    p2score.textContent=0;
    p1score.textContent=0;
    numplayer=0;
    activePlayer=p1name;
    activescore=p1score;
    activecurr_score=p1curr_score;
    summ=0;
    score=[0,0];
    card.style.display="none";
}
start();
rollbt.addEventListener("click",function(){
    card.style.display="block"; 
    let nard=Math.trunc(Math.random()*6)+1;
    card.src=`images/dice-${nard}.png`;
    if(nard!=1){
        summ+=nard;
        activecurr_score.textContent=summ;
    }
    else{
        activecurr_score.textContent=0;
        activecurr_score=0;
        summ=0;
        if(numplayer==1){
            activePlayer=p1name;
            activescore=p1score;
            activecurr_score=p1curr_score;
        }
        else{
            activePlayer=p2name;
            activescore=p2score;
            activecurr_score=p2curr_score;
        }
        numplayer=numplayer===0?1:0;
    }

});

holdbt.addEventListener("click",function(){
    score[numplayer]+=summ;
    activescore.textContent=score[numplayer];
    activecurr_score.textContent=0;
    activecurr_score=0;
    summ=0;
    if(numplayer==1){
        activePlayer=p1name;
        activescore=p1score;
        activecurr_score=p1curr_score;
        }
    else{
        activePlayer=p2name;
        activescore=p2score;
        activecurr_score=p2curr_score;
        }
    numplayer=numplayer===0?1:0;
});
newbt.addEventListener("click",start);