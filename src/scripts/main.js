(function() {
  progress();

  var checklist = $('.checklist');
  var cards = $('.card');

  cards.find('.toggle-info').click(function(e) {
    e.preventDefault();

    $(this).parent().parent().toggleClass('active');
    checklist.toggleClass('card-active');
    $(this).toggleClass('icon-info');
    $(this).toggleClass('icon-close');
  })
})(jQuery);

function progress() {
  var total = 0;
  var current = 0;
  var progressElm = $('.progress');
  var inputs = $('.checklist input.toggle-card');

  inputs.each(function(i, elm){
    this.checked = false;
    total += $(elm).parent().parent().data('importance');
  });

  inputs.change(function(){
    var importance = $(this).parent().parent().data('importance');
    this.checked ? current += importance : current -= importance;
    $(this).parent().find('.tabbed-zones .zone').removeClass('active');
    progressElm.css('height', Math.floor(current/total*100)+'%');
  });
}
