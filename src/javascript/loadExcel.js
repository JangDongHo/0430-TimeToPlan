import { readFile, utils } from "xlsx";

const excelFile = readFile("bus.xlsx");

const sheetName = excelFile.SheetNames[0];
const firstSheet = excelFile.Sheets[sheetName];

const jsonData = xlsx.utils.sheet_to_json(firstSheet, { defval: "" });

console.log(jsonData[0].도착);
