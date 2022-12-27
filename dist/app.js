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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _shipFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipFactory */ \"./src/shipFactory.js\");\n\n\nfunction Gameboard() {\n  const board = [...Array(10)].map((e) => Array(10).fill(null));\n  const hitMiss = [...Array(10)].map((e) => Array(10).fill(null));\n\n  const isPlacementPossible = function (ship, startX, startY, direction) {\n    let legalPlaces = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];\n    if (!legalPlaces.includes(startX) || !legalPlaces.includes(startY)) {\n      return false;\n    }\n\n    let endX, endY;\n    if (direction === \"up\") {\n      endY = startY + ship.length - 1;\n      endX = startX;\n    } else if (direction === \"down\") {\n      endY = startY - ship.length + 1;\n      endX = startX;\n    } else if (direction === \"right\") {\n      endY = startY;\n      endX = startX + ship.length - 1;\n    } else if (direction === \"left\") {\n      endY = startY;\n      endX = startX - ship.length + 1;\n    }\n\n    if (!legalPlaces.includes(endX) || !legalPlaces.includes(endY)) {\n      return false;\n    }\n\n    if (startX > endX) {\n      [startX, endX] = [endX, startX];\n    }\n\n    if (startY > endY) {\n      [startY, endY] = [endY, startY];\n    }\n\n    for (let x = startX; x <= endX; x++) {\n      for (let y = startY; y <= endY; y++) {\n        if (this.board[x][y] != null) {\n          return false;\n        }\n      }\n    }\n\n    return true;\n  };\n\n  const placeShip = function (ship, startX, startY, direction) {\n\n    if (this.isPlacementPossible(ship, startX, startY, direction) === false) {\n      return;\n    }\n\n    let endX, endY;\n    if (direction === \"up\") {\n      endY = startY + ship.length - 1;\n      endX = startX;\n    } else if (direction === \"down\") {\n      endY = startY - ship.length + 1;\n      endX = startX;\n    } else if (direction === \"right\") {\n      endY = startY;\n      endX = startX + ship.length - 1;\n    } else if (direction === \"left\") {\n      endY = startY;\n      endX = startX - ship.length + 1;\n    }\n\n    if (startX > endX) {\n      [startX, endX] = [endX, startX];\n    }\n\n    if (startY > endY) {\n      [startY, endY] = [endY, startY];\n    }\n\n    \n\n    for (let x = startX; x <= endX; x++) {\n      for (let y = startY; y <= endY; y++) {\n        this.board[x][y] = ship;\n      }\n    }\n\n    \n  };\n\n  const receiveAttack = function (x, y) {\n    if (this.board[x][y] != null) {\n      this.hitMiss[x][y] = true;\n      this.board[x][y].hit();\n    } else {\n      this.hitMiss[x][y] = false;\n    }\n  };\n\n  const allShipsSunk = function () {\n    for (let i = 0; i < 10; i++) {\n      for (let j = 0; j < 10; j++) {\n        if (this.board[i][j] != null) {\n          if (this.board[i][j].isSunk() === false) {\n            return false;\n          }\n        }\n      }\n    }\n    return true;\n  };\n\n  const placeShipRandom = function (ship) {\n    let legalPlaces = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];\n    let directions = [\"down\", \"left\", \"up\", \"right\"];\n    let randomX = legalPlaces[Math.floor(Math.random() * legalPlaces.length)];\n    let randomY = legalPlaces[Math.floor(Math.random() * legalPlaces.length)];\n    let randomDirection =\n      directions[Math.floor(Math.random() * directions.length)];\n\n    while (\n      this.isPlacementPossible(ship, randomX, randomY, randomDirection) ===\n      false\n    ) {\n      randomX = legalPlaces[Math.floor(Math.random() * legalPlaces.length)];\n      randomY = legalPlaces[Math.floor(Math.random() * legalPlaces.length)];\n      randomDirection =\n        directions[Math.floor(Math.random() * directions.length)];\n    }\n    this.placeShip(ship, randomX, randomY, randomDirection);\n\n  };\n\n  return {\n    board,\n    hitMiss,\n    placeShip,\n    receiveAttack,\n    allShipsSunk,\n    isPlacementPossible,\n    placeShipRandom,\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n\n//# sourceURL=webpack://battleship/./src/gameboardFactory.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_playerFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/playerFactory */ \"./src/playerFactory.js\");\n/* harmony import */ var _src_gameboardFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/gameboardFactory */ \"./src/gameboardFactory.js\");\n/* harmony import */ var _src_shipFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/shipFactory */ \"./src/shipFactory.js\");\n\n\n\n\n//Setting up the variables needed to run game\nlet playerBoard;\nlet compBoard;\nlet playerOne;\nlet comp;\nlet playerShipOne;\nlet playerShipTwo;\nlet playerShipThree;\nlet playerShipFour;\nlet playerShipFive;\nlet compShipOne;\nlet compShipTwo;\nlet compShipThree;\nlet compShipFour;\nlet compShipFive;\n\n//Initializing the game board for each player and their ships\nplayerBoard = (0,_src_gameboardFactory__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\ncompBoard = (0,_src_gameboardFactory__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nplayerShipOne = (0,_src_shipFactory__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(5);\nplayerShipTwo = (0,_src_shipFactory__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(4);\nplayerShipThree = (0,_src_shipFactory__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(3);\nplayerShipFour = (0,_src_shipFactory__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(3);\nplayerShipFive = (0,_src_shipFactory__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(2);\ncompShipOne = (0,_src_shipFactory__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(5);\ncompShipTwo = (0,_src_shipFactory__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(4);\ncompShipThree = (0,_src_shipFactory__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(3);\ncompShipFour = (0,_src_shipFactory__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(3);\ncompShipFive = (0,_src_shipFactory__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(2);\n\n//randomly placing the computers ships on its board\ncompBoard.placeShipRandom(compShipOne);\ncompBoard.placeShipRandom(compShipTwo);\ncompBoard.placeShipRandom(compShipThree);\ncompBoard.placeShipRandom(compShipFour);\ncompBoard.placeShipRandom(compShipFive);\ncomp = (0,_src_playerFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(compBoard);\n\n//function to update playing board with hit or miss class as well as ship class\nfunction updateDisplay() {\n  for (let i = 0; i < 10; i++) {\n    for (let k = 0; k < 10; k++) {\n      if (compBoard.hitMiss[i][k] === true) {\n        computerArr[i][k].classList.add(\"hit\");\n      }\n\n      if (compBoard.hitMiss[i][k] === false) {\n        computerArr[i][k].classList.add(\"miss\");\n      }\n\n      if (playerBoard.hitMiss[i][k] === true) {\n        playerArr[i][k].classList.add(\"hit\");\n      }\n\n      if (playerBoard.hitMiss[i][k] === false) {\n        playerArr[i][k].classList.add(\"miss\");\n      }\n\n      if (!allShipsPlaced) {\n        playerArr[i][k].className = \"\";\n        if (playerBoard.board[i][k] != null) {\n          playerArr[i][k].classList.add(\"ship\");\n        }\n      }\n    }\n  }\n}\n\n//function to update visually where player wants to place their ship\nfunction setShip() {\n  if (!allShipsPlaced) {\n    let disStartX = startX;\n    let disStartY = startY;\n\n    let disEndX, disEndY;\n    if (direction === \"up\") {\n      disEndY = disStartY + playerShipArr[current].length - 1;\n      disEndX = disStartX;\n    } else if (direction === \"down\") {\n      disEndY = disStartY - playerShipArr[current].length + 1;\n      disEndX = disStartX;\n    } else if (direction === \"right\") {\n      disEndY = disStartY;\n      disEndX = disStartX + playerShipArr[current].length - 1;\n    } else if (direction === \"left\") {\n      disEndY = disStartY;\n      disEndX = disStartX - playerShipArr[current].length + 1;\n    }\n    if (disStartX > disEndX) {\n      [disStartX, disEndX] = [disEndX, disStartX];\n    }\n\n    if (disStartY > disEndY) {\n      [disStartY, disEndY] = [disEndY, disStartY];\n    }\n    let legalPlaces = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];\n    if (\n      !legalPlaces.includes(disStartX) ||\n      !legalPlaces.includes(disStartY) ||\n      !legalPlaces.includes(disEndX) ||\n      !legalPlaces.includes(disEndY)\n    ) {\n      return;\n    }\n\n    updateDisplay();\n    for (let p = disStartX; p <= disEndX; p++) {\n      for (let j = disStartY; j <= disEndY; j++) {\n        playerArr[p][j].classList.add(\"ship\");\n      }\n    }\n  }\n}\n\n//button place set ship in place and an array of player ships to be placed\nconst placeButton = document.getElementById(\"place\");\nlet playerShipArr = [\n  playerShipOne,\n  playerShipTwo,\n  playerShipThree,\n  playerShipFour,\n  playerShipFive,\n];\n\n//game control variables\nlet current = 0;\nlet playerTurn = true;\nlet gameOn = false;\nlet allShipsPlaced = false;\nlet startX = null;\nlet startY = null;\nlet direction = \"right\";\nlet computerArr = [...Array(10)].map((e) => Array(10).fill(null));\nlet playerArr = [...Array(10)].map((e) => Array(10).fill(null));\n\nplaceButton.addEventListener(\"click\", () => {\n  if (\n    allShipsPlaced === false &&\n    startX !== null &&\n    playerBoard.isPlacementPossible(\n      playerShipArr[current],\n      startX,\n      startY,\n      direction\n    ) === true\n  ) {\n    playerBoard.placeShip(playerShipArr[current], startX, startY, direction);\n    updateDisplay();\n    current += 1;\n  }\n  if (current === 5) {\n    allShipsPlaced = true;\n    gameOn = true;\n    playerOne = (0,_src_playerFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(playerBoard);\n  }\n});\n\n//buttons to set the direction of the ship to be placed\nconst down = document.getElementById(\"down\");\nconst up = document.getElementById(\"up\");\nconst left = document.getElementById(\"left\");\nconst right = document.getElementById(\"right\");\n\ndown.addEventListener(\"click\", () => {\n  if (!allShipsPlaced) {\n    direction = \"down\";\n    if (startX) {\n      setShip();\n    }\n  }\n});\nup.addEventListener(\"click\", () => {\n  if (!allShipsPlaced) {\n    direction = \"up\";\n    if (startX) {\n      setShip();\n    }\n  }\n});\nleft.addEventListener(\"click\", () => {\n  if (!allShipsPlaced) {\n    direction = \"left\";\n    if (startX) {\n      setShip();\n    }\n  }\n});\nright.addEventListener(\"click\", () => {\n  if (!allShipsPlaced) {\n    direction = \"right\";\n    if (startX) {\n      setShip();\n    }\n  }\n});\n\n//Setting up the visual game boards for the player and computer and logic to run game\nfor (let i = 0; i < 10; i++) {\n  for (let k = 0; k < 10; k++) {\n    computerArr[k][i] = document\n      .getElementById(\"computer-board\")\n      .querySelector(`.row${i}`)\n      .querySelector(`.column${k}`);\n    playerArr[k][i] = document\n      .getElementById(\"player-board\")\n      .querySelector(`.row${i}`)\n      .querySelector(`.column${k}`);\n    computerArr[k][i].addEventListener(\"click\", () => {\n      //on click checks to see if it is players turn and the game is running\n      if (playerTurn && gameOn && compBoard.hitMiss[k][i] === null) {\n        compBoard.receiveAttack(k, i);\n        updateDisplay();\n        playerTurn = false;\n        gameOn = !playerBoard.allShipsSunk() && !compBoard.allShipsSunk();\n        if(!gameOn) {\n          alert(\"Player wins!\")\n        }\n        if (!playerTurn && gameOn) {\n          comp.randomPlay(playerBoard);\n          updateDisplay();\n          gameOn = !playerBoard.allShipsSunk() && !compBoard.allShipsSunk();\n          if(!gameOn) {\n            alert(\"Computer wins!\")\n          }\n          playerTurn = true;\n        }\n      }\n    });\n\n    playerArr[k][i].addEventListener(\"click\", () => {\n      startX = k;\n      startY = i;\n      setShip();\n    });\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/playerFactory.js":
/*!******************************!*\
  !*** ./src/playerFactory.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _src_gameboardFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/gameboardFactory */ \"./src/gameboardFactory.js\");\n/* harmony import */ var _src_shipFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/shipFactory */ \"./src/shipFactory.js\");\n\n\n\nfunction Player(gameboard) {\n  const findEmptySpots = function (board) {\n    let arr = [];\n    for (let i = 0; i < 10; i++) {\n      for (let j = 0; j < 10; j++) {\n        if (board.hitMiss[i][j] === null) {\n          arr.push([i, j]);\n        }\n      }\n    }\n\n    return arr;\n  };\n\n  const findHitSpots = function (board) {\n    let arr = [];\n    for (let i = 0; i < 10; i++) {\n      for (let j = 0; j < 10; j++) {\n        if (board.hitMiss[i][j] === true) {\n          arr.push([i, j]);\n        }\n      }\n    }\n\n    return arr;\n  };\n\n  const findAdjacentOfHit = function (arr) {\n    let adjacentSpots = arr.reduce((acc, cur) => {\n      let [x, y] = cur;\n      acc.push([x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1]);\n      return acc;\n    }, []);\n\n    let set = new Set(adjacentSpots.map(JSON.stringify));\n    let arr2 = Array.from(set).map(JSON.parse);\n\n    return arr2;\n  };\n\n  const randomPlay = function (board) {\n    let possibleSpots = findEmptySpots(board);\n    let hits = findHitSpots(board);\n    let adjacent = findAdjacentOfHit(hits);\n    let spot;\n\n    let adjacentPossible = adjacent\n      .map(JSON.stringify)\n      .filter((ele) => {\n        return possibleSpots.map(JSON.stringify).includes(ele);\n      })\n      .map(JSON.parse);\n      \n    if (adjacentPossible.length > 0) {\n      spot =\n        adjacentPossible[Math.floor(Math.random() * adjacentPossible.length)];\n    } else {\n      spot = possibleSpots[Math.floor(Math.random() * possibleSpots.length)];\n    }\n    board.receiveAttack(...spot);\n  };\n\n  return { gameboard, randomPlay };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n\n//# sourceURL=webpack://battleship/./src/playerFactory.js?");

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