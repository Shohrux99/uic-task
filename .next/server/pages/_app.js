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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./i18n.js":
/*!*****************!*\
  !*** ./i18n.js ***!
  \*****************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nfunction _interopRequireWildcard(obj) {\n    if (obj && obj.__esModule) {\n        return obj;\n    } else {\n        var newObj = {};\n        if (obj != null) {\n            for(var key in obj){\n                if (Object.prototype.hasOwnProperty.call(obj, key)) {\n                    var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};\n                    if (desc.get || desc.set) {\n                        Object.defineProperty(newObj, key, desc);\n                    } else {\n                        newObj[key] = obj[key];\n                    }\n                }\n            }\n        }\n        newObj.default = obj;\n        return newObj;\n    }\n}\nmodule.exports = {\n    locales: [\n        \"ru\",\n        \"en\",\n        \"uz\"\n    ],\n    defaultLocale: \"ru\",\n    loadLocaleFrom: (lang, ns)=>Promise.resolve().then(function() {\n            return _interopRequireWildcard(__webpack_require__(\"./src/locales sync recursive ^\\\\.\\\\/.*\\\\/.*\\\\.json$\")(`./${lang}/${ns}.json`));\n        }).then((m)=>m.default\n        )\n    ,\n    pages: {\n        \"*\": [\n            \"common\"\n        ]\n    },\n    localeDetection: false\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pMThuLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxNQUFNLENBQUNDLE9BQU8sR0FBRztJQUNmQyxPQUFPLEVBQUU7UUFBQyxJQUFJO1FBQUUsSUFBSTtRQUFFLElBQUk7S0FBQztJQUMzQkMsYUFBYSxFQUFFLElBQUk7SUFDbkJDLGNBQWMsRUFBRSxDQUFDQyxJQUFJLEVBQUVDLEVBQUUsR0FDdkI7c0hBQU8sR0FBUyxFQUFFRCxJQUFJLENBQUMsQ0FBQyxFQUFFQyxFQUFFLENBQUMsTUFBTSxDQUFDO1VBQUEsQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLENBQUMsR0FBS0EsQ0FBQyxDQUFDQyxPQUFPO1FBQUEsQ0FBQztJQUFBO0lBQzdEQyxLQUFLLEVBQUU7UUFDTCxHQUFHLEVBQUU7WUFBQyxRQUFRO1NBQUM7S0FDaEI7SUFDREMsZUFBZSxFQUFFLEtBQUs7Q0FDdkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anNfdGVtcGxhdGVfZnJvbnRlbmQvLi9pMThuLmpzPzkzOGIiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XG4gIGxvY2FsZXM6IFsncnUnLCAnZW4nLCAndXonXSxcbiAgZGVmYXVsdExvY2FsZTogJ3J1JyxcbiAgbG9hZExvY2FsZUZyb206IChsYW5nLCBucykgPT5cbiAgICBpbXBvcnQoYGxvY2FsZXMvJHtsYW5nfS8ke25zfS5qc29uYCkudGhlbigobSkgPT4gbS5kZWZhdWx0KSxcbiAgcGFnZXM6IHtcbiAgICAnKic6IFsnY29tbW9uJ11cbiAgfSxcbiAgbG9jYWxlRGV0ZWN0aW9uOiBmYWxzZSxcbn1cbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwibG9jYWxlcyIsImRlZmF1bHRMb2NhbGUiLCJsb2FkTG9jYWxlRnJvbSIsImxhbmciLCJucyIsInRoZW4iLCJtIiwiZGVmYXVsdCIsInBhZ2VzIiwibG9jYWxlRGV0ZWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./i18n.js\n");

/***/ }),

/***/ "./src/components/Layout/index.jsx":
/*!*****************************************!*\
  !*** ./src/components/Layout/index.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Layout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Layout({ children  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: children\n    }, void 0, false);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUNBO0FBQWUsU0FBU0EsTUFBTSxDQUFDLEVBQUVDLFFBQVEsR0FBRSxFQUFFO0lBQzNDLHFCQUNFO2tCQUNHQSxRQUFRO3FCQUNSLENBQ0o7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqc190ZW1wbGF0ZV9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL0xheW91dC9pbmRleC5qc3g/ZGIyZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsiTGF5b3V0IiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Layout/index.jsx\n");

/***/ }),

