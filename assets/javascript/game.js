//This software is the backend for the crystal collector game

var numberToGuess = Math.floor(Math.random() * 102 + 19); //generate a random number between 19 and 120

var gemNumber = [];
var gemNumberPicture = [];
var gemDuplicate = true;

var playerScoreNum = 0;

var wins = 0;
var losses = 0;

var gameReset = false;

//This while loop creates an array of 4 unique numbers between 1 and 12

while (gemDuplicate == true) {

    //generate random numbers for the gem array

    for (var i = 0; i < 4; i++) {

        gemNumber[i] = Math.floor(Math.random() * 12 + 1); //generate a random number between 19 and 120
        gemNumberPicture[i] = gemNumber[i];

    }

    //Check to see if two numbers are duplicates

    var gemNumberSorted = gemNumber.sort(function (a, b) { return a - b });

    gemDuplicate = false;

    for (var i = 0; i < gemNumberSorted.length - 1; i++) {


        if (gemNumberSorted[i + 1] == gemNumberSorted[i]) {
            gemDuplicate = true;
        }
    }

    //End of Duplicate Number Check
}


$("#targetNum").html("<p> Your Number: " + numberToGuess + "</p>");





$("#purpleGem").on("click", function () {

   
    playerScoreNum = playerScoreNum + gemNumberPicture[0];
    gameReset = winCheck(playerScoreNum, numberToGuess);

    if (gameReset == true) {

        numberToGuess = Math.floor(Math.random() * 102 + 19); //generate a random number between 19 and 120

        gemNumberPicture = resetGame();

        playerScoreNum = 0;

        gameReset = false;

    }

    $("#playerScore").html("<p>" + playerScoreNum + "</p>");
    $("#targetNum").html("<p> Your Number: " + numberToGuess + "</p>");

});

$("#blueGem").on("click", function () {

   
    playerScoreNum = playerScoreNum + gemNumberPicture[1];
    gameReset = winCheck(playerScoreNum, numberToGuess);

    if (gameReset == true) {

        numberToGuess = Math.floor(Math.random() * 102 + 19); //generate a random number between 19 and 120

        gemNumberPicture = resetGame();

        playerScoreNum = 0;

        gameReset = false;

    }

    $("#playerScore").html("<p>" + playerScoreNum + "</p>");
    $("#targetNum").html("<p> Your Number: " + numberToGuess + "</p>");

   

});

$("#orangeGem").on("click", function () {

   
    playerScoreNum = playerScoreNum + gemNumberPicture[2];
    gameReset = winCheck(playerScoreNum, numberToGuess);

    if (gameReset == true) {

        numberToGuess = Math.floor(Math.random() * 102 + 19); //generate a random number between 19 and 120

        gemNumberPicture = resetGame();

        playerScoreNum = 0;

        gameReset = false;

    }

    $("#playerScore").html("<p>" + playerScoreNum + "</p>");
    $("#targetNum").html("<p> Your Number: " + numberToGuess + "</p>");



});

$("#greenGem").on("click", function () {

    
    playerScoreNum = playerScoreNum + gemNumberPicture[3];
    gameReset = winCheck(playerScoreNum, numberToGuess);

    if (gameReset == true) {

        numberToGuess = Math.floor(Math.random() * 102 + 19); //generate a random number between 19 and 120

        gemNumberPicture = resetGame();

        playerScoreNum = 0;

        gameReset = false;

    }

    $("#playerScore").html("<p>" + playerScoreNum + "</p>");
    $("#targetNum").html("<p> Your Number: " + numberToGuess + "</p>");



});

function winCheck(playerScoreNum, numberToGuess) {

    if (playerScoreNum == numberToGuess) {

        wins = wins + 1;
        $("#wins").html("<p>Wins: " + wins + "</p>");
        return true;
    }
    else if (playerScoreNum > numberToGuess) {

        losses = losses + 1;
        $("#losses").html("<p>Losses: " + losses + "</p>");
        return true;

    }

    else {
        return false;

    }


}

function resetGame(x) {

    var numberToGuess = Math.floor(Math.random() * 102 + 19); //generate a random number between 19 and 120      

    var gemNumber = [];
    var gemNumberPicture = [];
    var gemDuplicate = true;


    //This while loop creates an array of 4 unique numbers between 1 and 12

    while (gemDuplicate == true) {

        //generate random numbers for the gem array

        for (var i = 0; i < 4; i++) {

            gemNumber[i] = Math.floor(Math.random() * 12 + 1); //generate a random number between 19 and 120
            gemNumberPicture[i] = gemNumber[i];

        }

        //Check to see if two numbers are duplicates

        var gemNumberSorted = gemNumber.sort(function (a, b) { return a - b });

        gemDuplicate = false;

        for (var i = 0; i < gemNumberSorted.length - 1; i++) {


            if (gemNumberSorted[i + 1] == gemNumberSorted[i]) {
                gemDuplicate = true;
            }
        }
    }


    return gemNumberPicture; //return a new array of gem values

}


