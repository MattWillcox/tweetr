$(function(){

  function renderTweets(tweets) {
    // loops through tweets
      // calls createTweetElement for each tweet
      // takes return value and appends it to the tweets container
    for(let i of tweets){
      $('.tweet-list').append(createTweetElement(i));
    }
  }

  function createTweetHeader(user) {
      let $tweetHeader = $('<header>');
      $tweetHeader.append(`<img src=${user.avatars.small}>`)
      .append(`<h2 class='user-name'>${user.name}</h2>`)
      .append(`<span class='handle'>${user.handle}</span>`);
      return $tweetHeader;
  }

  function createTweetFooter(created_at) {
    let $tweetFooter = $('<footer>');
    $tweetFooter.append("<div class='tweet-bottom-wrapper'>")
    let timeStamp = $.format.prettyDate(created_at);
    $tweetFooter.find('.tweet-bottom-wrapper').append(`<span class='tweet-bottom'>${timeStamp}`);
    $tweetFooter.find('.tweet-bottom').append('<a href="/">Report</a><a href="/">Retweet</a><a href="/">Like</a>');
    return $tweetFooter;
  }

  function createTweetElement(tweet) {
    let $newTweet = $('<article class="tweet">');
    $newTweet.append(createTweetHeader(tweet.user));
    let tweetContent = $('<div class="tweet-content">').text(tweet.content.text);
    $newTweet.append(tweetContent);
    $newTweet.append(createTweetFooter(tweet.created_at));
    return $newTweet;
  }

  function loadTweets(){
    $.get("/tweets", (data) => renderTweets(data));
  }

  function formValidator(data){
    if(data === "" || data === null){
      event.preventDefault();
      $('<p>').text('Please enter some text.').appendTo('.add-tweet');
      return false;
    }
    if(data.length > 140){
      event.preventDefault();
      $('<p>').text('Too many characters.').appendTo('.add-tweet');
      return false;
    }
    return true;
  }

  loadTweets();

  $('.add-tweet').on('submit', function() {
    let $textArea = $(this).find('textarea');
    if(formValidator($textArea.val())){
      event.preventDefault();
      $.post("/tweets", $textArea.serialize(), function (){
      $textArea.val('');
      $(this).find('.counter').text('140');
      });
    }
    $textArea.on('focus', function () {
      $('.add-tweet').find('p').remove();
    });
  });
});

