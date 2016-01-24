function handleInput(key) {
   $('#preview').append(key);
}

function previewContent(){
  return $('#preview').html();
}

function deleteLastChar() {
  var preview  = previewContent();
  var newPreview = preview.slice(0, -1);
  $('#preview').html(newPreview);
}

function KeyIsOperator(key) {
  return (["+","-","*","/"].indexOf(key) != -1);
}

$(document).ready(function() {
  $('.key').click(function() {
    var key = $(this).html();
    if(key == "0"){
     if (previewContent() != "0") {
       handleInput(key);
      }
    }else if (key == "DEL") {
      deleteLastChar();
    } else if (KeyIsOperator(key)) {
      // Sucessive operators
      var lastChar = previewContent().slice(-1);
      if(KeyIsOperator(lastChar)) {
        deleteLastChar();
      }
      if((previewContent() != "") || (key == "-")) {
      handleInput(key);  
      }

      //First key operators
    } else {
    handleInput(key);
    }
  });
});
