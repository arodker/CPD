// Paste into Extensions > Apps Script in a Google Sheet whose first tab is named Scores.
// Row 1 of Scores: name | team | quizId | score | max | date
const sheet=()=>SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Scores');
function doGet(){
  const v=sheet().getDataRange().getValues();const h=v.shift();
  const rows=v.map(r=>Object.fromEntries(h.map((k,i)=>[k,r[i]])));
  return ContentService.createTextOutput(JSON.stringify(rows)).setMimeType(ContentService.MimeType.JSON);
}
function doPost(e){
  const d=JSON.parse(e.postData.contents);
  sheet().appendRow([d.name,d.team,d.quizId,d.score,d.max,d.date]);
  return ContentService.createTextOutput('ok');
}
