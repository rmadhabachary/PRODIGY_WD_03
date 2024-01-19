const boxes=document.querySelectorAll('.item')
const resetButton=document.querySelector('#reset-button')
const declare=document.querySelector('.declare')
const whoseTurn=document.querySelector('.whoseTurn')


let turnx=true;
const  winProbability=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
]

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        
        if(turnx){
            box.innerText="X"
            turnx=false
        }else{
            box.innerText="O"
            turnx=true
        }
        box.disabled=true

        whoseTurn.innerText=`Turn for ${box.innerText=="X"?"O":"X"}`

        checkWinner()
    })
    
})

function declarewinner(winner){
    declare.innerText=`Kudos, ${winner} won the match.`
    declare.classList.remove("hide")
    whoseTurn.classList.add("hide")
    boxes.forEach((box)=>{
        box.disabled=true
    })

}

function checkWinner(){
    winProbability.forEach((prob)=>{
        if(boxes[prob[0]].innerText!=''&&boxes[prob[1]].innerText!=''&&boxes[prob[2]].innerText!==''){
                if((boxes[prob[0]].innerText==boxes[prob[1]].innerText)&&(boxes[prob[1]].innerText==boxes[prob[2]].innerText)){
                    console.log("winner is "+boxes[prob[0]].innerText);
                    declarewinner(boxes[prob[0]].innerText)
                }
        }
    })
   
}

function resetgame(){
    turnx=true;
    declare.classList.add("hide")
    whoseTurn.classList.remove("hide")
    boxes.forEach((box)=>{
        box.innerText=''
        box.disabled=false
    })
    whoseTurn.innerText="Turn for X"

}
resetButton.addEventListener('click',resetgame)



