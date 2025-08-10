// ==UserScript==
// @name         [CP] 옵션 정보
// @namespace    http://tampermonkey.net/
// @version      2025-08-09
// @description  try to take over the world!
// @author       You
// @match        https://www.coupang.com/vp/products/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=coupang.com
// @grant        none
// @run-at        window-load
// ==/UserScript==

(function () {
  "use strict";

  // Bootstrap CSS 추가
  const bootstrapCSS = document.createElement("link");
  bootstrapCSS.rel = "stylesheet";
  bootstrapCSS.href =
    "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"; // Bootstrap CDN
  document.head.appendChild(bootstrapCSS);

  // Bootstrap JS 추가 (선택 사항)
  const bootstrapJS = document.createElement("script");
  bootstrapJS.src = "https://code.jquery.com/jquery-3.5.1.slim.min.js"; // Bootstrap의 JavaScript 동작을 위한 jQuery (Slim 버전)
  document.head.appendChild(bootstrapJS);

  const bootstrapJS2 = document.createElement("script");
  bootstrapJS2.src =
    "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js"; // Bootstrap의 JS
  document.head.appendChild(bootstrapJS2);

  // 버튼 생성
  const button = document.createElement("button");
  button.innerHTML = "Click Me";
  button.classList.add("btn", "btn-primary", "fixed-bottom", "mr-3", "mb-3"); // Bootstrap 클래스를 사용한 버튼 스타일

  // 버튼 클릭 시 실행할 코드 (console.log 출력)
  button.addEventListener("click", function () {
    console.log("버튼이 클릭되었습니다!");
    console.log(self.__next_f);
  });

  // 버튼을 페이지에 추가
  document.body.appendChild(button);
})();
