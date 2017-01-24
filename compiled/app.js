'use strict';

var $button = $('#button');
var $input = $('#input');

console.log("loaded");

var sendReqeust = function sendReqeust() {
  var script = document.createElement('script');
  var input = document.getElementById('input').value;

  script.src = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&callback=render&search=' + input;

  document.body.appendChild(script);
  return false;
};

var render = function render(response) {
  console.log(response);
};

$button.on('click', sendReqeust);

var sendRequest = function sendRequest() {
  // set script tag with source to api
  console.log("Clicked!");
  $script.src = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&callback=processResponse&search=' + $inputValue;

  $body.append($scipt);

  return false;
};

var processResponse = function processResponse(response) {
  console.log("It worked!", response);
};