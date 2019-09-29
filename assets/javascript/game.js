//create crystals displayed as buttons done
//Create vars
var totalClicked = 0
var gameRandomNumber = 0;
var crystalNumber = [];
var generateRandomNumber = 0;
//generate random numbers for game between 19 and 120
function gameStart() {
    gameRandomNumber = Math.floor(Math.random() * 102) + 19;

    //generate random numbers for each crystal from 1-12
    for (i = 0; i < 4; i++) {
        var crystalRandomNumber = Math.floor(Math.random() * 12) + 1;
        crystalNumber.push(crystalRandomNumber);
    }
}
function Clicked1() {

    totalClicked = totalClicked + crystalNumber[0];
    $("#totalScore").html(totalClicked);
    console.log("total Clicked: " + totalClicked);
    if (gameRandomNumber === totalClicked) {
        console.log("You Win")
    }
    else if (gameRandomNumber < totalClicked) {
        console.log("you Lose")
    }

}
function Clicked2() {
    totalClicked = totalClicked + crystalNumber[1];
    $("#totalScore").html(totalClicked);
    console.log("total Clicked: " + totalClicked);
    if (gameRandomNumber === totalClicked) {
        console.log("You Win")
    }
    else if (gameRandomNumber < totalClicked) {
        console.log("you Lose")
    }
}
function Clicked3() {
    totalClicked = totalClicked + crystalNumber[2];
    $("#totalScore").html(totalClicked);
    console.log("total Clicked: " + totalClicked);
    if (gameRandomNumber === totalClicked) {
        console.log("You Win")
    }
    else if (gameRandomNumber < totalClicked) {
        console.log("you Lose")
    }
}
function Clicked4() {
    totalClicked = totalClicked + crystalNumber[3];
    $("#totalScore").html(totalClicked);
    console.log("total Clicked: " + totalClicked);
    if (gameRandomNumber === totalClicked) {
        console.log("You Win")
    }
    else if (gameRandomNumber < totalClicked) {
        console.log("you Lose")
    }
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
$("#targetNumber").html(gameRandomNumber);
// $("#totalScore").html(totalClicked);
console.log(gameRandomNumber);
console.log("Crystal Number " + crystalNumber);



