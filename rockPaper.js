var userWins = 0;
var computerWins = 0;

//var playGame = function(userWins, computerWins){
    //while (userWins < 5 || computerWins < 5){        
        // Get user pick 
        var userPick = prompt("Do you choose rock, paper or scissors?");
        // Get computer pick
        var computerChoice = Math.random();
            if (computerChoice <0.34){
                computerChoice = "rock";
            }else if(computerChoice <=0.67){
                computerChoice = "paper";
            }
            else{
                computerChoice = "scissors";
            }
        // Play a round of Rock Paper Scissors
        var playRound = function(choice1,choice2){
            if(choice1==choice2){
                return "Computer: " + computerChoice + "\nYou: " + userPick + "\nThe result is a tie!";
            }
            if(choice1=="rock"){
                if(choice2=="scissors"){
                    //userWins = userWins + 1;
                    return "Computer: " + computerChoice + "\nYou: " + userPick + "\nYou won!";
                }
                else{
                   // computerWins = computerWins + 1;
                    return "Computer: " + computerChoice + "\nYou: " + userPick + "\nYou lost!";
                }
            }
            if(choice1=="paper"){
                if(choice2=="rock"){
                   // userWins = userWins + 1;
                    return "Computer: " + computerChoice + "\nYou: " + userPick + "\nYou won!";
                }
                else{
                   // computerWins = computerWins + 1;
                    return "Computer: " + computerChoice + "\nYou: " + userPick + "\nYou lost!";
                }
            }
            if(choice1=="scissors"){
                if(choice2=="rock"){
                    //userWins = userWins + 1;
                    return "Computer: " + computerChoice + "\nYou: " + userPick + "\nYou won!";
                }
                else{
                   // computerWins = computerWins + 1;
                    return "Computer: " + computerChoice + "\nYou: " + userPick + "\nYou lost!";
                }
            }
        }
   // }
   // If (userWins== 5){
       // console.log ("The winner is User with " + userWins + " wins!!!");
      //  } else{ 
           //  console.log ( "The winner is Computer with " + computerWins + " wins!!!");   
   // }
    
//};
//   alert(playGame(userWins, computerWins));
alert(playRound(userPick,computerChoice));