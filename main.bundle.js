webpackJsonp([1,5],{

/***/ 329:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 329;


/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(338);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/wassimchegham/Sandbox/oss/angular-polymer-sample/src/main.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Angular Polymer Interoperability!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(512),
        styles: [__webpack_require__(508)]
    })
], AppComponent);

//# sourceMappingURL=/Users/wassimchegham/Sandbox/oss/angular-polymer-sample/src/app.component.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__paper_elements_paper_elements_component__ = __webpack_require__(336);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__paper_elements_paper_elements_component__["a" /* PaperElementsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
                { path: 'paper-elements', component: __WEBPACK_IMPORTED_MODULE_6__paper_elements_paper_elements_component__["a" /* PaperElementsComponent */] },
                { path: '', redirectTo: '/paper-elements', pathMatch: 'full' }
            ])
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]],
        schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* CUSTOM_ELEMENTS_SCHEMA */]]
    })
], AppModule);

//# sourceMappingURL=/Users/wassimchegham/Sandbox/oss/angular-polymer-sample/src/app.module.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__polymer_annotation__ = __webpack_require__(337);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaperElementsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaperElementsComponent = (function () {
    function PaperElementsComponent() {
        this.debug = {};
        this.counter = 0;
        ////////////////////////////////////////////////
        // paper-card
        this.paperCardImageUrls = [
            'https://s3.amazonaws.com/media-p.slid.es/uploads/129681/images/1679676/isis-NG.png',
            'https://s3.amazonaws.com/media-p.slid.es/uploads/129681/images/3532997/isis-cat-smiling.JPG'
        ];
        this.paperCardImageUrl = '';
        this.paperCardElevation = 1;
        ////////////////////////////////////////////////
        // paper-input
        this.paperInputValue = '';
    }
    PaperElementsComponent.prototype.ngOnInit = function () {
        // this.paperButtonAddOwnKeyBinding();
        this.paperCardImageUrl = this.paperCardImageUrls[0];
    };
    ////////////////////////////////////////////////
    // paper-button
    // not workging
    PaperElementsComponent.prototype.paperButtonAddOwnKeyBinding = function () {
        window.Polymer.dom(this.paperButtonRef.nativeElement).addOwnKeyBinding('click', function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.log(args);
        });
    };
    PaperElementsComponent.prototype.paperButtonClick = function (data, event) {
        this.debug.paperButton = {
            event: event,
            from: 'angular',
            data: data,
            counter: this.counter++
        };
    };
    PaperElementsComponent.prototype.paperButtonTransitionend = function (data) {
        this.debug.paperButton = {
            event: 'transitionend',
            from: 'angular',
            data: data,
            counter: this.counter++
        };
    };
    PaperElementsComponent.prototype.paperCardClick = function (data) {
        this.debug.paperCard = {
            event: 'click',
            from: 'angular',
            data: data,
            counter: this.counter++
        };
        this.paperCardImageUrl = this.paperCardImageUrls[this.counter % this.paperCardImageUrls.length];
    };
    PaperElementsComponent.prototype.paperCardToggleElevation = function () {
        if (this.paperCardElevation === 1) {
            this.paperCardElevation = 5;
        }
        else {
            this.paperCardElevation = 1;
        }
    };
    ////////////////////////////////////////////////
    // paper-checkbox
    PaperElementsComponent.prototype.paperCheckboxChange = function (event, checked) {
        this.debug.paperCheckbox = {
            event: event,
            checked: checked,
            from: 'angular',
            counter: this.counter++
        };
    };
    PaperElementsComponent.prototype.paperCheckboxIronChange = function (event, checked) {
        this.debug.paperCheckbox = {
            event: event,
            checked: checked,
            from: 'angular',
            counter: this.counter++
        };
    };
    ////////////////////////////////////////////////
    // paper-fab
    PaperElementsComponent.prototype.paperFabClick = function (type, active) {
        this.debug.paperFab = {
            type: type,
            active: active,
            from: 'angular',
            counter: this.counter++
        };
    };
    PaperElementsComponent.prototype.paperFabActive = function (event) {
        this.debug.paperFab = {
            type: 'active-changed',
            event: event,
            from: 'angular',
            counter: this.counter++
        };
    };
    PaperElementsComponent.prototype.paperInputKeyup = function (event) {
        this.debug.paperInput = {
            event: event,
            value: this.paperInputValue,
            from: 'angular',
            counter: this.counter++
        };
    };
    PaperElementsComponent.prototype.paperInputValueChanged = function (event) {
        // this.paperInputValue = event.target.value;
        this.debug.paperInput = {
            event: 'value-changed',
            value: this.paperInputValue,
            from: 'angular',
            counter: this.counter++
        };
    };
    PaperElementsComponent.prototype.paperInputFocus = function (event) {
        this.debug.paperInput = {
            event: 'focus-changed',
            focus: event.target.focused,
            from: 'angular',
            counter: this.counter++
        };
    };
    return PaperElementsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* ViewChild */])('paperButton1Ref'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* ElementRef */]) === "function" && _a || Object)
], PaperElementsComponent.prototype, "paperButtonRef", void 0);
PaperElementsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* Component */])({
        selector: 'app-paper-elements',
        template: __webpack_require__(513),
        styles: [__webpack_require__(509)]
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__polymer_annotation__["a" /* Polymer */])({
        components: [
            'iron-icons',
            'paper-button',
            'paper-checkbox',
            'paper-card',
            'paper-fab',
            'paper-icon-button',
            'paper-input',
            'paper-listbox',
            'paper-item',
            'paper-menu',
            'paper-slider',
            'paper-spinner',
            'paper-toast',
            'paper-toggle-button'
        ]
    }),
    __metadata("design:paramtypes", [])
], PaperElementsComponent);

