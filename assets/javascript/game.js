    var QuestionCount = 2;
    var MaxGuesses = 10;
    var GuessesCount = 0;
    var LetterGuesses = "";
    var Wins = 0;
    var Losses = 0;
    var GuessesSoFar ="";
    var GuessesLeft = MaxGuesses;
    var statusmsg;
    var CurrentQuestion;
    var CurrentAnswer;
    var CurrentAnswerMasked;
    var CurrentAnswerMaskedDisplay;
    var UnknownLetter = "_";
    var bFirstMatch = false;
    var NumTries = 1;
    var MaxNumTries = 5;
    
 
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

 
      
    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {
     
      // if ((typeof y) === "string") {
      //           console.log ("y is a string");
      //       }
      if (NumTries > MaxNumTries) {
            statusmsg ="Sorry there are no more questions. Thank you for playing."
            GuessesLeft = 0;
       document.getElementById("GuessesLeft").textContent = "Guesses Left: " + GuessesLeft ;
       document.getElementById("game").textContent = statusmsg;
            return;
        }



    if (GuessesCount === 0) {
      
       switch(NumTries){
        case 1:
          CurrentQuestion = Questions.Q1;
          CurrentAnswerMasked = UnknownLetter.repeat(Questions.A1.length).toUpperCase();
          CurrentAnswer = Questions.A1.toUpperCase();
        break;
        case 2:
          CurrentQuestion = Questions.Q2;
          CurrentAnswerMasked = UnknownLetter.repeat(Questions.A2.length).toUpperCase();
          CurrentAnswer = Questions.A2.toUpperCase();
          
        break;
        case 3:
        CurrentQuestion = Questions.Q3;
          CurrentAnswerMasked = UnknownLetter.repeat(Questions.A3.length).toUpperCase();
          CurrentAnswer = Questions.A3.toUpperCase();
         
        break;
        case 4:
        CurrentQuestion = Questions.Q4;
          CurrentAnswerMasked = UnknownLetter.repeat(Questions.A4.length).toUpperCase();
          CurrentAnswer = Questions.A4.toUpperCase();
     
        break;
        case 5:
        CurrentQuestion = Questions.Q5;
          CurrentAnswerMasked = UnknownLetter.repeat(Questions.A5.length).toUpperCase();
          CurrentAnswer = Questions.A5.toUpperCase();

        break;
       }

     statusmsg = "Question: " + CurrentQuestion;
  statusmsg += CurrentAnswerMasked;

      }
     else if (GuessesCount > 0){
        var userGuess = event.key.toUpperCase();
        GuessesLeft = MaxGuesses-GuessesCount;
       GuessesSoFar += userGuess + " ";
          

          

for (var i = 0; i < CurrentAnswer.length; i++) {

                 //if found
        if (CurrentAnswer[i].indexOf(userGuess) === 0){
            //if first letter in loop
            if (i === 0) {
              CurrentAnswerMaskedDisplay = CurrentAnswer[i];
              
             
            }
            else{
              CurrentAnswerMaskedDisplay += CurrentAnswer[i];
              
            }
        
          }

         else{
            if (i === 0) {
              CurrentAnswerMaskedDisplay = CurrentAnswerMasked[i];
         
              }
              else{
                CurrentAnswerMaskedDisplay += CurrentAnswerMasked[i];
               
              }
         
        }


        
       
      } // close for loop




         CurrentAnswerMasked = CurrentAnswerMaskedDisplay;
      
      statusmsg = "Question: " + CurrentQuestion;
      statusmsg += CurrentAnswerMasked;

       

      
      }


     GuessesCount += 1;

            if (CurrentAnswer === CurrentAnswerMasked){
            Wins +=1;
            GuessesCount = 0;
            LetterGuesses = "";
            GuessesLeft = MaxGuesses;
            NumTries +=1;
            GuessesSoFar = "";
            statusmsg = "You WON that round! :) The answer was: " + CurrentAnswer + ". Press any key for the next question.";
            
          }
          else if (GuessesLeft === 0){
            Losses +=1;
            GuessesCount = 0;
            LetterGuesses = "";
            GuessesLeft = MaxGuesses;
            NumTries +=1;
            GuessesSoFar = "";
            statusmsg = "You lost that round... :( Press any key for the next question.";
            
          }

       

    document.getElementById("game").textContent = statusmsg;
    document.getElementById("GuessesSoFar").textContent = "Guesses So Far: " + GuessesSoFar;
       document.getElementById("GuessesLeft").textContent = "Guesses Left: " + GuessesLeft ;
       document.getElementById("Losses").textContent = "Losses: " + Losses ;
       document.getElementById("Wins").textContent = "Wins: " + Wins ;

       
    
    };
 