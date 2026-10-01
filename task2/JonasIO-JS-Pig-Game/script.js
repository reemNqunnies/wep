"use strict";
const p1name=document.getElementById("#name--0");
const p1score=document.getElementById("#score--0");
const p1curr_score=document.getElementById("#current--0");


const newbt=document.querySelector(".btn btn--new");
const rollbt=document.querySelector(".btn btn--roll");
const holdbt=document.querySelector(".btn btn--hold");
const card=document.querySelector(".dice");

const p2name=document.getElementById("#name--1");
const p2score=document.getElementById("#score--1");
const p2curr_score=document.getElementById("#current--1");
const imgs=[
    "images/dice-1.png",
    "imsges/dice-2.png",
    "imsges/dice-3.png",
    "imsges/dice-4.png",
    "imsges/dice-5.png",
    "imsges/dice-6.png"
]
let numplayer=1;
let activePlayer=p1name;
let activescore=p1score;
let activecurr_score=p1curr_score;

rollbt.addEventListener("click",function(){
    if(!card.checkVisibility())
        card.checkVisibility(true);
    let nard=Math.trunc(Math.random*6)+1;
    card.src=`images/dice-${nard}.png`;
    if(nard!=1){
        activecurr_score+=nard;
        activescore.textContent(activecurr_score);
    }
    else{
        numplayer*=-1;
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
    }

});

holdbt.addEventListener("click",function(){
    
});