// Get the text area and speak button elements
let textArea = document.getElementById("text");
let speakButton = document.getElementById("speak-button");

// Add an event listener to the speak button
speakButton.addEventListener("click", function() {
  // Get the text from the text area
  let text = textArea.value;

  // Create a new SpeechSynthesisUtterance object
  let message = new SpeechSynthesisUtterance();

  //Adding option to change voice
  let number=0;
  if(document.getElementById('david').checked == true){number=0;}
  if(document.getElementById('ravi').checked == true){number=1;}
  if(document.getElementById('heera').checked == true){number=2;}
  if(document.getElementById('mark').checked == true){number=3;}
  if(document.getElementById('zira').checked == true){number=4;}

  // Set the text and voice of the utterance
  message.text = text;
  message.voice = window.speechSynthesis.getVoices()[number];

  // Speak the utterance
  window.speechSynthesis.speak(message);
});