/***/ "./src/mui-theme/index.js":
/*!********************************!*\
  !*** ./src/mui-theme/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);\n// https://mui.com/material-ui/customization/theming/\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.createTheme)({\n    typography: {\n        fontFamily: [\n            \"Inter\"\n        ].join(\",\")\n    },\n    palette: {\n        primary: {\n            // light: will be calculated from palette.primary.main,\n            main: \"#fff\"\n        },\n        secondary: {\n            light: \"#0066ff\",\n            main: \"#0044ff\",\n            // dark: will be calculated from palette.secondary.main,\n            contrastText: \"#ffcc00\"\n        }\n    },\n    components: {\n        MuiButton: {\n            styleOverrides: {\n                root: {\n                    backgroundColor: \"red\",\n                    \"&:hover\": {\n                        color: \"black\"\n                    }\n                }\n            }\n        },\n        MuiContainer: {\n            styleOverrides: {\n                root: {\n                    paddingLeft: \"16px\",\n                    paddingRight: \"16px\",\n                    \"@media (min-width: 600px)\": {\n                        paddingLeft: \"12px\",\n                        paddingRight: \"12px\"\n                    }\n                },\n                maxWidthLg: {\n                    \"@media (min-width: 1440px)\": {\n                        maxWidth: \"1248px\"\n                    },\n                    \"@media (min-width: 1600px)\": {\n                        maxWidth: \"1500px\"\n                    },\n                    \"@media (max-width: 736px)\": {\n                        paddingLeft: \"16px\",\n                        paddingRight: \"16px\"\n                    }\n                }\n            }\n        },\n        MuiPaper: {\n            styleOverrides: {\n                root: {\n                    borderRadius: 8,\n                    filter: \"drop-shadow(0px 0px 45px rgba(0, 0, 0, 0.07))\",\n                    boxShadow: \"none\"\n                }\n            }\n        },\n        MuiTab: {\n            styleOverrides: {\n                root: {\n                    padding: \"8px 12px\",\n                    color: \"#323232\",\n                    height: \"36px\",\n                    minHeight: \"36px\",\n                    borderRadius: \"6px\",\n                    textTransform: \"none\",\n                    fontSize: \"14px\",\n                    lineHeight: \"20px\",\n                    position: \"relative\",\n                    zIndex: 1,\n                    maxWidth: \"none\",\n                    minWidth: \"102px\",\n                    transition: \"all 0.25s ease-in-out\"\n                }\n            }\n        },\n        MuiTabs: {\n            styleOverrides: {\n                root: {\n                    padding: \"4px\",\n                    border: \"1px solid #EDEDED\",\n                    borderRadius: \"8px\",\n                    minHeight: \"44px\"\n                },\n                indicator: {\n                    height: \"36px\",\n                    background: \"#D90506\",\n                    borderRadius: \"6px\"\n                }\n            }\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbXVpLXRoZW1lL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHFEQUFxRDtBQUVWO0FBRTNDLGlFQUFlQSwwREFBVyxDQUFDO0lBQ3pCQyxVQUFVLEVBQUU7UUFDVkMsVUFBVSxFQUFFO1lBQUMsT0FBTztTQUFDLENBQUNDLElBQUksQ0FBQyxHQUFHLENBQUM7S0FDaEM7SUFDREMsT0FBTyxFQUFFO1FBQ1BDLE9BQU8sRUFBRTtZQUNQLHVEQUF1RDtZQUN2REMsSUFBSSxFQUFFLE1BQU07U0FHYjtRQUNEQyxTQUFTLEVBQUU7WUFDVEMsS0FBSyxFQUFFLFNBQVM7WUFDaEJGLElBQUksRUFBRSxTQUFTO1lBQ2Ysd0RBQXdEO1lBQ3hERyxZQUFZLEVBQUUsU0FBUztTQUN4QjtLQUNGO0lBQ0RDLFVBQVUsRUFBRTtRQUNWQyxTQUFTLEVBQUU7WUFDVEMsY0FBYyxFQUFFO2dCQUNkQyxJQUFJLEVBQUU7b0JBQ0pDLGVBQWUsRUFBRSxLQUFLO29CQUN0QixTQUFTLEVBQUU7d0JBQ1RDLEtBQUssRUFBRSxPQUFPO3FCQUNmO2lCQUNGO2FBQ0Y7U0FDRjtRQUNEQyxZQUFZLEVBQUU7WUFDWkosY0FBYyxFQUFFO2dCQUNkQyxJQUFJLEVBQUU7b0JBQ0pJLFdBQVcsRUFBRSxNQUFNO29CQUNuQkMsWUFBWSxFQUFFLE1BQU07b0JBQ3BCLDJCQUEyQixFQUFFO3dCQUMzQkQsV0FBVyxFQUFFLE1BQU07d0JBQ25CQyxZQUFZLEVBQUUsTUFBTTtxQkFDckI7aUJBQ0Y7Z0JBQ0RDLFVBQVUsRUFBRTtvQkFDViw0QkFBNEIsRUFBRTt3QkFDNUJDLFFBQVEsRUFBRSxRQUFRO3FCQUNuQjtvQkFDRCw0QkFBNEIsRUFBRTt3QkFDNUJBLFFBQVEsRUFBRSxRQUFRO3FCQUNuQjtvQkFDRCwyQkFBMkIsRUFBRTt3QkFDM0JILFdBQVcsRUFBRSxNQUFNO3dCQUNuQkMsWUFBWSxFQUFFLE1BQU07cUJBQ3JCO2lCQUNGO2FBQ0Y7U0FDRjtRQUNERyxRQUFRLEVBQUU7WUFDUlQsY0FBYyxFQUFFO2dCQUNkQyxJQUFJLEVBQUU7b0JBQ0pTLFlBQVksRUFBRSxDQUFDO29CQUNmQyxNQUFNLEVBQUUsK0NBQStDO29CQUN2REMsU0FBUyxFQUFFLE1BQU07aUJBQ2xCO2FBQ0Y7U0FDRjtRQUNEQyxNQUFNLEVBQUU7WUFDTmIsY0FBYyxFQUFFO2dCQUNkQyxJQUFJLEVBQUU7b0JBQ0phLE9BQU8sRUFBRSxVQUFVO29CQUNuQlgsS0FBSyxFQUFFLFNBQVM7b0JBQ2hCWSxNQUFNLEVBQUUsTUFBTTtvQkFDZEMsU0FBUyxFQUFFLE1BQU07b0JBQ2pCTixZQUFZLEVBQUUsS0FBSztvQkFDbkJPLGFBQWEsRUFBRSxNQUFNO29CQUNyQkMsUUFBUSxFQUFFLE1BQU07b0JBQ2hCQyxVQUFVLEVBQUUsTUFBTTtvQkFDbEJDLFFBQVEsRUFBRSxVQUFVO29CQUNwQkMsTUFBTSxFQUFFLENBQUM7b0JBQ1RiLFFBQVEsRUFBRSxNQUFNO29CQUNoQmMsUUFBUSxFQUFFLE9BQU87b0JBQ2pCQyxVQUFVLEVBQUUsdUJBQXVCO2lCQUNwQzthQUNGO1NBQ0Y7UUFDREMsT0FBTyxFQUFFO1lBQ1B4QixjQUFjLEVBQUU7Z0JBQ2RDLElBQUksRUFBRTtvQkFDSmEsT0FBTyxFQUFFLEtBQUs7b0JBQ2RXLE1BQU0sRUFBRSxtQkFBbUI7b0JBQzNCZixZQUFZLEVBQUUsS0FBSztvQkFDbkJNLFNBQVMsRUFBRSxNQUFNO2lCQUNsQjtnQkFDRFUsU0FBUyxFQUFFO29CQUNUWCxNQUFNLEVBQUUsTUFBTTtvQkFDZFksVUFBVSxFQUFFLFNBQVM7b0JBQ3JCakIsWUFBWSxFQUFFLEtBQUs7aUJBQ3BCO2FBQ0Y7U0FDRjtLQUNGO0NBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqc190ZW1wbGF0ZV9mcm9udGVuZC8uL3NyYy9tdWktdGhlbWUvaW5kZXguanM/ZWIyNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL211aS5jb20vbWF0ZXJpYWwtdWkvY3VzdG9taXphdGlvbi90aGVtaW5nL1xuXG5pbXBvcnQgeyBjcmVhdGVUaGVtZSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRoZW1lKHtcbiAgdHlwb2dyYXBoeToge1xuICAgIGZvbnRGYW1pbHk6IFsnSW50ZXInXS5qb2luKCcsJylcbiAgfSxcbiAgcGFsZXR0ZToge1xuICAgIHByaW1hcnk6IHtcbiAgICAgIC8vIGxpZ2h0OiB3aWxsIGJlIGNhbGN1bGF0ZWQgZnJvbSBwYWxldHRlLnByaW1hcnkubWFpbixcbiAgICAgIG1haW46ICcjZmZmJ1xuICAgICAgLy8gZGFyazogd2lsbCBiZSBjYWxjdWxhdGVkIGZyb20gcGFsZXR0ZS5wcmltYXJ5Lm1haW4sXG4gICAgICAvLyBjb250cmFzdFRleHQ6IHdpbGwgYmUgY2FsY3VsYXRlZCB0byBjb250cmFzdCB3aXRoIHBhbGV0dGUucHJpbWFyeS5tYWluXG4gICAgfSxcbiAgICBzZWNvbmRhcnk6IHtcbiAgICAgIGxpZ2h0OiAnIzAwNjZmZicsXG4gICAgICBtYWluOiAnIzAwNDRmZicsXG4gICAgICAvLyBkYXJrOiB3aWxsIGJlIGNhbGN1bGF0ZWQgZnJvbSBwYWxldHRlLnNlY29uZGFyeS5tYWluLFxuICAgICAgY29udHJhc3RUZXh0OiAnI2ZmY2MwMCdcbiAgICB9XG4gIH0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBNdWlCdXR0b246IHtcbiAgICAgIHN0eWxlT3ZlcnJpZGVzOiB7XG4gICAgICAgIHJvb3Q6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnLFxuICAgICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgICAgY29sb3I6ICdibGFjaydcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIE11aUNvbnRhaW5lcjoge1xuICAgICAgc3R5bGVPdmVycmlkZXM6IHtcbiAgICAgICAgcm9vdDoge1xuICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMTZweCcsXG4gICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMTZweCcsXG4gICAgICAgICAgJ0BtZWRpYSAobWluLXdpZHRoOiA2MDBweCknOiB7XG4gICAgICAgICAgICBwYWRkaW5nTGVmdDogJzEycHgnLFxuICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMTJweCdcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1heFdpZHRoTGc6IHtcbiAgICAgICAgICAnQG1lZGlhIChtaW4td2lkdGg6IDE0NDBweCknOiB7XG4gICAgICAgICAgICBtYXhXaWR0aDogJzEyNDhweCdcbiAgICAgICAgICB9LFxuICAgICAgICAgICdAbWVkaWEgKG1pbi13aWR0aDogMTYwMHB4KSc6IHtcbiAgICAgICAgICAgIG1heFdpZHRoOiAnMTUwMHB4J1xuICAgICAgICAgIH0sXG4gICAgICAgICAgJ0BtZWRpYSAobWF4LXdpZHRoOiA3MzZweCknOiB7XG4gICAgICAgICAgICBwYWRkaW5nTGVmdDogJzE2cHgnLFxuICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMTZweCdcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIE11aVBhcGVyOiB7XG4gICAgICBzdHlsZU92ZXJyaWRlczoge1xuICAgICAgICByb290OiB7XG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiA4LFxuICAgICAgICAgIGZpbHRlcjogJ2Ryb3Atc2hhZG93KDBweCAwcHggNDVweCByZ2JhKDAsIDAsIDAsIDAuMDcpKScsXG4gICAgICAgICAgYm94U2hhZG93OiAnbm9uZSdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgTXVpVGFiOiB7XG4gICAgICBzdHlsZU92ZXJyaWRlczoge1xuICAgICAgICByb290OiB7XG4gICAgICAgICAgcGFkZGluZzogJzhweCAxMnB4JyxcbiAgICAgICAgICBjb2xvcjogJyMzMjMyMzInLFxuICAgICAgICAgIGhlaWdodDogJzM2cHgnLFxuICAgICAgICAgIG1pbkhlaWdodDogJzM2cHgnLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogJzZweCcsXG4gICAgICAgICAgdGV4dFRyYW5zZm9ybTogJ25vbmUnLFxuICAgICAgICAgIGZvbnRTaXplOiAnMTRweCcsXG4gICAgICAgICAgbGluZUhlaWdodDogJzIwcHgnLFxuICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgIHpJbmRleDogMSxcbiAgICAgICAgICBtYXhXaWR0aDogJ25vbmUnLFxuICAgICAgICAgIG1pbldpZHRoOiAnMTAycHgnLFxuICAgICAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4yNXMgZWFzZS1pbi1vdXQnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIE11aVRhYnM6IHtcbiAgICAgIHN0eWxlT3ZlcnJpZGVzOiB7XG4gICAgICAgIHJvb3Q6IHtcbiAgICAgICAgICBwYWRkaW5nOiAnNHB4JyxcbiAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgI0VERURFRCcsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiAnOHB4JyxcbiAgICAgICAgICBtaW5IZWlnaHQ6ICc0NHB4J1xuICAgICAgICB9LFxuICAgICAgICBpbmRpY2F0b3I6IHtcbiAgICAgICAgICBoZWlnaHQ6ICczNnB4JyxcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAnI0Q5MDUwNicsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNnB4J1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59KVxuIl0sIm5hbWVzIjpbImNyZWF0ZVRoZW1lIiwidHlwb2dyYXBoeSIsImZvbnRGYW1pbHkiLCJqb2luIiwicGFsZXR0ZSIsInByaW1hcnkiLCJtYWluIiwic2Vjb25kYXJ5IiwibGlnaHQiLCJjb250cmFzdFRleHQiLCJjb21wb25lbnRzIiwiTXVpQnV0dG9uIiwic3R5bGVPdmVycmlkZXMiLCJyb290IiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJNdWlDb250YWluZXIiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsIm1heFdpZHRoTGciLCJtYXhXaWR0aCIsIk11aVBhcGVyIiwiYm9yZGVyUmFkaXVzIiwiZmlsdGVyIiwiYm94U2hhZG93IiwiTXVpVGFiIiwicGFkZGluZyIsImhlaWdodCIsIm1pbkhlaWdodCIsInRleHRUcmFuc2Zvcm0iLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJwb3NpdGlvbiIsInpJbmRleCIsIm1pbldpZHRoIiwidHJhbnNpdGlvbiIsIk11aVRhYnMiLCJib3JkZXIiLCJpbmRpY2F0b3IiLCJiYWNrZ3JvdW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/mui-theme/index.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @next-translate-root/i18n */ \"./i18n.js\");\n/* harmony import */ var _next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_translate_appWithI18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-translate/appWithI18n */ \"next-translate/appWithI18n\");\n/* harmony import */ var next_translate_appWithI18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_translate_appWithI18n__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ \"@emotion/react\");\n/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Layout */ \"./src/components/Layout/index.jsx\");\n/* harmony import */ var styles_globals_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styles/globals.scss */ \"./src/styles/globals.scss\");\n/* harmony import */ var styles_globals_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styles_globals_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var mui_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mui-theme */ \"./src/mui-theme/index.js\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/store */ \"./src/store/store.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux-persist/integration/react */ \"redux-persist/integration/react\");\n/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! nextjs-progressbar */ \"nextjs-progressbar\");\n/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(nextjs_progressbar__WEBPACK_IMPORTED_MODULE_10__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react__WEBPACK_IMPORTED_MODULE_3__]);\n_emotion_react__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_8__.Provider, {\n        store: _store_store__WEBPACK_IMPORTED_MODULE_7__.store,\n        children:  false ? /*#__PURE__*/ 0 : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_emotion_react__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {\n            theme: mui_theme__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((nextjs_progressbar__WEBPACK_IMPORTED_MODULE_10___default()), {\n                        color: \"#D90506\",\n                        startPosition: 0.3,\n                        stopDelayMs: 200,\n                        height: 3,\n                        options: {\n                            showSpinner: false\n                        },\n                        showOnShallow: true,\n                        \"z-index\": 4000000,\n                        position: \"absolute\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shohruxbazarbaev/projects/uic_task/src/pages/_app.js\",\n                        lineNumber: 40,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/Users/shohruxbazarbaev/projects/uic_task/src/pages/_app.js\",\n                        lineNumber: 52,\n                        columnNumber: 15\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shohruxbazarbaev/projects/uic_task/src/pages/_app.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/shohruxbazarbaev/projects/uic_task/src/pages/_app.js\",\n            lineNumber: 38,\n            columnNumber: 11\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/shohruxbazarbaev/projects/uic_task/src/pages/_app.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\nconst __Page_Next_Translate__ = MyApp;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_translate_appWithI18n__WEBPACK_IMPORTED_MODULE_2___default()(__Page_Next_Translate__, {\n    ...(_next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1___default()),\n    isLoader: true,\n    skipInitialProps: true\n}));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0k7QUFBb0Q7QUFDRTtBQUVaO0FBQ1I7QUFDVjtBQUNDO0FBQ29CO0FBQ1g7QUFDdUI7QUFDZjtBQUU5QyxTQUFTVSxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQUUsRUFBRTtJQUN2QyxxQkFDRSw4REFBQ0wsaURBQVE7UUFBQ0QsS0FBSyxFQUFFQSwrQ0FBSztrQkFDbkIsTUFBNkIsaUJBQzVCLENBa0JjLGlCQUVaLDhEQUFDSix5REFBYTtZQUFDRSxLQUFLLEVBQUVBLGlEQUFLO3NCQUN6Qiw0RUFBQ0QseURBQU07O2tDQUNMLDhEQUFDTSw0REFBYTt3QkFDWkssS0FBSyxFQUFDLFNBQVM7d0JBQ2ZDLGFBQWEsRUFBRSxHQUFHO3dCQUNsQkMsV0FBVyxFQUFFLEdBQUc7d0JBQ2hCQyxNQUFNLEVBQUUsQ0FBQzt3QkFDVEMsT0FBTyxFQUFFOzRCQUNQQyxXQUFXLEVBQUUsS0FBSzt5QkFDbkI7d0JBQ0RDLGFBQWEsRUFBRSxJQUFJO3dCQUNuQkMsU0FBTyxFQUFFLE9BQU87d0JBQ2hCQyxRQUFRLEVBQUMsVUFBVTs7Ozs7NEJBQ25CO2tDQUNGLDhEQUFDWCxTQUFTO3dCQUFFLEdBQUdDLFNBQVM7Ozs7OzRCQUFJOzs7Ozs7b0JBQ3JCOzs7OztnQkFDSzs7Ozs7WUFFWCxDQUNaO0NBQ0Y7QUFFRCxNQUFNVyx1QkFBdUIsR0FBR2IsS0FBSztBQUdqQyxpRUFBZVQsaUVBQWEsQ0FBQ3NCLHVCQUF1QixFQUFFO0lBQ3BELEdBQUd2QixrRUFBWTtJQUNmd0IsUUFBUSxFQUFFLElBQUk7SUFDZEMsZ0JBQWdCLEVBQUUsSUFBSTtDQUV2QixDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anNfdGVtcGxhdGVfZnJvbnRlbmQvLi9zcmMvcGFnZXMvX2FwcC5qcz84ZmRhIl0sInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCBfX2kxOG5Db25maWcgZnJvbSAnQG5leHQtdHJhbnNsYXRlLXJvb3QvaTE4bidcbiAgICBpbXBvcnQgX19hcHBXaXRoSTE4biBmcm9tICduZXh0LXRyYW5zbGF0ZS9hcHBXaXRoSTE4bidcbiAgICBcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgJ3N0eWxlcy9nbG9iYWxzLnNjc3MnXG5pbXBvcnQgdGhlbWUgZnJvbSAnbXVpLXRoZW1lJ1xuaW1wb3J0IHsgcGVyc2lzdG9yLCBzdG9yZSB9IGZyb20gJy4uL3N0b3JlL3N0b3JlJ1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IFBlcnNpc3RHYXRlIH0gZnJvbSAncmVkdXgtcGVyc2lzdC9pbnRlZ3JhdGlvbi9yZWFjdCdcbmltcG9ydCBOZXh0TlByb2dyZXNzIGZyb20gJ25leHRqcy1wcm9ncmVzc2JhcidcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICB7dHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyAoXG4gICAgICAgIDxQZXJzaXN0R2F0ZSBsb2FkaW5nPXtudWxsfSBwZXJzaXN0b3I9e3BlcnNpc3Rvcn0+XG4gICAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgIDxOZXh0TlByb2dyZXNzXG4gICAgICAgICAgICAgICAgY29sb3I9JyNEOTA1MDYnXG4gICAgICAgICAgICAgICAgc3RhcnRQb3NpdGlvbj17MC4zfVxuICAgICAgICAgICAgICAgIHN0b3BEZWxheU1zPXsyMDB9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXszfVxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e3tcbiAgICAgICAgICAgICAgICAgIHNob3dTcGlubmVyOiBmYWxzZVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgc2hvd09uU2hhbGxvdz17dHJ1ZX1cbiAgICAgICAgICAgICAgICB6LWluZGV4PXs0MDAwMDAwfVxuICAgICAgICAgICAgICAgIHBvc2l0aW9uPSdhYnNvbHV0ZSdcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgICAgICA8L1BlcnNpc3RHYXRlPlxuICAgICAgKSA6IChcbiAgICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgPE5leHROUHJvZ3Jlc3NcbiAgICAgICAgICAgICAgICBjb2xvcj0nI0Q5MDUwNidcbiAgICAgICAgICAgICAgICBzdGFydFBvc2l0aW9uPXswLjN9XG4gICAgICAgICAgICAgICAgc3RvcERlbGF5TXM9ezIwMH1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezN9XG4gICAgICAgICAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgICAgICAgICAgc2hvd1NwaW5uZXI6IGZhbHNlXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBzaG93T25TaGFsbG93PXt0cnVlfVxuICAgICAgICAgICAgICAgIHotaW5kZXg9ezQwMDAwMDB9XG4gICAgICAgICAgICAgICAgcG9zaXRpb249J2Fic29sdXRlJ1xuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgICApfVxuICAgIDwvUHJvdmlkZXI+XG4gIClcbn1cblxuY29uc3QgX19QYWdlX05leHRfVHJhbnNsYXRlX18gPSBNeUFwcFxuXG5cbiAgICBleHBvcnQgZGVmYXVsdCBfX2FwcFdpdGhJMThuKF9fUGFnZV9OZXh0X1RyYW5zbGF0ZV9fLCB7XG4gICAgICAuLi5fX2kxOG5Db25maWcsXG4gICAgICBpc0xvYWRlcjogdHJ1ZSxcbiAgICAgIHNraXBJbml0aWFsUHJvcHM6IHRydWUsXG4gICAgICBcbiAgICB9KTtcbiAgIl0sIm5hbWVzIjpbIl9faTE4bkNvbmZpZyIsIl9fYXBwV2l0aEkxOG4iLCJUaGVtZVByb3ZpZGVyIiwiTGF5b3V0IiwidGhlbWUiLCJwZXJzaXN0b3IiLCJzdG9yZSIsIlByb3ZpZGVyIiwiUGVyc2lzdEdhdGUiLCJOZXh0TlByb2dyZXNzIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJsb2FkaW5nIiwiY29sb3IiLCJzdGFydFBvc2l0aW9uIiwic3RvcERlbGF5TXMiLCJoZWlnaHQiLCJvcHRpb25zIiwic2hvd1NwaW5uZXIiLCJzaG93T25TaGFsbG93Iiwiei1pbmRleCIsInBvc2l0aW9uIiwiX19QYWdlX05leHRfVHJhbnNsYXRlX18iLCJpc0xvYWRlciIsInNraXBJbml0aWFsUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/store/counter/counterSlice.js":
