"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/ChatContainer.js":
/*!*************************************!*\
  !*** ./components/ChatContainer.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_steven_dev_sei_projects_project4_zoom_slack_client_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _Users_steven_dev_sei_projects_project4_zoom_slack_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_steven_dev_sei_projects_project4_zoom_slack_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_steven_dev_sei_projects_project4_zoom_slack_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_steven_dev_sei_projects_project4_zoom_slack_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_ChatContainer_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/ChatContainer.module.css */ \"./styles/ChatContainer.module.css\");\n/* harmony import */ var _styles_ChatContainer_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_ChatContainer_module_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _CreateMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CreateMessage */ \"./components/CreateMessage.js\");\n/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Message */ \"./components/Message.js\");\n/* harmony import */ var _seed__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../seed */ \"./seed.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _Room__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Room */ \"./components/Room.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/steven/dev/sei/projects/project4/zoom-slack/client/components/ChatContainer.js\",\n    _this = undefined,\n    _s2 = $RefreshSig$();\n\n\n\n\n\n\n\n\n // const ChatContainer = ({socket, user, channel}) => {\n//     const [newMessage, setNewMessage] = useState('')\n//     const elementRef = useRef()\n//     const ScrollToBot = () => {\n//         useEffect(() => elementRef.current.scrollIntoView())\n//         return <div ref={elementRef} />\n//     }\n//     const sendMessage = async (e) => {\n//         e.preventDefault()\n//         if (newMessage !== '') {\n//             const currentDate = new Date()\n//             const messageData = {\n//                 user_name: user,\n//                 room: channel,\n//                 body: newMessage,\n//                 date: currentDate.toLocaleDateString(),\n//                 time: currentDate.getHours() + \":\" + currentDate.getMinutes() + \":\" + currentDate.getSeconds()\n//             }\n//             await socket.emit('send', messageData)\n//             setChats(current => [...current, messageData])\n//         }\n//         e.target.body.value = ''\n//         setNewMessage('')\n//     }\n//     const [chats, setChats] = useState([])\n//     const [loading, setLoading] = useState(true)\n//     const fetchData = async (channel) => {\n//         setLoading(true)\n//         let response = await axios(`http://localhost:3001/messages/${channel}`)\n//         console.log(response.data)\n//         setChats(current => [...current, response.data])\n//         setLoading(false)\n//     }\n//     useEffect(()=> {\n//         fetchData(channel)\n//         setLoading(false)\n//     }, [channel])\n//     const text = (e) => {\n//         setNewMessage(e.target.value)\n//     }\n//     useEffect(() => {\n//         socket.on('receive', msg => {\n//             setChats(current => [...current, msg])\n//         })\n//     }, [socket])\n//     return (\n//         <div className={chatContainerStyles.chatcontainer}>\n//             <h2>{channel}</h2>\n//             <div className={chatContainerStyles['chatcontainer-messages']} id='chat-msg-container'>\n//                 {console.log(chats)}\n//                 {!loading? chats.map(chat => chat.channel === channel ? <Message chat={chat} key={chat.body} /> : '<p>no messages</p>') : <p>loading...</p>}\n//                 <ScrollToBot />\n//             </div>\n//             <CreateMessage ScrollToBot={ScrollToBot} handleSubmit={sendMessage} text={text} />\n//         </div>\n//     )\n// }\n// export default ChatContainer\n\nvar ChatContainer = function ChatContainer(_ref) {\n  _s2();\n\n  var _s = $RefreshSig$();\n\n  var socket = _ref.socket,\n      user = _ref.user,\n      channel = _ref.channel,\n      userId = _ref.userId;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),\n      chats = _useState[0],\n      setChats = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),\n      newMessage = _useState2[0],\n      setNewMessage = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({}),\n      userInfo = _useState3[0],\n      setUserInfo = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true),\n      loading = _useState4[0],\n      isLoading = _useState4[1];\n\n  var elementRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();\n\n  var ScrollToBot = function ScrollToBot() {\n    _s();\n\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {\n      return elementRef.current.scrollIntoView();\n    });\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      ref: elementRef\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 16\n    }, _this);\n  };\n\n  _s(ScrollToBot, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n  var fetchData = /*#__PURE__*/function () {\n    var _ref2 = (0,_Users_steven_dev_sei_projects_project4_zoom_slack_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/_Users_steven_dev_sei_projects_project4_zoom_slack_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(channel) {\n      var response;\n      return _Users_steven_dev_sei_projects_project4_zoom_slack_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return axios__WEBPACK_IMPORTED_MODULE_8___default()(\"https://zoom-slack.herokuapp.com/messages/\".concat(channel));\n\n            case 2:\n              response = _context.sent;\n              console.log(response.data);\n              setChats(response.data);\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function fetchData(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var fetchUserData = /*#__PURE__*/function () {\n    var _ref3 = (0,_Users_steven_dev_sei_projects_project4_zoom_slack_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/_Users_steven_dev_sei_projects_project4_zoom_slack_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(userId) {\n      var response;\n      return _Users_steven_dev_sei_projects_project4_zoom_slack_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return axios__WEBPACK_IMPORTED_MODULE_8___default().get(\"https://zoom-slack.herokuapp.com/userInfo/\".concat(userId));\n\n            case 2:\n              response = _context2.sent;\n              setUserInfo(response.data[0]);\n              console.log(response.data[0]);\n\n            case 5:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function fetchUserData(_x2) {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {\n    fetchData(channel);\n  }, [channel]);\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {\n    fetchUserData(userId);\n  }, [userId]);\n\n  var text = function text(e) {\n    setNewMessage(e.target.value);\n  };\n\n  var sendMessage = /*#__PURE__*/function () {\n    var _ref4 = (0,_Users_steven_dev_sei_projects_project4_zoom_slack_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/_Users_steven_dev_sei_projects_project4_zoom_slack_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3(e) {\n      var currentDate, messageData;\n      return _Users_steven_dev_sei_projects_project4_zoom_slack_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              e.preventDefault();\n\n              if (!(newMessage !== '')) {\n                _context3.next = 10;\n                break;\n              }\n\n              currentDate = new Date();\n              messageData = {\n                user_id: userId,\n                user_name: userInfo.user_name,\n                user_avatar: userInfo.user_avatar,\n                body: newMessage,\n                channel: channel,\n                date: currentDate.toLocaleDateString(),\n                time: currentDate.getHours() + \":\" + currentDate.getMinutes() + \":\" + currentDate.getSeconds()\n              };\n              console.log(userInfo);\n              console.log(newMessage);\n              _context3.next = 8;\n              return socket.emit('send', messageData);\n\n            case 8:\n              setChats(function (current) {\n                return [].concat((0,_Users_steven_dev_sei_projects_project4_zoom_slack_client_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(current), [messageData]);\n              }); // axios.post('http://localhost:3001/messages',{\n\n              axios__WEBPACK_IMPORTED_MODULE_8___default().post('https://zoom-slack.herokuapp.com/messages', {\n                data: messageData\n              });\n\n            case 10:\n              e.target.body.value = '';\n              setNewMessage('');\n\n            case 12:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3);\n    }));\n\n    return function sendMessage(_x3) {\n      return _ref4.apply(this, arguments);\n    };\n  }();\n\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {\n    socket.on('receive', function (msg) {\n      setChats(function (current) {\n        return [].concat((0,_Users_steven_dev_sei_projects_project4_zoom_slack_client_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(current), [msg]);\n      });\n    });\n  }, [socket]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_ChatContainer_module_css__WEBPACK_IMPORTED_MODULE_10___default().chatcontainer),\n    children: channel != 'Video' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        children: channel\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 156,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        children: userInfo.user_name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 157,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_ChatContainer_module_css__WEBPACK_IMPORTED_MODULE_10___default()[\"chatcontainer-messages\"]),\n        id: \"chat-msg-container\",\n        children: [chats.map(function (chat) {\n          return chat.channel === channel ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Message__WEBPACK_IMPORTED_MODULE_6__.default, {\n            chat: chat\n          }, chat.time, false, {\n            fileName: _jsxFileName,\n            lineNumber: 159,\n            columnNumber: 63\n          }, _this) : null;\n        }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ScrollToBot, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 160,\n          columnNumber: 17\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 158,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CreateMessage__WEBPACK_IMPORTED_MODULE_5__.default, {\n        user: user,\n        ScrollToBot: ScrollToBot,\n        handleSubmit: sendMessage,\n        text: text\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 162,\n        columnNumber: 13\n      }, _this)]\n    }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Room__WEBPACK_IMPORTED_MODULE_9__.default, {\n      channel: \"video\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 165,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 153,\n    columnNumber: 9\n  }, _this);\n};\n\n_s2(ChatContainer, \"ZdATgvuN2Dk++1yfRyfF+7vbtN4=\");\n\n_c = ChatContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatContainer);\n\nvar _c;\n\n$RefreshReg$(_c, \"ChatContainer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBbEU7QUFBQSxtQkFDS1ksS0FBSyxDQUFDMkMsR0FBTixDQUFVLFVBQUFDLElBQUk7QUFBQSxpQkFBSUEsSUFBSSxDQUFDOUMsT0FBTCxLQUFpQkEsT0FBakIsZ0JBQTJCLDhEQUFDLDZDQUFEO0FBQVMsZ0JBQUksRUFBRThDO0FBQWYsYUFBMEJBLElBQUksQ0FBQ1YsSUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBM0IsR0FBcUUsSUFBekU7QUFBQSxTQUFkLENBREwsZUFFSSw4REFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEEsZUFPQSw4REFBQyxtREFBRDtBQUFlLFlBQUksRUFBRXJDLElBQXJCO0FBQTJCLG1CQUFXLEVBQUVZLFdBQXhDO0FBQXFELG9CQUFZLEVBQUVjLFdBQW5FO0FBQWdGLFlBQUksRUFBRUo7QUFBdEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBBO0FBQUEsb0JBREgsZ0JBV0QsOERBQUMsMENBQUQ7QUFBTSxhQUFPLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWkE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBaUJILENBeEZEOztJQUFNeEI7O0tBQUFBO0FBMEZOLCtEQUFlQSxhQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2hhdENvbnRhaW5lci5qcz9mZjQyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNoYXRDb250YWluZXJTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0NoYXRDb250YWluZXIubW9kdWxlLmNzcydcbmltcG9ydCBDcmVhdGVNZXNzYWdlIGZyb20gJy4vQ3JlYXRlTWVzc2FnZSdcbmltcG9ydCBNZXNzYWdlIGZyb20gJy4vTWVzc2FnZSdcbmltcG9ydCBjaGF0RGF0YSBmcm9tICcuLi9zZWVkJ1xuaW1wb3J0IG1lc3NhZ2VTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL01lc3NhZ2UubW9kdWxlLmNzcydcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBSb29tIGZyb20gJy4vUm9vbSdcblxuXG4vLyBjb25zdCBDaGF0Q29udGFpbmVyID0gKHtzb2NrZXQsIHVzZXIsIGNoYW5uZWx9KSA9PiB7XG4gICAgXG4vLyAgICAgY29uc3QgW25ld01lc3NhZ2UsIHNldE5ld01lc3NhZ2VdID0gdXNlU3RhdGUoJycpXG4vLyAgICAgY29uc3QgZWxlbWVudFJlZiA9IHVzZVJlZigpXG5cbi8vICAgICBjb25zdCBTY3JvbGxUb0JvdCA9ICgpID0+IHtcbi8vICAgICAgICAgdXNlRWZmZWN0KCgpID0+IGVsZW1lbnRSZWYuY3VycmVudC5zY3JvbGxJbnRvVmlldygpKVxuLy8gICAgICAgICByZXR1cm4gPGRpdiByZWY9e2VsZW1lbnRSZWZ9IC8+XG4vLyAgICAgfVxuXG4vLyAgICAgY29uc3Qgc2VuZE1lc3NhZ2UgPSBhc3luYyAoZSkgPT4ge1xuLy8gICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbi8vICAgICAgICAgaWYgKG5ld01lc3NhZ2UgIT09ICcnKSB7XG4vLyAgICAgICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKClcbi8vICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VEYXRhID0ge1xuLy8gICAgICAgICAgICAgICAgIHVzZXJfbmFtZTogdXNlcixcbi8vICAgICAgICAgICAgICAgICByb29tOiBjaGFubmVsLFxuLy8gICAgICAgICAgICAgICAgIGJvZHk6IG5ld01lc3NhZ2UsXG4vLyAgICAgICAgICAgICAgICAgZGF0ZTogY3VycmVudERhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCksXG4vLyAgICAgICAgICAgICAgICAgdGltZTogY3VycmVudERhdGUuZ2V0SG91cnMoKSArIFwiOlwiICsgY3VycmVudERhdGUuZ2V0TWludXRlcygpICsgXCI6XCIgKyBjdXJyZW50RGF0ZS5nZXRTZWNvbmRzKClcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIGF3YWl0IHNvY2tldC5lbWl0KCdzZW5kJywgbWVzc2FnZURhdGEpXG4vLyAgICAgICAgICAgICBzZXRDaGF0cyhjdXJyZW50ID0+IFsuLi5jdXJyZW50LCBtZXNzYWdlRGF0YV0pXG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgZS50YXJnZXQuYm9keS52YWx1ZSA9ICcnXG4vLyAgICAgICAgIHNldE5ld01lc3NhZ2UoJycpXG4vLyAgICAgfVxuXG4vLyAgICAgY29uc3QgW2NoYXRzLCBzZXRDaGF0c10gPSB1c2VTdGF0ZShbXSlcbi8vICAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuXG4vLyAgICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKGNoYW5uZWwpID0+IHtcbi8vICAgICAgICAgc2V0TG9hZGluZyh0cnVlKVxuLy8gICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyhgaHR0cDovL2xvY2FsaG9zdDozMDAxL21lc3NhZ2VzLyR7Y2hhbm5lbH1gKVxuLy8gICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxuLy8gICAgICAgICBzZXRDaGF0cyhjdXJyZW50ID0+IFsuLi5jdXJyZW50LCByZXNwb25zZS5kYXRhXSlcbi8vICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbi8vICAgICB9XG5cbi8vICAgICB1c2VFZmZlY3QoKCk9PiB7XG4vLyAgICAgICAgIGZldGNoRGF0YShjaGFubmVsKVxuLy8gICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuLy8gICAgIH0sIFtjaGFubmVsXSlcblxuLy8gICAgIGNvbnN0IHRleHQgPSAoZSkgPT4ge1xuLy8gICAgICAgICBzZXROZXdNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKVxuLy8gICAgIH1cblxuLy8gICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4vLyAgICAgICAgIHNvY2tldC5vbigncmVjZWl2ZScsIG1zZyA9PiB7XG4vLyAgICAgICAgICAgICBzZXRDaGF0cyhjdXJyZW50ID0+IFsuLi5jdXJyZW50LCBtc2ddKVxuLy8gICAgICAgICB9KVxuLy8gICAgIH0sIFtzb2NrZXRdKVxuXG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NoYXRDb250YWluZXJTdHlsZXMuY2hhdGNvbnRhaW5lcn0+XG4vLyAgICAgICAgICAgICA8aDI+e2NoYW5uZWx9PC9oMj5cbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjaGF0Q29udGFpbmVyU3R5bGVzWydjaGF0Y29udGFpbmVyLW1lc3NhZ2VzJ119IGlkPSdjaGF0LW1zZy1jb250YWluZXInPlxuLy8gICAgICAgICAgICAgICAgIHtjb25zb2xlLmxvZyhjaGF0cyl9XG4vLyAgICAgICAgICAgICAgICAgeyFsb2FkaW5nPyBjaGF0cy5tYXAoY2hhdCA9PiBjaGF0LmNoYW5uZWwgPT09IGNoYW5uZWwgPyA8TWVzc2FnZSBjaGF0PXtjaGF0fSBrZXk9e2NoYXQuYm9keX0gLz4gOiAnPHA+bm8gbWVzc2FnZXM8L3A+JykgOiA8cD5sb2FkaW5nLi4uPC9wPn1cbi8vICAgICAgICAgICAgICAgICA8U2Nyb2xsVG9Cb3QgLz5cbi8vICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgICAgPENyZWF0ZU1lc3NhZ2UgU2Nyb2xsVG9Cb3Q9e1Njcm9sbFRvQm90fSBoYW5kbGVTdWJtaXQ9e3NlbmRNZXNzYWdlfSB0ZXh0PXt0ZXh0fSAvPlxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICApXG4vLyB9XG5cbi8vIGV4cG9ydCBkZWZhdWx0IENoYXRDb250YWluZXJcblxuXG5jb25zdCBDaGF0Q29udGFpbmVyID0gKHtzb2NrZXQsIHVzZXIsIGNoYW5uZWwsIHVzZXJJZH0pID0+IHtcblxuICAgIGNvbnN0IFtjaGF0cywgc2V0Q2hhdHNdID0gdXNlU3RhdGUoW10pXG4gICAgY29uc3QgW25ld01lc3NhZ2UsIHNldE5ld01lc3NhZ2VdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW3VzZXJJbmZvLCBzZXRVc2VySW5mb10gPSB1c2VTdGF0ZSh7fSlcbiAgICBjb25zdCBbbG9hZGluZywgaXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG4gICAgY29uc3QgZWxlbWVudFJlZiA9IHVzZVJlZigpXG5cbiAgICBjb25zdCBTY3JvbGxUb0JvdCA9ICgpID0+IHtcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IGVsZW1lbnRSZWYuY3VycmVudC5zY3JvbGxJbnRvVmlldygpKVxuICAgICAgICByZXR1cm4gPGRpdiByZWY9e2VsZW1lbnRSZWZ9IC8+XG4gICAgfVxuXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKGNoYW5uZWwpID0+IHtcbiAgICAgICAgLy8gbGV0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9tZXNzYWdlcy8ke2NoYW5uZWx9YClcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MoYGh0dHBzOi8vem9vbS1zbGFjay5oZXJva3VhcHAuY29tL21lc3NhZ2VzLyR7Y2hhbm5lbH1gKVxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxuICAgICAgICBzZXRDaGF0cyhyZXNwb25zZS5kYXRhKVxuICAgIH1cblxuICAgIGNvbnN0IGZldGNoVXNlckRhdGEgPSBhc3luYyAodXNlcklkKSA9PiB7XG4gICAgICAgIC8vIGxldCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDozMDAxL3VzZXJJbmZvLyR7dXNlcklkfWApXG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly96b29tLXNsYWNrLmhlcm9rdWFwcC5jb20vdXNlckluZm8vJHt1c2VySWR9YClcbiAgICAgICAgc2V0VXNlckluZm8ocmVzcG9uc2UuZGF0YVswXSlcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YVswXSlcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCk9PiB7XG4gICAgICAgIGZldGNoRGF0YShjaGFubmVsKVxuICAgIH0sIFtjaGFubmVsXSlcblxuICAgIHVzZUVmZmVjdCgoKT0+IHtcbiAgICAgICAgZmV0Y2hVc2VyRGF0YSh1c2VySWQpXG4gICAgfSwgW3VzZXJJZF0pXG5cbiAgICBjb25zdCB0ZXh0ID0gKGUpID0+IHtcbiAgICAgICAgc2V0TmV3TWVzc2FnZShlLnRhcmdldC52YWx1ZSlcbiAgICB9XG5cbiAgICBjb25zdCBzZW5kTWVzc2FnZSA9IGFzeW5jIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBpZiAobmV3TWVzc2FnZSAhPT0gJycpIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKVxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZURhdGEgPSB7XG4gICAgICAgICAgICAgICAgdXNlcl9pZDogdXNlcklkLFxuICAgICAgICAgICAgICAgIHVzZXJfbmFtZTogdXNlckluZm8udXNlcl9uYW1lLFxuICAgICAgICAgICAgICAgIHVzZXJfYXZhdGFyOiB1c2VySW5mby51c2VyX2F2YXRhcixcbiAgICAgICAgICAgICAgICBib2R5OiBuZXdNZXNzYWdlLFxuICAgICAgICAgICAgICAgIGNoYW5uZWw6IGNoYW5uZWwsXG4gICAgICAgICAgICAgICAgZGF0ZTogY3VycmVudERhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgdGltZTogY3VycmVudERhdGUuZ2V0SG91cnMoKSArIFwiOlwiICsgY3VycmVudERhdGUuZ2V0TWludXRlcygpICsgXCI6XCIgKyBjdXJyZW50RGF0ZS5nZXRTZWNvbmRzKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXJJbmZvKVxuICAgICAgICAgICAgY29uc29sZS5sb2cobmV3TWVzc2FnZSlcbiAgICAgICAgICAgIGF3YWl0IHNvY2tldC5lbWl0KCdzZW5kJywgbWVzc2FnZURhdGEpXG4gICAgICAgICAgICBzZXRDaGF0cyhjdXJyZW50ID0+IFsuLi5jdXJyZW50LCBtZXNzYWdlRGF0YV0pXG4gICAgICAgICAgICAvLyBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvbWVzc2FnZXMnLHtcbiAgICAgICAgICAgIGF4aW9zLnBvc3QoJ2h0dHBzOi8vem9vbS1zbGFjay5oZXJva3VhcHAuY29tL21lc3NhZ2VzJyx7XG4gICAgICAgICAgICAgICAgZGF0YTogbWVzc2FnZURhdGFcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgZS50YXJnZXQuYm9keS52YWx1ZSA9ICcnXG4gICAgICAgIHNldE5ld01lc3NhZ2UoJycpXG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc29ja2V0Lm9uKCdyZWNlaXZlJywgbXNnID0+IHtcbiAgICAgICAgICAgIHNldENoYXRzKGN1cnJlbnQgPT4gWy4uLmN1cnJlbnQsIG1zZ10pXG4gICAgICAgIH0pXG4gICAgfSwgW3NvY2tldF0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2hhdENvbnRhaW5lclN0eWxlcy5jaGF0Y29udGFpbmVyfT5cbiAgICAgICAge2NoYW5uZWwgIT0gJ1ZpZGVvJyA/IFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgIDxoMj57Y2hhbm5lbH08L2gyPlxuICAgICAgICAgICAgPGgyPnt1c2VySW5mby51c2VyX25hbWV9PC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjaGF0Q29udGFpbmVyU3R5bGVzWydjaGF0Y29udGFpbmVyLW1lc3NhZ2VzJ119IGlkPSdjaGF0LW1zZy1jb250YWluZXInPlxuICAgICAgICAgICAgICAgIHtjaGF0cy5tYXAoY2hhdCA9PiBjaGF0LmNoYW5uZWwgPT09IGNoYW5uZWwgPyA8TWVzc2FnZSBjaGF0PXtjaGF0fSBrZXk9e2NoYXQudGltZX0gLz4gOiBudWxsKX1cbiAgICAgICAgICAgICAgICA8U2Nyb2xsVG9Cb3QgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENyZWF0ZU1lc3NhZ2UgdXNlcj17dXNlcn0gU2Nyb2xsVG9Cb3Q9e1Njcm9sbFRvQm90fSBoYW5kbGVTdWJtaXQ9e3NlbmRNZXNzYWdlfSB0ZXh0PXt0ZXh0fSAvPlxuICAgICAgICAgICAgIDwvPlxuICAgICAgICA6IFxuICAgICAgICA8Um9vbSBjaGFubmVsPSd2aWRlbycgLz5cbiAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXRDb250YWluZXJcblxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiY2hhdENvbnRhaW5lclN0eWxlcyIsIkNyZWF0ZU1lc3NhZ2UiLCJNZXNzYWdlIiwiY2hhdERhdGEiLCJtZXNzYWdlU3R5bGVzIiwiYXhpb3MiLCJSb29tIiwiQ2hhdENvbnRhaW5lciIsInNvY2tldCIsInVzZXIiLCJjaGFubmVsIiwidXNlcklkIiwiY2hhdHMiLCJzZXRDaGF0cyIsIm5ld01lc3NhZ2UiLCJzZXROZXdNZXNzYWdlIiwidXNlckluZm8iLCJzZXRVc2VySW5mbyIsImxvYWRpbmciLCJpc0xvYWRpbmciLCJlbGVtZW50UmVmIiwiU2Nyb2xsVG9Cb3QiLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJmZXRjaERhdGEiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiZmV0Y2hVc2VyRGF0YSIsImdldCIsInRleHQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzZW5kTWVzc2FnZSIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudERhdGUiLCJEYXRlIiwibWVzc2FnZURhdGEiLCJ1c2VyX2lkIiwidXNlcl9uYW1lIiwidXNlcl9hdmF0YXIiLCJib2R5IiwiZGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInRpbWUiLCJnZXRIb3VycyIsImdldE1pbnV0ZXMiLCJnZXRTZWNvbmRzIiwiZW1pdCIsInBvc3QiLCJvbiIsIm1zZyIsImNoYXRjb250YWluZXIiLCJtYXAiLCJjaGF0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ChatContainer.js\n");

/***/ })

});