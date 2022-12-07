/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gameboardFactory.js":
/*!*********************************!*\
  !*** ./src/gameboardFactory.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _shipFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipFactory */ \"./src/shipFactory.js\");\n\n\nfunction Gameboard() {\n  const board = [...Array(10)].map((e) => Array(10).fill(null));\n  const hitMiss = [...Array(10)].map((e) => Array(10).fill(null));\n\n  const isPlacementPossible = function (ship, startX, startY, direction) {\n    let legalPlaces = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];\n    if (!legalPlaces.includes(startX) || !legalPlaces.includes(startY)) {\n      return false;\n    }\n\n    let endX, endY;\n    if (direction === \"up\") {\n      endY = startY + ship.length - 1;\n      endX = startX;\n    } else if (direction === \"down\") {\n      endY = startY - ship.length + 1;\n      endX = startX;\n    } else if (direction === \"right\") {\n      endY = startY;\n      endX = startX + ship.length - 1;\n    } else if (direction === \"left\") {\n      endY = startY;\n      endX = startX - ship.length + 1;\n    }\n\n    if (!legalPlaces.includes(endX) || !legalPlaces.includes(endY)) {\n      return false;\n    }\n\n    if (startX > endX) {\n      [startX, endX] = [endX, startX];\n    }\n\n    if (startY > endY) {\n      [startY, endY] = [endY, startY];\n    }\n\n    \n\n    for (let x = startX; x <= endX; x++) {\n      for (let y = startY; y <= endY; y++) {\n        if (this.board[x][y] != null) {\n          return false;\n        }\n      }\n    }\n\n    return true;\n  };\n\n  const placeShip = function (ship, startX, startY, direction) {\n    let legalPlaces = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];\n    if (!legalPlaces.includes(startX) || !legalPlaces.includes(startY)) {\n      return;\n    }\n\n    let endX, endY;\n    if (direction === \"up\") {\n      endY = startY + ship.length - 1;\n      endX = startX;\n    } else if (direction === \"down\") {\n      endY = startY - ship.length + 1;\n      endX = startX;\n    } else if (direction === \"right\") {\n      endY = startY;\n      endX = startX + ship.length - 1;\n    } else if (direction === \"left\") {\n      endY = startY;\n      endX = startX - ship.length + 1;\n    }\n\n    if (startX > endX) {\n      [startX, endX] = [endX, startX];\n    }\n\n    if (startY > endY) {\n      [startY, endY] = [endY, startY];\n    }\n    \n    if(this.isPlacementPossible(ship, startX, startY, direction) === false) {\n      return\n    }\n\n    for (let x = startX; x <= endX; x++) {\n      for (let y = startY; y <= endY; y++) {\n        this.board[x][y] = ship;\n      }\n    }\n  };\n\n  const receiveAttack = function (x, y) {\n    if (this.board[x][y] != null) {\n      this.hitMiss[x][y] = true;\n      this.board[x][y].hit();\n    } else {\n      this.hitMiss[x][y] = false;\n    }\n  };\n\n  const allShipsSunk = function () {\n    for (let i = 0; i < 10; i++) {\n      for (let j = 0; j < 10; j++) {\n        if (this.board[i][j] != null) {\n          if (this.board[i][j].isSunk() === false) {\n            return false;\n          }\n        }\n      }\n    }\n    return true;\n  };\n\n  return {\n    board,\n    hitMiss,\n    placeShip,\n    receiveAttack,\n    allShipsSunk,\n    isPlacementPossible,\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n\n//# sourceURL=webpack://battleship/./src/gameboardFactory.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_playerFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/playerFactory */ \"./src/playerFactory.js\");\n/* harmony import */ var _src_gameboardFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/gameboardFactory */ \"./src/gameboardFactory.js\");\n/* harmony import */ var _src_shipFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/shipFactory */ \"./src/shipFactory.js\");\n\n\n\n\nlet playerBoard;\nlet compBoard;\nlet playerOne;\nlet comp;\nlet playerShipOne;\nlet playerShipTwo;\nlet playerShipThree;\nlet playerShipFour;\nlet playerShipFive;\nlet compShipOne;\nlet compShipTwo;\nlet compShipThree;\nlet compShipFour;\nlet compShipFive;\n\nplayerBoard = (0,_src_gameboardFactory__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\ncompBoard = (0,_src_gameboardFactory__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nplayerShipOne = (0,_src_shipFactory__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(5);\nplayerShipTwo = (0,_src_shipFactory__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(4);\nplayerShipThree = (0,_src_shipFactory__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(3);\nplayerShipFour = (0,_src_shipFactory__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(3);\nplayerShipFive = (0,_src_shipFactory__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(2);\ncompShipOne = (0,_src_shipFactory__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(5);\ncompShipTwo = (0,_src_shipFactory__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(4);\ncompShipThree = (0,_src_shipFactory__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(3);\ncompShipFour = (0,_src_shipFactory__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(3);\ncompShipFive = (0,_src_shipFactory__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(2);\nplayerBoard.placeShip(playerShipOne, 0, 0, \"up\");\nplayerBoard.placeShip(playerShipTwo, 1, 0, \"up\");\nplayerBoard.placeShip(playerShipThree, 2, 0, \"up\");\nplayerBoard.placeShip(playerShipFour, 3, 0, \"up\");\nplayerBoard.placeShip(playerShipFive, 4, 0, \"up\");\ncompBoard.placeShip(compShipOne, 0, 9, \"down\");\ncompBoard.placeShip(compShipTwo, 1, 9, \"down\");\ncompBoard.placeShip(compShipThree, 2, 9, \"down\");\ncompBoard.placeShip(compShipFour, 3, 9, \"down\");\ncompBoard.placeShip(compShipFive, 4, 9, \"down\");\ncomp = (0,_src_playerFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(compBoard);\nplayerOne = (0,_src_playerFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(playerBoard);\n\nfunction updateDisplay() {\n  for (let i = 0; i < 10; i++) {\n    for (let k = 0; k < 10; k++) {\n      if (compBoard.hitMiss[i][k] === true) {\n        computerArr[i][k].classList.add(\"hit\");\n      }\n\n      if (compBoard.hitMiss[i][k] === false) {\n        computerArr[i][k].classList.add(\"miss\");\n      }\n\n      if (playerBoard.hitMiss[i][k] === true) {\n        playerArr[i][k].classList.add(\"hit\");\n      }\n\n      if (playerBoard.hitMiss[i][k] === false) {\n        playerArr[i][k].classList.add(\"miss\");\n      }\n    }\n  }\n}\n\nlet playerTurn = true;\nlet gameOn = true;\n\nlet computerArr = [...Array(10)].map((e) => Array(10).fill(null));\nlet playerArr = [...Array(10)].map((e) => Array(10).fill(null));\n\nfor (let i = 0; i < 10; i++) {\n  for (let k = 0; k < 10; k++) {\n    computerArr[k][i] = document\n      .getElementById(\"computer-board\")\n      .querySelector(`.row${i}`)\n      .querySelector(`.column${k}`);\n    playerArr[k][i] = document\n      .getElementById(\"player-board\")\n      .querySelector(`.row${i}`)\n      .querySelector(`.column${k}`);\n    computerArr[k][i].addEventListener(\"click\", () => {\n      if (playerTurn && gameOn && compBoard.hitMiss[k][i] === null) {\n        compBoard.receiveAttack(k, i);\n        updateDisplay();\n        playerTurn = false;\n        gameOn = !playerBoard.allShipsSunk() && !compBoard.allShipsSunk();\n        if (!playerTurn && gameOn) {\n          comp.randomPlay(playerBoard);\n          updateDisplay();\n          gameOn = !playerBoard.allShipsSunk() && !compBoard.allShipsSunk();\n          playerTurn = true;\n        }\n      }\n    });\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/playerFactory.js":