/*!*******************************************!*\
  !*** ./src/store/counter/counterSlice.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"counterSlice\": () => (/* binding */ counterSlice),\n/* harmony export */   \"decrement\": () => (/* binding */ decrement),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"increment\": () => (/* binding */ increment),\n/* harmony export */   \"incrementAsync\": () => (/* binding */ incrementAsync),\n/* harmony export */   \"incrementByAmount\": () => (/* binding */ incrementByAmount),\n/* harmony export */   \"selectCount\": () => (/* binding */ selectCount)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst counterSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"counter\",\n    initialState: {\n        value: 0\n    },\n    reducers: {\n        increment: (state)=>{\n            // Redux Toolkit allows us to write \"mutating\" logic in reducers. It\n            // doesn't actually mutate the state because it uses the Immer library,\n            // which detects changes to a \"draft state\" and produces a brand new\n            // immutable state based off those changes\n            state.value += 1;\n        },\n        decrement: (state)=>{\n            state.value -= 1;\n        },\n        incrementByAmount: (state, action)=>{\n            state.value += action.payload;\n        }\n    }\n});\nconst { increment , decrement , incrementByAmount  } = counterSlice.actions;\n// The function below is called a thunk and allows us to perform async logic. It\n// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This\n// will call the thunk with the `dispatch` function as the first argument. Async\n// code can then be executed and other actions can be dispatched\nconst incrementAsync = (amount)=>(dispatch)=>{\n        setTimeout(()=>{\n            dispatch(incrementByAmount(amount));\n        }, 1000);\n    }\n;\n// The function below is called a selector and allows us to select a value from\n// the state. Selectors can also be defined inline where they're used instead of\n// in the slice file. For example: `useSelector((state) => state.counter.value)`\nconst selectCount = (state)=>{\n    var ref;\n    return (ref = state.counter) === null || ref === void 0 ? void 0 : ref.value;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counterSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvY291bnRlci9jb3VudGVyU2xpY2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQThDO0FBRXZDLE1BQU1DLFlBQVksR0FBR0QsNkRBQVcsQ0FBQztJQUN0Q0UsSUFBSSxFQUFFLFNBQVM7SUFDZkMsWUFBWSxFQUFFO1FBQ1pDLEtBQUssRUFBRSxDQUFDO0tBQ1Q7SUFDREMsUUFBUSxFQUFFO1FBQ1JDLFNBQVMsRUFBRSxDQUFDQyxLQUFLLEdBQUs7WUFDcEIsb0VBQW9FO1lBQ3BFLHVFQUF1RTtZQUN2RSxvRUFBb0U7WUFDcEUsMENBQTBDO1lBQzFDQSxLQUFLLENBQUNILEtBQUssSUFBSSxDQUFDO1NBQ2pCO1FBQ0RJLFNBQVMsRUFBRSxDQUFDRCxLQUFLLEdBQUs7WUFDcEJBLEtBQUssQ0FBQ0gsS0FBSyxJQUFJLENBQUM7U0FDakI7UUFDREssaUJBQWlCLEVBQUUsQ0FBQ0YsS0FBSyxFQUFFRyxNQUFNLEdBQUs7WUFDcENILEtBQUssQ0FBQ0gsS0FBSyxJQUFJTSxNQUFNLENBQUNDLE9BQU87U0FDOUI7S0FDRjtDQUNGLENBQUM7QUFFSyxNQUFNLEVBQUVMLFNBQVMsR0FBRUUsU0FBUyxHQUFFQyxpQkFBaUIsR0FBRSxHQUFHUixZQUFZLENBQUNXLE9BQU87QUFFL0UsZ0ZBQWdGO0FBQ2hGLGdGQUFnRjtBQUNoRixnRkFBZ0Y7QUFDaEYsZ0VBQWdFO0FBQ3pELE1BQU1DLGNBQWMsR0FBRyxDQUFDQyxNQUFNLEdBQUssQ0FBQ0MsUUFBUSxHQUFLO1FBQ3REQyxVQUFVLENBQUMsSUFBTTtZQUNmRCxRQUFRLENBQUNOLGlCQUFpQixDQUFDSyxNQUFNLENBQUMsQ0FBQztTQUNwQyxFQUFFLElBQUksQ0FBQztLQUNUO0FBQUE7QUFFRCwrRUFBK0U7QUFDL0UsZ0ZBQWdGO0FBQ2hGLGdGQUFnRjtBQUN6RSxNQUFNRyxXQUFXLEdBQUcsQ0FBQ1YsS0FBSztRQUFLQSxHQUFhO0lBQWJBLE9BQUFBLENBQUFBLEdBQWEsR0FBYkEsS0FBSyxDQUFDVyxPQUFPLGNBQWJYLEdBQWEsV0FBTyxHQUFwQkEsS0FBQUEsQ0FBb0IsR0FBcEJBLEdBQWEsQ0FBRUgsS0FBSztDQUFBO0FBRTFELGlFQUFlSCxZQUFZLENBQUNrQixPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzX3RlbXBsYXRlX2Zyb250ZW5kLy4vc3JjL3N0b3JlL2NvdW50ZXIvY291bnRlclNsaWNlLmpzP2VhMWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xuXG5leHBvcnQgY29uc3QgY291bnRlclNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiAnY291bnRlcicsXG4gIGluaXRpYWxTdGF0ZToge1xuICAgIHZhbHVlOiAwLFxuICB9LFxuICByZWR1Y2Vyczoge1xuICAgIGluY3JlbWVudDogKHN0YXRlKSA9PiB7XG4gICAgICAvLyBSZWR1eCBUb29sa2l0IGFsbG93cyB1cyB0byB3cml0ZSBcIm11dGF0aW5nXCIgbG9naWMgaW4gcmVkdWNlcnMuIEl0XG4gICAgICAvLyBkb2Vzbid0IGFjdHVhbGx5IG11dGF0ZSB0aGUgc3RhdGUgYmVjYXVzZSBpdCB1c2VzIHRoZSBJbW1lciBsaWJyYXJ5LFxuICAgICAgLy8gd2hpY2ggZGV0ZWN0cyBjaGFuZ2VzIHRvIGEgXCJkcmFmdCBzdGF0ZVwiIGFuZCBwcm9kdWNlcyBhIGJyYW5kIG5ld1xuICAgICAgLy8gaW1tdXRhYmxlIHN0YXRlIGJhc2VkIG9mZiB0aG9zZSBjaGFuZ2VzXG4gICAgICBzdGF0ZS52YWx1ZSArPSAxXG4gICAgfSxcbiAgICBkZWNyZW1lbnQ6IChzdGF0ZSkgPT4ge1xuICAgICAgc3RhdGUudmFsdWUgLT0gMVxuICAgIH0sXG4gICAgaW5jcmVtZW50QnlBbW91bnQ6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBzdGF0ZS52YWx1ZSArPSBhY3Rpb24ucGF5bG9hZFxuICAgIH0sXG4gIH0sXG59KVxuXG5leHBvcnQgY29uc3QgeyBpbmNyZW1lbnQsIGRlY3JlbWVudCwgaW5jcmVtZW50QnlBbW91bnQgfSA9IGNvdW50ZXJTbGljZS5hY3Rpb25zXG5cbi8vIFRoZSBmdW5jdGlvbiBiZWxvdyBpcyBjYWxsZWQgYSB0aHVuayBhbmQgYWxsb3dzIHVzIHRvIHBlcmZvcm0gYXN5bmMgbG9naWMuIEl0XG4vLyBjYW4gYmUgZGlzcGF0Y2hlZCBsaWtlIGEgcmVndWxhciBhY3Rpb246IGBkaXNwYXRjaChpbmNyZW1lbnRBc3luYygxMCkpYC4gVGhpc1xuLy8gd2lsbCBjYWxsIHRoZSB0aHVuayB3aXRoIHRoZSBgZGlzcGF0Y2hgIGZ1bmN0aW9uIGFzIHRoZSBmaXJzdCBhcmd1bWVudC4gQXN5bmNcbi8vIGNvZGUgY2FuIHRoZW4gYmUgZXhlY3V0ZWQgYW5kIG90aGVyIGFjdGlvbnMgY2FuIGJlIGRpc3BhdGNoZWRcbmV4cG9ydCBjb25zdCBpbmNyZW1lbnRBc3luYyA9IChhbW91bnQpID0+IChkaXNwYXRjaCkgPT4ge1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBkaXNwYXRjaChpbmNyZW1lbnRCeUFtb3VudChhbW91bnQpKVxuICB9LCAxMDAwKVxufVxuXG4vLyBUaGUgZnVuY3Rpb24gYmVsb3cgaXMgY2FsbGVkIGEgc2VsZWN0b3IgYW5kIGFsbG93cyB1cyB0byBzZWxlY3QgYSB2YWx1ZSBmcm9tXG4vLyB0aGUgc3RhdGUuIFNlbGVjdG9ycyBjYW4gYWxzbyBiZSBkZWZpbmVkIGlubGluZSB3aGVyZSB0aGV5J3JlIHVzZWQgaW5zdGVhZCBvZlxuLy8gaW4gdGhlIHNsaWNlIGZpbGUuIEZvciBleGFtcGxlOiBgdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jb3VudGVyLnZhbHVlKWBcbmV4cG9ydCBjb25zdCBzZWxlY3RDb3VudCA9IChzdGF0ZSkgPT4gc3RhdGUuY291bnRlcj8udmFsdWVcblxuZXhwb3J0IGRlZmF1bHQgY291bnRlclNsaWNlLnJlZHVjZXJcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImNvdW50ZXJTbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJ2YWx1ZSIsInJlZHVjZXJzIiwiaW5jcmVtZW50Iiwic3RhdGUiLCJkZWNyZW1lbnQiLCJpbmNyZW1lbnRCeUFtb3VudCIsImFjdGlvbiIsInBheWxvYWQiLCJhY3Rpb25zIiwiaW5jcmVtZW50QXN5bmMiLCJhbW91bnQiLCJkaXNwYXRjaCIsInNldFRpbWVvdXQiLCJzZWxlY3RDb3VudCIsImNvdW50ZXIiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/counter/counterSlice.js\n");

