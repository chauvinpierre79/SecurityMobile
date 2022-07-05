"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_film_film_module_ts"],{

/***/ 3916:
/*!*********************************************!*\
  !*** ./src/app/film/film-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilmPageRoutingModule": () => (/* binding */ FilmPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _film_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./film.page */ 625);




const routes = [
    {
        path: '',
        component: _film_page__WEBPACK_IMPORTED_MODULE_0__.FilmPage
    }
];
let FilmPageRoutingModule = class FilmPageRoutingModule {
};
FilmPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FilmPageRoutingModule);



/***/ }),

/***/ 5832:
/*!*************************************!*\
  !*** ./src/app/film/film.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilmPageModule": () => (/* binding */ FilmPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _film_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./film-routing.module */ 3916);
/* harmony import */ var _film_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./film.page */ 625);







let FilmPageModule = class FilmPageModule {
};
FilmPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _film_routing_module__WEBPACK_IMPORTED_MODULE_0__.FilmPageRoutingModule
        ],
        declarations: [_film_page__WEBPACK_IMPORTED_MODULE_1__.FilmPage]
    })
], FilmPageModule);



/***/ }),

/***/ 625:
/*!***********************************!*\
  !*** ./src/app/film/film.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilmPage": () => (/* binding */ FilmPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _film_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./film.page.html?ngResource */ 3953);
/* harmony import */ var _film_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./film.page.scss?ngResource */ 700);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/movie.service */ 2208);





let FilmPage = class FilmPage {
    constructor(movieService) {
        this.movieService = movieService;
        this.searchTerm = '';
        this.type = _services_movie_service__WEBPACK_IMPORTED_MODULE_2__.SearchType.all;
    }
    ngOnInit() {
    }
    searchChanged() {
        this.results = this.movieService.searchData(this.searchTerm, this.type);
    }
};
FilmPage.ctorParameters = () => [
    { type: _services_movie_service__WEBPACK_IMPORTED_MODULE_2__.MovieService }
];
FilmPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-film',
        template: _film_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_film_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FilmPage);



/***/ }),

