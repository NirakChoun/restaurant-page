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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n/* Utilities */\nimg {\n    max-width: 100%;\n    height: auto;\n    object-fit: cover;\n}\n\n.container {\n    width: 85%;\n    height: 85%;\n    margin-left: auto;\n    margin-right: auto;\n    position: absolute; \n    top: -45px;\n    left: 50%;\n    transform: translateX(-50%);\n}\n\n.link {\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n    font-size: 1.2rem;\n    position: relative;\n    color: #FFD700;\n}\n\n.link::before {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 4px;\n    border-radius: 4px;\n    background-color: #FFD700;\n    bottom: 0;\n    left: 0;\n    transform-origin: right;\n    transform: scaleX(0);\n    transition: transform .3s ease-in-out;\n}\n\n.link:hover::before {\n    transform-origin: left;\n    transform: scaleX(1);\n}\n\n.title {\n    font-size: 2.5rem;\n    color: #FFD700;\n}\n\n.small-text {\n    font-size: 1.1rem;\n}\n\nbody {\n    height: 100vh;\n    font-family: \"Fredoka\", sans-serif;\n    background-size: cover;\n    position: relative;\n}\n\n.brand-logo {\n    display: flex;\n    justify-content: center;\n    align-items: start;\n}\n\nnav {\n    display: flex;\n    width: 100%;\n    justify-content: space-evenly;\n}\n\n#content {\n    margin-top: 30px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 40px;\n}\n\n.description {\n    color: white;\n    text-align: center;\n    width: 75%;\n    font-size: 1.5rem;\n    letter-spacing: 1.5;\n}\n\n#gallery {\n    display: flex;\n    gap: 40px;\n}\n\n#gallery img {\n    box-shadow: rgba(255, 215, 0, 0.25) 0px 54px 55px, \n                rgba(255, 215, 0, 0.12) 0px -12px 30px, \n                rgba(255, 215, 0, 0.12) 0px 4px 6px, \n                rgba(255, 215, 0, 0.17) 0px 12px 13px, \n                rgba(255, 215, 0, 0.09) 0px -3px 5px;\n}\n\n#menu {\n    display: flex;\n    flex-direction: column;\n    gap: 50px;\n}\n\n.row {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 50px;\n}\n\n.food {\n    color: white;\n    text-align: center;\n}\n\n#info {\n    color: white;\n    font-size: 1.5rem;\n    display: flex;\n    flex-direction: column;\n    gap: 50px;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   showContact: () => (/* binding */ showContact)\n/* harmony export */ });\nfunction showContact() {\n    const content = document.querySelector(\"div#content\");\n    // Remove all children\n    while (content.firstChild) {\n        content.removeChild(content.firstChild);\n    }\n\n    const title = document.createElement(\"h1\");\n    title.className = \"title\";\n    title.textContent = \"Contact\";\n    content.appendChild(title);\n\n    const info = document.createElement(\"div\");\n    info.setAttribute(\"id\", \"info\");\n\n    const contact = document.createElement(\"div\");\n    contact.className = \"contact\";\n    const contactList = document.createElement(\"contactList\");\n    for (let i = 0; i < 2; i++) {\n        const li = document.createElement(\"li\");\n        if (i === 0) {\n            li.textContent = \"Phone: 999-999-999\";\n        } else {\n            li.textContent = \"Email: nhamnham@mail.com\";\n        }\n        contactList.appendChild(li);\n    }\n    contact.appendChild(contactList);\n    info.appendChild(contact);\n\n    const hours = document.createElement(\"div\");\n    hours.className = \"hours\";\n    const hoursTitle = document.createElement(\"h2\");\n    hours.appendChild(hoursTitle);\n    const hoursList = document.createElement(\"ul\");\n    for (let i = 0; i < 2; i++) {\n        const li = document.createElement(\"li\");\n        if (i === 0) {\n            li.textContent = \"8:00 AM - 8:00PM, Monday - Friday\";\n        } else {\n            li.textContent = \"8:00 AM - 6:00PM, Saturday - Sunday\";\n        }\n        hoursList.appendChild(li);\n    }\n    hours.appendChild(hoursList);\n    info.appendChild(hours);\n\n    const location = document.createElement(\"div\");\n    location.className = \"location\";\n    const locationTitle = document.createElement(\"h2\");\n    location.appendChild(locationTitle);\n    const locationList = document.createElement(\"ul\");\n    const li = document.createElement(\"li\");\n    li.textContent = `Willow Creek | 123 Maple Street | Greenfield | California |\n                      90210 | United States`;\n    locationList.appendChild(li);\n    location.appendChild(locationList);\n    info.appendChild(location);\n\n    content.appendChild(info);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   showHome: () => (/* binding */ showHome)\n/* harmony export */ });\n/* harmony import */ var _img_hero1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../img/hero1.png */ \"./img/hero1.png\");\n/* harmony import */ var _img_hero2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../img/hero2.jpg */ \"./img/hero2.jpg\");\n/* harmony import */ var _img_hero3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../img/hero3.jpg */ \"./img/hero3.jpg\");\n\n\n\n\nfunction showHome() {\n    const content = document.querySelector(\"div#content\");\n    // Remove all children\n    while (content.firstChild) {\n        content.removeChild(content.firstChild);\n    }\n\n    const title = document.createElement(\"h1\");\n    title.className = \"title\";\n    title.textContent = \"Taste Authentic Khmer Food\";\n    content.appendChild(title);\n\n    const description = document.createElement(\"p\");\n    description.className = \"description\";\n    description.textContent = `Come and taste the unforgettable experience with Khmer cuisine, which\n            is known for its rich flavors and fresh ingredients. Khmer food also\n            features a variety of soups, stir-fries, and noodle dishes, often\n            accompanied by fresh vegetables and rice, making it a delicious\n            reflection of the country's cultural heritage.`;\n    content.appendChild(description);\n\n    const gallery = document.createElement(\"div\");\n    gallery.setAttribute(\"id\", \"gallery\");\n\n    const images = [_img_hero1_png__WEBPACK_IMPORTED_MODULE_0__, _img_hero2_jpg__WEBPACK_IMPORTED_MODULE_1__, _img_hero3_jpg__WEBPACK_IMPORTED_MODULE_2__];\n    for (let i = 0; i < images.length; i++) {\n        const hero = document.createElement(\"img\"); \n        hero.src = images[i]; \n        hero.style.width = \"256px\"; \n        hero.style.height = \"256px\"; \n        gallery.appendChild(hero); \n    }\n\n    content.appendChild(gallery);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../img/logo.png */ \"./img/logo.png\");\n/* harmony import */ var _img_background_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../img/background.jpg */ \"./img/background.jpg\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\n\n\n\nconst homeBtn = document.querySelector(\"#home\");\nconst menuBtn = document.querySelector(\"#menu\");\nconst contactBtn = document.querySelector(\"#contact\");\n\nconst logoDiv = document.querySelector(\".brand-logo\");\nconst logo = document.createElement(\"img\");\nlogo.src = _img_logo_png__WEBPACK_IMPORTED_MODULE_1__;\nlogo.style.width = \"256px\";\nlogo.style.height = \"256px\";\nlogoDiv.appendChild(logo);\n\ndocument.body.style.backgroundImage = `url('${_img_background_jpg__WEBPACK_IMPORTED_MODULE_2__}')`;\n\n// Show home by default\n(0,_home_js__WEBPACK_IMPORTED_MODULE_3__.showHome)();\nhomeBtn.addEventListener(\"click\", _home_js__WEBPACK_IMPORTED_MODULE_3__.showHome);\n\nmenuBtn.addEventListener(\"click\", _menu_js__WEBPACK_IMPORTED_MODULE_4__.showMenu);\n\ncontactBtn.addEventListener(\"click\", _contact_js__WEBPACK_IMPORTED_MODULE_5__.showContact);\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   showMenu: () => (/* binding */ showMenu)\n/* harmony export */ });\n/* harmony import */ var _img_hero1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../img/hero1.png */ \"./img/hero1.png\");\n/* harmony import */ var _img_food1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../img/food1.jpg */ \"./img/food1.jpg\");\n/* harmony import */ var _img_food2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../img/food2.jpg */ \"./img/food2.jpg\");\n/* harmony import */ var _img_food3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../img/food3.jpg */ \"./img/food3.jpg\");\n/* harmony import */ var _img_food4_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../img/food4.png */ \"./img/food4.png\");\n/* harmony import */ var _img_food5_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../img/food5.jpg */ \"./img/food5.jpg\");\n/* harmony import */ var _img_food6_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../img/food6.jpg */ \"./img/food6.jpg\");\n/* harmony import */ var _img_food7_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../img/food7.jpg */ \"./img/food7.jpg\");\n/* harmony import */ var _img_food8_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../img/food8.jpg */ \"./img/food8.jpg\");\n/* harmony import */ var _img_food11_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../img/food11.jpg */ \"./img/food11.jpg\");\n/* harmony import */ var _img_food9_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../img/food9.jpg */ \"./img/food9.jpg\");\n/* harmony import */ var _img_food10_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../img/food10.jpg */ \"./img/food10.jpg\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst firstRowName = [\"Amok\", \"Kuy Teav\", \"Nom Banh Chok\", \"Sour Soup\", \"Yao Hon\", \"Lok Lak\"];\nconst secondRowName = [\"Chicken Curry\", \"Beef Ceviche\", \"Pepper Crab\", \"Prahok Ktis\", \"Samlar Kako\", \"Pork Rice\"];\n\nconst firstRowImages = [_img_hero1_png__WEBPACK_IMPORTED_MODULE_0__, _img_food1_jpg__WEBPACK_IMPORTED_MODULE_1__, _img_food2_jpg__WEBPACK_IMPORTED_MODULE_2__, _img_food3_jpg__WEBPACK_IMPORTED_MODULE_3__, _img_food4_png__WEBPACK_IMPORTED_MODULE_4__, _img_food5_jpg__WEBPACK_IMPORTED_MODULE_5__];\nconst secondRowImages = [_img_food6_jpg__WEBPACK_IMPORTED_MODULE_6__, _img_food7_jpg__WEBPACK_IMPORTED_MODULE_7__, _img_food8_jpg__WEBPACK_IMPORTED_MODULE_8__, _img_food11_jpg__WEBPACK_IMPORTED_MODULE_9__, _img_food9_jpg__WEBPACK_IMPORTED_MODULE_10__, _img_food10_jpg__WEBPACK_IMPORTED_MODULE_11__];\n\nfunction showMenu() {\n    const content = document.querySelector(\"div#content\");\n    // Remove all children\n    while (content.firstChild) {\n        content.removeChild(content.firstChild);\n    }\n\n    const title = document.createElement(\"h1\");\n    title.className = \"title\";\n    title.textContent = \"Menu\";\n    content.appendChild(title);\n\n    const menu = document.createElement(\"div\");\n    menu.setAttribute(\"id\", \"menu\");\n    \n    const firstRow = document.createElement(\"div\");\n    firstRow.className = \"row\";\n    menu.appendChild(firstRow);\n\n    for (let i = 0; i < firstRowImages.length; i++) {\n        const food = document.createElement(\"div\");\n        food.className = \"food\";\n        const image = document.createElement(\"img\");\n        image.src = firstRowImages[i];\n        image.style.width = \"128px\";\n        image.style.height = \"128px\";\n        food.appendChild(image);\n        const name = document.createElement(\"h2\");\n        if (firstRowName[i] === \"Nom Banh Chok\") {\n            name.className = \"small-text\";\n        } \n        name.textContent = firstRowName[i];\n        food.appendChild(name);\n        firstRow.appendChild(food);\n    }\n\n\n    const secondRow = document.createElement(\"div\");\n    secondRow.className = \"row\";\n    menu.appendChild(secondRow);\n\n    for (let i = 0; i < secondRowImages.length; i++) {\n        const food = document.createElement(\"div\");\n        food.className = \"food\";\n        const image = document.createElement(\"img\");\n        image.src = secondRowImages[i];\n        image.style.width = \"128px\";\n        image.style.height = \"128px\";\n        food.appendChild(image);\n        const name = document.createElement(\"h2\");\n        if (secondRowName[i] === \"Chicken Curry\" || secondRowName[i] === \"Beef Ceviche\" || secondRowName[i] === \"Samlar Kako\") {\n            name.className = \"small-text\";\n        } \n        name.textContent = secondRowName[i];\n        food.appendChild(name);\n        secondRow.appendChild(food);\n    }\n\n    content.appendChild(menu);\n}\n\n\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./img/background.jpg":
/*!****************************!*\
  !*** ./img/background.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f3945cb5fcd7ac30c4c3.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./img/background.jpg?");

/***/ }),

