const searchBarBtns = document.querySelector(".search-bar__btns");

const region = ["경상남도", "부산광역시", "경상북도", "전라남도", "기타"];

//["대전복합터미널","서부정류장","울산시외버스터미널","청주시외버스터미널"]

//위에 숫자로 호출, 한행에 첫열이 큰종류, 다른열은 세부 목록
const 전라남도 = [["광양시", "광양터미널", "중마버스터미널"], ["순천시", "북부정류소", "순천종합버스터미널"]];

const btn = document.createElement("div");
btn.classList.add("search-bar__btn");
const title = document.createElement("span");
title.innerText = region[0];
const sub = document.createElement("span");
sub.innerText = "37곳";
sub.classList.add("search-bar__btn-right");
btn.appendChild(title);
btn.appendChild(sub);
searchBarBtns.appendChild(btn);
