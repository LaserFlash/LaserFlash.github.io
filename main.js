(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/LaserFlash.github.io/LaserFlash.github.io/src/main.ts */"zUnb");


/***/ }),

/***/ "3GQ/":
/*!************************************************************!*\
  !*** ./src/app/portfolio-view/portfolio-view.component.ts ***!
  \************************************************************/
/*! exports provided: PortfolioViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioViewComponent", function() { return PortfolioViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _portfolio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../portfolio.service */ "J9UH");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _code_list_code_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../code-list/code-list.component */ "HZfp");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-markdown */ "lR5k");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");








function PortfolioViewComponent_div_3_a_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", item_r1.viewButton.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.viewButton.name, " ");
} }
function PortfolioViewComponent_div_3_a_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", item_r1.sourceButton.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.sourceButton.name, " ");
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
    var item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("srcset", "", item_r1.image, ".webp", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("srcset", "", item_r1.image, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", item_r1.image, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n            ", item_r1.blurb, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.viewButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.sourceButton);
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
        } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _code_list_code_list_component__WEBPACK_IMPORTED_MODULE_4__["CodeListComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], ngx_markdown__WEBPACK_IMPORTED_MODULE_6__["MarkdownComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardActions"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"]], styles: [".card-deck-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.card-container[_ngcontent-%COMP%] {\n  margin: 0px 4px 8px 4px;\n}\n\n.mat-card[_ngcontent-%COMP%] {\n  padding-top: 0;\n}\n\n.card-image[_ngcontent-%COMP%] {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n\n.card-content[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n@media only screen and (max-width: 599px) {\n  .card-container[_ngcontent-%COMP%] {\n    margin: 0px 0px 8px 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcnRmb2xpby12aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRTtJQUNFLHVCQUF1QjtFQUN6QjtBQUNGIiwiZmlsZSI6InBvcnRmb2xpby12aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1kZWNrLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2FyZC1jb250YWluZXIge1xuICBtYXJnaW46IDBweCA0cHggOHB4IDRweDtcbn1cblxuLm1hdC1jYXJkIHtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5cbi5jYXJkLWltYWdlIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xufVxuXG4uY2FyZC1jb250ZW50IHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gIC5jYXJkLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAwcHggMHB4IDhweCAwcHg7XG4gIH1cbn1cbiJdfQ== */"] });
    return PortfolioViewComponent;
}());



/***/ }),

/***/ "AytR":
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

/***/ "DJQP":
/*!**********************************************************!*\
  !*** ./src/app/language-icon/language-icon.component.ts ***!
  \**********************************************************/
/*! exports provided: LanguageIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageIconComponent", function() { return LanguageIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");



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
        } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"]], styles: [".mat-icon[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n}\n\n.icon[_ngcontent-%COMP%] {\n  padding: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmd1YWdlLWljb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoibGFuZ3VhZ2UtaWNvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1pY29uIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbn1cblxuLmljb24ge1xuICBwYWRkaW5nOiA0cHg7XG59XG4iXX0= */"] });
    return LanguageIconComponent;
}());



/***/ }),

/***/ "HZfp":
/*!**************************************************!*\
  !*** ./src/app/code-list/code-list.component.ts ***!
  \**************************************************/
/*! exports provided: CodeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeListComponent", function() { return CodeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _language_icon_language_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../language-icon/language-icon.component */ "DJQP");






function CodeListComponent_app_language_icon_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-language-icon", 5);
} if (rf & 2) {
    var icon_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIconName", icon_r1.svgIconName)("svgIconPath", icon_r1.svgIconPath)("text", icon_r1.text);
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
        } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _language_icon_language_icon_component__WEBPACK_IMPORTED_MODULE_5__["LanguageIconComponent"]], styles: [".code-list-container[_ngcontent-%COMP%] {\n  padding-bottom: 48px;\n  background-color: #1c313a;\n}\n\n.code-icons[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 0 auto;\n  background-color: #1c313a;\n  text-align: center;\n}\n\n.heading[_ngcontent-%COMP%] {\n  justify-content: center;\n  background-color: #1c313a;\n  color: white;\n}\n\n.title-center[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvZGUtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0VBQ3BCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJjb2RlLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2RlLWxpc3QtY29udGFpbmVyIHtcbiAgcGFkZGluZy1ib3R0b206IDQ4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYzMxM2E7XG59XG5cbi5jb2RlLWljb25zIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYzMxM2E7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhlYWRpbmcge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFjMzEzYTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udGl0bGUtY2VudGVyIHtcbiAgZmxleDogMSAxIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */"] });
    return CodeListComponent;
}());



