function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["eventdb-eventdb-module"], {
  /***/
  "./src/app/eventdb/eventdb-routing.ts":
  /*!********************************************!*\
    !*** ./src/app/eventdb/eventdb-routing.ts ***!
    \********************************************/

  /*! exports provided: EventdbRoutingModule */

  /***/
  function srcAppEventdbEventdbRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventdbRoutingModule", function () {
      return EventdbRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _eventdb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./eventdb.component */
    "./src/app/eventdb/eventdb.component.ts");

    var routes = [{
      path: '',
      component: _eventdb_component__WEBPACK_IMPORTED_MODULE_3__["EventdbComponent"]
    }];

    var EventdbRoutingModule = function EventdbRoutingModule() {
      _classCallCheck(this, EventdbRoutingModule);
    };

    EventdbRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EventdbRoutingModule);
    /***/
  },

  /***/
  "./src/app/eventdb/eventdb.component.scss":
  /*!************************************************!*\
    !*** ./src/app/eventdb/eventdb.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEventdbEventdbComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50ZGIvZXZlbnRkYi5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/eventdb/eventdb.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/eventdb/eventdb.component.ts ***!
    \**********************************************/

  /*! exports provided: EventdbComponent */

  /***/
  function srcAppEventdbEventdbComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventdbComponent", function () {
      return EventdbComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var Book = function Book(title) {
      _classCallCheck(this, Book);

      this.title = title;
    };

    var EventdbComponent = /*#__PURE__*/function () {
      function EventdbComponent(db) {
        _classCallCheck(this, EventdbComponent);

        this.db = db;
        this.bookCounter = 0;
        this.filter = '';
        this.bookRef = db.list('/events');
        this.books = this.bookRef.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
          return changes.map(function (c) {
            return Object.assign({
              key: c.payload.key
            }, c.payload.val());
          });
        }));
      }

      _createClass(EventdbComponent, [{
        key: "addBook",
        value: function addBook() {
          var newBook = new Book("My book #".concat(this.bookCounter++));
          this.bookRef.push(newBook);
        }
      }, {
        key: "filterBooks",
        value: function filterBooks() {
          this.bookRef = this.db.list('/events', function (ref) {
            return ref.orderByChild('title').equalTo('My book #0');
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EventdbComponent;
    }();

    EventdbComponent.ctorParameters = function () {
      return [{
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]
      }];
    };

    EventdbComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-eventdb',
      template: "\n      <ul>\n          <li *ngFor=\"let book of books | async\">\n              <pre>{{ book | json }}</pre>\n          </li>\n      </ul>\n      <button (click)=\"addBook()\">Add a book!</button>\n      <button (click)=\"filterBooks()\">Filter books</button>\n  ",
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./eventdb.component.scss */
      "./src/app/eventdb/eventdb.component.scss"))["default"]]
    })], EventdbComponent);
    /***/
  },

  /***/
  "./src/app/eventdb/eventdb.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/eventdb/eventdb.module.ts ***!
    \*******************************************/

  /*! exports provided: EventdbModule */

  /***/
  function srcAppEventdbEventdbModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventdbModule", function () {
      return EventdbModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _eventdb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./eventdb.component */
    "./src/app/eventdb/eventdb.component.ts");
    /* harmony import */


    var _eventdb_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./eventdb-routing */
    "./src/app/eventdb/eventdb-routing.ts");

    var EventdbModule = function EventdbModule() {
      _classCallCheck(this, EventdbModule);
    };

    EventdbModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_eventdb_component__WEBPACK_IMPORTED_MODULE_3__["EventdbComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _eventdb_routing__WEBPACK_IMPORTED_MODULE_4__["EventdbRoutingModule"]]
    })], EventdbModule);
    /***/
  }
}]);
//# sourceMappingURL=eventdb-eventdb-module-es5.js.map