/***/ }),

/***/ "./src/store/store.js":
/*!****************************!*\
  !*** ./src/store/store.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"persistor\": () => (/* binding */ persistor),\n/* harmony export */   \"store\": () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-persist */ \"redux-persist\");\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-persist/lib/storage */ \"redux-persist/lib/storage\");\n/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _counter_counterSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./counter/counterSlice */ \"./src/store/counter/counterSlice.js\");\n\n\n\n\n\nconst persistConfig = {\n    key: \"root\",\n    version: 1,\n    storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3___default())\n};\nconst rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({\n    counter: (0,redux_persist__WEBPACK_IMPORTED_MODULE_2__.persistReducer)(persistConfig, _counter_counterSlice__WEBPACK_IMPORTED_MODULE_4__[\"default\"])\n});\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: rootReducer,\n    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({\n            serializableCheck: {\n                ignoredActions: [\n                    redux_persist__WEBPACK_IMPORTED_MODULE_2__.FLUSH,\n                    redux_persist__WEBPACK_IMPORTED_MODULE_2__.REHYDRATE,\n                    redux_persist__WEBPACK_IMPORTED_MODULE_2__.PAUSE,\n                    redux_persist__WEBPACK_IMPORTED_MODULE_2__.PERSIST,\n                    redux_persist__WEBPACK_IMPORTED_MODULE_2__.PURGE,\n                    redux_persist__WEBPACK_IMPORTED_MODULE_2__.REGISTER\n                ]\n            }\n        })\n});\nlet persistor = (0,redux_persist__WEBPACK_IMPORTED_MODULE_2__.persistStore)(store);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvc3RvcmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDVjtBQVVqQjtBQUN5QjtBQUNFO0FBRWpELE1BQU1ZLGFBQWEsR0FBRztJQUNwQkMsR0FBRyxFQUFFLE1BQU07SUFDWEMsT0FBTyxFQUFFLENBQUM7SUFDVkosT0FBTztDQUNSO0FBRUQsTUFBTUssV0FBVyxHQUFHZCxzREFBZSxDQUFDO0lBQ2xDZSxPQUFPLEVBQUViLDZEQUFjLENBQUNTLGFBQWEsRUFBRUQsNkRBQVksQ0FBQztDQUNyRCxDQUFDO0FBRUssTUFBTU0sS0FBSyxHQUFHakIsZ0VBQWMsQ0FBQztJQUNsQ2tCLE9BQU8sRUFBRUgsV0FBVztJQUNwQkksVUFBVSxFQUFFLENBQUNDLG9CQUFvQixHQUMvQkEsb0JBQW9CLENBQUM7WUFDbkJDLGlCQUFpQixFQUFFO2dCQUNqQkMsY0FBYyxFQUFFO29CQUFDbEIsZ0RBQUs7b0JBQUVDLG9EQUFTO29CQUFFQyxnREFBSztvQkFBRUMsa0RBQU87b0JBQUVDLGdEQUFLO29CQUFFQyxtREFBUTtpQkFBQzthQUNwRTtTQUNGLENBQUM7Q0FDTCxDQUFDO0FBRUssSUFBSWMsU0FBUyxHQUFHckIsMkRBQVksQ0FBQ2UsS0FBSyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzX3RlbXBsYXRlX2Zyb250ZW5kLy4vc3JjL3N0b3JlL3N0b3JlLmpzP2VlZmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQge1xuICBwZXJzaXN0U3RvcmUsXG4gIHBlcnNpc3RSZWR1Y2VyLFxuICBGTFVTSCxcbiAgUkVIWURSQVRFLFxuICBQQVVTRSxcbiAgUEVSU0lTVCxcbiAgUFVSR0UsXG4gIFJFR0lTVEVSLFxufSBmcm9tICdyZWR1eC1wZXJzaXN0J1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSAncmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZSdcbmltcG9ydCBjb3VudGVyU2xpY2UgZnJvbSAnLi9jb3VudGVyL2NvdW50ZXJTbGljZSdcblxuY29uc3QgcGVyc2lzdENvbmZpZyA9IHtcbiAga2V5OiAncm9vdCcsXG4gIHZlcnNpb246IDEsXG4gIHN0b3JhZ2UsXG59XG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgY291bnRlcjogcGVyc2lzdFJlZHVjZXIocGVyc2lzdENvbmZpZywgY291bnRlclNsaWNlKSxcbn0pXG5cbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcbiAgcmVkdWNlcjogcm9vdFJlZHVjZXIsXG4gIG1pZGRsZXdhcmU6IChnZXREZWZhdWx0TWlkZGxld2FyZSkgPT5cbiAgICBnZXREZWZhdWx0TWlkZGxld2FyZSh7XG4gICAgICBzZXJpYWxpemFibGVDaGVjazoge1xuICAgICAgICBpZ25vcmVkQWN0aW9uczogW0ZMVVNILCBSRUhZRFJBVEUsIFBBVVNFLCBQRVJTSVNULCBQVVJHRSwgUkVHSVNURVJdLFxuICAgICAgfSxcbiAgICB9KSxcbn0pXG5cbmV4cG9ydCBsZXQgcGVyc2lzdG9yID0gcGVyc2lzdFN0b3JlKHN0b3JlKVxuIl0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwiY29tYmluZVJlZHVjZXJzIiwicGVyc2lzdFN0b3JlIiwicGVyc2lzdFJlZHVjZXIiLCJGTFVTSCIsIlJFSFlEUkFURSIsIlBBVVNFIiwiUEVSU0lTVCIsIlBVUkdFIiwiUkVHSVNURVIiLCJzdG9yYWdlIiwiY291bnRlclNsaWNlIiwicGVyc2lzdENvbmZpZyIsImtleSIsInZlcnNpb24iLCJyb290UmVkdWNlciIsImNvdW50ZXIiLCJzdG9yZSIsInJlZHVjZXIiLCJtaWRkbGV3YXJlIiwiZ2V0RGVmYXVsdE1pZGRsZXdhcmUiLCJzZXJpYWxpemFibGVDaGVjayIsImlnbm9yZWRBY3Rpb25zIiwicGVyc2lzdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/store.js\n");

