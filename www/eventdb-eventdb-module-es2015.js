(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["eventdb-eventdb-module"],{

/***/ "./src/app/eventdb/eventdb-routing.ts":
/*!********************************************!*\
  !*** ./src/app/eventdb/eventdb-routing.ts ***!
  \********************************************/
/*! exports provided: EventdbRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventdbRoutingModule", function() { return EventdbRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _eventdb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventdb.component */ "./src/app/eventdb/eventdb.component.ts");




const routes = [
    {
        path: '',
        component: _eventdb_component__WEBPACK_IMPORTED_MODULE_3__["EventdbComponent"]
    }
];
let EventdbRoutingModule = class EventdbRoutingModule {
};
EventdbRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EventdbRoutingModule);



/***/ }),

/***/ "./src/app/eventdb/eventdb.component.scss":
/*!************************************************!*\
  !*** ./src/app/eventdb/eventdb.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50ZGIvZXZlbnRkYi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/eventdb/eventdb.component.ts":
/*!**********************************************!*\
  !*** ./src/app/eventdb/eventdb.component.ts ***!
  \**********************************************/
/*! exports provided: EventdbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventdbComponent", function() { return EventdbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




class Book {
    constructor(title) {
        this.title = title;
    }
}
let EventdbComponent = class EventdbComponent {
    constructor(db) {
        this.db = db;
        this.bookCounter = 0;
        this.filter = '';
        this.bookRef = db.list('/events');
        this.books = this.bookRef.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(changes => changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val())))));
    }
    addBook() {
        const newBook = new Book(`My book #${this.bookCounter++}`);
        this.bookRef.push(newBook);
    }
    filterBooks() {
        this.bookRef = this.db.list('/events', ref => ref.orderByChild('title').equalTo('My book #0'));
    }
    ngOnInit() { }
};
EventdbComponent.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }
];
EventdbComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-eventdb',
        template: `
      <ul>
          <li *ngFor="let book of books | async">
              <pre>{{ book | json }}</pre>
          </li>
      </ul>
      <button (click)="addBook()">Add a book!</button>
      <button (click)="filterBooks()">Filter books</button>
  `,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./eventdb.component.scss */ "./src/app/eventdb/eventdb.component.scss")).default]
    })
], EventdbComponent);



/***/ }),

/***/ "./src/app/eventdb/eventdb.module.ts":
/*!*******************************************!*\
  !*** ./src/app/eventdb/eventdb.module.ts ***!
  \*******************************************/
/*! exports provided: EventdbModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventdbModule", function() { return EventdbModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _eventdb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventdb.component */ "./src/app/eventdb/eventdb.component.ts");
/* harmony import */ var _eventdb_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./eventdb-routing */ "./src/app/eventdb/eventdb-routing.ts");





let EventdbModule = class EventdbModule {
};
EventdbModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_eventdb_component__WEBPACK_IMPORTED_MODULE_3__["EventdbComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _eventdb_routing__WEBPACK_IMPORTED_MODULE_4__["EventdbRoutingModule"]
        ]
    })
], EventdbModule);



/***/ })

}]);
//# sourceMappingURL=eventdb-eventdb-module-es2015.js.map