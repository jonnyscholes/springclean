(function() {
  progress();
  tabs();
})(jQuery);

function progress() {
  var total = 0;
  var current = 0;
  var progressElm = $('.progress');
  var inputs = $('.checklist input.toggleCard');

  inputs.each(function(i, elm){
    this.checked = false;
    total += $(elm).parent().data('importance');
  });

  inputs.change(function(){
    var importance = $(this).parent().data('importance');
    this.checked ? current += importance : current -= importance;
    $(this).parent().find('.tabbed-zones .zone').removeClass('active');
    progressElm.css('height', Math.floor(current/total*100)+'%');
  });


}

function tabs(){
  var tabLinks = $('.tabs a');
  var tabZones = $('.tab-content .zone');

  tabLinks.click(function(e){
    e.preventDefault();

    var i = $(this).data('index');
    var zones = $(this).parents('.tabbed-zones').find('.tab-content .zone');
    zones.removeClass('active').filterByData('index', i).addClass('active');
  });


}