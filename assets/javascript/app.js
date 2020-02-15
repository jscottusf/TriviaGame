$(document).ready(function() {
    //main variables
    let questions = [
        {q: "What two countries were already involved in a military conflict before the beginning of World War II?", a: "Japan & India", b: "Germany & Poland", "c": "Germany & France", "d": "Japan  & China", ansChar: "d", answer: "Japan & China", fact :"Japan and China were already engaged in a military conflict before the outbreak of World War II. China was also involved in a civil war and spent most of World War II dealing with internal conflicts and repelling the advances of the Japanese.", image: "./assets/images/Q0japan.jpg"},
        {q:"In what year did Germany invade Poland?", a:"1938", b:"1939", c:"1940", d:"1941", ansChar:"b", answer:"the year 1939", fact:"In September 1939 Hitler invaded Poland, an act that resulted in both France and Great Britain declaring war on Germany.", image: "./assets/images/Q1-1939.jpg"},
        {q: "What was the longest battle of World War II?", a: "Battle of Midway", b: "Battle of the Atlantic", c: "Battle of the Bulge", d: "Battle of the River Plate", ansChar: "b", answer: "the Battle of the Atlantic", fact :"Lasting from 1939 to the defeat of Nazi Germany in 1945, the Battle of the Atlantic was the longest continuous campaign of World War II. It pitted Nazi U-boats against North American convoys supplying arms and resources to Great Britain", image: "./assets/images/Q3atlantic.jpg"},
        {q: "What was the first Nazi concentration camp?",  a: "Chelmo", b: "Sachsenhausen", c: "Auschwitz", d: "Dachau", ansChar: "d", answer: "Dachau Concentration Camp", fact : "Dachau, the first Nazi concentration camp, was constructed in 1933 to detain Hitler's loudest political opponents such as Socialists, Communists, Social Democrats, and members of the press", image: "./assets/images/Q4dachau.jpg"},
        {q: "What was the name of the B-29 bomber that dropped the first atomic bomb on Hiroshima?",  a: "Enola Gay", b: "Little Boy", c: "Purple Haze", d: "Fat Man", ansChar: "a", answer: "the Enola Gay", fact: "The Enola Gay, a B-29 Superfortress bomber piloted by Lt. Col. Paul Warfield Tibbets, Jr., was the plane that dropped the first atomic bomb on Hiroshima on August 6, 1945.", image: "./assets/images/Q5enola.jpg"},
        {q: "What country lost the most lives in World War II?",  a: "United States", b: "Germany", c: "France", d: "Soviet Union", ansChar: "d", answer: "the Soviet Union", fact: "With approximately 27 Million total fatalities (both military and civilian), the Soviet Union lost the most lives during World War II.", image: "./assets/images/Q5ussr.jpg"},
        {q: "What research and development project produced the first nuclear weapons during World War II?",  a: "Oppenheimer Project", b: "Manhattan Project", c: "The Trefoil Project", d: "The Truman Project", ansChar: "b", answer: "the Manhattan Project", fact: "On July 16, 1945, the US Manhattan Project successfully detonated an atomic bomb in the New Mexico desert", image: "./assets/images/Q6mp.jpg"},
        {q: "What was the code name for the Battle of Normandy?",  a: "Operation Piledriver", b: "Operation Overlord", c: "Operation Omaha", d: "Operation Panther", ansChar: "b", answer: "Operation Overlord", fact: "Operation Overlord (also known as D-Day) was launched on 6 June 1944 with the Normandy landings. Nearly 160,000 troops crossed the English Channel on D-Day.", image: "./assets/images/Q7overlord.jpg"},
        {q: "What was the first action the Nazis took against Jews?",  a: "Removal of Citizenship", b: "Concentration Camps", c: "Regisration of ID cards", d: "Boycott of Jewish Businesses", ansChar: "d", answer: "the Boycott of Jewish Businesses", fact: "On April 1, 1933, the Nazis instigated their first action against Jews by announcing a boycott of all Jewish-run businesses.", image: "./assets/images/Q8boycott.jpg"},
        {q: "After World War II, Germany was divided into how many zones of occupation?",  a: "2", b: "4", c: "6", d: "8", ansChar: "b", answer: "4 zones of occupation", fact: "After World War II, Germany was divided into four zones of occupation. The American, British and French zones were grouped together as West Germany, and the Soviet zone became East Germany.", image: "./assets/images/Q9zones.png"},
        {q: "What was the second city the United States dropped a nuclear bomb on?",  a: "Iwo Jima", b: "Nagasaki", c: "Hiroshima", d: "Yokohama", ansChar: "b", answer: "Nagasaki", fact: "The United States dropped nuclear weapons on the Japanese cities of Hiroshima and Nagasaki on August 6 and 9, 1945, respectively.", image: "./assets/images/Q10abomb.jpg"},
        {q: "What was the name of the antisemitic laws passed in Nazi Germany on September 15, 1935?",  a: "Auschwitz Laws", b: "Nuremberg Laws", c: "Dachau Laws", d: "Reichstag Laws", ansChar: "b", answer: "the Nuremberg Laws", fact: "The two Nuremberg Laws were the Law for the Protection of German Blood and German Honour, which forbade marriages and extramarital intercourse between Jews and Germans, and the Reich Citizenship Law, which revoked Jewish citizenship", image: "./assets/images/Q11nuremberg.jpg"},
        {q: "How did Hitler die?",  a: "fire", b: "gunshot", c: "old age in Argentina", d: "hanging", ansChar: "b", answer: "gunshot", fact: "On 30 April 1945, when Soviet troops were within a block or two of the Reich Chancellery, Hitler shot himself.", image: "./assets/images/Q12hitler.jpg"},
        {q: "Adolf Hitler predicted the war in his memoir published in 1925. What was it called?",  a: "Mein Kampf", b: "Meinem Triumph", c: "Meine Heimat", d: "Mein Schnitzle", ansChar: "a", answer: "Mein Kampf", fact: " In his 1925 memoir Mein Kampf, Hitler predicted the war in Europe and Jewish persecution in Germany.", image: "./assets/images/Q13kampf.jpg"},
        {q: "Which came first VE Day (victory in Europe) or VJ Day (victory in Japan)?",  a: "VE Day", b: "VJ Day", c: "Both occured on the same day", d: "Japan never surrendered", ansChar: "a", answer: "Victory in Europe Day", fact: "VE Day came on May 8, 1945. VJ Day followed on Sept. 2, 1945, the day Japan surrendered to the Allies.", image: "./assets/images/Q14ve.jpg"},
        {q:"The use of secret, unbreakable codes was a behind-the-scenes strategy employed in wartime. One code language used by the U.S. Marines was borrowed from what Native American people?", a:"The Navajo", b:"The Apache", c:"The Arapaho", d:"The Iroquois", ansChar:"a", answer:"the Navajo", fact:'About 400 Navajo "code talkers" worked for the war effort. Their coded communications were never broken by the Japanese.', image: "./assets/images/Q15navajo.jpg"}
    ];
    let questionNumber;
    let userGuess;
    let timeRemaing;
    let timeFeedback;
    let intervalId;
    let feedback;
    let answerKey;
    let totalCorrect;
    let totalIncorrect;

    //sounds
    let correct = new Audio("./assets/sounds/correct.mp3");
    let incorrect = new Audio("./assets/sounds/incorrect.wav");

    //set variable values to begin trivia quiz
    function initializeGame() {
        questionNumber = 0;
        timeRemaing = 30;
        timeFeedback = 10;
        totalCorrect = 0;
        totalIncorrect = 0;
    }

    //display question car with choices
    function displayQuestion() {
        runT();
        resetScreen();
        var cardDiv = $('<div class="cardDiv">');
        $("#game-window").append(cardDiv);
        var qDiv = $('<h3 class="question">' + questions[questionNumber].q + '</h3><hr>');
        var aDiv = $('<div class="choice" id="a">a. ' + questions[questionNumber].a + '</div><hr>');
        var bDiv = $('<div class="choice" id="b">b. ' + questions[questionNumber].b + '</div><hr>');
        var cDiv = $('<div class="choice" id="c">c. ' + questions[questionNumber].c + '</div><hr>');
        var dDiv = $('<div class="choice" id="d">d. ' + questions[questionNumber].d + '</div><hr>');
        answerKey = questions[questionNumber].ansChar;
        var timeDiv = $('<h4 id="time">Time Remaining: 30 seconds</h3>');
        $(".cardDiv").append(qDiv, aDiv, bDiv, cDiv, dDiv, timeDiv);
        answerSelected();
    }

    //display feedback with picture and information
    function displayFeedback() {
        runF();
        resetScreen();
        var cardDiv = $('<div class="cardDiv">');
        $("#game-window").append(cardDiv);
        var feedbackDiv = $('<h3>' + feedback + '</h3>');
        var imageDiv = $('<img id="image" src="' + questions[questionNumber].image + '" width="500px">');
        var infoDiv = $('<p>' + questions[questionNumber].fact + '</p>');
        var timeDiv = $('<h4 id="time">Next question in... 10 seconds</h4>');
        $(".cardDiv").append(feedbackDiv, imageDiv, infoDiv, timeDiv);
    }

    //when questions remaining is 0, show correct and incorrect totals with game reset button
    function displayGameOver() {
        resetScreen();
        var cardDiv = $('<div class="cardDiv">');
        $("#game-window").append(cardDiv);
        var restartButton = $('<button type="Try again" class="restart btn btn-dark">Try Again</button>')
        var gameOverDiv = $('<h1>GAME OVER</h1>');
        var totalCorrectDiv = $('<h2> Total correct: ' + totalCorrect + '</h2>')
        var totalIncorrectDiv = $('<h2> Total incorrect: ' + totalIncorrect + '</h2>');
        $(".cardDiv").append(gameOverDiv, totalCorrectDiv, totalIncorrectDiv, restartButton);
        $("body").on("click", ".restart", function() {
            resetScreen();
            initializeGame();
            displayQuestion();
        });
    }

    //increase question number value until all questions are gone, reset time variables
    function nextQuestion() {
        questionNumber++;
        if (questionNumber === questions.length) {
            displayGameOver();
        }
        else {
            timeRemaing = 30;
            timeFeedback = 10;
            userGuess = "";
            displayQuestion();
        }
        
    }

    //when user clicks on answer choice, check if accurate, write feedback, and record total correct/incorrect
    function answerSelected() {
        $("body").on("click", ".choice",  function() {
            userGuess = $(this).attr("id");
            if (userGuess===answerKey) {
                feedback = "Correct! The answer is " + questions[questionNumber].answer;
                totalCorrect++;
                correct.play();
            }
            else {
                feedback = "Nope! The answer was " + questions[questionNumber].answer;
                totalIncorrect++;
                incorrect.play();
            }
            resetScreen();
            displayFeedback();
        });
    }

    //run (T) TIME REMAINING of question card
    function runT() {
        clearInterval(intervalId);
        intervalId = setInterval(decRemainingTime, 1000);
    }

    //run (F) FEEDBACK of feedback card
    function runF() {
        clearInterval(intervalId);
        intervalId = setInterval(decTimeFeedback, 1000);
    }

    //decrament time remaining for runT()
    //if 0, write feedback, increase total Incorrect, move on to feedback screen
    function decRemainingTime() {
        timeRemaing--;
        $("#time").html('<div id="time">Time Remaining: ' + timeRemaing + ' seconds</div>');
        if (timeRemaing === 0) {
            feedback = "You didn't respond in time...the answer was " + questions[questionNumber].answer;
            totalIncorrect++;
            incorrect.play();
            stop();
            resetScreen();
            displayFeedback();
        }
    }

    //show feedback card until time is 0, move on to next question
    function decTimeFeedback() {
        timeFeedback--
        $("#time").html('<div id="time">Next question in... ' + timeFeedback + ' seconds</div>');
        if (timeFeedback === 0) {
            stop();
            resetScreen();
            nextQuestion();
        }
    }

    //stop countdown clock
    function stop() {
        clearInterval(intervalId);
    }

    //reset screeen between question and feedback cards
    function resetScreen() {
        $(".cardDiv").remove();
    };

    //start game by clicking begin button
    $(".begin").on("click", function() {
        $(this).remove();
        initializeGame();
        displayQuestion();
    });
});

