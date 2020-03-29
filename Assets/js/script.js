//check of specific todos by clicking -Remember to compare against rgb colors instead of name colors ***
$("ul").on('click','li',function() {
    $(this).toggleClass('completed');
})
//click on x to delete to do
$("ul").on('click','span',function(event) {
  $(this).parent().fadeOut(500,function() {;
  $(this).remove();
  })
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
  if(event.which === 13) {
      //grabing todo text from input
   const todoText = $(this).val();
   $(this).val('');
   //create a new li and add to ul
   $('ul').append("<li><span><i class='fa fa-trash'></i></span> " +todoText+"</li>")
  }
});

$('#toggle-form').click(function() {
    $("input[type='text']").fadeToggle();
})
  //event bubbling < triggers all parent elements near