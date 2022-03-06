//whiteboarding -->   psuedocoding

//need 9 squares
       //9squares -> divs//buttons
        //add event listeners to each div div.addEventListener
        //style our squares -> display: flexbox or grid

let turns=0
let first="X" //just default, we change it
let second="O" //just default, we change it
let currentPlayer="X" //just default, we change it

let playerOne=[]
let playerTwo=[]
//can store which ones they picked here to compare to the "winning" conditions

let btn= document.querySelector('#restart')
btn.addEventListener("click", startGame)



function startGame(){
    // 2 players -> X and O
            //use our modulus to control turn x or o
            // if turns  % 2 = 0 ... player1 (x)
    playerOne=[]
    playerTwo=[]
    //made these empty, for each new game

    // a way to specify ...or... to choose, who goes first
    first = Math.random() < 0.5 ? "X" : "O";
    if (first =="X"){second="O"} else {second="X"}
    currentPlayer= first;
    //console.log(first)

    //if turns == 9 ...restart game button pops up.
    turns = 0

    //clear Board
    let tiles=document.querySelectorAll(".box")
    tiles.forEach(elem => elem.innerText="")

     //have the players turn on screen and have them able to put their x or o on screen
    let square= document.querySelectorAll(".box")
    square.forEach(elem => elem.addEventListener("click", turn))
}



 function turn(event){
    event.preventDefault()

        //turns are alternating
        // if(turns % 2 === 0){player = X} else{player = O}          -or-
    currentPlayer= turns % 2 == 0 ? second : first 

    let boxPlace= event.srcElement.id
    //console.log(boxPlace)
    //change the text in the box to the X or O 
    let tile=document.getElementById(boxPlace)

    if (tile.innerText){alert("Please pick a different square!")}
    else{     //once a square is taken it cant be replaced by another
        tile.innerText=currentPlayer

        //add to that players stored stuff they clicked 
        if (currentPlayer== first){ playerOne.push(boxPlace) } else{playerTwo.push(boxPlace)}
        // console.log(playerTwo) // console.log(playerOne)

        turns++

        if (turns>4 && turns<10){winCheck(currentPlayer)} //5 is the min turns before someone can win

        //if turns == 9 ...restart game button pops up.  9turns max
        if (turns ==9) { //end game logic- when board is full, it is a tie, gameover
            alert("It's a Tie!") //why does it do the alert BEFORE adding that last X/O ?  can I make the alert fancy later?
        }


       // an option/button to restart game- separate button from the original start?


          //make a scoreboard to show win/losses
    }
 }


 //win condition -> 3 of the same in a row
 const winConditions=[
    ["cell-1","cell-2","cell-3"],["cell-4","cell-5","cell-6"],["cell-7","cell-8","cell-9"],
    ["cell-1","cell-4","cell-7"],["cell-2","cell-5","cell-8"],["cell-3","cell-6","cell-9"],
    ["cell-1","cell-5","cell-9"],["cell-3","cell-5","cell-7"],
    //can have numbers representing the indexes representing the different combinations
    //can iterate over indices - ex. cells 1 2 3 represent 0, 1, 2 
    //can manipulate or see whats in the divs boxes
 ]

 function winCheck(player){
    var check
    if (currentPlayer=== first){check=playerOne} else{check= playerTwo}
    //compare what's in their array to ALL the win condition possibilities
    // how to check without order of the stuff?
    //like just that it's the values same in any order 
        //???????????????????????

    check = check.sort() //console.log(check)
    /* test player arrays over win conditions or vice versa ~ patricio used .map 
    can lok at each of the 3 cells needed for a win and see if all 3 an X or O ~ 
   he used new Set(row)
    map indices and access their inner texts for the array?
    idk i'm more confused after that explanation 
    let arraycheck = winConditions.map (innerArr => ) */ 


    //can also check if the conditions id - if all those boxes have X/O not empty
    //use Set and if there's 3 things in there but set gives 1 reult means its just x or just o 

    //show who won - maybe change background color of the ones that are 3 in a row 
 }

// have it play vs. computer




        

        