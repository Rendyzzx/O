function startSpeechRecognition() {
  const recognition = new webkitSpeechRecognition() || new SpeechRecognition();
  recognition.lang = 'id-ID';
  recognition.onresult = function(event) {
    const recordedText = event.results[0][0].transcript;
    input.value = recordedText;
    document.getElementById('recorded-voice').value = recordedText;
  };
  recognition.start();
}

const microphoneIcon = document.getElementById('microphone-icon');
const input = document.getElementById('search');

input.addEventListener('input', function() {
  if (input.value !== '') {
    microphoneIcon.classList.remove('fa-microphone');
    microphoneIcon.classList.add('fa-times');
  } else {
    microphoneIcon.classList.remove('fa-times');
    microphoneIcon.classList.add('fa-microphone');
  }
});

microphoneIcon.addEventListener('click', function() {
  if (input.value === '') {
    startSpeechRecognition();
  } else {
    input.value = '';
    microphoneIcon.classList.remove('fa-times');
    microphoneIcon.classList.add('fa-microphone');
  }
});