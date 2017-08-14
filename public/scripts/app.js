$(function(){

  function createTweetHeader(user) {
    let $tweetHeader = $('<header>');
    $tweetHeader.append(`<img src=${user.avatars.small}>`)
      .append(`<h2 class='user-name'>${user.name}</h2>`)
      .append(`<span class='handle'>${user.handle}</span>`);
    return $tweetHeader;
  }

  function createTweetFooter(createdAt) {
    let $tweetFooter = $('<footer>');
    $tweetFooter.append("<div class='tweet-bottom-wrapper'>");
    let timeStamp = $.format.prettyDate(createdAt);
    $tweetFooter.find('.tweet-bottom-wrapper').append(`<span class='tweet-bottom'>${timeStamp}`);
    $tweetFooter.find('.tweet-bottom').append('<img src="../images/flag.png" alt="flag">' +
      '<img src="../images/retweet.png" alt="retweet">' +
      '<img src="../images/like-solid.png" alt="like">');
    return $tweetFooter;
  }

  function createTweetElement(tweet) {
    let $newTweet = $('<article class="tweet">');
    $newTweet.append(createTweetHeader(tweet.user));
    let tweetContent = $('<div class="tweet-content">').text(tweet.content.text);
    $newTweet.append(tweetContent);
    $newTweet.append(createTweetFooter(tweet.createdAt));
    return $newTweet;
  }

  function renderTweets(tweets) {
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
    $('.tweet-list').empty();
    for(let i of tweets){
      $('.tweet-list').prepend(createTweetElement(i));
    }
  }

  function loadTweets(){
    $.get("/tweets", (data) => renderTweets(data));
  }

  function formValidator(data){
    // Validates that form is filled out and that it is less than 140 characters, otherwise presents an error message
    if(data === "" || data === null){
      event.preventDefault();
      $('.add-tweet').find('p').remove();
      $('<p>').text('Please enter some text.').appendTo('.add-tweet');
      return false;
    }
    if(data.length > 140){
      event.preventDefault();
      $('.add-tweet').find('p').remove();
      $('<p>').text('Too many characters.').appendTo('.add-tweet');
      return false;
    }
    return true;
  }

  loadTweets();

  //Event handler for tweet submission
  $('.add-tweet').on('submit', function() {
    let $textArea = $(this).find('textarea');
    if(formValidator($textArea.val())){
      event.preventDefault();
      $.post("/tweets", $textArea.serialize(), function () {
        $.get("/tweets", (data) => renderTweets(data));
      });
      this.reset();
      $textArea.on('focus', function () {
        $('.add-tweet').find('p').remove();
      });
    }
  });

  //Event handle to trigger slide for new tweet section
  $('.compose').on('click', function() {
    $('.new-tweet').slideToggle("slow").find('textarea').focus();
  });
});