/***/ "./img/food1.jpg":
/*!***********************!*\
  !*** ./img/food1.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"76fb599cddf13d37ddd9.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./img/food1.jpg?");

/***/ }),

/***/ "./img/food10.jpg":
/*!************************!*\
  !*** ./img/food10.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6f7e6b15a33d9bbf243f.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./img/food10.jpg?");

/***/ }),

/***/ "./img/food11.jpg":
/*!************************!*\
  !*** ./img/food11.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"90e234ad98eff1c1960a.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./img/food11.jpg?");

/***/ }),

/***/ "./img/food2.jpg":
/*!***********************!*\
  !*** ./img/food2.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5c1486b21b21059f709b.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./img/food2.jpg?");

/***/ }),

/***/ "./img/food3.jpg":
/*!***********************!*\
  !*** ./img/food3.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6b0e9d4d601fb01ac53d.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./img/food3.jpg?");

/***/ }),

/***/ "./img/food4.png":
/*!***********************!*\
  !*** ./img/food4.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e1459c02a72e0ba30410.png\";\n\n//# sourceURL=webpack://restaurant-page/./img/food4.png?");

/***/ }),

/***/ "./img/food5.jpg":
/*!***********************!*\
  !*** ./img/food5.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1d1a496aa1fc72936956.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./img/food5.jpg?");

/***/ }),