var _a;
//# sourceMappingURL=/Users/wassimchegham/Sandbox/oss/angular-polymer-sample/src/paper-elements.component.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Polymer;
function Polymer(options) {
    return function (target, propertyKey) {
        var loadComponents = function () {
            return new Promise(function (res, rej) {
                options.components.map(function (cmp) {
                    var link = document.createElement('link');
                    link.rel = 'import';
                    link.href = "assets/bower_components/" + cmp + "/" + cmp + ".html";
                    document.head.appendChild(link);
                    link.onerror = rej;
                    link.onload = function (e) { return res(); };
                });
            });
        };
        loadComponents();
    };
}
//# sourceMappingURL=/Users/wassimchegham/Sandbox/oss/angular-polymer-sample/src/polymer-annotation.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/wassimchegham/Sandbox/oss/angular-polymer-sample/src/environment.js.map

/***/ }),

/***/ 508:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(133)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 509:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(133)();
// imports


// module
exports.push([module.i, "section {\n    border: 1px solid #F33170;\n    margin: 10px;\n}\n\nsection h2 {\n    background: #F33170;\n    padding: 20px;\n    margin-top: 0px;\n    color: white;\n}\n\nsection div {\n    margin: 10px;\n    padding: 10px;\n}\n\n\n/*paper-buttons*/\n\npaper-button {\n    margin: 10px;\n}\n\npaper-button.fancy {\n    background: #2BC3EC;\n    color: yellow;\n    --paper-button-ink-color: var(--paper-pink-a200);\n}\n\npaper-button.fancy:hover {\n    background: #2BC3EC;\n}\n\npaper-button[disabled],\npaper-button[toggles][active] {\n    background: #F33170;\n    color: white;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 512:
/***/ (function(module, exports) {

module.exports = "<h1>\n    {{title}}\n</h1>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ 513:
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\">\n    <section>\n        <h2>paper-button</h2>\n        <div>\n            <p>\n                <paper-button (click)=\"paperButtonClick('simple', $event)\" (transitionend)=\"paperButtonTransitionend($event)\" class=\"fancy\">Open Toast</paper-button>\n                <paper-button (click)=\"paperButtonClick('raised', $event)\" (transitionend)=\"paperButtonTransitionend($event)\" [raised]=\"true\">Raised button</paper-button>\n                <paper-button (click)=\"paperButtonClick('noink', $event)\" noink class=\"fancy\">No ripple effect</paper-button>\n                <paper-button (click)=\"paperButtonClick('toggles', $event)\" (transitionend)=\"paperButtonTransitionend($event)\" toggles>Toggle-able button</paper-button>\n                <paper-button (click)=\"paperButtonClick('disbaled', $event)\" disabled>disabled (no event)</paper-button>\n                <a href=\"https://www.polymer-project.org/2.0/docs/about_20\" tabindex=\"-1\" target=\"__blank\">\n                    <paper-button raised>Polymer Project</paper-button>\n                </a>\n                <paper-button (click)=\"paperButtonClick('custom-1', $event)\" (transitionend)=\"paperButtonTransitionend($event)\">\n                    <iron-icon icon=\"check\"></iron-icon>link\n                </paper-button>\n                <paper-button (click)=\"paperButtonClick('custom-2', $event)\" (transitionend)=\"paperButtonTransitionend($event)\" raised>\n                    <iron-icon icon=\"file-download\"></iron-icon>raised\n                </paper-button>\n                <paper-button (click)=\"paperButtonClick('custom-3', $event)\" (transitionend)=\"paperButtonTransitionend($event)\" toggles raised>\n                    <iron-icon icon=\"favorite\"></iron-icon>toggles\n                </paper-button>\n                <paper-button (click)=\"paperButtonClick('custom-4', $event)\" [disabled]=\"0+0\">\n                    <iron-icon icon=\"block\"></iron-icon>disabled from angular\n                </paper-button>\n                <paper-button #paperButton2Ref raised>pressed:{{ paperButton2Ref.pressed }}</paper-button>\n                <paper-button #paperButton3Ref>pointerDown:{{ paperButton3Ref.pointerDown }}</paper-button>\n                <paper-button #paperButton1Ref noink>focused:{{ paperButton1Ref.focused }}</paper-button>\n            </p>\n            <pre>{{ debug.paperButton | json }}</pre>\n        </div>\n    </section>\n\n    <section>\n        <h2>paper-card</h2>\n        <div>\n            <p>\n                <paper-card #paperCardRef heading=\"My Cut Cat\" [elevation]=\"paperCardElevation\" [animatedShadow]=\"true\" [fadeImage]=\"true\" [preloadImage]=\"true\" [image]=\"paperCardImageUrl\">\n                    <div class=\"card-content\">Cute cat image set from Angular</div>\n                    <div class=\"card-actions\">\n                        <paper-button (click)=\"paperCardClick('meow')\">Meow</paper-button>\n                        <paper-button noink raised (click)=\"paperCardToggleElevation()\">Toggle Elevation</paper-button>\n                    </div>\n                </paper-card>\n            </p>\n            <pre>animated:{{ paperCardRef.animated | json }} (Bug: click on button to see value)</pre>\n            <pre>{{ debug.paperCard | json }}</pre>\n        </div>\n    </section>\n\n    <section>\n        <h2>paper-fab</h2>\n        <div>\n            <p style=\"display: flex\">\n                <paper-fab #paperFab2Ref (active-changed)=\"paperFabActive($event)\" (click)=\"paperFabClick('home', paperFab2Ref.active)\" toggles label=\"🌶\" style=\"background: white;\"></paper-fab>\n                <paper-fab #paperFab1Ref (click)=\"paperFabClick('add', paperFab2Ref.active)\" icon=\"add\"></paper-fab>\n                <paper-fab #paperFab3Ref (click)=\"paperFabClick('favorite', paperFab2Ref.active)\" mini icon=\"favorite\"></paper-fab>\n                <paper-fab #paperFab4Ref (click)=\"paperFabClick('close', paperFab2Ref.active)\" mini icon=\"home\"></paper-fab>\n            </p>\n            <pre>{{ debug.paperFab | json }}</pre>\n        </div>\n    </section>\n\n    <section>\n        <h2>paper-icon-button</h2>\n        <div>\n            <p>\n                <paper-icon-button icon=\"home\"></paper-icon-button>\n                <paper-icon-button icon=\"menu\"></paper-icon-button>\n                <paper-icon-button icon=\"star\"></paper-icon-button>\n                <paper-icon-button icon=\"favorite\" style=\"color: red;\"></paper-icon-button>\n                <!--not working-->\n                <button is=\"paper-icon-button\">\n                    <iron-icon icon=\"reply\"></iron-icon>\n                </button>\n                <a href=\"https://www.polymer-project.org/2.0/docs/about_20\" tabindex=\"-1\" target=\"__blank\">\n                    <paper-icon-button icon=\"polymer\"></paper-icon-button>\n                </a>\n            </p>\n            <pre>{{ debug.paperIcon | json }}</pre>\n        </div>\n    </section>\n\n    <section>\n        <h2>paper-checkbox</h2>\n        <div>\n            <p>\n                <paper-checkbox #paperCheckbox1Ref (change)=\"paperCheckboxChange($event, paperCheckbox1Ref.checked)\">change event</paper-checkbox>\n                <paper-checkbox #paperCheckbox2Ref (change)=\"paperCheckboxChange($event, paperCheckbox2Ref.checked)\" [checked]=\"paperCheckbox1Ref.checked\">bound to [checked]</paper-checkbox>\n                <br>\n                <br>\n                <paper-checkbox #paperCheckbox3Ref (change)=\"paperCheckboxChange($event, paperCheckbox3Ref.checked)\" (iron-change)=\"paperCheckboxIronChange($event)\">iron change event (?)</paper-checkbox>\n                <paper-checkbox #paperCheckbox4Ref (change)=\"paperCheckboxChange($event, paperCheckbox4Ref.checked)\" [required]=\"true\">required=true</paper-checkbox>\n                <paper-checkbox #paperCheckbox5Ref (change)=\"paperCheckboxChange($event, paperCheckbox5Ref.checked)\" [active]=\"true\">active=true</paper-checkbox>\n                <br>\n                <br>\n                <paper-checkbox #paperCheckbox6Ref (change)=\"paperCheckboxChange($event, paperCheckbox6Ref.checked)\" noink>noink</paper-checkbox>\n                <paper-checkbox #paperCheckbox7Ref (change)=\"paperCheckboxChange($event, paperCheckbox7Ref.checked)\" [disabled]=\"paperCheckbox6Ref.checked\">Disabled</paper-checkbox>\n            </p>\n            <pre>{{ debug.paperCheckbox | json }}</pre>\n        </div>\n    </section>\n\n    <section>\n        <h2>paper-input</h2>\n        <div>\n            <p>\n                <paper-button (click)=\"paperInputValue = 'Hello Polymer ❤️'\">reset from angular</paper-button>\n                <paper-input [charCounter]=\"true\" label=\"username\" [value]=\"paperInputValue\" (focused-changed)=\"paperInputFocus($event)\" (value-changed)=\"paperInputValue = $event.target.value; paperInputValueChanged($event)\">\n                    <iron-icon icon=\"mail\" prefix></iron-icon>\n                    <div suffix>@gmail.com</div>\n                    <paper-icon-button suffix icon=\"clear\" (click)=\"paperInputValue = ''\"></paper-icon-button>\n                </paper-input>\n            </p>\n            <pre>{{ debug.paperInput | json }}</pre>\n        </div>\n    </section>\n\n    <section>\n        <h2>paper-listbox</h2>\n        <div>\n            <p>\n                <paper-listbox>\n                    <paper-item>Item 1</paper-item>\n                    <paper-item>Item 2</paper-item>\n                </paper-listbox>\n            </p>\n            <pre>{{ debug.paperListbox | json }}</pre>\n        </div>\n    </section>\n\n    <section>\n        <h2>paper-menu</h2>\n        <div>\n            <p>\n                <paper-menu>\n                    <paper-item>Item 1</paper-item>\n                    <paper-item>Item 2</paper-item>\n                </paper-menu>\n            </p>\n            <pre>{{ debug.paperMenu | json }}</pre>\n        </div>\n    </section>\n\n    <section>\n        <h2>paper-slider</h2>\n        <div>\n            <p>\n                <paper-slider min=\"10\" max=\"200\" value=\"110\"></paper-slider>\n            </p>\n            <pre>{{ debug.paperSlider | json }}</pre>\n        </div>\n    </section>\n\n    <section>\n        <h2>paper-spinner</h2>\n        <div>\n            <p>\n                <paper-spinner active></paper-spinner>\n            </p>\n            <pre>{{ debug.paperSpinner | json }}</pre>\n        </div>\n    </section>\n\n    <section>\n        <h2>paper-toast</h2>\n        <div>\n            <p>\n                <paper-toast #toast text=\"Hello You\" duration=\"3\"></paper-toast>\n            </p>\n            <pre>{{ debug.paperToast | json }}</pre>\n        </div>\n    </section>\n\n    <section>\n        <h2>paper-toggle-button</h2>\n        <div>\n            <p>\n                <paper-toggle-button></paper-toggle-button>\n            </p>\n            <pre>{{ debug.paperToggleButton | json }}</pre>\n        </div>\n    </section>\n\n</div>"

/***/ }),

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(330);


/***/ })

},[532]);
//# sourceMappingURL=main.bundle.js.map