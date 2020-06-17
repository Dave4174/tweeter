/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
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
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

const createTweetElement = function (tweet) {
  const $tweet = `<article>
                    <header>
                      <div>
                        <img src="${tweet.user.avatars}">
                        <span>${tweet.user.name}</span>
                      </div>
                      <span>${tweet.user.handle}</span>
                    </header>
                    <textarea readonly>${tweet.content.text}</textarea>
                    <footer>
                      <span>${moment(tweet.created_at, '').fromNow()}</span>
                      <span>
                        <i class="fa fa-flag" aria-hidden="true"></i>
                        <i class="fa fa-retweet" aria-hidden="true"></i>
                        <i class="fa fa-heart" aria-hidden="true"></i>
                      </span>
                    </footer>
                  </article>`
  return $tweet;
};

const renderTweets = function(tweets) {
  // loops through tweets
  for (let tweet of tweets) {
    // calls createTweetElement for each tweet and appends the returned element to the tweets container
    $('#tweet').append(createTweetElement(tweet));
  }
}

$(document).ready(function () {
  renderTweets(data);
});