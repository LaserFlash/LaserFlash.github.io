(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about-view/about-view.component.ts":
/*!****************************************************!*\
  !*** ./src/app/about-view/about-view.component.ts ***!
  \****************************************************/
/*! exports provided: AboutViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutViewComponent", function() { return AboutViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm5/flex.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button.js");





var AboutViewComponent = /** @class */ (function () {
    function AboutViewComponent() {
    }
    AboutViewComponent.prototype.ngOnInit = function () { };
    AboutViewComponent.ɵfac = function AboutViewComponent_Factory(t) { return new (t || AboutViewComponent)(); };
    AboutViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutViewComponent, selectors: [["app-about-view"]], decls: 34, vars: 0, consts: [["fxLayout", "row", 2, "padding-left", "2px", "padding-right", "2px"], ["fxFlex.gt-sm", "calc(50% - 900px)", "fxFlex", "0"], ["fxFlex", "grow", "fxFlex.gt-sm", "900px"], ["srcset", "assets/images/skiing.webp", "type", "image/webp"], ["srcset", "assets/images/skiing.png", "type", "image/jpeg"], ["mat-card-image", "", "src", "assets/images/skiing.png", "alt", "Bryn skiing on Mt Ruapehu"], [1, "about-content"], ["align", "end", 1, "card-content"], ["color", "accent", "href", "https://github.com/LaserFlash", "mat-button", ""]], template: function AboutViewComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "About");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-subtitle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Bryn Bennett \"LaserFlash\"");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "picture");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "source", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "source", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-content", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Me");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " I am a fourth-year Software Engineering student at Victoria University. Some of my other passions include: yachting, canoe polo, skiing, and gaming. As well as spending a large amount of time completing university projects I develop and work on some of my own personal projects and balance this with spending time training for national and international regattas as part of the Wellington Youth Sailing Trust Youth Scheme. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " My most noteable project is developing a system for Yacht clubs to log how their boats are used and breakages that they may have. This soloution is in the form of a web app and has been deployed and is in active use by: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Wellington Youth Sailing Trust");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Tup Radford Intercollegiate Yachting Academy");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "New Plymouth Yacht Club");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Queen Charlotte Yacht Club");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-card-actions", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "GitHub");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatAnchor"]], styles: [".card-width[_ngcontent-%COMP%] {\n  min-width: 20em;\n  max-width: 80em;\n}\n\n.about-content[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQtdmlldy9hYm91dC12aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9hYm91dC12aWV3L2Fib3V0LXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLXdpZHRoIHtcbiAgbWluLXdpZHRoOiAyMGVtO1xuICBtYXgtd2lkdGg6IDgwZW07XG59XG5cbi5hYm91dC1jb250ZW50IHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuIl19 */"] });
    return AboutViewComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about-view',
                templateUrl: './about-view.component.html',
                styleUrls: ['./about-view.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _portfolio_view_portfolio_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./portfolio-view/portfolio-view.component */ "./src/app/portfolio-view/portfolio-view.component.ts");
/* harmony import */ var _about_view_about_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-view/about-view.component */ "./src/app/about-view/about-view.component.ts");






var routes = [
    { path: '', redirectTo: '/portfolio', pathMatch: 'full' },
    {
        path: 'portfolio',
        component: _portfolio_view_portfolio_view_component__WEBPACK_IMPORTED_MODULE_2__["PortfolioViewComponent"],
        data: { state: 'portfolio' }
    },
    { path: 'about', component: _about_view_about_view_component__WEBPACK_IMPORTED_MODULE_3__["AboutViewComponent"], data: { state: 'about' } },
    { path: '**', redirectTo: '/portfolio' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return AppRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/toolbar.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm5/flex.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/tabs.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");









function AppComponent_a_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var routeLink_r2 = ctx.$implicit;
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", routeLink_r2.link)("active", _r4.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", routeLink_r2.label, " ");
} }
var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.inkColour = '#087f23';
        this.titleFirst = 'Bryn Bennett';
        this.titleSecond = '"LaserFlash"';
        this.routeLinks = [
            { label: 'Portfolio', link: '/portfolio' },
            { label: 'About', link: '/about' }
        ];
        this.SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])) {
                return;
            }
            var element = document.getElementById('scrollId');
            setTimeout(function () {
                element.scrollIntoView();
                window.scrollTo(0, 0);
            }, 300);
        });
    };
    AppComponent.prototype.swipe = function (action) {
        var _this = this;
        var currentIndex = this.routeLinks.indexOf(this.routeLinks.filter(function (item) {
            if (item.link === _this.router.url) {
                return item;
            }
        })[0]);
        var nextIndex = action === this.SWIPE_ACTION.RIGHT
            ? currentIndex - 1
            : action === this.SWIPE_ACTION.LEFT
                ? currentIndex + 1
                : currentIndex;
        if (nextIndex >= 0 &&
            nextIndex < this.routeLinks.length &&
            nextIndex !== currentIndex) {
            this.router.navigateByUrl(this.routeLinks[nextIndex].link);
        }
    };
    AppComponent.prototype.getState = function (outlet) {
        return outlet.activatedRouteData.state;
    };
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 21, vars: 4, consts: [["color", "primary"], ["srcset", "assets/images/logo.webp", "type", "image/webp"], ["srcset", "assets/images/logo.png", "type", "image/jpeg"], ["src", "assets/images/logo.png", "alt", "Bryn Bennett 'LaserFlash'", 1, "menuLogo"], [1, "menuSpacer"], [1, "menuTitle"], [1, "firstH1"], [1, "secondH1"], ["fxFlex", ""], ["mat-tab-nav-bar", ""], ["mat-tab-link", "", "backgroundColor", "accent", "routerLinkActive", "", 3, "routerLink", "active", 4, "ngFor", "ngForOf"], [2, "background", "#37474f"], ["id", "scrollId", 1, "content-spacer"], [1, "content", 3, "swipeleft", "swiperight"], ["o", "outlet"], ["mat-tab-link", "", "backgroundColor", "accent", "routerLinkActive", "", 3, "routerLink", "active"], ["rla", "routerLinkActive"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "picture");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "source", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "source", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nav", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AppComponent_a_15_Template, 3, 3, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "main", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("swipeleft", function AppComponent_Template_main_swipeleft_18_listener($event) { return ctx.swipe($event.type); })("swiperight", function AppComponent_Template_main_swiperight_18_listener($event) { return ctx.swipe($event.type); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "router-outlet", null, 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titleFirst);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titleSecond);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.routeLinks);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@routerTransition", ctx.getState(_r1));
        } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabNav"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["mat-toolbar.mat-toolbar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  z-index: 1;\n  padding: 0 8px 0 8px;\n}\n.menuLogo[_ngcontent-%COMP%] {\n  height: 2.5em;\n  vertical-align: middle;\n}\n.menuSpacer[_ngcontent-%COMP%] {\n  min-width: 0.5em;\n}\n.mat-tab-link[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 2em;\n  height: 2em;\n  min-width: 12ch;\n  opacity: 1;\n  color: black;\n}\n  .mat-ink-bar {\n  background-color: #087f23 !important;\n}\n.menuTitle[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  line-height: 2ch;\n  font-size: 18px;\n}\n.content-spacer[_ngcontent-%COMP%] {\n  height: 54px;\n}\n\n@media screen and (min-width: 600px) {\n  .menuTitle[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    display: inline;\n  }\n\n  .menuTitle[_ngcontent-%COMP%]   .secondH1[_ngcontent-%COMP%] {\n    padding-left: 1ch;\n  }\n\n  .mat-tab-link[_ngcontent-%COMP%] {\n    min-width: 16ch;\n  }\n\n  .content-spacer[_ngcontent-%COMP%] {\n    height: 60px;\n  }\n}\n\n@media screen and (max-width: 440px) {\n  .menuTitle[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQXFDO0FBQ3JDO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixRQUFRO0VBQ1IsVUFBVTtFQUNWLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsVUFBVTtFQUNWLFlBQVk7QUFDZDtBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBRUEsbUJBQW1CO0FBQ25CO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFlBQVk7RUFDZDtBQUNGO0FBRUEsbUJBQW1CO0FBQ25CO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRnVsbCBzaXplIHRvb2xiYXIgZm9yIG5hdmlnYXRpb24gKi9cbm1hdC10b29sYmFyLm1hdC10b29sYmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAxO1xuICBwYWRkaW5nOiAwIDhweCAwIDhweDtcbn1cblxuLm1lbnVMb2dvIHtcbiAgaGVpZ2h0OiAyLjVlbTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLm1lbnVTcGFjZXIge1xuICBtaW4td2lkdGg6IDAuNWVtO1xufVxuXG4ubWF0LXRhYi1saW5rIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMmVtO1xuICBoZWlnaHQ6IDJlbTtcbiAgbWluLXdpZHRoOiAxMmNoO1xuICBvcGFjaXR5OiAxO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbjo6bmctZGVlcCAubWF0LWluay1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDg3ZjIzICFpbXBvcnRhbnQ7XG59XG5cbi5tZW51VGl0bGUgaDEge1xuICBsaW5lLWhlaWdodDogMmNoO1xuICBmb250LXNpemU6IDE4cHg7XG59XG4uY29udGVudC1zcGFjZXIge1xuICBoZWlnaHQ6IDU0cHg7XG59XG5cbi8qIExhcmdlIGRpc3BsYXlzICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAubWVudVRpdGxlIGgxIHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gIH1cblxuICAubWVudVRpdGxlIC5zZWNvbmRIMSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxY2g7XG4gIH1cblxuICAubWF0LXRhYi1saW5rIHtcbiAgICBtaW4td2lkdGg6IDE2Y2g7XG4gIH1cblxuICAuY29udGVudC1zcGFjZXIge1xuICAgIGhlaWdodDogNjBweDtcbiAgfVxufVxuXG4vKiBTbWFsbCBkaXNwbGF5cyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDQwcHgpIHtcbiAgLm1lbnVUaXRsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuIl19 */"], data: { animation: [_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"]] } });
    return AppComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                animations: [_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"]],
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm5/overlay.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/sidenav.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/tabs.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/list.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/icon.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/card.js");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/__ivy_ngcc__/fesm5/ngx-markdown.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _portfolio_view_portfolio_view_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./portfolio-view/portfolio-view.component */ "./src/app/portfolio-view/portfolio-view.component.ts");
/* harmony import */ var _about_view_about_view_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./about-view/about-view.component */ "./src/app/about-view/about-view.component.ts");
/* harmony import */ var _code_list_code_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./code-list/code-list.component */ "./src/app/code-list/code-list.component.ts");
/* harmony import */ var _language_icon_language_icon_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./language-icon/language-icon.component */ "./src/app/language-icon/language-icon.component.ts");
/* harmony import */ var _portfolio_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./portfolio.service */ "./src/app/portfolio.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _hammer_config__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./hammer.config */ "./src/app/hammer.config.ts");


























