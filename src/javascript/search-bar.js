const searchBtn = document.querySelector(".search-bar");
const searchBarContainer = document.querySelector(".search-bar-container");
const closeBtn = document.querySelector(".search-bar__close-btn");


function openSearchBar() {
  searchBarContainer.classList.remove("invisible");
}

function closeSearchBar() {
  searchBarContainer.classList.add("invisible");
}

searchBtn.addEventListener("click", openSearchBar);
closeBtn.addEventListener("click", closeSearchBar);