/***/ }),

/***/ "J9UH":
/*!**************************************!*\
  !*** ./src/app/portfolio.service.ts ***!
  \**************************************/
/*! exports provided: PortfolioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioService", function() { return PortfolioService; });
/* harmony import */ var _portfolio_view_portfolio_item_portfolioItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./portfolio-view/portfolio-item/portfolioItem */ "lGqS");
/* harmony import */ var _portfolio_view_portfolio_item_portfolioButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./portfolio-view/portfolio-item/portfolioButton */ "upPV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



var PortfolioService = /** @class */ (function () {
    function PortfolioService() {
        this.portfolioItems = [];
        this.portfolioItems.push(new _portfolio_view_portfolio_item_portfolioItem__WEBPACK_IMPORTED_MODULE_0__["PortfolioItem"]('Steam Friends Theme', 'A different take on a theme for the Steam Friends UI \n #### Customisation \n Comes with different status and avatar styles as well as dark and light themes', 'assets/images/steam', new _portfolio_view_portfolio_item_portfolioButton__WEBPACK_IMPORTED_MODULE_1__["PortfolioButton"]('Source', 'https://github.com/LaserFlash/steam-friends-skin'), new _portfolio_view_portfolio_item_portfolioButton__WEBPACK_IMPORTED_MODULE_1__["PortfolioButton"]('Website', 'https://laserflash.tk/steam-chat-skin-website/')));
        this.portfolioItems.push(new _portfolio_view_portfolio_item_portfolioItem__WEBPACK_IMPORTED_MODULE_0__["PortfolioItem"]('Boat Logging', 'This is a web app for boat/yacht clubs to record boat usage, maintenance, incident reporting, and safety prodcedures. \n\n This app and its deriviations are used by the following yacht clubs: \n - WYST \n - TRIYA \n - NPYC \n - QCYC \n \n Satisfying the Marine Operators Safety System (MOSS) requirements of Maritime New Zealand and Yachting New Zealand\'s  Health and Safety requirements.', 'assets/images/nespresso', new _portfolio_view_portfolio_item_portfolioButton__WEBPACK_IMPORTED_MODULE_1__["PortfolioButton"]('Source', 'https://github.com/LaserFlash/WYST-Maintenance'), new _portfolio_view_portfolio_item_portfolioButton__WEBPACK_IMPORTED_MODULE_1__["PortfolioButton"]('Website', 'https://wyst-stuff.tk')));
        this.portfolioItems.push(new _portfolio_view_portfolio_item_portfolioItem__WEBPACK_IMPORTED_MODULE_0__["PortfolioItem"]('Portfolio Site', 'Construction and design of this website. This project tends to get bursts of updates as I becoming intereseted in implementing a new feature, or have a new portfolio item to add. It is regularly revisited however \n\n The site is built with **Angular8**', 'assets/images/flatWebsite', new _portfolio_view_portfolio_item_portfolioButton__WEBPACK_IMPORTED_MODULE_1__["PortfolioButton"]('Source', 'https://github.com/LaserFlash/LaserFlash.github.io'), new _portfolio_view_portfolio_item_portfolioButton__WEBPACK_IMPORTED_MODULE_1__["PortfolioButton"]('Website', 'https://laserflash.tk')));
        this.portfolioItems.push(new _portfolio_view_portfolio_item_portfolioItem__WEBPACK_IMPORTED_MODULE_0__["PortfolioItem"]('Pihinga - Job Search', ' [**Pihinga**](https://www.facebook.com/Pihinga) was a startup focused around helping single parents find employment relevant to them, we were tasked with designing a platform where jobs intended for this audience could be listed and applied to by the parents. \n\n This required interactions with the client **Pihinga** throughout the planning and development cycle and managing their requests. \n Deliverables: \n - Requirement Specification \n - Project Architecture \n - Wireframing and Design \n - Skeleton Implementation \n - Minimum Viable Product \n - Final Solution / Handover \n\n **Tools and Frameworks**: ReactJS, Firebase, and Xanpan styled development ', 'assets/images/pihinga', null, null));
        this.portfolioItems.push(new _portfolio_view_portfolio_item_portfolioItem__WEBPACK_IMPORTED_MODULE_0__["PortfolioItem"]('The Finding of I, Zack', 'A **Java** game built for **SWEN222**. \n\n This was worked on by a group of five while at Victoria University. The original idea was inspired by "The Binding Of Issac", a top down dungeon crawler. I was primarily in charge of designing the user interface, and implementing the rendering of entities and the world. \n #### Design \n Follows a Model View Controller (MVC) design approach, using Java Swing for visual aspects', 'assets/images/IZack', new _portfolio_view_portfolio_item_portfolioButton__WEBPACK_IMPORTED_MODULE_1__["PortfolioButton"]('Source', 'https://github.com/LaserFlash/The-Finding-Of-I-Zack'), null));
        this.portfolioItems.push(new _portfolio_view_portfolio_item_portfolioItem__WEBPACK_IMPORTED_MODULE_0__["PortfolioItem"]('DimThing', 'Program that allows for further dimming of screen through the use of a transparent overlay. Has support for keyboard shortcuts to adjust dimness and toggle immersive mode on or off. \n\n #### Immersive Mode \n Allows for the adjustment of secondary screens seperatly to the main screen. Intented use is dimming a secondary screen while playing a game or watching a video', 'assets/images/DimThing', new _portfolio_view_portfolio_item_portfolioButton__WEBPACK_IMPORTED_MODULE_1__["PortfolioButton"]('Source', 'https://github.com/LaserFlash/DimThing'), null));
        this.portfolioItems.push(new _portfolio_view_portfolio_item_portfolioItem__WEBPACK_IMPORTED_MODULE_0__["PortfolioItem"]('ENGR 110 SCARA', 'This was a group project, implementing basic drawing functionality on a provided Raspberry Pi incorporated into a SCARA setup (Selective Compliance Articulated Robot Arm). \n\n This implementation is writen in **Java**', 'assets/images/SCARA', new _portfolio_view_portfolio_item_portfolioButton__WEBPACK_IMPORTED_MODULE_1__["PortfolioButton"]('Source', 'https://github.com/LaserFlash/ENGR110-SCARA'), null));
        this.portfolioItems.push(new _portfolio_view_portfolio_item_portfolioItem__WEBPACK_IMPORTED_MODULE_0__["PortfolioItem"]('ENGR 101 Autonomous Vehicle', 'This was a group project, with the goal of designing and constructing a small autonomous vehicle to get through given sections of a maze. \n #### Maze \n The maze consisted of two sections. A taped white line to follow on the ground and a walled section. \n The taped section relied on a camera for navigation while the walled area used IR sensors to position the vehicle.', 'assets/images/AVC', new _portfolio_view_portfolio_item_portfolioButton__WEBPACK_IMPORTED_MODULE_1__["PortfolioButton"]('Source', 'https://github.com/papasele/AVCteam1'), null));
    }
    PortfolioService.ɵfac = function PortfolioService_Factory(t) { return new (t || PortfolioService)(); };
    PortfolioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: PortfolioService, factory: PortfolioService.ɵfac });
    return PortfolioService;
}());



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router.animations */ "ZZ88");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function AppComponent_a_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var routeLink_r2 = ctx.$implicit;
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", routeLink_r2.link)("active", _r4.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", routeLink_r2.label, " ");
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
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"])) {
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
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"])); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 21, vars: 4, consts: [["color", "primary"], ["srcset", "assets/images/logo.webp", "type", "image/webp"], ["srcset", "assets/images/logo.png", "type", "image/jpeg"], ["src", "assets/images/logo.png", "alt", "Bryn Bennett 'LaserFlash'", 1, "menuLogo"], [1, "menuSpacer"], [1, "menuTitle"], [1, "firstH1"], [1, "secondH1"], ["fxFlex", ""], ["mat-tab-nav-bar", ""], ["mat-tab-link", "", "backgroundColor", "accent", "routerLinkActive", "", 3, "routerLink", "active", 4, "ngFor", "ngForOf"], [2, "background", "#37474f"], ["id", "scrollId", 1, "content-spacer"], [1, "content", 3, "swipeleft", "swiperight"], ["o", "outlet"], ["mat-tab-link", "", "backgroundColor", "accent", "routerLinkActive", "", 3, "routerLink", "active"], ["rla", "routerLinkActive"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-toolbar", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "picture");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "source", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "source", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h1", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h1", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "nav", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, AppComponent_a_15_Template, 3, 3, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "main", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("swipeleft", function AppComponent_Template_main_swipeleft_18_listener($event) { return ctx.swipe($event.type); })("swiperight", function AppComponent_Template_main_swiperight_18_listener($event) { return ctx.swipe($event.type); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "router-outlet", null, 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.titleFirst);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.titleSecond);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.routeLinks);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@routerTransition", ctx.getState(_r1));
        } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabNav"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterLinkWithHref"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabLink"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterLinkActive"]], styles: ["mat-toolbar.mat-toolbar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  z-index: 1;\n  padding: 0 8px 0 8px;\n}\n.menuLogo[_ngcontent-%COMP%] {\n  height: 2.5em;\n  vertical-align: middle;\n}\n.menuSpacer[_ngcontent-%COMP%] {\n  min-width: 0.5em;\n}\n.mat-tab-link[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 2em;\n  height: 2em;\n  min-width: 12ch;\n  opacity: 1;\n  color: black;\n}\n  .mat-ink-bar {\n  background-color: #087f23 !important;\n}\n.menuTitle[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  line-height: 2ch;\n  font-size: 18px;\n}\n.content-spacer[_ngcontent-%COMP%] {\n  height: 54px;\n}\n\n@media screen and (min-width: 600px) {\n  .menuTitle[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    display: inline;\n  }\n\n  .menuTitle[_ngcontent-%COMP%]   .secondH1[_ngcontent-%COMP%] {\n    padding-left: 1ch;\n  }\n\n  .mat-tab-link[_ngcontent-%COMP%] {\n    min-width: 16ch;\n  }\n\n  .content-spacer[_ngcontent-%COMP%] {\n    height: 60px;\n  }\n}\n\n@media screen and (max-width: 440px) {\n  .menuTitle[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFxQztBQUNyQztFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sUUFBUTtFQUNSLFVBQVU7RUFDVixvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZUFBZTtFQUNmLFVBQVU7RUFDVixZQUFZO0FBQ2Q7QUFFQTtFQUNFLG9DQUFvQztBQUN0QztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUVBLG1CQUFtQjtBQUNuQjtFQUNFO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7QUFDRjtBQUVBLG1CQUFtQjtBQUNuQjtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBGdWxsIHNpemUgdG9vbGJhciBmb3IgbmF2aWdhdGlvbiAqL1xubWF0LXRvb2xiYXIubWF0LXRvb2xiYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDE7XG4gIHBhZGRpbmc6IDAgOHB4IDAgOHB4O1xufVxuXG4ubWVudUxvZ28ge1xuICBoZWlnaHQ6IDIuNWVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ubWVudVNwYWNlciB7XG4gIG1pbi13aWR0aDogMC41ZW07XG59XG5cbi5tYXQtdGFiLWxpbmsge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyZW07XG4gIGhlaWdodDogMmVtO1xuICBtaW4td2lkdGg6IDEyY2g7XG4gIG9wYWNpdHk6IDE7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuOjpuZy1kZWVwIC5tYXQtaW5rLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwODdmMjMgIWltcG9ydGFudDtcbn1cblxuLm1lbnVUaXRsZSBoMSB7XG4gIGxpbmUtaGVpZ2h0OiAyY2g7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5jb250ZW50LXNwYWNlciB7XG4gIGhlaWdodDogNTRweDtcbn1cblxuLyogTGFyZ2UgZGlzcGxheXMgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC5tZW51VGl0bGUgaDEge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgfVxuXG4gIC5tZW51VGl0bGUgLnNlY29uZEgxIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDFjaDtcbiAgfVxuXG4gIC5tYXQtdGFiLWxpbmsge1xuICAgIG1pbi13aWR0aDogMTZjaDtcbiAgfVxuXG4gIC5jb250ZW50LXNwYWNlciB7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICB9XG59XG5cbi8qIFNtYWxsIGRpc3BsYXlzICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NDBweCkge1xuICAubWVudVRpdGxlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iXX0= */"], data: { animation: [_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"]] } });
    return AppComponent;
}());



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-markdown */ "lR5k");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _portfolio_view_portfolio_view_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./portfolio-view/portfolio-view.component */ "3GQ/");
/* harmony import */ var _about_view_about_view_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./about-view/about-view.component */ "u9fi");
/* harmony import */ var _code_list_code_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./code-list/code-list.component */ "HZfp");
/* harmony import */ var _language_icon_language_icon_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./language-icon/language-icon.component */ "DJQP");
/* harmony import */ var _portfolio_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./portfolio.service */ "J9UH");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _hammer_config__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./hammer.config */ "ssVF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
























