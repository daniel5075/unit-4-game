//create crystals displayed as buttons done
//Create vars
var totalClicked = 0
var gameRandomNumber = 0;
var crystalNumber = [];
var generateRandomNumber = 0;
var winTotal = 0;
var lossTotal = 0;
//generate random numbers for game between 19 and 120
function gameStart() {
    gameRandomNumber = Math.floor(Math.random() * 102) + 19;
    $("#targetNumber").html(gameRandomNumber);
    //generate random numbers for each crystal from 1-12
    for (i = 0; i < 4; i++) {
        var crystalRandomNumber = Math.floor(Math.random() * 12) + 1;
        crystalNumber.push(crystalRandomNumber);
    }
}
function gameReset() {
    totalClicked = 0;
    gameRandomNumber = 0;
    crystalNumber = [];
    totalClicked = 0;
    $("#totalScore").html(totalClicked);
    gameStart();
}
function checkWin() {
    if (gameRandomNumber === totalClicked) {
        winTotal++
        $("#totalWins").html(winTotal);
        gameReset()
    }
    if (gameRandomNumber < totalClicked) {
        lossTotal++
        $("#totalLosses").html(lossTotal);
        gameReset()
    }
}

function Clicked1() {

    totalClicked = totalClicked + crystalNumber[0];
    $("#totalScore").html(totalClicked);
    console.log("total Clicked: " + totalClicked);
    checkWin();
}

function Clicked2() {
    totalClicked = totalClicked + crystalNumber[1];
    $("#totalScore").html(totalClicked);
    console.log("total Clicked: " + totalClicked);
    checkWin();
}

function Clicked3() {
    totalClicked = totalClicked + crystalNumber[2];
    $("#totalScore").html(totalClicked);
    console.log("total Clicked: " + totalClicked);
    checkWin();
}
function Clicked4() {
    totalClicked = totalClicked + crystalNumber[3];
    $("#totalScore").html(totalClicked);
    console.log("total Clicked: " + totalClicked);
    checkWin();
}


//assign random numbers to crystal pictures
$("#btn1").on("click", Clicked1);
$("#btn2").on("click", Clicked2);
$("#btn3").on("click", Clicked3);
$("#btn4").on("click", Clicked4);
console.log("Total Score " + totalClicked)
//on click add crystal number to total number
//check after each click if total number equals games random number, 
//if less keep playing, if equal-win.  If more-lose (resart game wth new randow numbers
//running total of number of games won/lost.
gameStart()

// $("#totalScore").html(totalClicked);
console.log(gameRandomNumber);
console.log("Crystal Number " + crystalNumber);
