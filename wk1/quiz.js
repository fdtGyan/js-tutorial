var questions = [];
var score = 0;
var total = 0;

function  getQuestions() {

    questions.push(new Array("What part of the Web Browser understand HTML and CSS",
                             "a: Layout and Rendering Engine",
                             "b: Rendering and JavaScript Engine",
                             "c: Rendering and Layout Plugin",
                             "a"));
                             
    questions.push(new Array("When a .js file has a .min extension it means",
                             "a: The file is for small devices",
                             "b: The file is minimized file intended to download faster",
                             "c: The file meets minimum requirements for a browser",
                             "b"));
                             
    questions.push(new Array("Which is true about a Javascript array",
                             "a: An array can consist of heterogeneous data types",
                             "b: An array must be strongly typed",
                             "c: An array must be a fixed size",
                             "a"));  
                             
    questions.push(new Array("Which Javascript function adds to the front of an array",
                             "a: push()",
                             "b: shift()",
                             "c: unshift()",
                             "c"));                                                       
    
    total = questions.length;
    return questions;
}

function getNextQuestion() {
   if (questions.length >= 1) {
       var next = questions.shift();
      return next;
    }

   return   [ "All Done!"];
}

function writeRemainingNumberOfQuestions() {
   return "<p> There are " + questions.length + " more questions </p>";
}

function writeQuestion(document, question) {

    document.write("<p>" + question[0] + "</p>");
    document.write("<li>" + question[1] + "</li>");
    document.write("<li>" + question[2] + "</li>");
    document.write("<li>" + question[3] + "</li>");
    
    var answer = prompt(question[0] + "  type a, b or c");
    
    if (answer == question[4]) {
    	document.write( "<p> " +  answer + " is correct!" + "</p>");
    	score++;
    } else {
    	document.write("<p> Woops! the correct answer is " + question[4]+ "</p>");
    }
    
    document.write(writeRemainingNumberOfQuestions());
}

function writeNextQuestion(document) {
    var question = getNextQuestion();
    
    if (question.length == 1) {
    	document.write("<p> CONGRATS YOU'RE DONE </p>");
    	return;
    }
    
    writeQuestion(document, question);
    writeNextQuestion(document);
}

function presentQuiz(document) {
   getQuestions();
   writeNextQuestion(document);
}

function writeScore(document) {
	document.write("You got " + score + " out of " + total);
}
