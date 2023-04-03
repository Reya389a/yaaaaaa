var speechRecognnitio = window.webkitSpeechRecognition;

var recognition = new SpeechRecongnition();

function start()
{
    document.getElementById("texbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) {

    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content);

    document.getElementById("texbox").innerHTML = Content;
}