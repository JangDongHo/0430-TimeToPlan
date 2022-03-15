function readExcel() {
  let input = event.target;
  let reader = new FileReader();

  reader.onload = function() {
    let data = reader.result;
    let workBook = XLSX.read(data, { type: "binary" });

    workBook.SheetNames.forEach(function(sheetName) {
      console.log("SheetName: " + sheetName);
    })
  }
}