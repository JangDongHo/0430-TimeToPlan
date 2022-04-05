const searchBtn = document.querySelector(".search-bar");
const searchBarContainer = document.querySelector(".search-bar-container");
const closeBtn = document.querySelector(".search-bar__close-btn");
const searchBarBtns = document.querySelector(".search-bar__btns");

let terminalName = "";

/* SearchBar 컨트롤러 */
function openSearchBar() {
  searchBarContainer.classList.remove("invisible");
}

function closeSearchBar() {
  searchBarContainer.classList.add("invisible");
}

/* busStationBtn 컨트롤러 */
function renderBusInfo(event) {
  terminalName = event.target.innerText;
  localStorage.setItem("terminalName", terminalName);
  location.href = "https://homegnu.kro.kr/bus-info";
}

searchBtn.addEventListener("click", openSearchBar);
closeBtn.addEventListener("click", closeSearchBar);

searchBarBtns.addEventListener("click", renderBusInfo);
