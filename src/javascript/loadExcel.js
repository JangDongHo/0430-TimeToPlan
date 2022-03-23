const searchBarBtns = document.querySelector(".search-bar__btns");

function openSearchBar() {
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
    }
    console.log(busSchedule);
  };

  xhr.send("");
}

searchBtn.addEventListener("click", openSearchBar);
