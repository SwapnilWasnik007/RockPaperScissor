let props = [{
    name:"Rock",
    emoji:"👊",
    canbeat:"Paper"
},{
    name:"Paper",
    emoji:"🖐",
    canbeat:"Scissor"
},
{name:"Scissor",
emoji:"✌",
canbeat:"Rock"}
];

let player_1Area = document.getElementById('player_1');
let mainDiv = document.getElementById('mainDiv');

let computer = document.getElementById('computer');
let result = document.getElementById('result');

let rockBtnComp = document.getElementById('rockBtn');
let paperBtnComp = document.getElementById('paperBtn');
let scissorBtnComp = document.getElementById('scissorBtn');
let resetBtnComp = document.getElementById('resetBtn');
    
let playerInitialHandImgComp = document.getElementById('playerInitialHand');
let rockPaperScissrGifImgComp = document.getElementById('rockPaperScissrGif');
let playerRockImgComp = document.getElementById('playerRock');
let playerScissorImgComp = document.getElementById('playerScissor');
let playerPaperImgComp = document.getElementById('playerPaper');

let computerInitialHandImgComp = document.getElementById('computerInitialHand');
let computerRockPaperScissrGifImgComp = document.getElementById('computerRockPaperScissrGif');
let computerRockImgComp = document.getElementById('computerRock');
let computerScissorImgComp = document.getElementById('computerScissor');
let computerPaperImgComp = document.getElementById('computerPaper');

function getComputerMove(){
    let i = Math.floor(Math.random() * props.length)

    computerInitialHandImgComp.setAttribute('hidden', true);
    computerRockPaperScissrGifImgComp.removeAttribute('hidden');
    let computerSelection = props[i].name;

    setTimeout(function () {
        computerRockPaperScissrGifImgComp.setAttribute('hidden', true);
        resetBtnComp.removeAttribute('disabled');
        switch(computerSelection){
            case 'Rock' :
                computerRockImgComp.removeAttribute('hidden');
            break;
            case 'Paper' :
                computerPaperImgComp.removeAttribute('hidden');
            break;
            case 'Scissor' :
                computerScissorImgComp.removeAttribute('hidden');
            break;
        }
    }, 2000);

    // computer.innerHTML = `
    // <div>${props[i].emoji}</div>
    // <div>${props[i].name}</div>
    // `;
    return props[i];
}

function resetGame(){
    //btn Reset
    rockBtnComp.removeAttribute('disabled');
    paperBtnComp.removeAttribute('disabled');
    scissorBtnComp.removeAttribute('disabled');
    resetBtnComp.removeAttribute('disabled');

    playerInitialHandImgComp.removeAttribute('hidden');
    rockPaperScissrGifImgComp.setAttribute('hidden', true);
    playerRockImgComp.setAttribute('hidden', true);
    playerScissorImgComp.setAttribute('hidden', true);
    playerPaperImgComp.setAttribute('hidden', true);

    computerInitialHandImgComp.removeAttribute('hidden');
    computerRockPaperScissrGifImgComp.setAttribute('hidden', true);
    computerRockImgComp.setAttribute('hidden', true);
    computerScissorImgComp.setAttribute('hidden', true);
    computerPaperImgComp.setAttribute('hidden', true);
}

function disableButton(playerselection){
    rockBtnComp.setAttribute('disabled', true);
    paperBtnComp.setAttribute('disabled', true);
    scissorBtnComp.setAttribute('disabled', true);
    resetBtnComp.setAttribute('disabled', true);
}

function playgame(playerselection){
    resetGame();
    disableButton();

    playerInitialHandImgComp.setAttribute('hidden', true);
    rockPaperScissrGifImgComp.removeAttribute('hidden');

    setTimeout(function () {
        rockPaperScissrGifImgComp.setAttribute('hidden', true);
        resetBtnComp.removeAttribute('disabled');
        switch(playerselection){
            case 'Rock' :
                playerRockImgComp.removeAttribute('hidden');
            break;
            case 'Paper' :
                playerPaperImgComp.removeAttribute('hidden');
            break;
            case 'Scissor' :
                playerScissorImgComp.removeAttribute('hidden');
            break;
        }
    }, 2000);

    let playerMove = props.filter(x => x.name == playerselection);
    // player_1Area.innerHTML = `
    // <div>${playerMove[0].emoji}</div>
    // <div>${playerMove[0].name}</div>
    // `;
    let computerSelection = getComputerMove();
    if(playerselection == computerSelection.name){
        result.innerText = "Draw";
    }else{
    if(playerselection == computerSelection.canbeat ){
        setTimeout(() =>{
            result.innerText = "Winner: Player ";
            party.confetti(result, {
                count: party.variation.range(20, 40)
            });
        }, 2000);
    }else { 
        setTimeout(() =>{
            result.innerText = "Winner: Computer ";
        }, 2000);
    }}
    
   
}