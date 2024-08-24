let boxes= document.querySelectorAll(".box");
let resetbtn= document.querySelector(".reset");
let newGamebtn= document.querySelector(".new");
let message = document.querySelector(".message");
let para= document.querySelector("h3");
let turnO= true;
let winningPatterns= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turnO==true){
            box.innerHTML="O";
            turnO=false;
        }
        else{
            box.innerHTML="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    }); 
});

let checkWinner = ()=>{
    for(pattern of winningPatterns){
        let val1= boxes[pattern[0]].innerText;
        let val2= boxes[pattern[1]].innerText;
        let val3= boxes[pattern[2]].innerText;

        if(val1 !="" && val2 !="" && val3 !=""){
             if(val1===val2 && val2===val3){
                console.log("Winner");
                showWinner(val1);
             }
        }
    }
}

let showWinner= (winner)=>{
     message.innerHTML=`<h1>Congratulations Winner is ${winner} </h1>`;
     message.classList.remove("hide");
     disabledbtns();
}
let disabledbtns= ()=>{
    for(box of boxes){
        box.disabled=true;
    }
}
let enabledbtns= ()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
let resetgame= ()=>{
    turnO=true;
    enabledbtns();
    message.classList.add("hide");
}

newGamebtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);