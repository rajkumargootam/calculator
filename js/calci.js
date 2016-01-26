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
  evaluateResult: function() {
    var result = eval(calculator.previewContent());
    ($('#preview').html(result));
    ($('#result').html(result));
  },
  clear: function(){
    ($('#preview').html(""));
    ($('#result').html(""));
  },
  handleDot: function() {
    var patternForLatestNum = /[^\+\-\*\/]*$/;
    var latestNumber = calculator.previewContent().match(patternForLatestNum)[0];
    if (latestNumber.indexOf(".") == -1) {
      calculator.handleInput(".");
    }
  },
  handleGenericInput: function(key) {
    if(key == "0"){
     calculator.handleZero();
    }else if (key == "DEL") {
      calculator.deleteLastChar();
    } else if (calculator.KeyIsOperator(key)) {
      calculator.handleOperator(key);
    } else if (key == "=") {
      calculator.evaluateResult();
    } else if (key == ".") {
      calculator.handleDot();
    } else {
    calculator.handleInput(key);
    }
  },
  bindKeys: function() {
    $(document).bind('keyup', '0', function() {calculator.handleZero()});
    $(document).bind('keyup', '1', function() {calculator.handleInput(1)});
    $(document).bind('keyup', '2', function() {calculator.handleInput(2)});
    $(document).bind('keyup', '3', function() {calculator.handleInput(3)});
    $(document).bind('keyup', '4', function() {calculator.handleInput(4)});
    $(document).bind('keyup', '5', function() {calculator.handleInput(5)});
    $(document).bind('keyup', '6', function() {calculator.handleInput(6)});
    $(document).bind('keyup', '7', function() {calculator.handleInput(7)});
    $(document).bind('keyup', '8', function() {calculator.handleInput(8)});
    $(document).bind('keyup', '9', function() {calculator.handleInput(9)});
    $(document).bind('keyup', '.', function() {calculator.handleDot()});
    $(document).bind('keyup', 'return', function() {calculator.evaluateResult(9)});
    $(document).bind('keyup', 'backspace', function() {calculator.deleteLastChar()});
    $(document).bind('keyup', 'del', function() {calculator.deleteLastChar()});
    $(document).bind('keyup', 'esc', function() {calculator.clear()});
    $(document).bind('keyup', '+', function() {calculator.handleOperator("+")});
    $(document).bind('keyup', '-', function() {calculator.handleOperator("-")});
    $(document).bind('keyup', '*', function() {calculator.handleOperator("*")});
    $(document).bind('keyup', 'X', function() {calculator.handleOperator("X")});
    $(document).bind('keyup', '/', function() {calculator.handleOperator("/")});

  },
  init: function(){
    $('.key').click(function() {
      var key = $(this).html();
      calculator.handleGenericInput(key);
    });
    $('.delete').dblclick(function() {
      calculator.clear();
    });
    calculator.bindKeys();
  }
};

$(document).ready(function() {
  calculator.init();
});
