import region from "./busStationDB.js";

const searchBarBtns = document.querySelector(".search-bar__btns");

region.forEach((item) => {
  let index = 0;
  item.forEach((item) => {
    const btn = document.createElement("div");
    btn.classList.add("search-bar__btn");
    if (index >= 1) {
      btn.classList.add("bus-stop__btn");
    }
    const title = document.createElement("span");
    title.innerText = item;
    const sub = document.createElement("span");
    sub.innerText = "❤";
    sub.classList.add("search-bar__btn-right");
    btn.appendChild(title);
    btn.appendChild(sub);
    searchBarBtns.appendChild(btn);
    index++;
  });
});
