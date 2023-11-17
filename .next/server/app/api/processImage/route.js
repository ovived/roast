"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/processImage/route";
exports.ids = ["app/api/processImage/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "node:fs":
/*!**************************!*\
  !*** external "node:fs" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("node:fs");

/***/ }),

/***/ "node:stream":
/*!******************************!*\
  !*** external "node:stream" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:stream");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "worker_threads":
/*!*********************************!*\
  !*** external "worker_threads" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("worker_threads");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2FprocessImage%2Froute&page=%2Fapi%2FprocessImage%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FprocessImage%2Froute.js&appDir=%2FUsers%2Frob%2Fdev%2Froastme%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Frob%2Fdev%2Froastme&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2FprocessImage%2Froute&page=%2Fapi%2FprocessImage%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FprocessImage%2Froute.js&appDir=%2FUsers%2Frob%2Fdev%2Froastme%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Frob%2Fdev%2Froastme&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_rob_dev_roastme_app_api_processImage_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/processImage/route.js */ \"(rsc)/./app/api/processImage/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/processImage/route\",\n        pathname: \"/api/processImage\",\n        filename: \"route\",\n        bundlePath: \"app/api/processImage/route\"\n    },\n    resolvedPagePath: \"/Users/rob/dev/roastme/app/api/processImage/route.js\",\n    nextConfigOutput,\n    userland: _Users_rob_dev_roastme_app_api_processImage_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/processImage/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZwcm9jZXNzSW1hZ2UlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnByb2Nlc3NJbWFnZSUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnByb2Nlc3NJbWFnZSUyRnJvdXRlLmpzJmFwcERpcj0lMkZVc2VycyUyRnJvYiUyRmRldiUyRnJvYXN0bWUlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGcm9iJTJGZGV2JTJGcm9hc3RtZSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDNko7O0FBRTdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLz81YWJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9yb2IvZGV2L3JvYXN0bWUvYXBwL2FwaS9wcm9jZXNzSW1hZ2Uvcm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3Byb2Nlc3NJbWFnZS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3Byb2Nlc3NJbWFnZVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvcHJvY2Vzc0ltYWdlL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL3JvYi9kZXYvcm9hc3RtZS9hcHAvYXBpL3Byb2Nlc3NJbWFnZS9yb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9wcm9jZXNzSW1hZ2Uvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2FprocessImage%2Froute&page=%2Fapi%2FprocessImage%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FprocessImage%2Froute.js&appDir=%2FUsers%2Frob%2Fdev%2Froastme%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Frob%2Fdev%2Froastme&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/processImage/route.js":