var AppModule = /** @class */ (function () {
    function AppModule(overlayContainer) {
        overlayContainer.getContainerElement().classList.add('my-app-theme');
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayContainer"])); }, providers: [
            _portfolio_service__WEBPACK_IMPORTED_MODULE_20__["PortfolioService"],
            { provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HAMMER_GESTURE_CONFIG"], useClass: _hammer_config__WEBPACK_IMPORTED_MODULE_22__["HammerConfig"] },
            { provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_3__["HashLocationStrategy"] }
        ], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_21__["AppRoutingModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
                ngx_markdown__WEBPACK_IMPORTED_MODULE_14__["MarkdownModule"].forRoot()
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"],
        _portfolio_view_portfolio_view_component__WEBPACK_IMPORTED_MODULE_16__["PortfolioViewComponent"],
        _about_view_about_view_component__WEBPACK_IMPORTED_MODULE_17__["AboutViewComponent"],
        _code_list_code_list_component__WEBPACK_IMPORTED_MODULE_18__["CodeListComponent"],
        _language_icon_language_icon_component__WEBPACK_IMPORTED_MODULE_19__["LanguageIconComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_21__["AppRoutingModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_14__["MarkdownModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"],
                    _portfolio_view_portfolio_view_component__WEBPACK_IMPORTED_MODULE_16__["PortfolioViewComponent"],
                    _about_view_about_view_component__WEBPACK_IMPORTED_MODULE_17__["AboutViewComponent"],
                    _code_list_code_list_component__WEBPACK_IMPORTED_MODULE_18__["CodeListComponent"],
                    _language_icon_language_icon_component__WEBPACK_IMPORTED_MODULE_19__["LanguageIconComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_21__["AppRoutingModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
                    ngx_markdown__WEBPACK_IMPORTED_MODULE_14__["MarkdownModule"].forRoot()
                ],
                providers: [
                    _portfolio_service__WEBPACK_IMPORTED_MODULE_20__["PortfolioService"],
                    { provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HAMMER_GESTURE_CONFIG"], useClass: _hammer_config__WEBPACK_IMPORTED_MODULE_22__["HammerConfig"] },
                    { provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_3__["HashLocationStrategy"] }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]]
            }]
    }], function () { return [{ type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayContainer"] }]; }, null); })();


/***/ }),

/***/ "./src/app/code-list/code-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/code-list/code-list.component.ts ***!
  \**************************************************/
/*! exports provided: CodeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeListComponent", function() { return CodeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/card.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/toolbar.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm5/flex.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _language_icon_language_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../language-icon/language-icon.component */ "./src/app/language-icon/language-icon.component.ts");







function CodeListComponent_app_language_icon_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-language-icon", 5);
} if (rf & 2) {
    var icon_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIconName", icon_r12.svgIconName)("svgIconPath", icon_r12.svgIconPath)("text", icon_r12.text);
} }
var CodeListComponent = /** @class */ (function () {
    function CodeListComponent() {
        this.iconList = [
            {
                svgIconName: 'firebase',
                svgIconPath: '../assets/images/language-icons/firebase.svg',
                text: 'Firebase'
            },
            {
                svgIconName: 'angular',
                svgIconPath: '../assets/images/language-icons/angular.svg',
                text: 'Angular'
            },
            {
                svgIconName: 'react',
                svgIconPath: '../assets/images/language-icons/react.svg',
                text: 'React'
            },
            {
                svgIconName: 'html',
                svgIconPath: '../assets/images/language-icons/html.svg',
                text: 'HTML'
            },
            {
                svgIconName: 'css',
                svgIconPath: '../assets/images/language-icons/css.svg',
                text: 'CSS'
            },
            {
                svgIconName: 'java',
                svgIconPath: '../assets/images/language-icons/java.svg',
                text: 'Java'
            },
            {
                svgIconName: 'csharp',
                svgIconPath: '../assets/images/language-icons/csharp.svg',
                text: 'C#'
            },
            {
                svgIconName: 'github',
                svgIconPath: '../assets/images/language-icons/github.svg',
                text: 'GitHub'
            },
            {
                svgIconName: 'git',
                svgIconPath: '../assets/images/language-icons/git.svg',
                text: 'Git'
            }
        ];
    }
    CodeListComponent.prototype.ngOnInit = function () { };
    CodeListComponent.ɵfac = function CodeListComponent_Factory(t) { return new (t || CodeListComponent)(); };
    CodeListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CodeListComponent, selectors: [["app-code-list"]], decls: 6, vars: 1, consts: [[1, "code-list-container"], [1, "heading"], [1, "title-center"], ["fxLayout", "row wrap", "fxLayoutAlign", "center", "fxLayoutWrap", "", 1, "code-icons"], [3, "svgIconName", "svgIconPath", "text", 4, "ngFor", "ngForOf"], [3, "svgIconName", "svgIconPath", "text"]], template: function CodeListComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Languages & Frameworks");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CodeListComponent_app_language_icon_5_Template, 1, 3, "app-language-icon", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.iconList);
        } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _language_icon_language_icon_component__WEBPACK_IMPORTED_MODULE_5__["LanguageIconComponent"]], styles: [".code-list-container[_ngcontent-%COMP%] {\n  padding-bottom: 48px;\n  background-color: #1c313a;\n}\n\n.code-icons[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 0 auto;\n  background-color: #1c313a;\n  text-align: center;\n}\n\n.heading[_ngcontent-%COMP%] {\n  justify-content: center;\n  background-color: #1c313a;\n  color: white;\n}\n\n.title-center[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29kZS1saXN0L2NvZGUtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0VBQ3BCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvZGUtbGlzdC9jb2RlLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2RlLWxpc3QtY29udGFpbmVyIHtcbiAgcGFkZGluZy1ib3R0b206IDQ4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYzMxM2E7XG59XG5cbi5jb2RlLWljb25zIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYzMxM2E7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhlYWRpbmcge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFjMzEzYTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udGl0bGUtY2VudGVyIHtcbiAgZmxleDogMSAxIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */"] });
    return CodeListComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CodeListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-code-list',
                templateUrl: './code-list.component.html',
                styleUrls: ['./code-list.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/hammer.config.ts":
/*!**********************************!*\
  !*** ./src/app/hammer.config.ts ***!
  \**********************************/
/*! exports provided: HammerConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HammerConfig", function() { return HammerConfig; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var HammerConfig = /** @class */ (function (_super) {
    __extends(HammerConfig, _super);
    function HammerConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.overrides = {
            pinch: { enable: false },
            rotate: { enable: false },
            doubletap: { enable: false }
            // ...
        };
        return _this;
    }
    HammerConfig.prototype.buildHammer = function (element) {
        return new hammerjs__WEBPACK_IMPORTED_MODULE_1__(element, {
            inputClass: hammerjs__WEBPACK_IMPORTED_MODULE_1__["TouchInput"],
            touchAction: 'pan-y' // If using horizontal gestures - http://hammerjs.github.io/touch-action/
        });
    };
    HammerConfig.ɵfac = function HammerConfig_Factory(t) { return ɵHammerConfig_BaseFactory(t || HammerConfig); };
    HammerConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: HammerConfig, factory: HammerConfig.ɵfac });
    return HammerConfig;
}(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerGestureConfig"]));

var ɵHammerConfig_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](HammerConfig);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](HammerConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/language-icon/language-icon.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/language-icon/language-icon.component.ts ***!
  \**********************************************************/
/*! exports provided: LanguageIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageIconComponent", function() { return LanguageIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/icon.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");






var LanguageIconComponent = /** @class */ (function () {
    function LanguageIconComponent(matIconRegistry, domSanitizer) {
        this.matIconRegistry = matIconRegistry;
        this.domSanitizer = domSanitizer;
    }
    LanguageIconComponent.prototype.ngOnInit = function () {
        this.matIconRegistry.addSvgIcon(this.svgIconName, this.domSanitizer.bypassSecurityTrustResourceUrl(this.svgIconPath));
    };
    LanguageIconComponent.ɵfac = function LanguageIconComponent_Factory(t) { return new (t || LanguageIconComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconRegistry"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"])); };
    LanguageIconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LanguageIconComponent, selectors: [["app-language-icon"]], inputs: { svgIconName: "svgIconName", svgIconPath: "svgIconPath", text: "text" }, decls: 3, vars: 2, consts: [[1, "icon"], [3, "inline", "svgIcon"]], template: function LanguageIconComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("svgIcon", ctx.svgIconName);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.text);
        } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"]], styles: [".mat-icon[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n}\n\n.icon[_ngcontent-%COMP%] {\n  padding: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZ3VhZ2UtaWNvbi9sYW5ndWFnZS1pY29uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvbGFuZ3VhZ2UtaWNvbi9sYW5ndWFnZS1pY29uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWljb24ge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuXG4uaWNvbiB7XG4gIHBhZGRpbmc6IDRweDtcbn1cbiJdfQ== */"] });
    return LanguageIconComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LanguageIconComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-language-icon',
                templateUrl: './language-icon.component.html',
                styleUrls: ['./language-icon.component.css']
            }]
    }], function () { return [{ type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconRegistry"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }]; }, { svgIconName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], svgIconPath: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/portfolio-view/portfolio-item/portfolioButton.ts":
/*!******************************************************************!*\
  !*** ./src/app/portfolio-view/portfolio-item/portfolioButton.ts ***!
  \******************************************************************/
/*! exports provided: PortfolioButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioButton", function() { return PortfolioButton; });
var PortfolioButton = /** @class */ (function () {
    function PortfolioButton(name, link) {
        this.name = name;
        this.link = link;
    }
    return PortfolioButton;
}());



/***/ }),

/***/ "./src/app/portfolio-view/portfolio-item/portfolioItem.ts":
/*!****************************************************************!*\
  !*** ./src/app/portfolio-view/portfolio-item/portfolioItem.ts ***!
  \****************************************************************/
/*! exports provided: PortfolioItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioItem", function() { return PortfolioItem; });
var PortfolioItem = /** @class */ (function () {
    function PortfolioItem(title, blurb, image, sourceButton, viewButton) {
        this.title = title;
        this.blurb = blurb;
        this.image = image;
        this.sourceButton = sourceButton;
        this.viewButton = viewButton;
    }
    return PortfolioItem;
}());



/***/ }),

