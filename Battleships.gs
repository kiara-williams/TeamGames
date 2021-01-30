function getInput() {
  var ui = SpreadsheetApp.getUi();
  var result = ui.prompt("Select your target").getResponseText();
  return result;
}

function main() {
  var mainSS = SpreadsheetApp.getActive().getSheetByName("Battleships");
  var masterSS = SpreadsheetApp.getActive().getSheetByName("Master");
  var input = getInput();
  var mainInput = mainSS.getRange(input);
  var masterInput = masterSS.getRange(input).getValue();
  var resultBox = mainSS.getRange(2,22)

  if (masterInput == "x"){
    mainInput.setBackground("green");
    masterSS.getRange(input).setBackground("green");
    resultBox.setValue("HIT!");
  }
  else {
    mainInput.setBackground("red");
    resultBox.setValue("MISS!");
  }

}
