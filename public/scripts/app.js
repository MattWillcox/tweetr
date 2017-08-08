$(document).ready(function(){


function createTweetHeader(tweet) {
    let tweetHeader = $( document.createElement('header'));
    tweetHeader.append(`<img src=${tweet.user.avatars.small}>`)
    .append(`<h1>${tweet.user.name}</h1>`)
    .append(`<span class='handle'>${tweet.user.handle}</span>`);

    console.log(tweetHeader);
 }

function createTweetElement(tweet) {
  let newTweet = $( document.createElement('article') );
  newTweet.addClass("tweet");
  createTweetHeader(tweet);
}


/* <article class='tweet'>
  <header>
    <img src="https://vignette1.wikia.nocookie.net/clubpenguin/images/e/ea/5155_icon.png/revision/latest?cb=20120616105857">
    <h1>Matt Willcox</h1>
    <span class='handle'>@MattWillcox</span>
  </header>
  <div class='tweet-content'>This is my tweet!</div>
  <footer>
    <div class='timestamp-wrapper'>
      <span class="timestamp">10 days ago
        <a href="/">Report</a>
        <a href="/">Retweet</a>
        <a href="/">Like</a>
      </span>
    </div>
  </footer>
</article>
*/

});

var tweetData = {
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
}

var $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
//$('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.