/***/ "./src/app/portfolio-view/portfolio-view.component.ts":
/*!************************************************************!*\
  !*** ./src/app/portfolio-view/portfolio-view.component.ts ***!
  \************************************************************/
/*! exports provided: PortfolioViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioViewComponent", function() { return PortfolioViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _portfolio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../portfolio.service */ "./src/app/portfolio.service.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm5/flex.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _code_list_code_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../code-list/code-list.component */ "./src/app/code-list/code-list.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/card.js");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/__ivy_ngcc__/fesm5/ngx-markdown.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button.js");










function PortfolioViewComponent_div_3_a_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", item_r6.viewButton.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r6.viewButton.name, " ");
} }
function PortfolioViewComponent_div_3_a_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", item_r6.sourceButton.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r6.sourceButton.name, " ");
} }
function PortfolioViewComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "source", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "source", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-content", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "markdown");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card-actions", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PortfolioViewComponent_div_3_a_14_Template, 2, 2, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PortfolioViewComponent_div_3_a_15_Template, 2, 2, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("srcset", "", item_r6.image, ".webp", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("srcset", "", item_r6.image, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", item_r6.image, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n            ", item_r6.blurb, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r6.viewButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r6.sourceButton);
} }
var PortfolioViewComponent = /** @class */ (function () {
    function PortfolioViewComponent(portfolioService) {
        this.items = portfolioService.portfolioItems;
    }
    PortfolioViewComponent.prototype.ngOnInit = function () { };
    PortfolioViewComponent.ɵfac = function PortfolioViewComponent_Factory(t) { return new (t || PortfolioViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_portfolio_service__WEBPACK_IMPORTED_MODULE_1__["PortfolioService"])); };
    PortfolioViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortfolioViewComponent, selectors: [["app-portfolio-view"]], decls: 6, vars: 1, consts: [["fxLayout", "row", 2, "padding-left", "2px", "padding-right", "2px"], ["fxFlex.gt-md", "calc(50% -1280px)", "fxFlex", "0"], ["fxFlex.gt-md", "1280px", "fxLayout", "row wrap", "fxLayoutWrap", "", 1, "card-deck-container"], ["class", "card-container card-width", "fxFlex.gt-md", "calc(25% - 8px)", "fxFlex.lt-lg", "calc(33% - 8px)", "fxFlex.lt-md", "calc(50% - 8px)", "fxFlex.lt-sm", "100%", 4, "ngFor", "ngForOf"], ["fxFlex.gt-md", "calc(25% - 8px)", "fxFlex.lt-lg", "calc(33% - 8px)", "fxFlex.lt-md", "calc(50% - 8px)", "fxFlex.lt-sm", "100%", 1, "card-container", "card-width"], ["fxFlex", "grow"], ["type", "image/webp", 3, "srcset"], ["type", "image/jpeg", 3, "srcset"], ["mat-card-image", "", "alt", "Image indicating project type", 1, "card-image", 3, "src"], [1, "card-content"], ["align", "end", 1, "card-content"], ["color", "accent", "mat-button", "", 3, "href", 4, "ngIf"], ["color", "accent", "mat-button", "", 3, "href"]], template: function PortfolioViewComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PortfolioViewComponent_div_3_Template, 16, 7, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-code-list");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _code_list_code_list_component__WEBPACK_IMPORTED_MODULE_4__["CodeListComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], ngx_markdown__WEBPACK_IMPORTED_MODULE_6__["MarkdownComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardActions"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"]], styles: [".card-deck-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.card-container[_ngcontent-%COMP%] {\n  margin: 0px 4px 8px 4px;\n}\n\n.mat-card[_ngcontent-%COMP%] {\n  padding-top: 0;\n}\n\n.card-image[_ngcontent-%COMP%] {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n\n.card-content[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n@media only screen and (max-width: 599px) {\n  .card-container[_ngcontent-%COMP%] {\n    margin: 0px 0px 8px 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGZvbGlvLXZpZXcvcG9ydGZvbGlvLXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wb3J0Zm9saW8tdmlldy9wb3J0Zm9saW8tdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtZGVjay1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNhcmQtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwcHggNHB4IDhweCA0cHg7XG59XG5cbi5tYXQtY2FyZCB7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4uY2FyZC1pbWFnZSB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcbn1cblxuLmNhcmQtY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xuICAuY2FyZC1jb250YWluZXIge1xuICAgIG1hcmdpbjogMHB4IDBweCA4cHggMHB4O1xuICB9XG59XG4iXX0= */"] });
    return PortfolioViewComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-portfolio-view',
                templateUrl: './portfolio-view.component.html',
                styleUrls: ['./portfolio-view.component.css']
            }]
    }], function () { return [{ type: _portfolio_service__WEBPACK_IMPORTED_MODULE_1__["PortfolioService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/portfolio.service.ts":
/*!**************************************!*\
  !*** ./src/app/portfolio.service.ts ***!
  \**************************************/
/*! exports provided: PortfolioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioService", function() { return PortfolioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _portfolio_view_portfolio_item_portfolioItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./portfolio-view/portfolio-item/portfolioItem */ "./src/app/portfolio-view/portfolio-item/portfolioItem.ts");
/* harmony import */ var _portfolio_view_portfolio_item_portfolioButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./portfolio-view/portfolio-item/portfolioButton */ "./src/app/portfolio-view/portfolio-item/portfolioButton.ts");
// tslint:disable:max-line-length




var PortfolioService = /** @class */ (function () {
    function PortfolioService() {
        this.portfolioItems = [];
        this.portfolioItems.push(new _portfolio_view_portfolio_item_portfolioItem__WEBPACK_IMPORTED_MODULE_1__["PortfolioItem"]('Steam Friends Theme', 'A different take on a theme for the Steam Friends UI \n #### Customisation \n Comes with different status and avatar styles as well as dark and light themes', 'assets/images/steam', new _portfolio_view_portfolio_item_portfolioButton__WEBPACK_IMPORTED_MODULE_2__["PortfolioButton"]('Source', 'https://github.com/LaserFlash/steam-friends-skin'), new _portfolio_view_portfolio_item_portfolioButton__WEBPACK_IMPORTED_MODULE_2__["PortfolioButton"]('Website', 'https://laserflash.tk/steam-chat-skin-website/')));
        this.portfolioItems.push(new _portfolio_view_portfolio_item_portfolioItem__WEBPACK_IMPORTED_MODULE_1__["PortfolioItem"]('Boat Logging', 'This is a web app for boat/yacht clubs to record boat usage, maintenance, incident reporting, and safety prodcedures. \n\n This app and its deriviations are used by the following yacht clubs: \n - WYST \n - TRIYA \n - NPYC \n - QCYC \n \n Satisfying the Marine Operators Safety System (MOSS) requirements of Maritime New Zealand and Yachting New Zealand\'s  Health and Safety requirements.', 'assets/images/nespresso', new _portfolio_view_portfolio_item_portfolioButton__WEBPACK_IMPORTED_MODULE_2__["PortfolioButton"]('Source', 'https://github.com/LaserFlash/WYST-Maintenance'), new _portfolio_view_portfolio_item_portfolioButton__WEBPACK_IMPORTED_MODULE_2__["PortfolioButton"]('Website', 'https://wyst-stuff.tk')));
        this.portfolioItems.push(new _portfolio_view_portfolio_item_portfolioItem__WEBPACK_IMPORTED_MODULE_1__["PortfolioItem"]('Portfolio Site', 'Construction and design of this website. This project tends to get bursts of updates as I becoming intereseted in implementing a new feature, or have a new portfolio item to add. It is regularly revisited however \n\n The site is built with **Angular8**', 'assets/images/flatWebsite', new _portfolio_view_portfolio_item_portfolioButton__WEBPACK_IMPORTED_MODULE_2__["PortfolioButton"]('Source', 'https://github.com/LaserFlash/LaserFlash.github.io'), new _portfolio_view_portfolio_item_portfolioButton__WEBPACK_IMPORTED_MODULE_2__["PortfolioButton"]('Website', 'https://laserflash.tk')));
        this.portfolioItems.push(new _portfolio_view_portfolio_item_portfolioItem__WEBPACK_IMPORTED_MODULE_1__["PortfolioItem"]('Pihinga - Job Search', ' [**Pihinga**](https://www.facebook.com/Pihinga) was a startup focused around helping single parents find employment relevant to them, we were tasked with designing a platform where jobs intended for this audience could be listed and applied to by the parents. \n\n This required interactions with the client **Pihinga** throughout the planning and development cycle and managing their requests. \n Deliverables: \n - Requirement Specification \n - Project Architecture \n - Wireframing and Design \n - Skeleton Implementation \n - Minimum Viable Product \n - Final Solution / Handover \n\n **Tools and Frameworks**: ReactJS, Firebase, and Xanpan styled development ', 'assets/images/pihinga', null, null));
        this.portfolioItems.push(new _portfolio_view_portfolio_item_portfolioItem__WEBPACK_IMPORTED_MODULE_1__["PortfolioItem"]('The Finding of I, Zack', 'A **Java** game built for **SWEN222**. \n\n This was worked on by a group of five while at Victoria University. The original idea was inspired by "The Binding Of Issac", a top down dungeon crawler. I was primarily in charge of designing the user interface, and implementing the rendering of entities and the world. \n #### Design \n Follows a Model View Controller (MVC) design approach, using Java Swing for visual aspects', 'assets/images/IZack', new _portfolio_view_portfolio_item_portfolioButton__WEBPACK_IMPORTED_MODULE_2__["PortfolioButton"]('Source', 'https://github.com/LaserFlash/The-Finding-Of-I-Zack'), null));
        this.portfolioItems.push(new _portfolio_view_portfolio_item_portfolioItem__WEBPACK_IMPORTED_MODULE_1__["PortfolioItem"]('DimThing', 'Program that allows for further dimming of screen through the use of a transparent overlay. Has support for keyboard shortcuts to adjust dimness and toggle immersive mode on or off. \n\n #### Immersive Mode \n Allows for the adjustment of secondary screens seperatly to the main screen. Intented use is dimming a secondary screen while playing a game or watching a video', 'assets/images/DimThing', new _portfolio_view_portfolio_item_portfolioButton__WEBPACK_IMPORTED_MODULE_2__["PortfolioButton"]('Source', 'https://github.com/LaserFlash/DimThing'), null));
        this.portfolioItems.push(new _portfolio_view_portfolio_item_portfolioItem__WEBPACK_IMPORTED_MODULE_1__["PortfolioItem"]('ENGR 110 SCARA', 'This was a group project, implementing basic drawing functionality on a provided Raspberry Pi incorporated into a SCARA setup (Selective Compliance Articulated Robot Arm). \n\n This implementation is writen in **Java**', 'assets/images/SCARA', new _portfolio_view_portfolio_item_portfolioButton__WEBPACK_IMPORTED_MODULE_2__["PortfolioButton"]('Source', 'https://github.com/LaserFlash/ENGR110-SCARA'), null));
        this.portfolioItems.push(new _portfolio_view_portfolio_item_portfolioItem__WEBPACK_IMPORTED_MODULE_1__["PortfolioItem"]('ENGR 101 Autonomous Vehicle', 'This was a group project, with the goal of designing and constructing a small autonomous vehicle to get through given sections of a maze. \n #### Maze \n The maze consisted of two sections. A taped white line to follow on the ground and a walled section. \n The taped section relied on a camera for navigation while the walled area used IR sensors to position the vehicle.', 'assets/images/AVC', new _portfolio_view_portfolio_item_portfolioButton__WEBPACK_IMPORTED_MODULE_2__["PortfolioButton"]('Source', 'https://github.com/papasele/AVCteam1'), null));
    }
    PortfolioService.ɵfac = function PortfolioService_Factory(t) { return new (t || PortfolioService)(); };
    PortfolioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PortfolioService, factory: PortfolioService.ɵfac });
    return PortfolioService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/router.animations.ts":
/*!**************************************!*\
  !*** ./src/app/router.animations.ts ***!
  \**************************************/
/*! exports provided: routerTransition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerTransition", function() { return routerTransition; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm5/animations.js");

var routerTransition = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => portfolio', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), {
            optional: true
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'absolute', width: '100%' }), {
            optional: true
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms cubic-bezier(.75,-0.48,.26,1.52)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms cubic-bezier(.75,-0.48,.26,1.52)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }))
            ], { optional: true })
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => about', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), {
                optional: true
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'absolute', width: '100%' }), {
                optional: true
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms cubic-bezier(.75,-0.48,.26,1.52)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms cubic-bezier(.75,-0.48,.26,1.52)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
            ], { optional: true })
        ])
    ])
]);


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/LaserFlash.github.io/LaserFlash.github.io/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map