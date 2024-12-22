let boxes=document.querySelectorAll('.box');
let reset=document.querySelector("#reset-game");
let nGame=document.querySelector("#new-game");
let win=document.querySelector("#winner");
let msg=document.querySelector(".msg-container");

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame = ()=>{
    for(box of boxes){
        box.innerText='';
    }
    enabled();

}

const newGame = ()=>{
    for(box of boxes){
        box.innerText='';
    }
    enabled();
    msg.classList.add("hide");


}

const disabled = ()=>
{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enabled = ()=>
{
    for(let box of boxes){
        box.disabled=false;
    }
}

function show(winner){
    msg.classList.remove("hide");
    win.innerText=`Congratulations!  Winner ${winner}`;
    
    
}
reset.addEventListener('click',newGame);
function checkWin(){
    for(let pattern of winPatterns){
    let posVal1=boxes[pattern[0]].innerText;
    let posVal2=boxes[pattern[1]].innerText;
    let posVal3=boxes[pattern[2]].innerText;
    if(posVal1!='' && posVal2!='' && posVal3!=''){
        if(posVal1==posVal2 && posVal2==posVal3){
            let winner=posVal1;
            disabled();
            show(winner);
    }}
}

//

nGame.addEventListener('click',newGame);
}
let turn0=true;// PlayerX, PlayerO
for(let box of boxes){
    box.addEventListener('click',()=>{
        if(turn0){
            box.innerText='O';
            turn0=false;  
        }
        else{
            box.innerText='X';
            turn0=true;
        }
        box.disabled=true;
        checkWin();

    });
    
}    


