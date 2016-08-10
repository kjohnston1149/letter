$(function(){
  $("#blanks form").submit(function(event){
    var firstNameInput = $("input#firstName").val();
    var lastNameInput = $("input#lastName").val();

    $(".firstName").text(firstNameInput);
    $(".lastName").text(lastNameInput);
    $(".firstName").addClass("text-uppercase")
    $(".lastName").addClass("text-uppercase")

    $("#formLetter").show();

    event.preventDefault();

  });

});
