let questions = [
    {
        "question": " Which is the tallest animal in the world?",
        "answer_1": "Lion",
        "answer_2": "Giraffe",
        "answer_3": "Deer",
        "answer_4": "Whale",
        "right_answer": 2
        
    },

    {
        "question": " How many legs does an octopus have?",
        "answer_1": "2",
        "answer_2": "5",
        "answer_3": "10",
        "answer_4": "8",
        "right_answer": 4
        
    },
    {
        "question": " Which is the fastest animal",
        "answer_1": "Cat",
        "answer_2": "Dog",
        "answer_3": "Turtle",
        "answer_4": "Cheetah",
        "right_answer": 4
        
    },

    {
        "question": "What does a panda eat?",
        "answer_1": "Ketchup",
        "answer_2": "Chocolate",
        "answer_3": "Bamboo",
        "answer_4": "Humans",
        "right_answer": 3
        
    },

    {
        "question": "Which bird is known to be the fastest bird?",
        "answer_1": "Falcon",
        "answer_2": "Carp",
        "answer_3": "Crow",
        "answer_4": "Chicken",
        "right_answer": 1
        
    },
]
let questions2 = [
    {
        "question": " TEST",
        "answer_1": "test",
        "answer_2": "test",
        "answer_3": "Deer",
        "answer_4": "Whale",
        "right_answer": 2
        
    },

    {
        "question": " TEST",
        "answer_1": "test",
        "answer_2": "test",
        "answer_3": "10",
        "answer_4": "8",
        "right_answer": 4
        
    },
    {
        "question": " Which is the fastest animal",
        "answer_1": "Cat",
        "answer_2": "test",
        "answer_3": "Turtle",
        "answer_4": "Cheetah",
        "right_answer": 4
        
    },

    {
        "question": "What does a panda eat?",
        "answer_1": "Ketchup",
        "answer_2": "Chocolate",
        "answer_3": "Bamboo",
        "answer_4": "Humans",
        "right_answer": 3
        
    },

    {
        "question": "Which bird is known to be the fastest bird?",
        "answer_1": "Falcon",
        "answer_2": "Carp",
        "answer_3": "Crow",
        "answer_4": "Chicken",
        "right_answer": 1
        
    },

]

let rightQuestions = 0; //tracking the right answers
let currentQuestion = 0; //tracking the current question
let AUDIO_SUCCESS   = new Audio('sounds/success.mp3');
let AUDIO_FAIL      = new Audio('sounds/fail.mp3');
let firstGame = false; //for decide which game need be started
let secondGame = false;//for decide which game need be started



function getId(id) //calling id's of elements
{
  return document.getElementById(id);
}

function init() //deciding whats loading on first time open
{   
    templateMainScreen()
}

function templateMainScreen() // rendering the main menu screen
{
 return  getId('mainScreen').innerHTML = ` <h3> <b>Welcome to Quizerino</b></h3>
                
    <span><b>Go try and challange yourself!</b></span>`
}

function restartGame() //restarting the game, resetting all values to 0
{
     rightQuestions = 0;
     currentQuestion = 0; 
     getId('endScreen').style='display:none';
     getId('mainScreen').style='';
     getId('questionCard').style=''
     getId('questionFooter').style= 'display:none'
     getId('menuFirstGame').classList.remove('pointer_event_none');
    getId('menuSecondGame').classList.remove('pointer_event_none');
    getId('menuThirdGame').classList.remove('pointer_event_none');
    resetAnswerButtons();
    getId('nextButton').disabled = true;
    getId('blockAnswer').classList.add('block_double_answer')
}

function showQuestion()//starting the game - rendering the questions and answers
{
    let question = questions[currentQuestion];//saving the question from JSSON array and declaring it to 0 via global var

   
    
    if(gameIsOver())//if the current question is the last one of array then show end screen and result
    {
        showEndScreen();
        
    }
    else //if current number is below array length then show next array inside JSSON
    {
        updateProgressBar();
        updateQuestion();
     
    }

    getId('questionFooter').style= ''//
    getId('mainScreen').style='display:none';//
    getId('allQuestions').innerHTML = questions.length;//
    getId('backButton').style='' //
    getId('currentPage').style='' //
    getId('numberSpace').style='' //
    getId('nextButton').style='' //
    getId('allQuestions').style='' //
                                    //hidding and showing things needed or no needed for the playing screen

    firstGame = true;//changing value for deciding what game mode was picked
    secondGame = false;//changing value for deciding what game mode was picked
}
function gameIsOver()
{
 return  currentQuestion >= questions.length;
}
function showEndScreen()
{
    getId('endScreen').style='';
        getId('questionCard').style='display:none';
        getId('endScreenTotalQuestion').innerHTML = `${questions.length} ` 
        getId('endScreenRightAnswer').innerHTML = `${rightQuestions}`
}

