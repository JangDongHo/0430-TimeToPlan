const searchBtn = document.getElementsByClassName(".search-bar");
const searchBarContainer = document.querySelector(".search-bar-container");
const closeBtn = document.querySelector(".search-bar__close-btn");

const busStopBtn = document.querySelector(".bus-stop__btn");

let terminalName = "";

/* SearchBar 컨트롤러 */
function openSearchBar() {
  searchBarContainer.classList.remove("invisible");
}

function closeSearchBar() {
  searchBarContainer.classList.add("invisible");
}

/* busStationBtn 컨트롤러 */
function renderBusInfo() {
  terminalName = busStopBtn.firstChild.innerHTML;
  localStorage.setItem("terminalName", terminalName);
  location.href = "https://homegnu.kro.kr/bus-info";
}

searchBtn.addEventListener("click", openSearchBar);
closeBtn.addEventListener("click", closeSearchBar);

busStopBtn.addEventListener("click", renderBusInfo);