/***/ }),

/***/ "./src/styles/globals.scss":
/*!*********************************!*\
  !*** ./src/styles/globals.scss ***!
  \*********************************/
/***/ (() => {



/***/ }),

/***/ "./src/locales sync recursive ^\\.\\/.*\\/.*\\.json$":
/*!**********************************************!*\
  !*** ./src/locales/ sync ^\.\/.*\/.*\.json$ ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./en/common.json": "./src/locales/en/common.json",
	"./ru/common.json": "./src/locales/ru/common.json",
	"./uz/common.json": "./src/locales/uz/common.json"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/locales sync recursive ^\\.\\/.*\\/.*\\.json$";

/***/ }),

/***/ "@mui/material":
/*!********************************!*\
  !*** external "@mui/material" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "next-translate/appWithI18n":
/*!*********************************************!*\
  !*** external "next-translate/appWithI18n" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-translate/appWithI18n");

/***/ }),

/***/ "nextjs-progressbar":
/*!*************************************!*\
  !*** external "nextjs-progressbar" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("nextjs-progressbar");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist");

/***/ }),

/***/ "redux-persist/integration/react":
/*!**************************************************!*\
  !*** external "redux-persist/integration/react" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist/integration/react");

/***/ }),

/***/ "redux-persist/lib/storage":
/*!********************************************!*\
  !*** external "redux-persist/lib/storage" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@emotion/react");;

/***/ }),

