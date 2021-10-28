$(document).ready(function() {
    $("#formOne").submit(function(event) {
      //$(".person1").append("adebayo");
    let person1 = $("#person1").val().toUpperCase();
     // $(".person2").append("blah blah");
     let person2 =$("#person2").val().toUpperCase();
      
      $(".person1").text(person1);
      $(".person2").text(person2);
      
     
     $("#story").show();
      
      event.preventDefault();
    });
  });