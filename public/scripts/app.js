$(function(){

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
        "text": "If I have seen further it is by standing on the shoulders of giants. This is some extra stuff to make this super long."
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
        "text": "<script>alert('uh oh!');</script>"
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

renderTweets(data);

});

