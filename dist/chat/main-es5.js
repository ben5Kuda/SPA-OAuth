function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ul>\r\n    <li *ngFor=\"let chat of chats\"> {{ chat.message }}</li>\r\n</ul>\r\n<p></p>\r\n\r\n<button (click)=\"refreshToken()\">Refresh token</button>\r\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAdminAdminComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>The current user is: </p>\n<!-- {{ identity.name }} -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/messages/messages.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/messages/messages.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMessagesMessagesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<input type=\"text\" name=\"msg\" [(ngModel)]=\"msg\">\n\n<p></p>\n<button (click)=sendMessage()>Send Message</button>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wrapper {\r\n    display: grid;\r\n    grid-template-columns: 1fr 2fr 1fr;\r\n    grid-column-gap: 1em;\r\n    grid-column: 12px;\r\n    grid-auto-rows: minmax(100px, auto);\r\n}\r\n\r\n.messages {\r\n    padding: 12px;\r\n    background-color: #ddd;\r\n}\r\n\r\n.chat {\r\n    margin: 12px;\r\n    background-color: rgb(185, 139, 139);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixvQ0FBb0M7QUFDeEMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyO1xyXG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAxZW07XHJcbiAgICBncmlkLWNvbHVtbjogMTJweDtcclxuICAgIGdyaWQtYXV0by1yb3dzOiBtaW5tYXgoMTAwcHgsIGF1dG8pO1xyXG59XHJcblxyXG4ubWVzc2FnZXMge1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbn1cclxuXHJcbi5jaGF0IHtcclxuICAgIG1hcmdpbjogMTJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODUsIDEzOSwgMTM5KTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: chatChannelName, dispatchChannelName, AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "chatChannelName", function () {
      return chatChannelName;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "dispatchChannelName", function () {
      return dispatchChannelName;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular-oauth2-oidc */
    "./node_modules/angular-oauth2-oidc/fesm2015/angular-oauth2-oidc.js");
    /* harmony import */


    var _oauth_auth_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./oauth/auth-config */
    "./src/app/oauth/auth-config.ts");
    /* harmony import */


    var angular_oauth2_oidc_jwks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! angular-oauth2-oidc-jwks */
    "./node_modules/angular-oauth2-oidc-jwks/fesm2015/angular-oauth2-oidc-jwks.js");

    var chatChannelName = 'chat';
    var dispatchChannelName = 'dispatch';

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(oauthService) {
        _classCallCheck(this, AppComponent);

        this.oauthService = oauthService;
        this.title = 'chat';
        this.Messages = [];
        this.userMessage = 'testing';
        this.dispatches = [];
        this.isOnline = false;
        this.chatChannelName = 'chat';
        this.chats = [];
        this.configureWithNewConfigApi();
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.oauthService.events.subscribe(function (event) {
            if (event instanceof angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_2__["OAuthErrorEvent"]) {
              console.error(event);
            } else {
              console.warn(event);
            }
          }); //      this.connection = new HubConnectionBuilder().withUrl('https://qabosevents.tracker.co.za/eventHub').build();
          //      this.connection.on(chatChannelName, (msg) => {
          //        if (msg) {
          //         this.chats.push(msg);
          //         console.log(msg.message);
          //        } else {
          //          console.log('Empty message');
          //        }
          //     });
          //      this.connection.on('2', (job) => {
          //       if (job) {
          //        console.log('listening to 2');
          //        this.dispatches.push(job);
          //        console.log(job);
          //       } else {
          //         console.log('Empty dispatch');
          //       }
          //    });
          //      this.connection.on('1', (job) => {
          //     if (job) {
          //       console.log('listening to 1');
          //       this.dispatches.push(job);
          //       console.log(job);
          //     } else {
          //       console.log('Empty dispatch');
          //     }
          //  });
          //      this.connection.start()
          //         .then( () => console.log('Connection started'))
          //         .catch(e => console.log(e));
        }
      }, {
        key: "refreshToken",
        value: function refreshToken() {
          this.oauthService.loadDiscoveryDocumentAndLogin();

          if (this.oauthService.hasValidAccessToken()) {
            return;
          }

          console.log(this.oauthService.hasValidAccessToken());
          this.oauthService.silentRefreshRedirectUri = window.location.origin + "/silent-refresh.html";
          console.log('Manual token refresh');
          this.oauthService.silentRefresh().then(function (info) {
            return console.debug('refresh ok', info);
          }).catch(function (err) {
            return console.error('refresh error', err);
          });
          ;
        }
      }, {
        key: "echo",
        value: function echo() {
          console.log(this.userMessage); // this.chat =  new Message();
          // if (this.isOnline) {
          //     this.chat.id = 1;
          //     this.chat.msg = this.user + ' is now online';
          //     this.chat.userId = 11;
          //     this.chat.timestamp = new Date();
          //     this.chat.audience = MessageAudience.broadcast;
          //     } else {
          //       this.chat.id = 2;
          //       this.chat.msg = this.userMessage;
          //       this.chat.userId = 10;
          //       this.chat.timestamp = new Date();
          //       this.chat.audience = MessageAudience.directMessage;
          //     }
          // console.log(this.chat.msg);
          // console.log(this.chat.User);
          // this.connection.invoke('Chat', this.chats, channelName);
          // this.userMessage = '';
        }
      }, {
        key: "login",
        value: function login() {
          this.oauthService.initImplicitFlow();
          console.log('implicit flow initiated');
        }
      }, {
        key: "logoff",
        value: function logoff() {
          this.oauthService.logOut();
        }
      }, {
        key: "configureWithNewConfigApi",
        value: function configureWithNewConfigApi() {
          this.oauthService.configure(_oauth_auth_config__WEBPACK_IMPORTED_MODULE_3__["authConfig"]);
          this.oauthService.tokenValidationHandler = new angular_oauth2_oidc_jwks__WEBPACK_IMPORTED_MODULE_4__["JwksValidationHandler"]();
          console.log('Configuring OAuth options');
          this.oauthService.loadDiscoveryDocumentAndLogin();
          this.oauthService.silentRefreshRedirectUri = window.location.origin + "/silent-refresh.html";
          this.oauthService.setupAutomaticSilentRefresh();
          console.log('Attempting automatic token refresh');
        }
      }, {
        key: "getClaims",
        get: function get() {
          var claims = this.oauthService.getIdentityClaims();
          console.log('gettting claims'); // console.log(claims);

          if (!claims) {
            return null;
          }

          return claims;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_2__["OAuthService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angular-oauth2-oidc */
    "./node_modules/angular-oauth2-oidc/fesm2015/angular-oauth2-oidc.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _store_reducers_admin_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./store/reducers/admin.reducer */
    "./src/app/store/reducers/admin.reducer.ts");
    /* harmony import */


    var _store_reducers_chat_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./store/reducers/chat.reducer */
    "./src/app/store/reducers/chat.reducer.ts");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/fesm2015/effects.js");
    /* harmony import */


    var _store_effects_admin_effects_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./store/effects/admin-effects.service */
    "./src/app/store/effects/admin-effects.service.ts");
    /* harmony import */


    var _store_effects_chat_effects_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./store/effects/chat-effects.service */
    "./src/app/store/effects/chat-effects.service.ts");
    /* harmony import */


    var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/admin/admin.component */
    "./src/app/components/admin/admin.component.ts");
    /* harmony import */


    var _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/messages/messages.component */
    "./src/app/components/messages/messages.component.ts");
    /* harmony import */


    var _routing_app_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./routing/app-routing.module */
    "./src/app/routing/app-routing.module.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_13__["AdminComponent"], _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_14__["MessagesComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _routing_app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"], angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_5__["OAuthModule"].forRoot({
        resourceServer: {
          allowedUrls: ['http://localhost:44363/v1'],
          sendAccessToken: true
        }
      }), _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forFeature(_store_reducers_admin_reducer__WEBPACK_IMPORTED_MODULE_8__["IdentityFeatureKey"], _store_reducers_admin_reducer__WEBPACK_IMPORTED_MODULE_8__["reducer"]), _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot(_store_reducers_admin_reducer__WEBPACK_IMPORTED_MODULE_8__["reducer"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["EffectsModule"].forRoot([_store_effects_admin_effects_service__WEBPACK_IMPORTED_MODULE_11__["AdminEffectsService"]]), _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forFeature(_store_reducers_chat_reducer__WEBPACK_IMPORTED_MODULE_9__["ChatFeatureKey"], _store_reducers_chat_reducer__WEBPACK_IMPORTED_MODULE_9__["reducer"]), _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot(_store_reducers_chat_reducer__WEBPACK_IMPORTED_MODULE_9__["reducer"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["EffectsModule"].forRoot([_store_effects_chat_effects_service__WEBPACK_IMPORTED_MODULE_12__["ChatEffectsService"]])],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/admin/admin.component.css":
  /*!******************************************************!*\
    !*** ./src/app/components/admin/admin.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAdminAdminComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/admin/admin.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/admin/admin.component.ts ***!
    \*****************************************************/

  /*! exports provided: AdminComponent */

  /***/
  function srcAppComponentsAdminAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
      return AdminComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var src_app_store_reducers_admin_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/store/reducers/admin.reducer */
    "./src/app/store/reducers/admin.reducer.ts");
    /* harmony import */


    var src_app_store_actions_admin_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/store/actions/admin.actions */
    "./src/app/store/actions/admin.actions.ts");

    var AdminComponent =
    /*#__PURE__*/
    function () {
      function AdminComponent(adminStore) {
        _classCallCheck(this, AdminComponent);

        this.adminStore = adminStore;
      }

      _createClass(AdminComponent, [{
        key: "getIdentity",
        value: function getIdentity() {}
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.adminStore.dispatch(Object(src_app_store_actions_admin_actions__WEBPACK_IMPORTED_MODULE_4__["getIdentity"])());
          this.adminStore.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(src_app_store_reducers_admin_reducer__WEBPACK_IMPORTED_MODULE_3__["selectIdentity"])).subscribe(function (data) {
            _this.identity = data;
          });
        }
      }]);

      return AdminComponent;
    }();

    AdminComponent.ctorParameters = function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }];
    };

    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin.component.css */
      "./src/app/components/admin/admin.component.css")).default]
    })], AdminComponent);
    /***/
  },

  /***/
  "./src/app/components/messages/messages.component.css":
  /*!************************************************************!*\
    !*** ./src/app/components/messages/messages.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMessagesMessagesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/messages/messages.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/messages/messages.component.ts ***!
    \***********************************************************/

  /*! exports provided: MessagesComponent */

  /***/
  function srcAppComponentsMessagesMessagesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessagesComponent", function () {
      return MessagesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var src_app_models_chat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/models/chat */
    "./src/app/models/chat.ts");

    var MessagesComponent =
    /*#__PURE__*/
    function () {
      function MessagesComponent(chatStore, apiservice) {
        _classCallCheck(this, MessagesComponent);

        this.chatStore = chatStore;
        this.apiservice = apiservice;
      }

      _createClass(MessagesComponent, [{
        key: "getIdentity",
        value: function getIdentity() {} // ngOnInit() {
        //   this.chatStore.dispatch(getMessages());
        //   this.chatStore.pipe(select(selectMessages)).subscribe(
        //     data => {
        //        this.messages = data;
        //       });
        //   const claims = this.oauthService.getIdentityClaims();
        //   console.log(claims);
        //   }

      }, {
        key: "sendMessage",
        value: function sendMessage() {
          // this.message = {
          //   message: '',
          //   senderId:
          // };
          this.chat = new src_app_models_chat__WEBPACK_IMPORTED_MODULE_4__["Chat"]();
          this.chat.message = this.msg;
          this.chat.recieverId = 10, this.chat.senderId = 45;
          console.log(this.msg);
          this.apiservice.postMessages(this.chat).subscribe();
        }
      }]);

      return MessagesComponent;
    }();

    MessagesComponent.ctorParameters = function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }, {
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }];
    };

    MessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-messages',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./messages.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/messages/messages.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./messages.component.css */
      "./src/app/components/messages/messages.component.css")).default]
    })], MessagesComponent);
    /***/
  },

  /***/
  "./src/app/models/chat.ts":
  /*!********************************!*\
    !*** ./src/app/models/chat.ts ***!
    \********************************/

  /*! exports provided: Chat */

  /***/
  function srcAppModelsChatTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Chat", function () {
      return Chat;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Chat = function Chat() {
      _classCallCheck(this, Chat);
    };
    /***/

  },

  /***/
  "./src/app/oauth/auth-config.ts":
  /*!**************************************!*\
    !*** ./src/app/oauth/auth-config.ts ***!
    \**************************************/

  /*! exports provided: authConfig */

  /***/
  function srcAppOauthAuthConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "authConfig", function () {
      return authConfig;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var authConfig = {
      // Url of the Identity Provider
      issuer: 'https://localbossts.tracker.co.za',
      // URL of the SPA to redirect the user to after login
      redirectUri: window.location.origin,
      // The SPA's id. The SPA is registerd with this id at the auth-server
      clientId: 'owl',
      // set the scope for the permissions the client should request
      // The first three are defined by OIDC. The 4th is a usecase-specific one
      scope: 'read roles',
      // set to true, to receive also an id_token via OpenId Connect (OIDC) in addition to the
      // OAuth2-based access_token
      oidc: true,
      showDebugInformation: true,
      timeoutFactor: 0.5,
      sessionChecksEnabled: true
    };
    /***/
  },

  /***/
  "./src/app/routing/app-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/routing/app-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppRoutingAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../components/messages/messages.component */
    "./src/app/components/messages/messages.component.ts");
    /* harmony import */


    var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../components/admin/admin.component */
    "./src/app/components/admin/admin.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var routes = [{
      path: 'messages',
      component: _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_2__["MessagesComponent"]
    }, {
      path: 'admin',
      component: _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/services/api.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/api.service.ts ***!
    \*****************************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppServicesApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ApiService =
    /*#__PURE__*/
    function () {
      function ApiService(httpClient) {
        _classCallCheck(this, ApiService);

        this.httpClient = httpClient;
        this.apiEndPoint = 'https://qabosapi.tracker.co.za/v1/';
      }

      _createClass(ApiService, [{
        key: "getMessages",
        value: function getMessages() {
          var _this2 = this;

          return this.httpClient.get(this.apiEndPoint + 'Messages').pipe( // tslint:disable-next-line:no-string-literal
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return _this2.response = data['value'];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (t) {
            return console.log('fetched messages ');
          }));
        }
      }, {
        key: "postMessages",
        value: function postMessages(chat) {
          return this.httpClient.post(this.apiEndPoint + 'Chats', chat); // .pipe(
          //   // tslint:disable-next-line:no-string-literal
          //   map(data => this.response = data),
          //   tap( t => console.log(' created message '))
          // );
        }
      }, {
        key: "getIdentity",
        value: function getIdentity() {
          var _this3 = this;

          console.log('inside get identity');
          return this.httpClient.get(this.apiEndPoint + 'Users/1').pipe( // tslint:disable-next-line:no-string-literal
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return _this3.response = data['value'];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (t) {
            return console.log('fetched identity ');
          }));
        }
      }]);

      return ApiService;
    }();

    ApiService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ApiService);
    /***/
  },

  /***/
  "./src/app/store/actions/admin.actions.ts":
  /*!************************************************!*\
    !*** ./src/app/store/actions/admin.actions.ts ***!
    \************************************************/

  /*! exports provided: getIdentity, getIdentityCompleted */

  /***/
  function srcAppStoreActionsAdminActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getIdentity", function () {
      return getIdentity;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getIdentityCompleted", function () {
      return getIdentityCompleted;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");

    var getIdentity = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[admin] getIdentity');
    var getIdentityCompleted = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[admin] getIdentityComplete', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    /***/
  },

  /***/
  "./src/app/store/actions/chat.actions.ts":
  /*!***********************************************!*\
    !*** ./src/app/store/actions/chat.actions.ts ***!
    \***********************************************/

  /*! exports provided: getMessages, getMessagesCompleted, postMessages */

  /***/
  function srcAppStoreActionsChatActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMessages", function () {
      return getMessages;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMessagesCompleted", function () {
      return getMessagesCompleted;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "postMessages", function () {
      return postMessages;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");

    var getMessages = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[chat] getMessages');
    var getMessagesCompleted = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[chat] getMessagesComplete', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    var postMessages = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[chat] postMessages', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    /***/
  },

  /***/
  "./src/app/store/effects/admin-effects.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/store/effects/admin-effects.service.ts ***!
    \********************************************************/

  /*! exports provided: AdminEffectsService */

  /***/
  function srcAppStoreEffectsAdminEffectsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminEffectsService", function () {
      return AdminEffectsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/fesm2015/effects.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _actions_admin_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../actions/admin.actions */
    "./src/app/store/actions/admin.actions.ts");

    var AdminEffectsService = function AdminEffectsService(actions$, apiService) {
      var _this4 = this;

      _classCallCheck(this, AdminEffectsService);

      this.actions$ = actions$;
      this.apiService = apiService;
      this.getIdentity$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(function () {
        return _this4.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_admin_actions__WEBPACK_IMPORTED_MODULE_5__["getIdentity"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (action) {
          return _this4.apiService.getIdentity().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (identityResponse) {
            return Object(_actions_admin_actions__WEBPACK_IMPORTED_MODULE_5__["getIdentityCompleted"])({
              currentIdentity: identityResponse
            });
          }));
        }));
      });
    };

    AdminEffectsService.ctorParameters = function () {
      return [{
        type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]
      }, {
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }];
    };

    AdminEffectsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AdminEffectsService);
    /***/
  },

  /***/
  "./src/app/store/effects/chat-effects.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/store/effects/chat-effects.service.ts ***!
    \*******************************************************/

  /*! exports provided: ChatEffectsService */

  /***/
  function srcAppStoreEffectsChatEffectsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatEffectsService", function () {
      return ChatEffectsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/fesm2015/effects.js");
    /* harmony import */


    var _actions_chat_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../actions/chat.actions */
    "./src/app/store/actions/chat.actions.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ChatEffectsService = // postMessages$ = createEffect(() =>
    // this.actions$.pipe(
    //   ofType(postMessages),
    //   mergeMap(action => {
    //      this.apiService.postMessages(action.msgs).pipe(
    //       map(messagesResponse => {
    //         return getMessagesCompleted( { msgs: (messagesResponse as Message[])});
    //       })
    //     ))
    // ));
    function ChatEffectsService(actions$, apiService) {
      var _this5 = this;

      _classCallCheck(this, ChatEffectsService);

      this.actions$ = actions$;
      this.apiService = apiService;
      this.getMessages$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(function () {
        return _this5.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_chat_actions__WEBPACK_IMPORTED_MODULE_4__["getMessages"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (action) {
          return _this5.apiService.getMessages().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (messagesResponse) {
            return Object(_actions_chat_actions__WEBPACK_IMPORTED_MODULE_4__["getMessagesCompleted"])({
              msgs: messagesResponse
            });
          }));
        }));
      });
    };

    ChatEffectsService.ctorParameters = function () {
      return [{
        type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]
      }, {
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }];
    };

    ChatEffectsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ChatEffectsService);
    /***/
  },

  /***/
  "./src/app/store/reducers/admin.reducer.ts":
  /*!*************************************************!*\
    !*** ./src/app/store/reducers/admin.reducer.ts ***!
    \*************************************************/

  /*! exports provided: IdentityFeatureKey, initialState, reducer, selectState, selectIdentity */

  /***/
  function srcAppStoreReducersAdminReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IdentityFeatureKey", function () {
      return IdentityFeatureKey;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialState", function () {
      return initialState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducer", function () {
      return reducer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectState", function () {
      return selectState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectIdentity", function () {
      return selectIdentity;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _actions_admin_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../actions/admin.actions */
    "./src/app/store/actions/admin.actions.ts");

    var IdentityFeatureKey = 'identity';
    var initialState = {
      identity: null,
      identityIsLoading: false
    };
    var adminReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_admin_actions__WEBPACK_IMPORTED_MODULE_2__["getIdentity"], function (state) {
      return Object.assign({}, state, {
        identityIsLoading: true
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_admin_actions__WEBPACK_IMPORTED_MODULE_2__["getIdentityCompleted"], function (state, _ref) {
      var currentIdentity = _ref.currentIdentity;
      return Object.assign({}, state, {
        identity: currentIdentity,
        identityIsLoading: false
      });
    }));

    function reducer(state, action) {
      console.log(action.type.toString());
      return adminReducer(state, action);
    }

    var selectState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])(IdentityFeatureKey); // (state: any) => state.vehicles;

    var selectIdentity = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectState, function (state) {
      return state.identity;
    });
    /***/
  },

  /***/
  "./src/app/store/reducers/chat.reducer.ts":
  /*!************************************************!*\
    !*** ./src/app/store/reducers/chat.reducer.ts ***!
    \************************************************/

  /*! exports provided: ChatFeatureKey, initialState, reducer, selectState, selectMessages */

  /***/
  function srcAppStoreReducersChatReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatFeatureKey", function () {
      return ChatFeatureKey;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialState", function () {
      return initialState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducer", function () {
      return reducer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectState", function () {
      return selectState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectMessages", function () {
      return selectMessages;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _actions_chat_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../actions/chat.actions */
    "./src/app/store/actions/chat.actions.ts");

    var ChatFeatureKey = 'chatting';
    var initialState = {
      messages: [],
      unreadMessages: 0,
      onlineStatus: false,
      isLoading: false
    };
    var chatReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_chat_actions__WEBPACK_IMPORTED_MODULE_2__["getMessages"], function (state) {
      return Object.assign({}, state, {
        isLoading: true
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_chat_actions__WEBPACK_IMPORTED_MODULE_2__["getMessagesCompleted"], function (state, _ref2) {
      var msgs = _ref2.msgs;
      return Object.assign({}, state, {
        isLoading: false,
        messages: msgs
      });
    }));

    function reducer(state, action) {
      console.log(action.type.toString());
      return chatReducer(state, action);
    }

    var selectState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])(ChatFeatureKey); // (state: any) => state.vehicles;

    var selectMessages = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectState, function (state) {
      return state.messages;
    });
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\kmushore\Music\ChatNg\chat\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map