$(document).ready(function() {
  $('#tweet-text').on('keyup', function(event) {
    const $parentForm = $(this).closest('form');
    const $cntr = $parentForm.find('.counter');

    $cntr[0].innerHTML = 140 - Number($(this).val().length);

    if (Number($cntr[0].innerHTML) < 0) {
      $cntr.addClass("red");
    } else {
      $cntr.removeClass("red");
    }
  });
});