/***/ "./src/locales/en/common.json":
/*!************************************!*\
  !*** ./src/locales/en/common.json ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"searchFlight":"Search flights","searchHotels":"Search hotels","languages":"Languages","helpingOthers":"Helping others","liveAndTravel":"Live and travel","offer":"Special offers according to your plan","flights":"Flights","hotels":"Hotels","showreys":"Show flights","planTrip":"Plan your perfect trip","searchdests":"Search for flights and rental locations in our most popular destinations","showAll":"Show all","flying":"Flying","searchFlights":"Search for flights and rental locations in our most popular destinations","findHotels":"Find hotels and rentals in our most popular destinations","showHotels":"Show Hotels","showFlights":"Show Flights","ourNews":"Our news","feedbacks":"Feedbacks","peopleSay":"What people say about us","noFeedbacks":"No Feedbacks","subscribeNewsletter":"Subscribe to newsletter","travel":"Travel","getInspired":"Get inspired! Get discounts on trips, tips and stories.","yourPhoneNumber":"Your phone number","subscribe":"Subscribe","socialNetwork":"Social network","company":"Company","tours":"Tours","news":"News","aboutUs":"About us","from":"from","moreInfo":"More info","apply":"Apply","gallery":"Gallery","latestNews":"Latest news","phoneNumber":"Phone number","mail":"Mail","address":"Address","customerReviews":"Customer Reviews","specialOffers":"Special offers according to your plan","letsGoTogether":"Let\'s go together","discoverWithUs":"Discover the latest offers and news and start planning your next trip with us.","faillInLove":"Fall in love with travel","areYou":"Are you going somewhere to celebrate this season? Are you going whether you are home or wandering somewhere, we have travel tools to help you get to your destination.","makeTravel":"Make your travel wish list, we\'ll do the rest","success":"Success","index":"Main page","close":"Close"}');

/***/ }),

