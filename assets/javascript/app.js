window.onload = function() {
    var startButton = $('<button type="button" class="begin btn btn-dark">Begin</button>')
    $("#game-window").append(startButton);
};
$(document).ready(function() {
    let questions = [
        {number: 1, q: "Do you like cats?",  a: "yes", b: "no", c: "maybe", d: "yes, but I prefer dogs", answer: "yes, but I prefer dogs", image: "./assets/images/js.png"},
        {number: 2, q: "Do you like dogs?",  a: "yes", b: "no", c: "maybe", d: "yes, but I prefer cats", answer: "yes", image: "./assets/images/js.png"},
        {number: 3, q: "Do you like hamsters?",  a: "yes", b: "no", c: "maybe", d: "yes, but I prefer mice", answer: "maybe", image: "./assets/images/js.png"}
    ];
    let questionNumber;
    let count;
    let timeRemaing = 10;
    let timeFeedback = 5;
    let intervalId;
    let feedback;
    var isQuestion;

    console.log(questions[0]);
    console.log(questions[0].q);
    console.log(questions[0].answer);

    function initializeGame() {
        questionNumber = 0;
    }

    function displayQuestion() {
        runT();
        isQuestion = true;
        var cardDiv = $('<div class="cardDiv">');
        $("#game-window").append(cardDiv);
        var qDiv = $('<div class="question">' + questions[questionNumber].q + '</div>');
        var aDiv = $('<div class="choice" id="a">a. ' + questions[questionNumber].a + '</div>');
        var bDiv = $('<div class="choice" id="b">b. ' + questions[questionNumber].b + '</div>');
        var cDiv = $('<div class="choice" id="c">c. ' + questions[questionNumber].c + '</div>');
        var dDiv = $('<div class="choice" id="d">d. ' + questions[questionNumber].d + '</div>');
        var timeDiv = $('<div id="time">Time Remaining: 10 seconds</div>');
        $(".cardDiv").append(qDiv, aDiv, bDiv, cDiv, dDiv, timeDiv);
    }

    function displayFeedback() {
        runF();
        isQuestion = false;
        feedback = "Correct! The answer is " + questions[questionNumber].answer;
        var cardDiv = $('<div class="cardDiv">');
        $("#game-window").append(cardDiv);
        var feedbackDiv = $('<div>' + feedback + '</div>');
        var imageDiv = $('<img src="' + questions[questionNumber].image + '" width="200px">');
        var timeDiv = $('<div id="time">Next question in... 5 seconds</div>');
        $(".cardDiv").append(feedbackDiv, imageDiv, timeDiv);
    }

    function answerSelected() {
        $(".choice").on("click", function() {
            $(".cardDiv").remove();
            displayFeedback();
        });
    }

    function runT() {
        clearInterval(intervalId);
        intervalId = setInterval(decRemainingTime, 1000);
      }

    function runF() {
        clearInterval(intervalId);
        intervalId = setInterval(decTimeFeedback, 1000);
    }

    function decRemainingTime() {
        timeRemaing--;
        $("#time").html('<div id="time">Time Remaining: ' + timeRemaing + ' seconds</div>');
        if (timeRemaing === 0) {
            stop();
        }
    }

    function decTimeFeedback() {
        timeFeedback--
        $("#time").html('<div id="time">Next question in... ' + timeFeedback + ' seconds</div>');
        if (timeFeedback === 0) {
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
        answerSelected();
    });

    
});