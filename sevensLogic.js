function playGame() {
    // Get the starting bet from the user input
    
    var startingBet = document.forms['luckySevens']['startingBet'].value;
    
    /* Shows error if the starting bet is 0 or a negative number */
    
    if (startingBet <= 0) {
        alert('Error: Please enter a starting bet more than $1.00')
    }
    
    // Set the variables
    
    var gameCash = Number(startingBet);
    var numberOfRolls = 0;
    var highestWon = Number(startingBet);
    var rollsAtHighest = 0;
    
    // As long as there is game cash, then play the game
    
    while (gameCash > 0) {
        
        // Roll the dice
        
        var sumOfDice = rollDice();
        
         /* Increase the number of rolls each time that the dice are rolled */
        
         numberOfRolls ++;
        
        //  Increase the game cash if sum of dice = 7
        
        if (sumOfDice === 7) {
            gameCash += 4;
            
            /* If game cash goes higher than the previous highest amount, change highestWon and rollsAtHighest */
            
            if (gameCash > highestWon) {
                highestWon = gameCash;
                rollsAtHighest = numberOfRolls;
            }
        }
        else {
            gameCash -= 1;
        }
    }
    
    /* Game Over
     Set the values of the table data in HTML */
    
    if (startingBet > 0) {
        document.getElementById("starting-bet-value").innerText = "$" + parseFloat(Math.round(startingBet * 100) / 100).toFixed(2);
        
        document.getElementById("total-rolls").innerText = numberOfRolls;
        
        document.getElementById("highest-amount").innerText = '$' + parseFloat(Math.round(highestWon * 100) / 100).toFixed(2);
        
        document.getElementById("rolls-at-highest").innerText = rollsAtHighest;
        document.getElementById("submitButton").innerText = 'Play Again';
    }
    return false;
}
 

/* Function for rolling dice / returns the sum of two randomly rolled 6-sided dice */
    function rollDice() {
        var dice1 = Math.ceil(Math.random() * (1 + 6 - 1));
        var dice2 = Math.ceil(Math.random() * (1 + 6 - 1));
        return dice1 + dice2;
    }

