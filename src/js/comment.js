const commentInput = document.getElementById('comment-input');

commentInput.addEventListener('input', function() {
  this.style.height = '0';
  this.style.height = (this.scrollHeight > 100) ? '100px': `${this.scrollHeight}px`;
});