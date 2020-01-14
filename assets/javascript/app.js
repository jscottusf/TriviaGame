window.onload = function() {
    var startButton = $('<button type="button" class="begin btn btn-dark">Begin</button>')
    $("#game-window").append('<button type="button" class="begin btn btn-dark">Begin</button>')
};
$(document).ready(function() {
    let questions = [
        {number: 1, q: "Do you like cats?",  a: "yes", b: "no", c: "maybe", d: "yes, but I prefer dogs", answer: "yes, but I prefer dogs", image: "./assets/images/js.png"},
        {number: 2, q: "Do you like dogs?",  a: "yes", b: "no", c: "maybe", d: "yes, but I prefer cats", answer: "yes", image: "./assets/images/js.png"}
    ];
    let questionNumber;
    let count;
    let intervalId;
    let feedback;

    console.log(questions[0]);
    console.log(questions[0].q);
    console.log(questions[0].answer);

    function initializeGame() {
        questionNumber = 0;
        run();
    }

    function displayQuestion() {
        isQuestion = true;
        count = 30;
        var cardDiv = $('<div class="cardDiv">');
        $("#game-window").append(cardDiv);
        var qDiv = $('<div class="question">' + questions[questionNumber].q + '</div>');
        var aDiv = $('<div class="choice" id="a">a. ' + questions[questionNumber].a + '</div>');
        var bDiv = $('<div class="choice" id="b">b. ' + questions[questionNumber].b + '</div>');
        var cDiv = $('<div class="choice" id="c">c. ' + questions[questionNumber].c + '</div>');
        var dDiv = $('<div class="choice" id="d">d. ' + questions[questionNumber].d + '</div>');
        var timeDiv = $('<div id="time">Time Remaining: ' + count + ' seconds</div>');
        $(".cardDiv").append(qDiv, aDiv, bDiv, cDiv, dDiv, timeDiv);
    }

    function displayFeedback() {
        isQuestion = false;
        count = 5;
        feedback = "Correct! The answer is " + questions[questionNumber].answer;
        var cardDiv = $('<div class="cardDiv">');
        $("#game-window").append(cardDiv);
        var feedbackDiv = $('<div>' + feedback + '</div>');
        var imageDiv = $('<img src="' + questions[questionNumber].image + '" width="200px">');
        var timeDiv = $('<div id="time">Next question in... ' + count + ' seconds</div>');
        $(".cardDiv").append(feedbackDiv, imageDiv, timeDiv);
    }

    function clearBoard() {
        $(".choice").on("click", function() {
            $(".cardDiv").remove();
            displayFeedback();
        });
    }

    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
      }

    function decrement() {
        count--;
        $("#time").html('<div id="time">Time Remaining: ' + count + ' seconds</div>');
        if (count === 0) {
            stop();
        }
    }

    function stop() {
        clearInterval(intervalId);
      }

    $(".begin").on("click", function() {
        $(this).remove();
        initializeGame();
        displayQuestion();
        clearBoard();
    });

    
});