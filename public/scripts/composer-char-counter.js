$(document).ready(function() {
  $('#tweet-text').on('keyup', function(event) {
    // These all outout the same thing...
    // console.log(this.value.length);
    // console.log($(this).val().length);
    // console.log(event.target.value.length);
    // console.log($(event.target).val().length);

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