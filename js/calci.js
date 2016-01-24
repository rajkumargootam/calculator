var calculator = {
  handleInput: function(key) {
     $('#preview').append(key);
  },
  previewContent: function(){
    return $('#preview').html();
  },
  deleteLastChar: function() {
    var preview  =calculator.previewContent();
    var newPreview = preview.slice(0, -1);
    $('#preview').html(newPreview);
  },
  KeyIsOperator: function(key) {
    return (["+","-","*","/"].indexOf(key) != -1);
  },
  handleZero: function(){
    if (calculator.previewContent() != "0") {
      calculator.handleInput("0");
    }
  },
  handleOperator: function(key){
    // Sucessive operators
    var lastChar = calculator.previewContent().slice(-1);
    if(calculator.KeyIsOperator(lastChar)) {
      calculator.deleteLastChar();
    }
    if((calculator.previewContent() != "") || (key == "-")) {
    calculator.handleInput(key);
    }
  },
  handleGenericInput: function(key) {
    if(key == "0"){
     calculator.handleZero();
    }else if (key == "DEL") {
      calculator.deleteLastChar();
    } else if (calculator.KeyIsOperator(key)) {
      calculator.handleOperator(key);
    } else {
    calculator.handleInput(key);
    }
  },
  init: function(){
    $('.key').click(function() {
      var key = $(this).html();
      calculator.handleGenericInput(key);

    });
  }
};

$(document).ready(function() {
  calculator.init();
});