/***/ "./src/locales/ru/common.json":
/*!************************************!*\
  !*** ./src/locales/ru/common.json ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"searchFlight":"Найти полёты","searchHotels":"Найти отелы","languages":"Язык","helpingOthers":"Помогая другим","liveAndTravel":"Жить и путешествовать","offer":"Специальные предложения в соответствии с вашим планом","flights":"Полёты","hotels":"Гостницы","showreys":"Показать рейсы","planTrip":"Спланируйте идеальное путешествие","searchdests":"Поиск рейсов и мест Аренда по нашим самым популярным направлениям","showAll":"Показать все","flying":"Полёты","searchFlights":"Поиск рейсов и мест Аренда по нашим самым популярным направлениям","findHotels":"Поиск отелей и мест аренды в наших самых популярных направлениях","showHotels":"Показать отели","showFlights":"Показать рейсы","ourNews":"Наши новости","feedbacks":"Отзывы","peopleSay":"Что люди говорят о нас","noFeedbacks":"Нет отзывов","subscribeNewsletter":"Подписаться на рассылку","travel":"Путешествие","getInspired":"Вдохновиться! Получайте скидки на поездки, советы и истории из жизни.","yourPhoneNumber":"Ваш телефон номер","subscribe":"Подписаться","socialNetwork":"Соц.сети","company":"Компания","tours":"Туры","news":"Новости","aboutUs":"О нас","from":"от","moreInfo":"Подробнее","apply":"Подать заявку","gallery":"Галерея","latestNews":"Последние новости","phoneNumber":"Телефон номер","mail":"Почта","address":"Адрес","customerReviews":"Отзывы клиентов","specialOffers":"Специальные предложения по вашему плану","letsGoTogether":"Пойдем вместе","discoverWithUs":"Узнайте о последних предложениях и новостях и начните планировать свою следующую поездку вместе с нами.","faillInLove":"Влюбиться в путешествия","areYou":"Собираетесь ли вы куда-нибудь отпраздновать этот сезон? Собираетесь ли вы, находитесь ли вы дома или бродите где-то, у нас есть инструменты для путешествий, которые помогут вам добраться до места назначения.","makeTravel":"Составьте свой список желаний для путешествий, мы сделаем все остальное","success":"Успешно","index":"Главная страница","close":"Закрыть"}');

/***/ }),

