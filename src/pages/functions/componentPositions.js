import React, { Component } from "react";

export default function componentPositions() {
  //console.trace("called from");
  let elementsOnPage = document.getElementById("mainContent").children;
  let mainOffset = document.getElementById("mainContent").offsetTop;
  let nav = document.getElementById("pageNavigation");
  let navOffHeight = nav.offsetHeight;
  let mainMargin =
    getComputedStyle(document.getElementById("mainContent")).marginTop.slice(
      0,
      -2
    ) * 1;
  //get padding value
  let navMargin =
    getComputedStyle(
      document.getElementById("pageNavigation")
    ).marginBottom.slice(0, -2) * 1;
  //console.log("right", mainOffset, nav, navMargin);
  //console.log("elementsOnPage", elementsOnPage);
  let mappedElementsOnPage = Array.prototype.slice
    .call(elementsOnPage)
    .map((e, i) => {
      // console.log("test", e);
      if (i !== 0) {
        if (e.classList[1] === undefined && e.classList[1] !== "hide") {
          // console.log(
          //   "Offset",
          //   e.offsetTop,
          //   mainOffset,
          //   navOffHeight,
          //   mainMargin,
          //   navMargin
          // );
          return [e.offsetTop - mainMargin, e.offsetHeight];
        }
      } else {
        return [e.offsetTop - mainMargin - navMargin, e.offsetHeight];
      }
    });
  let filtered = mappedElementsOnPage.filter(e => e !== undefined);
  return [0, ...filtered, document.body.scrollHeight];
}
