function validateImageAspectRatio() {
  var input = document.getElementById('thumbnails');
  var file = input.files[0];

  if (file) {
    var extension = file.name.split('.').pop().toLowerCase();
    if (extension === 'jpeg' || extension === 'jpg' || extension === 'png') {
      var img = new Image();
      img.src = window.URL.createObjectURL(file);

      img.onload = function() {
        var width = img.width;
        var height = img.height;
        var aspectRatio = width / height;

        if (aspectRatio < 1) {
          alert('Only landscape images are allowed.');
          input.value = '';
        }
      };
    } else {
      alert('Only JPEG, JPG, and PNG image files are allowed.');
      input.value = '';
    }
  }
}

function validateVideoAspectRatio() {
  var input = document.getElementById('video');
  var file = input.files[0];

  if (file) {
    var extension = file.name.split('.').pop().toLowerCase();
    if (extension === 'mp4' && file.type === 'video/mp4') {
      var video = document.createElement('video');
      video.preload = 'metadata';

      video.onloadedmetadata = function() {
        var width = video.videoWidth;
        var height = video.videoHeight;
        var aspectRatio = width / height;

        if (aspectRatio < 1) {
          alert('Only landscape videos are allowed.');
          input.value = '';
        }
      };

      video.src = URL.createObjectURL(file);
    } else {
      alert('Only MP4 video files are allowed.');
      input.value = '';
    }
  }
}