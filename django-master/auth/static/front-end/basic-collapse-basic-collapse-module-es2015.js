(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic-collapse-basic-collapse-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/demo/ui-elements/ui-basic/basic-collapse/basic-collapse.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demo/ui-elements/ui-basic/basic-collapse/basic-collapse.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row btn-page\">\n  <div class=\"col-sm-12\">\n    <app-card cardTitle=\"Basic Collapse\" [options]=\"false\">\n      <a class=\"btn btn-primary text-white\" (click)=\"isCollapsed = !isCollapsed\" [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseExample\">Link with href</a>\n      <button class=\"btn btn-primary\" type=\"button\" (click)=\"isCollapsed = !isCollapsed\" [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseExample\">Button with data-target</button>\n      <div id=\"collapseExample\" [ngbCollapse]=\"isCollapsed\">\n        <p class=\"mt-3\"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. </p>\n      </div>\n    </app-card>\n  </div>\n  <div class=\"col-sm-12\">\n    <app-card cardTitle=\"Multiple Targets\" [options]=\"false\" blockClass=\"pb-0\">\n      <a class=\"btn btn-primary text-white\" (click)=\"multiCollapsed1 = !multiCollapsed1\" [attr.aria-expanded]=\"!multiCollapsed1\" aria-controls=\"multiCollapseExample1\">Toggle first element</a>\n      <button class=\"btn btn-primary\" (click)=\"multiCollapsed2 = !multiCollapsed2\" [attr.aria-expanded]=\"!multiCollapsed2\" type=\"button\" aria-controls=\"multiCollapseExample2\">Toggle second element</button>\n      <button class=\"btn btn-primary\" type=\"button\" (click)=\"multiCollapsed1 = !multiCollapsed1; multiCollapsed2 = !multiCollapsed2\" aria-controls=\"multiCollapseExample1 multiCollapseExample2\">Toggle both elements</button>\n      <div class=\"row\">\n        <div class=\"col mt-3\">\n          <div class=\"multi-collapse\" id=\"multiCollapseExample1\" [ngbCollapse]=\"multiCollapsed1\">\n            <p>Anim pariatur cliche reprehended, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</p>\n          </div>\n        </div>\n        <div class=\"col mt-3\">\n          <div class=\"multi-collapse\" id=\"multiCollapseExample2\" [ngbCollapse]=\"multiCollapsed2\">\n            <p>Anim pariatur cliche reprehended, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</p>\n          </div>\n        </div>\n      </div>\n    </app-card>\n  </div>\n  <div class=\"col-sm-12\">\n    <h5>Accordion Example</h5>\n      <ngb-accordion [closeOthers]=\"true\" activeIds=\"static-1\" class=\"next-accordion\">\n        <ngb-panel id=\"static-1\">\n          <ng-template ngbPanelTitle>\n            <h5><a href=\"javascript:\">Collapsible Group Item #1</a></h5>\n          </ng-template>\n          <ng-template ngbPanelContent>\n            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n            aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n            sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n            craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n            occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n            labore sustainable VHS.\n          </ng-template>\n        </ngb-panel>\n        <ngb-panel id=\"static-2\">\n          <ng-template ngbPanelTitle>\n            <h5><a href=\"javascript:\">Collapsible Group Item #2</a></h5>\n          </ng-template>\n          <ng-template ngbPanelContent>\n            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n            aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n            sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n            craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n            occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n            labore sustainable VHS.\n          </ng-template>\n        </ngb-panel>\n        <ngb-panel id=\"static-3\">\n          <ng-template ngbPanelTitle>\n            <h5><a href=\"javascript:\">Collapsible Group Item #3</a></h5>\n          </ng-template>\n          <ng-template ngbPanelContent>\n            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n            aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n            sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n            craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n            occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n            labore sustainable VHS.\n          </ng-template>\n        </ngb-panel>\n      </ngb-accordion>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-collapse/basic-collapse-routing.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-collapse/basic-collapse-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: BasicCollapseRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicCollapseRoutingModule", function() { return BasicCollapseRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _basic_collapse_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-collapse.component */ "./src/app/demo/ui-elements/ui-basic/basic-collapse/basic-collapse.component.ts");




const routes = [
    {
        path: '',
        component: _basic_collapse_component__WEBPACK_IMPORTED_MODULE_3__["BasicCollapseComponent"]
    }
];
let BasicCollapseRoutingModule = class BasicCollapseRoutingModule {
};
BasicCollapseRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BasicCollapseRoutingModule);



/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-collapse/basic-collapse.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-collapse/basic-collapse.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vdWktZWxlbWVudHMvdWktYmFzaWMvYmFzaWMtY29sbGFwc2UvYmFzaWMtY29sbGFwc2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-collapse/basic-collapse.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-collapse/basic-collapse.component.ts ***!
  \**************************************************************************************/
/*! exports provided: BasicCollapseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicCollapseComponent", function() { return BasicCollapseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BasicCollapseComponent = class BasicCollapseComponent {
    constructor() {
    }
    ngOnInit() {
        this.isCollapsed = true;
        this.multiCollapsed1 = true;
        this.multiCollapsed2 = true;
    }
};
BasicCollapseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-basic-collapse',
        template: __webpack_require__(/*! raw-loader!./basic-collapse.component.html */ "./node_modules/raw-loader/index.js!./src/app/demo/ui-elements/ui-basic/basic-collapse/basic-collapse.component.html"),
        styles: [__webpack_require__(/*! ./basic-collapse.component.scss */ "./src/app/demo/ui-elements/ui-basic/basic-collapse/basic-collapse.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], BasicCollapseComponent);



/***/ }),

/***/ "./src/app/demo/ui-elements/ui-basic/basic-collapse/basic-collapse.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-collapse/basic-collapse.module.ts ***!
  \***********************************************************************************/
/*! exports provided: BasicCollapseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicCollapseModule", function() { return BasicCollapseModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _basic_collapse_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-collapse-routing.module */ "./src/app/demo/ui-elements/ui-basic/basic-collapse/basic-collapse-routing.module.ts");
/* harmony import */ var _basic_collapse_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./basic-collapse.component */ "./src/app/demo/ui-elements/ui-basic/basic-collapse/basic-collapse.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");







let BasicCollapseModule = class BasicCollapseModule {
};
BasicCollapseModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _basic_collapse_routing_module__WEBPACK_IMPORTED_MODULE_3__["BasicCollapseRoutingModule"],
            _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbCollapseModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbAccordionModule"]
        ],
        declarations: [_basic_collapse_component__WEBPACK_IMPORTED_MODULE_4__["BasicCollapseComponent"]]
    })
], BasicCollapseModule);



/***/ })

}]);
//# sourceMappingURL=basic-collapse-basic-collapse-module-es2015.js.map