function showQuestion2()
{
    let question = questions2[currentQuestion];

    
    
    if(currentQuestion >= questions2.length)
    {
        
        getId('endScreen').style='';
        getId('questionCard').style='display:none';
        getId('endScreenTotalQuestion').innerHTML = `${questions2.length} ` 
        getId('endScreenRightAnswer').innerHTML = `${rightQuestions}`
    }
    else
    {
       
        let percent = currentQuestion / questions2.length; 
            percent = percent * 100;

        console.log('progress:', percent)


        getId('questionText').innerHTML = question['question'];
        getId('answer_1').innerHTML = question['answer_1'];
        getId('answer_2').innerHTML = question['answer_2'];
        getId('answer_3').innerHTML = question['answer_3'];
        getId('answer_4').innerHTML = question['answer_4'];
        getId('currentPage').innerHTML = currentQuestion + 1;
        getId('progressBar').innerHTML = `${percent.toFixed(0)}` + '%';
        getId('progressBar').style=`width: ${percent}%`



    }
    getId('questionFooter').style= ''
    getId('mainScreen').style='display:none';
    getId('allQuestions').innerHTML = questions2.length;
    getId('backButton').style='' 
    getId('currentPage').style='' 
    getId('numberSpace').style='' 
    getId('nextButton').style='' 
    getId('allQuestions').style=''  

    firstGame = false;
    secondGame = true;
}

function updateProgressBar()
{
    let percent = currentQuestion / questions.length; //calculate the progress in %
            percent = percent * 100;

        console.log('progress:', percent)

        getId('progressBar').innerHTML = `${percent.toFixed(0)}` + '%';//
        getId('progressBar').style=`width: ${percent}%`//
}
function updateQuestion()
{
    


        let question = questions[currentQuestion];
        getId('questionText').innerHTML = question['question'];//
        getId('answer_1').innerHTML = question['answer_1'];//
        getId('answer_2').innerHTML = question['answer_2'];//
        getId('answer_3').innerHTML = question['answer_3'];//
        getId('answer_4').innerHTML = question['answer_4'];//
        getId('currentPage').innerHTML = currentQuestion + 1;//
      
                                                        //rendering the game screen with all variables



}


function answer(selection)
{
    let question = questions[currentQuestion];

    let selectedQuestionNumber = selection.slice(-1);//.slice(-1) selecting the last char of string


    console.log('selected question number ', selectedQuestionNumber)//answer that user picked
    console.log('Selected answer is ', selection) //tracking what answer was selected/clicked
    console.log('Current question is ', question['right_answer'])//the curent right answer of question


    let idOfRightAnswer = `answer_${question['right_answer']}`;//this var is getting the id of right answer
    
    AUDIO_SUCCESS.type = "audio/mp3";

    if(rightAnswerSelected(selectedQuestionNumber)) //checking if selecet answer = right answer from array
    {
        console.log('Your answer is right!');
        getId(selection).parentNode.classList.add('bg-success');
        rightQuestions++;
        
        AUDIO_SUCCESS.play();

    }

    else //checking if selecet answer = wrong answer from array
    {
        console.log('Wrong answer!');
        getId(selection).parentNode.classList.add('bg-danger');
        getId(idOfRightAnswer).parentNode.classList.add('bg-success');
        AUDIO_FAIL.play();
    }


    getId('blockAnswer').classList.remove('block_double_answer');
    getId('nextButton').disabled = false;
    
    getId('menuFirstGame').classList.add('pointer_event_none');
    getId('menuSecondGame').classList.add('pointer_event_none');
    getId('menuThirdGame').classList.add('pointer_event_none');
}

function rightAnswerSelected(selectedQuestionNumber)
{
    let question = questions[currentQuestion];
 return  selectedQuestionNumber == question['right_answer'] ;
}

function nextQuestion()
{
    

    getId('nextButton').disabled = true;
    currentQuestion ++;
    
    
    getId('blockAnswer').classList.add('block_double_answer');
    resetAnswerButtons();

    
    
    if(firstGame == true)
    {

        showQuestion();
        
    }
    else 
    {
        
        showQuestion2();
    }
    
}


function resetAnswerButtons()
{
    getId('answer_1').parentNode.classList.remove('bg-danger');
    getId('answer_1').parentNode.classList.remove('bg-success');
    getId('answer_2').parentNode.classList.remove('bg-danger');
    getId('answer_2').parentNode.classList.remove('bg-success');
    getId('answer_3').parentNode.classList.remove('bg-danger');
    getId('answer_3').parentNode.classList.remove('bg-success');
    getId('answer_4').parentNode.classList.remove('bg-danger');
    getId('answer_4').parentNode.classList.remove('bg-success');
}