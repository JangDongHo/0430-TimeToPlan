import getStationID from "./getBusInfo.js";

const searchBtn = document.querySelector(".search-bar");
const searchBarContainer = document.querySelector(".search-bar-container");
const closeBtn = document.querySelector(".search-bar__close-btn");

const busStopBtn = document.querySelector(".bus-stop__btn");

/* SearchBar 컨트롤러 */
function openSearchBar() {
  searchBarContainer.classList.remove("invisible");
}

function closeSearchBar() {
  searchBarContainer.classList.add("invisible");
}

/* busStationBtn 컨트롤러 */
function renderBusInfo() {
  const terminalName = busStopBtn.firstChild.innerHTML;
  const test = getStationID(terminalName);
  console.log(test);
}

searchBtn.addEventListener("click", openSearchBar);
closeBtn.addEventListener("click", closeSearchBar);

busStopBtn.addEventListener("click", renderBusInfo);