var AppModule = /** @class */ (function () {
    function AppModule(overlayContainer) {
        overlayContainer.getContainerElement().classList.add('my-app-theme');
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_22__["OverlayContainer"])); }, providers: [
            _portfolio_service__WEBPACK_IMPORTED_MODULE_18__["PortfolioService"],
            { provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HAMMER_GESTURE_CONFIG"], useClass: _hammer_config__WEBPACK_IMPORTED_MODULE_20__["HammerConfig"] },
            { provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__["HashLocationStrategy"] }
        ], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_19__["AppRoutingModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                ngx_markdown__WEBPACK_IMPORTED_MODULE_12__["MarkdownModule"].forRoot()
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
        _portfolio_view_portfolio_view_component__WEBPACK_IMPORTED_MODULE_14__["PortfolioViewComponent"],
        _about_view_about_view_component__WEBPACK_IMPORTED_MODULE_15__["AboutViewComponent"],
        _code_list_code_list_component__WEBPACK_IMPORTED_MODULE_16__["CodeListComponent"],
        _language_icon_language_icon_component__WEBPACK_IMPORTED_MODULE_17__["LanguageIconComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_19__["AppRoutingModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_12__["MarkdownModule"]] }); })();


/***/ }),

/***/ "ZZ88":
/*!**************************************!*\
  !*** ./src/app/router.animations.ts ***!
  \**************************************/
