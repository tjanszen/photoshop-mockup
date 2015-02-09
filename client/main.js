'use strict';

$(document).ready(init);

function init() {
  $('#add').click(add);
}

function add() {
  //sum turns values into an array
  var sum = $('#nums').val().split(',')
  //turns sum into array of numbers
  .map(function(letter) {

  var num = parseInt(letter);
  var $li =  $('<li>');
    if (num%2) {
      ///odds
    $li.text(num);
    $('#odds').append($li);
    } else {
      //evens
      $li.text(num);
      $('#evens').append($li);
    }

    return num;
    //reduce adds the numbers up
    //if this were to be *, 0 would be 1
  }).reduce(function(prev, curr) {
    return prev + curr;
  }, 0);

  $('#sum').text(sum);

  var oddsum = total('#odds li');
  var evensum = total('#evens li');

  $('#oddtotals').text(oddsum);
  $('#eventotals').text(evensum);

  function total(selector){
    return $(selector)
    .map(function(index, element){
      return parseInt(element.textContent);
    }).toArray()
    .reduce(function(prev, curr){
      return prev + curr;
    }, 0);

  }

  // var oddCount = 0;
  // var elements = $('#odds li')
  // .map(function(index, element) {
  //   oddCount += parseInt(element.textContent);
  // });
  //
  // var evenCount = 0;
  // var elements = $('#evens li')
  // .map(function(index, element) {
  //   evenCount += parseInt(element.textContent);
  // });
  //
  // $('#oddtotals').text(oddCount + ' total');
  // $('#eventotals').text(evenCount + ' total');

}
