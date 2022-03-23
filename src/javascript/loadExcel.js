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
      busData = this.responseText;
      console.log(busData.object);
    }
  };

  xhr.send("");
}

searchBtn.addEventListener("click", openSearchBar);
