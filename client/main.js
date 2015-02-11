'use strict';

$(document).ready(init);

function init() {
  $('#add-color').click(addColor);
  $('#add-random-colors').click(addRandom);
  $('#start').click(clickStart);
  $('#stop').click(clickStop);
  // $('.box').click(clickBox);
  $('#colors').on('click','.box', clickBox)
  $('#add-canvas').click(clickAddCanvas)
  $('#canvas').on('mouseenter', '.tiny', enterTiny);
}
var colors = [];
var timer;
var index = 0;

function enterTiny(){
  var color =  $('#selected').css('background-color');
  $(this).css('background-color', color);
}

function clickAddCanvas(){
  var size = $('#canvas-size').val() * 1

  for (var i = 0; i < size; i++){
    var $tiny = $('<div>');
    $tiny.addClass('tiny');
    $('#canvas').append($tiny);
  }
}

function clickBox(){
  var color = $(this).css('background-color');
  $('#selected').css('background-color', color)
}

function clickStart(){
  colors = $('.box').toArray().map(function(element){
    return $(element).css('background-color');
  });
  index = 0;
  clearInterval(timer);
  timer = setInterval(looping, 250);
}

function clickStop(){
  clearInterval(timer);
}

function looping(){
  var color = colors[index];
  $('body').css('background-color', color);
  index++;
  index = index < colors.length ? index + 1 : 0;
  console.log(index);

  // console.log(Date());
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
