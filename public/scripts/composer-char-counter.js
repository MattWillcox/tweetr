$(document).ready(function(){

  $('.new-tweet form textarea').on('keyup paste cut', function() {
    const tweetVal = $(this).val();
    const charsRemaining = 140 - tweetVal.length;
    const counter = $(this).parent().find('.counter');

    if (charsRemaining < 0) {
      counter.css('color', 'red');
    } else {
      counter.css('color', 'black');
    }
    counter.text(charsRemaining);
  });

});