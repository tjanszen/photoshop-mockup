'use strict';

$(document).ready(init);

function init() {
  $('#add-color').click(addColor);
  $('#add-random-colors').click(addRandom);
}

function addColor() {
var color = $('#color').val();
var $box = $('<div>');
$box.css('background-color', color);
$box.addClass('box');
$('#colors').append($box);

}

function addRandom(){
  var Q = $('#quantity').val() * 1;
  for(var i = 0; i < Q; i ++){
    createRandom();
  }

}

function createRandom(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    var $box = $('<div>');
    $box.css('background-color', 'rgb('+r+','+g+','+b+' )');
    $box.addClass('box');
    $('#colors').append($box);

 }
