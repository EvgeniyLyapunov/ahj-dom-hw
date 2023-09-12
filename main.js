/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/widget.js
document.addEventListener;
class Widget {
  constructor(boxSelector) {
    this.box = document.querySelector(boxSelector);
  }
  boxShow() {
    const squareList = this.box.querySelectorAll('.square');
    const play = setInterval(() => {
      for (let square of squareList) {
        if (square.classList.contains('img')) {
          square.classList.remove('img');
          break;
        }
      }
      const activeSquare = squareList[Math.floor(Math.random() * squareList.length)];
      activeSquare.classList.add('img');
    }, 500);
    document.addEventListener('keydown', e => {
      if (e.key === ' ') {
        clearInterval(play);
        document.querySelector('span').textContent = 'Bye!';
      }
    });
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

const widget = new Widget(".box");
widget.boxShow();
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;