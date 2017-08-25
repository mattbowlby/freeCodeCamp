



// submit contact form inputs by e-mail

$("#button-submit").on("click", function(){

  
  // append action attribute to the form with mailto including name and message values
  $('#contact-form').attr('action', 'mailto:matt@bowlby.co?subject=Message%20from ' + inputName.value + ' (' + inputEmail.value + ')&body=' + inputMessage.value);


});