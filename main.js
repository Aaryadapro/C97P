function Hello(){
    text = document.getElementById("input1").value;
    synth = window.speechSynthesis;
    var utterThis = new SpeechSynthesisUtterance(text);
    synth.speak(utterThis);
    console.log(text);
}