/*! exports provided: routerTransition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerTransition", function() { return routerTransition; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");

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

/***/ "lGqS":
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

/***/ "ssVF":
/*!**********************************!*\
  !*** ./src/app/hammer.config.ts ***!
  \**********************************/
/*! exports provided: HammerConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HammerConfig", function() { return HammerConfig; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "yLV6");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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

var ɵHammerConfig_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](HammerConfig);


/***/ }),

/***/ "u9fi":
/*!****************************************************!*\
  !*** ./src/app/about-view/about-view.component.ts ***!
  \****************************************************/
/*! exports provided: AboutViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutViewComponent", function() { return AboutViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");




var AboutViewComponent = /** @class */ (function () {
    function AboutViewComponent() {
    }
    AboutViewComponent.prototype.ngOnInit = function () { };
    AboutViewComponent.ɵfac = function AboutViewComponent_Factory(t) { return new (t || AboutViewComponent)(); };
    AboutViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutViewComponent, selectors: [["app-about-view"]], decls: 40, vars: 0, consts: [["fxLayout", "row", 2, "padding-left", "2px", "padding-right", "2px"], ["fxFlex.gt-sm", "calc(50% - 900px)", "fxFlex", "0"], ["fxFlex", "grow", "fxFlex.gt-sm", "900px"], ["srcset", "assets/images/skiing.webp", "type", "image/webp"], ["srcset", "assets/images/skiing.png", "type", "image/jpeg"], ["mat-card-image", "", "src", "assets/images/skiing.png", "alt", "Bryn skiing on Mt Ruapehu"], [1, "about-content"], ["href", "https://www.catalyst.net.nz/"], ["href", "https://steamchatskinning.tk/"], ["align", "end", 1, "card-content"], ["color", "accent", "href", "https://github.com/LaserFlash", "mat-button", ""]], template: function AboutViewComponent_Template(rf, ctx) { if (rf & 1) {
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Currently I work at ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Catalyst");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " as a frontend developer, mostly working with React, D3 and Drupal themes. Some of my other passions include: yachting, skiing, and gaming. I also develop and work on some of my own personal projects, most actively a skin for the ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "steam chat");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, ". ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " I also have developed a system for Yacht clubs to log how their boats are used and breakages that they may have. This solution is in the form of a web app and has been deployed and is in active use by: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Wellington Youth Sailing Trust");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Tup Radford Intercollegiate Yachting Academy");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "New Plymouth Yacht Club");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Queen Charlotte Yacht Club");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-card-actions", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "GitHub");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatAnchor"]], styles: [".card-width[_ngcontent-%COMP%] {\n  min-width: 20em;\n  max-width: 80em;\n}\n\n.about-content[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJhYm91dC12aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC13aWR0aCB7XG4gIG1pbi13aWR0aDogMjBlbTtcbiAgbWF4LXdpZHRoOiA4MGVtO1xufVxuXG4uYWJvdXQtY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbiJdfQ== */"] });
    return AboutViewComponent;
}());



/***/ }),

/***/ "upPV":
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

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _portfolio_view_portfolio_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./portfolio-view/portfolio-view.component */ "3GQ/");
/* harmony import */ var _about_view_about_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-view/about-view.component */ "u9fi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





var routes = [
    { path: '', redirectTo: '/portfolio', pathMatch: 'full' },
    {
        path: 'portfolio',
        component: _portfolio_view_portfolio_view_component__WEBPACK_IMPORTED_MODULE_1__["PortfolioViewComponent"],
        data: { state: 'portfolio' }
    },
    { path: 'about', component: _about_view_about_view_component__WEBPACK_IMPORTED_MODULE_2__["AboutViewComponent"], data: { state: 'about' } },
    { path: '**', redirectTo: '/portfolio' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return AppRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map