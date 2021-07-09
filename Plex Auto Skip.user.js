// ==UserScript==
// @name         Plex Auto Skip
// @namespace    https://tanner.technology/
// @version      1
// @description  Automatically click skip intro in plex
// @author       Tanner Anderson <https://github.com/tannertechnology>
// @match        https://app.plex.tv/desktop/*
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
// @grant        none
// ==/UserScript==

(function() {
    setInterval(function dothings () {
    var doc = $(document).find("button:contains('Skip Intro')");
      doc.each(function() {
        $(this).click();
        setTimeout (function() {console.log('Button clicked, waiting...');}, 1000000);
      });
  }, 500);
})();
