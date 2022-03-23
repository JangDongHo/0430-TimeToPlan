const busBtn = document.querySelector(".bus-btn");
const busInfoTable = document.querySelector(".bus-info__table");

function paintBusData(busDatas) {
  busDatas.forEach((busData) => {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.innerText = busData;
    tr.appendChild(td);
    busInfoTable.appendChild(tr);
  });
}

function getBusData() {
  var xhr = new XMLHttpRequest();
  var url =
    "https://api.odsay.com/v1/api/intercityServiceTime?startStationID=3601540&endStationID=4000255"; /*URL*/
  var queryParams =
    "&" +
    encodeURIComponent("apiKey") +
    "=" +
    "Jbsq50JZZESwIwDBrPu1sA"; /*Service Key*/
  xhr.open("GET", url + queryParams);
  xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
      const busData = JSON.parse(this.responseText);
      const busScheduleData = busData.result.station[0].schedule.split("\n");
      let busSchedule = [];
      busScheduleData.forEach((times) => {
        times.split("/").forEach((time) => {
          busSchedule.push(time);
        });
      });
      paintBusData(busSchedule);
    }
  };
  xhr.send("");
}

busBtn.addEventListener("click", getBusData);
