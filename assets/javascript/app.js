window.onload = function() {
    $("#game-window").html('<button type="button" class="btn btn-dark">Begin</button>')
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
    let showQuestion;
    let count;

    console.log(questions[0]);
    console.log(questionFacts[questions[0]].question);
    console.log(questionFacts[questions[0]].answer);

    


    





});