/*!***************************************!*\
  !*** ./app/api/processImage/route.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"(rsc)/./node_modules/openai/index.mjs\");\n\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    apiKey: \"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\"\n});\nconst POST = async (req, res)=>{\n    const body = await req.json();\n    const { imageUrl, messages } = body;\n    const systemMessage = `\n    \"\"\"\n    You are Sir David Attenborough. Narrate the picture of the human as if it is a nature documentary.\n    Make it snarky and funny. Don't repeat yourself. Make it short. If I do anything remotely interesting, make a big deal about it!\n    \"\"\"\n    `;\n    try {\n        console.log(systemMessage);\n        console.log(\"Sending messages to OpenAI:\", messages);\n        const response = await openai.chat.completions.create({\n            model: \"gpt-4-vision-preview\",\n            temperature: 0.85,\n            max_tokens: 500,\n            messages: [\n                {\n                    role: \"system\",\n                    content: systemMessage\n                },\n                ...messages,\n                {\n                    role: \"user\",\n                    content: [\n                        {\n                            type: \"text\",\n                            text: \"hey there\"\n                        },\n                        {\n                            type: \"image_url\",\n                            image_url: {\n                                url: imageUrl\n                            }\n                        }\n                    ]\n                }\n            ]\n        });\n        console.log(response);\n        return Response.json(response);\n    } catch (error) {\n        return Response.json({\n            error: \"Error processing image\",\n            details: error.message\n        });\n    }\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3Byb2Nlc3NJbWFnZS9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE0QjtBQUU1QixNQUFNQyxTQUFTLElBQUlELDhDQUFNQSxDQUFDO0lBQUVFLFFBQVE7QUFBc0Q7QUFFMUYsTUFBTUMsT0FBTyxPQUFPQyxLQUFLQztJQUN2QixNQUFNQyxPQUFPLE1BQU1GLElBQUlHLElBQUk7SUFDM0IsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFFBQVEsRUFBRSxHQUFHSDtJQUM3QixNQUFNSSxnQkFBZ0IsQ0FBQzs7Ozs7SUFLdkIsQ0FBQztJQUVELElBQUk7UUFDRkMsUUFBUUMsR0FBRyxDQUFDRjtRQUNaQyxRQUFRQyxHQUFHLENBQUMsK0JBQStCSDtRQUV6QyxNQUFNSSxXQUFXLE1BQU1aLE9BQU9hLElBQUksQ0FBQ0MsV0FBVyxDQUFDQyxNQUFNLENBQUM7WUFDcERDLE9BQU87WUFDUEMsYUFBYTtZQUNiQyxZQUFZO1lBQ1pWLFVBQVU7Z0JBQ1I7b0JBQUVXLE1BQU07b0JBQVVDLFNBQVNYO2dCQUFjO21CQUN0Q0Q7Z0JBQ0g7b0JBQ0VXLE1BQU07b0JBQ05DLFNBQVM7d0JBQ1A7NEJBQUVDLE1BQU07NEJBQVFDLE1BQU07d0JBQVk7d0JBQ2xDOzRCQUNFRCxNQUFNOzRCQUNORSxXQUFXO2dDQUNUQyxLQUFLakI7NEJBQ1A7d0JBQ0Y7cUJBQ0Q7Z0JBQ0g7YUFDRDtRQUNIO1FBQ0FHLFFBQVFDLEdBQUcsQ0FBQ0M7UUFFYixPQUFPYSxTQUFTbkIsSUFBSSxDQUFDTTtJQUN0QixFQUFFLE9BQU9jLE9BQU87UUFDZCxPQUFPRCxTQUFTbkIsSUFBSSxDQUFDO1lBQUVvQixPQUFPO1lBQTBCQyxTQUFTRCxNQUFNRSxPQUFPO1FBQUM7SUFDakY7QUFDRjtBQUVnQiIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL2FwcC9hcGkvcHJvY2Vzc0ltYWdlL3JvdXRlLmpzPzdhYmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE9wZW5BSSBmcm9tICdvcGVuYWknO1xuXG5jb25zdCBvcGVuYWkgPSBuZXcgT3BlbkFJKHsgYXBpS2V5OiAnc2stbnFxRWN1RWUya3BxdzA1Y1N1NnVUM0JsYmtGSkpPNmtMSUNoVXFlYkxZRUd6bzFOJyB9KTtcblxuY29uc3QgUE9TVCA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCBib2R5ID0gYXdhaXQgcmVxLmpzb24oKTtcbiAgY29uc3QgeyBpbWFnZVVybCwgbWVzc2FnZXMgfSA9IGJvZHk7XG4gICAgY29uc3Qgc3lzdGVtTWVzc2FnZSA9IGBcbiAgICBcIlwiXCJcbiAgICBZb3UgYXJlIFNpciBEYXZpZCBBdHRlbmJvcm91Z2guIE5hcnJhdGUgdGhlIHBpY3R1cmUgb2YgdGhlIGh1bWFuIGFzIGlmIGl0IGlzIGEgbmF0dXJlIGRvY3VtZW50YXJ5LlxuICAgIE1ha2UgaXQgc25hcmt5IGFuZCBmdW5ueS4gRG9uJ3QgcmVwZWF0IHlvdXJzZWxmLiBNYWtlIGl0IHNob3J0LiBJZiBJIGRvIGFueXRoaW5nIHJlbW90ZWx5IGludGVyZXN0aW5nLCBtYWtlIGEgYmlnIGRlYWwgYWJvdXQgaXQhXG4gICAgXCJcIlwiXG4gICAgYDtcblxuICAgIHRyeSB7XG4gICAgICBjb25zb2xlLmxvZyhzeXN0ZW1NZXNzYWdlKVxuICAgICAgY29uc29sZS5sb2coXCJTZW5kaW5nIG1lc3NhZ2VzIHRvIE9wZW5BSTpcIiwgbWVzc2FnZXMpO1xuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgb3BlbmFpLmNoYXQuY29tcGxldGlvbnMuY3JlYXRlKHtcbiAgICAgICAgICBtb2RlbDogXCJncHQtNC12aXNpb24tcHJldmlld1wiLFxuICAgICAgICAgIHRlbXBlcmF0dXJlOiAwLjg1LFxuICAgICAgICAgIG1heF90b2tlbnM6IDUwMCxcbiAgICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgICAgeyByb2xlOiBcInN5c3RlbVwiLCBjb250ZW50OiBzeXN0ZW1NZXNzYWdlIH0sXG4gICAgICAgICAgICAuLi5tZXNzYWdlcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcm9sZTogXCJ1c2VyXCIsXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IFtcbiAgICAgICAgICAgICAgICB7IHR5cGU6IFwidGV4dFwiLCB0ZXh0OiBcImhleSB0aGVyZVwiIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdHlwZTogXCJpbWFnZV91cmxcIixcbiAgICAgICAgICAgICAgICAgIGltYWdlX3VybDoge1xuICAgICAgICAgICAgICAgICAgICB1cmw6IGltYWdlVXJsLCAvLyBTZW5kIHRoZSBiYXNlNjQgc3RyaW5nIGFzIHRoZSBpbWFnZSBVUkxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICAgIFxuICAgICAgIHJldHVybiBSZXNwb25zZS5qc29uKHJlc3BvbnNlKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiBSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdFcnJvciBwcm9jZXNzaW5nIGltYWdlJywgZGV0YWlsczogZXJyb3IubWVzc2FnZSB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZXhwb3J0IHsgUE9TVCB9OyJdLCJuYW1lcyI6WyJPcGVuQUkiLCJvcGVuYWkiLCJhcGlLZXkiLCJQT1NUIiwicmVxIiwicmVzIiwiYm9keSIsImpzb24iLCJpbWFnZVVybCIsIm1lc3NhZ2VzIiwic3lzdGVtTWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsImNoYXQiLCJjb21wbGV0aW9ucyIsImNyZWF0ZSIsIm1vZGVsIiwidGVtcGVyYXR1cmUiLCJtYXhfdG9rZW5zIiwicm9sZSIsImNvbnRlbnQiLCJ0eXBlIiwidGV4dCIsImltYWdlX3VybCIsInVybCIsIlJlc3BvbnNlIiwiZXJyb3IiLCJkZXRhaWxzIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/processImage/route.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/formdata-node","vendor-chunks/openai","vendor-chunks/form-data-encoder","vendor-chunks/whatwg-url","vendor-chunks/agentkeepalive","vendor-chunks/tr46","vendor-chunks/node-fetch","vendor-chunks/webidl-conversions","vendor-chunks/web-streams-polyfill","vendor-chunks/ms","vendor-chunks/humanize-ms","vendor-chunks/event-target-shim","vendor-chunks/abort-controller"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2FprocessImage%2Froute&page=%2Fapi%2FprocessImage%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FprocessImage%2Froute.js&appDir=%2FUsers%2Frob%2Fdev%2Froastme%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Frob%2Fdev%2Froastme&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();