/***/ "./src/locales/uz/common.json":
/*!************************************!*\
  !*** ./src/locales/uz/common.json ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"searchFlight":"Parvozlarni qidirish","searchHotels":"Mehmonxonalarni qidirish","languages":"Til","helpingOthers":"Boshqalarga yordam berish","liveAndTravel":"Yasha va sayohat qil","offer":"Sizning rejangizga muvofiq maxsus takliflar","flights":"Parvozlar","hotels":"Mehmonxonalar","showreys":"Parvozlarni ko\'rsatish","planTrip":"Mukammal sayohatingizni rejalashtiring","searchdests":"Bizning eng mashhur yo\'nalishlarimizda parvozlar va ijara joylarini qidiring","showAll":"Barchasini ko\'rsatish","searchFlights":"Bizning eng mashhur yo\'nalishlarimizda parvozlar va ijara joylarini qidiring","flying":"Parvozlar","findHotels":"Bizning eng mashhur yo\'nalishlarimizda mehmonxonalar va ijaralarni toping","showHotels":"Mehmonxonalarni ko\'rsatish","showFlights":"Parvozlarni ko\'rsatish","ourNews":"Bizning yangiliklar","feedbacks":"Fikr-mulohazalar","peopleSay":"Odamlar biz haqimizda nima deyishadi","noFeedbacks":"Fikr-mulohaza yo\'q","subscribeNewsletter":"Axborot byulleteniga obuna bo\'ling","travel":"Sayohat","getInspired":"Ilhom oling! Sayohatlar, maslahatlar va hikoyalar uchun chegirmalarga ega bo\'ling.","yourPhoneNumber":"Sizning telefon raqamingiz","subscribe":"Obuna bo\'lish","socialNetwork":"Ijtimoiy tarmoqlar","company":"Kompaniya","tours":"Sayohatlar","news":"Yangiliklar","aboutUs":"Biz haqimizda","from":"dan","moreInfo":"Batafsil","apply":"Murojaat qilish","gallery":"Galereya","latestNews":"Oxirgi yangiliklar","phoneNumber":"Telefon raqam","mail":"Pochta","address":"Manzil","customerReviews":"Mijozlarning sharhlari","specialOffers":"Sizning rejangizga muvofiq maxsus takliflar\\n","letsGoTogether":"Keling, birga boraylik","discoverWithUs":"Eng so\'nggi takliflar va yangiliklarni bilib oling va biz bilan keyingi sayohatingizni rejalashtirishni boshlang.","faillInLove":"Sayohatga oshiq bo\'ling","areYou":"Bu mavsumni nishonlash uchun biror joyga borasizmi? Uyda bo\'lasizmi yoki biror joyda sayr qilyapsizmi, bizda manzilingizga yetib borishga yordam beradigan sayohat vositalari mavjud.","makeTravel":"Sayohat istaklaringiz ro\'yxatini tuzing, qolganini biz qilamiz","success":"Muvaffaqiyatli","index":"Asosiy sahifa","close":"Yopish"}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();