// let boxes = document.querySelectorAll(".box");
// let resetBtn = document.querySelector("#reset-btn");

// let turnO = true; // true means player O's turn, false means player X's turn

// const winPatterns = [
//     [0,1,2],
//     [0,3,6],
//     [0,4,8],
//     [1,4,7],
//     [2,5,8],
//     [2,4,6],
//     [3,4,5],
//     [6,7,8],
// ];

// boxes.forEach(box => {
//     box.addEventListener("click", () => {
//         console.log("Box was clicked");
//         // Additional code to handle the click event can go here
//         if(turnO){
//             box.innerText = "O";
//             turnO = false;
//         }else{
//             box.innerText = "X";
//             turnO = true;
//         }
//         box.disabled = true;

//     });
// });



// const checkWinner = () => {
//     for(let pattern of winPatterns){
//         console.log(pattern[0],pattern[1],pattern[2]);
//     }
// };




























let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new_btn");
let msgContainer = document.querySelector(".msg_container");
let msg = document.querySelector("#message");

let turnO = true; // true means player O's turn, false means player X's turn

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        console.log("Box was clicked");
        if(turnO){
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disabledBoxes  = ()  => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (Winner) =>  {
    msg.innerText =  `congratulations, Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}
const checkWinner = () => {
    for(let pattern of winPatterns){
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        // );
        // You can extend this function later to check actual winner logic



        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("Winner",pos1val);

                showWinner();
            }
        }
    }
};



// // You may also add reset button functionality here
// resetBtn.addEventListener("click", () => {
//     boxes.forEach(box => {
//         box.innerText = "";
//         box.disabled = false;
//     });
//     turnO = true;
// });


newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);