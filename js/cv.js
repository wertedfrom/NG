$('.ocultable span').click(function() {
  this.innerHTML = "MOSTRAR MENOS";
  if
  $(this).parent().addClass('mostrable');
  // $(this).parent().removeClass('ocultable');
  console.log(document.getElementsByClassName('.  mostrable'));
});

console.log(document.getElementsByClassName('mostrable'));

// $('.ocultable.mostrable span')..click(function() {
//   console.log((this));
//   // $(this).parent().addClass('ocultable');
//   $(this).removeClass('mostrable');
//   console.log($(this).parent());
// });
