/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  const escape = function(str) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const createTweetElement = function(tweet) {
    const $tweet = `<article>
                      <header>
                        <div>
                          <img src="${escape(tweet.user.avatars)}">
                          <span>${escape(tweet.user.name)}</span>
                        </div>
                        <span>${escape(tweet.user.handle)}</span>
                      </header>
                      <div>
                        <p>${escape(tweet.content.text)}</p>
                      </div>
                      <footer>
                        <span>${escape(moment(tweet.created_at, '').fromNow())}</span>
                        <span>
                          <i class="fa fa-flag" aria-hidden="true"></i>
                          <i class="fa fa-retweet" aria-hidden="true"></i>
                          <i class="fa fa-heart" aria-hidden="true"></i>
                        </span>
                      </footer>
                    </article>`;
    return $tweet;
  };

  const renderTweets = function(tweets) {
    // loops through tweets
    for (let tweet of tweets) {
      // calls createTweetElement for each tweet and prepends the returned element to the tweets container
      $('#tweet').prepend(createTweetElement(tweet));
    }
  };
  
  const loadTweets = function() {
    $.ajax({
      url: '/tweets',
      method: 'GET',
      dataType: 'JSON'
    }).then(function(response) {
      $('#tweet').empty();
      renderTweets(response);
    }).fail((err) => console.log(err));
  };

  $('form').on('submit', function(event) {
    event.preventDefault();

    if ($('#tweet-text').val().length === 0) {
      $('.error-msg').text("Please enter a tweet to send");
      $('.error-msg').show();
    } else if ($('#tweet-text').val().length > 140) {
      $('.error-msg').text("Tweets must be a maximum of 140 characters");
      $('.error-msg').show();
    } else {
      $.ajax({
        url: '/tweets',
        method: 'POST',
        data: $(this).serialize()
      }).then(function(response) {
        loadTweets();
      }).fail((err) => console.log(err));
      
      $('#tweet-text').val("");  //removes the entered text from the tweet field
      $('.error-msg').hide();  // hides the error message in case it was displayed
      $('.counter')[0].innerHTML = "0";  // reset the character counter to zero
    }

  });

  loadTweets();
});