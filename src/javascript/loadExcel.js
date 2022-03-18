import { readFile, utils } from "xlsx";

const excelFile = readFile("bus.xlsx");

const sheetName = excelFile.SheetNames[0];
const firstSheet = excelFile.Sheets[sheetName];

const jsonData = utils.sheet_to_json( firstSheet, { defval : "" } );

console.log( jsonData);

function a() {
  document.write("안녕")
}