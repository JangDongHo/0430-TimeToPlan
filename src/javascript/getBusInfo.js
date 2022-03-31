const busBtn = document.querySelector(".bus-btn");
const busInfoTable = document.querySelector(".bus-info__table");

const getStationID = (terminalName) => {
  const xhr = new XMLHttpRequest();
  const baseUrl = "https://api.odsay.com/v1/api/intercityBusTerminals";
  const config = {
    lang: 0,
    terminalName,
  };
  const params = new URLSearchParams(config).toString();
  const apiKey = "Jbsq50JZZESwIwDBrPu1sA";
  const finalUrl = `${baseUrl}?${params}&apiKey=${apiKey}`;
  xhr.open("GET", finalUrl);
  xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
      const busData = JSON.parse(this.responseText);
      const stationID = busData.result[0].stationID;
      getBusData(stationID);
    }
  };
  xhr.send("");
};

function paintBusData(busDatas) {
  busDatas.forEach((busData) => {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.innerText = busData;
    tr.appendChild(td);
    busInfoTable.appendChild(tr);
  });
}

function getBusData(stationID) {
  const xhr = new XMLHttpRequest();
  const baseUrl = "https://api.odsay.com/v1/api/intercityServiceTime";
  const config = {
    startStationID: 3601540,
    endStationID: stationID,
  };
  const params = new URLSearchParams(config).toString();
  const apiKey = "Jbsq50JZZESwIwDBrPu1sA";
  const finalUrl = `${baseUrl}?${params}&apiKey=${apiKey}`;
  xhr.open("GET", url + queryParams);
  xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
      const busData = JSON.parse(this.responseText);
      const busScheduleData = busData.result.station[0].schedule.split("\n");
      let busSchedule = [];
      busScheduleData.forEach((times) => {
        times.split("/").forEach((time) => {
          busSchedule.push(time);
          console.log(time);
        });
      });
      //paintBusData(busSchedule);
    }
  };
  xhr.send("");
}

//busBtn.addEventListener("click", getBusData);

export default getStationID;
