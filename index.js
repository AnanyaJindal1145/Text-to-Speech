let textArea = document.getElementById("text");
let speakButton = document.getElementById("speak-button");

speakButton.addEventListener("click", function() {
  let text = textArea.value;
  let message = new SpeechSynthesisUtterance(); //message is the new object we are making from speech synthesis class
  let number=0;
  // if(document.getElementById('david').checked == true){number=0;}
  if(document.getElementById('ravi').checked == true){number=1;}
  else if(document.getElementById('heera').checked == true){number=2;}
  else if(document.getElementById('mark').checked == true){number=3;}
  else if(document.getElementById('zira').checked == true){number=4;}
  message.text = text; //.text is a method
  message.voice = window.speechSynthesis.getVoices()[number]; //.voice is a method
  window.speechSynthesis.speak(message);
});
