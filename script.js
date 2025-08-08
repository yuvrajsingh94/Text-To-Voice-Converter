let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];
  voices.forEach((voice, i) => {
    voiceSelect.options[i] = new Option(voice.name, i);
  });
};

document.querySelector("button").addEventListener("click", () => {
  window.speechSynthesis.cancel(); // added this to avoid any ongoing speech
  speech.text = document.querySelector("textarea").value; // check text if it's empty
  if (!speech.text.trim()) {
    alert("Please enter some text to speak.");
    return;
  }
  window.speechSynthesis.speak(speech);
});

voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
});
