"use strict";

var WikiSearch = function WikiSearch(input) {

  var $script = $('script');

  $script.src = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&callback=processResponse&search=" + input;

  $body.append($script);
  return false;
};

var sendRequest = function sendRequest() {
  // set script tag with source to api
  console.log("Clicked!");
  $script.src = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&callback=processResponse&search=" + $inputValue;

  $body.append($scipt);

  return false;
};

var processResponse = function processResponse(response) {
  console.log("It worked!", response);
};