/***/ 700:
/*!************************************************!*\
  !*** ./src/app/film/film.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "@font-face {\n  font-family: \"font-1\";\n  src: url('LibreBaskerville-Regular.ttf');\n}\n* {\n  list-style-type: none;\n}\nbody {\n  background: black;\n  color: white;\n  text-align: center;\n  font-family: \"font-1\", cursive;\n}\nh1 {\n  font-size: 3rem;\n  letter-spacing: 3px;\n  margin: 40px 10px 40px;\n}\ninput {\n  border: none;\n  border-radius: 25px 25px 0 0;\n  outline: none;\n  text-align: center;\n  font-size: 1.2rem;\n  cursor: pointer;\n  font-family: \"font-1\", cursive;\n  margin: 3px 0px;\n  width: 300px;\n  padding: 10px 0px;\n}\ninput::placeholder {\n  text-align: center;\n  font-size: 1.2rem;\n}\ninput[type=submit] {\n  border-radius: 0 0 25px 25px;\n  background: #b1b0b0;\n  transition: 0.3s ease;\n  cursor: pointer;\n}\ninput[type=submit]:hover {\n  background: #2e2e2e;\n  color: white;\n  letter-spacing: 1px;\n}\nimg {\n  object-fit: cover;\n  width: 40%;\n  max-width: 250px;\n}\n.result-container {\n  margin: 0 auto;\n}\nul {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0;\n  margin: auto;\n  max-width: 1400px;\n}\nli {\n  max-width: 400px;\n  border: 2px solid #cecece;\n  border-radius: 10px;\n  padding: 20px;\n  margin: 10px;\n}\nh2 {\n  margin: 10px 0 25px;\n}\n.card-content {\n  display: grid;\n  grid-template-columns: 40% 60%;\n}\n.card-content img {\n  width: 90%;\n  border-radius: 5px;\n  box-shadow: -3px 3px 10px 3px #242323;\n}\n.card-content p {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 7;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbG0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSx3Q0FBQTtBQUNKO0FBRUE7RUFDSSxxQkFBQTtBQUFKO0FBR0E7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0FBQUo7QUFHQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBQUo7QUFHQTtFQUNJLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUFKO0FBR0E7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FBQUo7QUFHQTtFQUNJLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFBSjtBQUdBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUdBO0VBQ0ksaUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFBSjtBQUdBO0VBQ0ksY0FBQTtBQUFKO0FBR0E7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFBSjtBQUdBO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFBSjtBQUdBO0VBQ0ksbUJBQUE7QUFBSjtBQUdBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBQUo7QUFHQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHFDQUFBO0FBQUo7QUFHQTtFQUNJLG9CQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBQUoiLCJmaWxlIjoiZmlsbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJmb250LTFcIjtcbiAgICBzcmM6IHVybCguL0xpYnJlQmFza2VydmlsbGUtUmVndWxhci50dGYpO1xufVxuXG4qIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbmJvZHkge1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IFwiZm9udC0xXCIsIGN1cnNpdmU7XG59XG5cbmgxIHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgICBtYXJnaW46IDQwcHggMTBweCA0MHB4O1xufVxuXG5pbnB1dCB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHggMjVweCAwIDA7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtZmFtaWx5OiBcImZvbnQtMVwiLCBjdXJzaXZlO1xuICAgIG1hcmdpbjogM3B4IDBweDtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgcGFkZGluZzogMTBweCAwcHg7XG59XG5cbmlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMjVweCAyNXB4O1xuICAgIGJhY2tncm91bmQ6IHJnYigxNzcsIDE3NiwgMTc2KTtcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNDYsIDQ2LCA0Nik7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbmltZyB7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xufVxuXG4ucmVzdWx0LWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbnVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXgtd2lkdGg6IDE0MDBweDtcbn1cblxubGkge1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDIwNiwgMjA2LCAyMDYpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBtYXJnaW46IDEwcHg7XG59XG5cbmgyIHtcbiAgICBtYXJnaW46IDEwcHggMCAyNXB4O1xufVxuXG4uY2FyZC1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDAlIDYwJTtcbn1cblxuLmNhcmQtY29udGVudCBpbWcge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IC0zcHggM3B4IDEwcHggM3B4ICMyNDIzMjM7XG59XG5cbi5jYXJkLWNvbnRlbnQgcCB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDc7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn0iXX0= */";

/***/ }),

/***/ 3953:
/*!************************************************!*\
  !*** ./src/app/film/film.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>films</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n  <ion-searchbar [(ngModel)]=\"searchTerm\" (ionChange)=\"searchChanged($event)\"></ion-searchbar>\n\n  <ion-item>\n    <ion-label>Select Searchtype</ion-label>\n    <ion-select [(ngModel)]=\"type\" (ionChange)=\"searchChanged($event)\">\n      <ion-select-option value=\"\">All</ion-select-option>\n      <ion-select-option value=\"movie\">Movie</ion-select-option>\n      <ion-select-option value=\"series\">Series</ion-select-option>\n      <ion-select-option value=\"episode\">Episode</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-list>\n\n    <ion-item button *ngFor=\"let item of (results | async)\" [routerLink]=\"['/', 'film', item.imdbID]\">\n      <ion-avatar slot=\"start\">\n        <img [src]=\"item.Poster\" *ngIf=\"item.Poster != 'N/A'\">\n      </ion-avatar>\n\n      <ion-label text-wrap>\n        <h3>{{ item.Title }}</h3>\n        {{ item.Year }}\n      </ion-label>\n\n      <ion-icon slot=\"end\" *ngIf=\"item.Type == 'movie'\" name=\"videocam\"></ion-icon>\n      <ion-icon slot=\"end\" *ngIf=\"item.Type == 'series'\" name=\"tv\"></ion-icon>\n      <ion-icon slot=\"end\" *ngIf=\"item.Type == 'game'\" name=\"game-controller\"></ion-icon>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n\n\n\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_film_film_module_ts.js.map