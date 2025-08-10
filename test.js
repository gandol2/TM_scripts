// ==UserScript==
// @name         test.js
// @namespace    http://tampermonkey.net/
// @version      2025-08-09
// @description  try to take over the world!
// @author       You
// @match        *
// @icon         https://www.google.com/s2/favicons?sz=64&domain=coupang.com
// @grant        none
// @run-at        window-load
// ==/UserScript==

(function () {
  "use strict";
  console.log("test.js");
})();

GM_notification({
  text: "This is the notification message.",
  title: "Notification Title",
  url: "https:/example.com/",
  onclick: (event) => {
    // The userscript is still running, so don't open example.com
    event.preventDefault();
    // Display an alert message instead
    alert("I was clicked!");
  },
});

const clicked = await GM.notification({ text: "Click me." });