/***/ "./img/food6.jpg":
/*!***********************!*\
  !*** ./img/food6.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0b46f490f1e414bfbcec.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./img/food6.jpg?");

/***/ }),

/***/ "./img/food7.jpg":
/*!***********************!*\
  !*** ./img/food7.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"44537acb631c65f8ffb5.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./img/food7.jpg?");

/***/ }),

/***/ "./img/food8.jpg":
/*!***********************!*\
  !*** ./img/food8.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e288b4f670e3203ac080.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./img/food8.jpg?");

/***/ }),

/***/ "./img/food9.jpg":
/*!***********************!*\
  !*** ./img/food9.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"94eaec8bead604730e47.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./img/food9.jpg?");

/***/ }),

/***/ "./img/hero1.png":
/*!***********************!*\
  !*** ./img/hero1.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6650582ec00d1bb419f0.png\";\n\n//# sourceURL=webpack://restaurant-page/./img/hero1.png?");

/***/ }),

/***/ "./img/hero2.jpg":
/*!***********************!*\
  !*** ./img/hero2.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2cf09a2279e99c5f8c53.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./img/hero2.jpg?");

/***/ }),

/***/ "./img/hero3.jpg":
/*!***********************!*\
  !*** ./img/hero3.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"05a5be2ba7534a95dce8.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./img/hero3.jpg?");

/***/ }),

/***/ "./img/logo.png":
/*!**********************!*\
  !*** ./img/logo.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6c1c91d6523e79fc2f1f.png\";\n\n//# sourceURL=webpack://restaurant-page/./img/logo.png?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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