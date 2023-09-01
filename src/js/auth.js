function validateInput() {
  var inputElement = document.getElementById('username');
  var value = inputElement.value;

  if (value.includes(' ')) {
    inputElement.setCustomValidity('Tidak boleh mengandung spasi atau karakter kosong.');
  } else {
    inputElement.setCustomValidity('');
  }
}

function signUpWithGoogle() {
  alert('Coming Soon!');
}

function signUpWithFacebook() {
  alert('Coming Soon!');
}

function signUpWithGitHub() {
  alert('Coming Soon!');
}

function signInWithGoogle() {
  alert('Coming Soon!');
}

function signInWithFacebook() {
  alert('Coming Soon!');
}

function signInWithGitHub() {
  alert('Coming Soon!');
}