/*!******************************!*\
  !*** ./src/playerFactory.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _src_gameboardFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/gameboardFactory */ \"./src/gameboardFactory.js\");\n/* harmony import */ var _src_shipFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/shipFactory */ \"./src/shipFactory.js\");\n\n\n\nfunction Player(gameboard) {\n  const findEmptySpots = function (board) {\n    let arr = [];\n    for (let i = 0; i < 10; i++) {\n      for (let j = 0; j < 10; j++) {\n        if (board.hitMiss[i][j] === null) {\n          arr.push([i, j]);\n        }\n      }\n    }\n\n    return arr;\n  };\n  const randomPlay = function (board) {\n    let possibleSpots = findEmptySpots(board);\n    let spot = possibleSpots[Math.floor(Math.random() * possibleSpots.length)];\n    board.receiveAttack(...spot);\n  };\n\n  return { gameboard, randomPlay };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n\n//# sourceURL=webpack://battleship/./src/playerFactory.js?");

/***/ }),

/***/ "./src/shipFactory.js":
/*!****************************!*\
  !*** ./src/shipFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Ship(length) {\n  const timesHit = 0;\n  const sunk = false;\n  const hit = function () {\n    if (this.timesHit < this.length) {\n      this.timesHit += 1;\n    }\n  };\n\n  const isSunk = function () {\n    return this.timesHit >= this.length\n  };\n\n  return { length, timesHit, sunk, hit, isSunk };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n\n//# sourceURL=webpack://battleship/./src/shipFactory.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;