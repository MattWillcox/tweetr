$(document).ready(function(){

  var data = [
    {
      "user": {
        "name": "Newton",
        "avatars": {
          "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
          "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
          "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
        },
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": {
          "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Johann von Goethe",
        "avatars": {
          "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1461113796368
    }
  ];

  function renderTweets(tweets) {
    // loops through tweets
      // calls createTweetElement for each tweet
      // takes return value and appends it to the tweets container
    for(let i of tweets){
      $('.tweet-list').append(createTweetElement(i));
    }
  }

  function createTweetHeader(tweet) {
      let tweetHeader = $( document.createElement('header'));
      tweetHeader.append(`<img src=${tweet.user.avatars.small}>`)
      .append(`<h2 class='userName'>${tweet.user.name}</h2>`)
      .append(`<span class='handle'>${tweet.user.handle}</span>`);
      return tweetHeader;

  }

  function createTweetFooter(tweet) {
    let tweetFooter = $( document.createElement('footer'));
    tweetFooter.append("<div class='timestamp-wrapper'>")
    let timeStamp = $.format.date(tweet.created_at, "dd/MM/yyyy HH:mm:ss");
    tweetFooter.find('.timestamp-wrapper').append(`<span class='timestamp'>${timeStamp}`);
    tweetFooter.find('.timestamp').append('<a href="/">Report</a><a href="/">Retweet</a><a href="/">Like</a>');
    return tweetFooter;
  }

  function createTweetElement(tweet) {
    let newTweet = $( document.createElement('article') );
    newTweet.addClass("tweet");
    newTweet.append(createTweetHeader(tweet));
    newTweet.append(`<div class ="tweet-content">${tweet.content.text}`);
    newTweet.append(createTweetFooter(tweet))
    return newTweet;
  }

renderTweets(data);

});

