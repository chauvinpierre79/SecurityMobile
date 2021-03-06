"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_film-details_film-details_module_ts"],{

/***/ 3162:
/*!*************************************************************!*\
  !*** ./src/app/film-details/film-details-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilmDetailsPageRoutingModule": () => (/* binding */ FilmDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _film_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./film-details.page */ 7551);




const routes = [
    {
        path: '',
        component: _film_details_page__WEBPACK_IMPORTED_MODULE_0__.FilmDetailsPage
    }
];
let FilmDetailsPageRoutingModule = class FilmDetailsPageRoutingModule {
};
FilmDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FilmDetailsPageRoutingModule);



/***/ }),

/***/ 6635:
/*!*****************************************************!*\
  !*** ./src/app/film-details/film-details.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilmDetailsPageModule": () => (/* binding */ FilmDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _film_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./film-details-routing.module */ 3162);
/* harmony import */ var _film_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./film-details.page */ 7551);







let FilmDetailsPageModule = class FilmDetailsPageModule {
};
FilmDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _film_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.FilmDetailsPageRoutingModule
        ],
        declarations: [_film_details_page__WEBPACK_IMPORTED_MODULE_1__.FilmDetailsPage]
    })
], FilmDetailsPageModule);



/***/ }),

/***/ 7551:
/*!***************************************************!*\
  !*** ./src/app/film-details/film-details.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilmDetailsPage": () => (/* binding */ FilmDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _film_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./film-details.page.html?ngResource */ 9866);
/* harmony import */ var _film_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./film-details.page.scss?ngResource */ 6137);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/movie.service */ 2208);






let FilmDetailsPage = class FilmDetailsPage {
    /**
     *
     * @param activatedRoute
     * @param movieService
     */
    constructor(activatedRoute, movieService) {
        this.activatedRoute = activatedRoute;
        this.movieService = movieService;
        this.information = null;
    }
    ngOnInit() {
        let id = this.activatedRoute.snapshot.paramMap.get('id');
        this.movieService.getDetails(id).subscribe(result => {
            this.information = result;
        });
    }
    openWebsite() {
        window.open(this.information.Website, '_blank');
    }
};
FilmDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _services_movie_service__WEBPACK_IMPORTED_MODULE_2__.MovieService }
];
FilmDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-film-details',
        template: _film_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_film_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FilmDetailsPage);



/***/ }),

/***/ 6137:
/*!****************************************************************!*\
  !*** ./src/app/film-details/film-details.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWxtLWRldGFpbHMucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 9866:
/*!****************************************************************!*\
  !*** ./src/app/film-details/film-details.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>d??tails du film</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card *ngIf=\"information\">\n    <ion-card-header>\n      <ion-card-title>\n        {{ information.Title }}\n      </ion-card-title>\n      <ion-card-subtitle>\n        {{ information.Year }}\n      </ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content text-center>\n      <img [src]=\"information.Poster\" class=\"info-img\">\n      {{ information.Plot }}\n\n      <ion-item lines=\"none\">\n        <ion-icon name=\"star-half\" slot=\"start\"></ion-icon>\n        <ion-label>{{ information.imdbRating }}</ion-label>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <ion-icon name=\"clipboard\" slot=\"start\"></ion-icon>\n        <ion-label text-wrap>{{ information.Director }}</ion-label>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <ion-icon name=\"contacts\" slot=\"start\"></ion-icon>\n        <ion-label text-wrap>{{ information.Actors }}</ion-label>\n      </ion-item>\n\n      <ion-button expand=\"full\" (click)=\"openWebsite()\" *ngIf=\"information.Website && information.Website != 'N/A'\">\n        <ion-icon name=\"open\" slot=\"start\"></ion-icon>\n        Open Website\n      </ion-button>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_film-details_film-details_module_ts.js.map