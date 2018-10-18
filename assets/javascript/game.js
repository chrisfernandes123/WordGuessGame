    
    var maxGuesses = 10;
    var guessesCount = 0;
    var letterGuesses = "";
    var Wins = 0;
    var Losses = 0;
    var guessesSoFar ="";
    var guessesLeft = maxGuesses;
    var statusMsg;
    var answerMsg;
    var currentQuestion;
    var currentAnswer;
    var currentAnswerMasked;
    var currentAnswerMaskedDisplay;
    var unknownLetter = "_";
    var numTries = 1;
    var maxQuestions = 5;
    
    var LettersAllowed = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
  ]
    var Questions = {
        "Q1": "In The Karate Kid what color did Daniel have to paint Miagi's house, as part of his training?",
        "A1": "Green",
        "Q2": "Which 80’s movie was the first to become a hit largely due to MTV?",
        "A2": "Flashdance",
        "Q3": "What god were the Thugees worshipping in Indiana Jones and the Temple of Doom?",
        "A3": "Kali",
        "Q4": "In 'Dirty Dancing' what was Baby's real name?",
        "A4": "Frances",
        "Q5": "What does Ally Sheedy say she likes to drink in the Breakfast Club?",
        "A5": "Vodka"
        }

        function resetgame(){
          statusMsg ="Sorry there are no more questions. Thank you for playing.  Press any key to try again."
          resetColor();
          resetQuestion();
          document.getElementById("game").textContent = statusMsg;
          document.getElementById("answerMsg").textContent = "-";
          document.getElementById("guessesSoFar").textContent = "Guesses So Far: ";
          document.getElementById("guessesLeft").textContent = "Guesses Left: " ;
          document.getElementById("Losses").textContent = "Losses: 0" ;
          document.getElementById("Wins").textContent = "Wins: 0";
          numTries =1;
        }

        function resetColor(){
          document.getElementById("game").classList.remove("game-red");
          document.getElementById("game").classList.remove("game-green");
        }
        
        function resetQuestion(){
          guessesCount = 0;
          letterGuesses = "";
          guessesLeft = maxGuesses;
          guessesSoFar = "";

        }
      
    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

    
      
      //Sets the user's guess to upper case.
      var userGuess = event.key.toUpperCase();

    /*Checks if the user's guess is in the array of letters allowed.  If it is, then proceed.
    if not, don't do anything and wait another user guess*/
    if (LettersAllowed.indexOf(userGuess)>-1)

    {
   

     if (guessesCount === 0) {
      resetColor();
       switch(numTries){
        case 1:
          currentQuestion = Questions.Q1;
          currentAnswerMasked = unknownLetter.repeat(Questions.A1.length).toUpperCase();
          currentAnswer = Questions.A1.toUpperCase();
        break;
        case 2:
          currentQuestion = Questions.Q2;
          currentAnswerMasked = unknownLetter.repeat(Questions.A2.length).toUpperCase();
          currentAnswer = Questions.A2.toUpperCase();
          
        break;
        case 3:
        currentQuestion = Questions.Q3;
          currentAnswerMasked = unknownLetter.repeat(Questions.A3.length).toUpperCase();
          currentAnswer = Questions.A3.toUpperCase();
         
        break;
        case 4:
        currentQuestion = Questions.Q4;
          currentAnswerMasked = unknownLetter.repeat(Questions.A4.length).toUpperCase();
          currentAnswer = Questions.A4.toUpperCase();
     
        break;
        case 5:
        currentQuestion = Questions.Q5;
          currentAnswerMasked = unknownLetter.repeat(Questions.A5.length).toUpperCase();
          currentAnswer = Questions.A5.toUpperCase();

        break;
       }

     statusMsg = "Question: " + currentQuestion;
    answerMsg = currentAnswerMasked;

      }
     else if (guessesCount > 0){
        
        guessesLeft = maxGuesses-guessesCount;
       guessesSoFar += userGuess + " ";
          

          

for (var i = 0; i < currentAnswer.length; i++) {

                 //if found
        if (currentAnswer[i].indexOf(userGuess) === 0){
            //if first letter in loop
            if (i === 0) {
              currentAnswerMaskedDisplay = currentAnswer[i];
            }
            else{
              currentAnswerMaskedDisplay += currentAnswer[i];
            }
        
          }

         else{
            if (i === 0) {
              currentAnswerMaskedDisplay = currentAnswerMasked[i];
         
              }
              else{
                currentAnswerMaskedDisplay += currentAnswerMasked[i];
               
              }
         
        }


        
       
      } // close for loop

      currentAnswerMasked = currentAnswerMaskedDisplay;
      
      statusMsg = "Question: " + currentQuestion;
      answerMsg =  currentAnswerMasked;
      }


     guessesCount ++;

            if (currentAnswer === currentAnswerMasked){
            Wins ++;
            numTries ++;
            statusMsg = "You WON that round! :) The answer was: " + currentAnswer + ". Press any key for the next question.";
            document.getElementById("game").classList.add("game-green");
            resetQuestion();     
          }
          else if (guessesLeft === 0){
            Losses ++;
            numTries ++;
            statusMsg = "You lost that round... :( Press any key for the next question.";
            document.getElementById("game").classList.add("game-red");
            resetQuestion();
          }

       

    document.getElementById("game").textContent = statusMsg;
    document.getElementById("answerMsg").textContent = answerMsg;
    document.getElementById("guessesSoFar").textContent = "Guesses So Far: " + guessesSoFar;
    document.getElementById("guessesLeft").textContent = "Guesses Left: " + guessesLeft ;
    document.getElementById("Losses").textContent = "Losses: " + Losses ;
    document.getElementById("Wins").textContent = "Wins: " + Wins ;

         /*If the number of tries is greater than the number of questions, reset the game by 
      executing the resetgame function*/
      if (numTries > maxQuestions) {
        resetgame();
    }
    
        } 
  }