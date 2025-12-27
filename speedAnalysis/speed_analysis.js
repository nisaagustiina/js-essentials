let testText = 'The quick brown fox jumps over the lazy dog.';
let startTime, endTime;

function startTest(){
    //set the test text
    document.getElementById('inputText').value = testText;

    //reset user io
    let userInput = document.getElementById('userInput');
    userInput.value = '';
    userInput.readOnly = false;
    userInput.focus();

    document.getElementById('output').innerHTML = '';

    //start time
    startTime = new Date().getTime();
}

function endTest(){
    endTime = new Date().getTime();

    //disabled user input
    document.getElementById('userInput').readOnly = true;

    //calculate time elapsed and wpm
    var timeElapsed = (endTime - startTime) / 1000; //in seconds
    var userTypedText = document.getElementById('userInput').value;

    //split the text using regex to count words correctly
    var typedWords = userTypedText.split(/\s+/).filter(function (word){
        return word !== '';
    }).length;

    var wpm = 0;

    if(timeElapsed !== 0 && !isNaN(typedWords)){
        wpm = Math.round((typedWords/timeElapsed) * 60);
    }

    //display result
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = "<h2>Typing Test Result:</h2>" + "<p>Total Length : " + userTypedText.length +"</p>" +  "<p>Words Typed: " + typedWords +"</p>" + 
    "<p>Time Elapsed: " + timeElapsed.toFixed(2) + " seconds</p>" + "<p>Words Per Minute (WPM): "+wpm+"</p>";
}