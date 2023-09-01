$(document).ready(function() {
  $('.home-btn').on('click', function() {
    var homeUrl = window.location.protocol + '//' + window.location.host + '/?page=home';
    window.location.href = homeUrl;
  });
  $('.shorts-btn').on('click', function() {
    var shortsUrl = window.location.protocol + '//' + window.location.host + '/?page=shorts';
    window.location.href = shortsUrl;
  });
  $('.upload-btn').on('click', function() {
    var uploadUrl = window.location.protocol + '//' + window.location.host + '/?page=upload';
    window.location.href = uploadUrl;
  });
  $('.subscription-btn').on('click', function() {
    var subscriptionUrl = window.location.protocol + '//' + window.location.host + '/?page=subscription';
    window.location.href = subscriptionUrl;
  });
  $('.collection-btn').on('click', function() {
    var collectionUrl = window.location.protocol + '//' + window.location.host + '/?page=collection';
    window.location.href = collectionUrl;
  });
});