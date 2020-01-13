window.onload = function() {
    $("#game-window").html('<button type="button" class="begin btn btn-dark">Begin</button>')
};
$(document).ready(function() {
    //variables
    let questions = ["1", "2"];
    let questionFacts = {
        "1" : { 
            number : "1.",
            question : "Do you like cats?",
            a : "yes",
            b : "no",
            c : "maybe",
            d : "yes, but I prefer dogs",
            answer: "d"
        },
        "2" : { 
            number : "2.",
            question : "Do you like dogs?",
            a : "yes",
            b : "no",
            c : "maybe",
            d : "yes, but I prefer cats",
            answer: "a"
        }
    };
    let questionNumber = 0;
    let showQuestion;
    let count;

    console.log(questions[0]);
    console.log(questionFacts[questions[0]].question);
    console.log(questionFacts[questions[0]].answer);

    function initializeGame() {
        questionNumber = 0;
    }

    // function displayQuestion() {
    //     var qDiv = $("<div class='" + questionFacts[questions[questionNumber]].question) + "'>");~
    //     var aDiv = $("<p>a. ' + questionFacts[questions[questionNumber]].question.a + '</p>"');
    //     var bDiv = $()
    //     var cDiv = $()~
    //     var dDiv = $()
        
    //     $("#game-window").append('"<p>b. "' + questionFacts[questions[questionNumber]].question.b) + '"</p>"');
    //     $("#game-window").append('"<p>c. "' + questionFacts[questions[questionNumber]].question.c) + '"</p>"');
    //     $("#game-window").append('"<p>d. "' + questionFacts[questions[questionNumber]].question.d) + '"</p>"');~
    //   }

    // function renderQuestion() {
    //     let questionDiv = $("<div>"+  + "</div>")
    // }

    $(".begin").on("click", function() {
        $(this).remove();
        displayQuestion();
    });

    


    





});