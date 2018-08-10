webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<h1>-->\r\n  <!--{{title}}-->\r\n<!--</h1>-->\r\n\r\n<h1>Survey</h1><survey [json]=\"json\"></survey>\r\n\r\n<!--<h1>Survey JS Editor</h1><survey-editor [json]=\"json\" (surveySaved)=\"onSurveySaved($event)\"></survey-editor>-->\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.json = {
            // title: "Survey",
            completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>. </h4>",
            pages: [
                {
                    name: "page1",
                    elements: [
                        {
                            type: "html",
                            name: "question1",
                            html: "You are about to start quiz by survey. <br/>You have 10 seconds for every page and 25 seconds for the whole survey of 3 questions.<br/>Please click on <b>'Start Quiz'</b> button when you are ready."
                        }
                    ]
                },
                {
                    name: "page2",
                    elements: [
                        {
                            type: "radiogroup",
                            name: "build-1",
                            title: "Build Question 1",
                            correctAnswer: "Correct",
                            choices: [
                                "Incorrect",
                                "Incorrect",
                                "Correct",
                                "Incorrect",
                                "Incorrect"
                            ]
                        }
                    ]
                },
                {
                    name: "page3",
                    elements: [
                        {
                            type: "radiogroup",
                            name: "build-2",
                            title: "Build Question 1",
                            correctAnswer: "Correct",
                            choices: [
                                "Incorrect",
                                "Incorrect",
                                "Correct",
                                "Incorrect"
                            ],
                            choicesOrder: "random"
                        }
                    ]
                },
                {
                    name: "page4",
                    elements: [
                        {
                            type: "radiogroup",
                            name: "test-1",
                            title: "Test Question 3",
                            correctAnswer: "Correct",
                            choices: [
                                "Incorrect",
                                "Correct",
                                "Incorrect",
                                "Incorrect"
                            ],
                            choicesOrder: "random"
                        }
                    ],
                    maxTimeToFinish: 15
                }
            ],
            showProgressBar: "bottom",
            startSurveyText: "Start Quiz",
            firstPageIsStarted: true,
            maxTimeToFinish: 25,
            maxTimeToFinishPage: 10,
            showTimerPanel: "top"
        };
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "app-root",
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__survey_component__ = __webpack_require__("./src/app/survey.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__survey_editor_component__ = __webpack_require__("./src/app/survey.editor.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__survey_component__["a" /* SurveyComponent */],
                __WEBPACK_IMPORTED_MODULE_6__survey_editor_component__["a" /* SurveyEditorComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/survey.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_angular__ = __webpack_require__("./node_modules/survey-angular/survey.angular.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_survey_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_surveyjs_widgets__ = __webpack_require__("./node_modules/surveyjs-widgets/surveyjs-widgets.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_surveyjs_widgets___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_surveyjs_widgets__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_inputmask_dist_inputmask_phone_codes_phone_js__ = __webpack_require__("./node_modules/inputmask/dist/inputmask/phone-codes/phone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_inputmask_dist_inputmask_phone_codes_phone_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_inputmask_dist_inputmask_phone_codes_phone_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




__WEBPACK_IMPORTED_MODULE_2_surveyjs_widgets__["icheck"](__WEBPACK_IMPORTED_MODULE_1_survey_angular__);
__WEBPACK_IMPORTED_MODULE_2_surveyjs_widgets__["select2"](__WEBPACK_IMPORTED_MODULE_1_survey_angular__);
__WEBPACK_IMPORTED_MODULE_2_surveyjs_widgets__["inputmask"](__WEBPACK_IMPORTED_MODULE_1_survey_angular__);
__WEBPACK_IMPORTED_MODULE_2_surveyjs_widgets__["jquerybarrating"](__WEBPACK_IMPORTED_MODULE_1_survey_angular__);
__WEBPACK_IMPORTED_MODULE_2_surveyjs_widgets__["jqueryuidatepicker"](__WEBPACK_IMPORTED_MODULE_1_survey_angular__);
__WEBPACK_IMPORTED_MODULE_2_surveyjs_widgets__["nouislider"](__WEBPACK_IMPORTED_MODULE_1_survey_angular__);
__WEBPACK_IMPORTED_MODULE_2_surveyjs_widgets__["select2tagbox"](__WEBPACK_IMPORTED_MODULE_1_survey_angular__);
__WEBPACK_IMPORTED_MODULE_2_surveyjs_widgets__["signaturepad"](__WEBPACK_IMPORTED_MODULE_1_survey_angular__);
__WEBPACK_IMPORTED_MODULE_2_surveyjs_widgets__["sortablejs"](__WEBPACK_IMPORTED_MODULE_1_survey_angular__);
__WEBPACK_IMPORTED_MODULE_2_surveyjs_widgets__["ckeditor"](__WEBPACK_IMPORTED_MODULE_1_survey_angular__);
__WEBPACK_IMPORTED_MODULE_2_surveyjs_widgets__["autocomplete"](__WEBPACK_IMPORTED_MODULE_1_survey_angular__);
__WEBPACK_IMPORTED_MODULE_2_surveyjs_widgets__["bootstrapslider"](__WEBPACK_IMPORTED_MODULE_1_survey_angular__);
__WEBPACK_IMPORTED_MODULE_2_surveyjs_widgets__["prettycheckbox"](__WEBPACK_IMPORTED_MODULE_1_survey_angular__);
__WEBPACK_IMPORTED_MODULE_1_survey_angular__["JsonObject"].metaData.addProperty("questionbase", "popupdescription:text");
__WEBPACK_IMPORTED_MODULE_1_survey_angular__["JsonObject"].metaData.addProperty("page", "popupdescription:text");
var SurveyComponent = /** @class */ (function () {
    function SurveyComponent() {
    }
    Object.defineProperty(SurveyComponent.prototype, "json", {
        set: function (value) {
            var surveyModel = new __WEBPACK_IMPORTED_MODULE_1_survey_angular__["Model"](value);
            surveyModel.onAfterRenderQuestion.add(function (survey, options) {
                if (!options.question.popupdescription)
                    return;
                //Add a button;
                var btn = document.createElement("button");
                btn.className = "btn btn-info btn-xs";
                btn.innerHTML = "More Info";
                var question = options.question;
                btn.onclick = function () {
                    //showDescription(question);
                    alert(options.question.popupdescription);
                };
                var header = options.htmlElement.querySelector("h5");
                var span = document.createElement("span");
                span.innerHTML = "  ";
                header.appendChild(span);
                header.appendChild(btn);
            });
            __WEBPACK_IMPORTED_MODULE_1_survey_angular__["SurveyNG"].render("surveyElement", { model: surveyModel });
        },
        enumerable: true,
        configurable: true
    });
    SurveyComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], SurveyComponent.prototype, "json", null);
    SurveyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "survey",
            template: "<div class=\"survey-container contentcontainer codecontainer\"><div id=\"surveyElement\"></div></div>"
        })
    ], SurveyComponent);
    return SurveyComponent;
}());



/***/ }),

/***/ "./src/app/survey.editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_knockout__ = __webpack_require__("./node_modules/survey-knockout/survey.ko.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_survey_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_surveyjs_editor__ = __webpack_require__("./node_modules/surveyjs-editor/surveyeditor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_surveyjs_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_surveyjs_editor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_surveyjs_widgets__ = __webpack_require__("./node_modules/surveyjs-widgets/surveyjs-widgets.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_surveyjs_widgets___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_surveyjs_widgets__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_inputmask_dist_inputmask_phone_codes_phone_js__ = __webpack_require__("./node_modules/inputmask/dist/inputmask/phone-codes/phone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_inputmask_dist_inputmask_phone_codes_phone_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_inputmask_dist_inputmask_phone_codes_phone_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





__WEBPACK_IMPORTED_MODULE_3_surveyjs_widgets__["icheck"](__WEBPACK_IMPORTED_MODULE_1_survey_knockout__);
__WEBPACK_IMPORTED_MODULE_3_surveyjs_widgets__["select2"](__WEBPACK_IMPORTED_MODULE_1_survey_knockout__);
__WEBPACK_IMPORTED_MODULE_3_surveyjs_widgets__["inputmask"](__WEBPACK_IMPORTED_MODULE_1_survey_knockout__);
__WEBPACK_IMPORTED_MODULE_3_surveyjs_widgets__["jquerybarrating"](__WEBPACK_IMPORTED_MODULE_1_survey_knockout__);
__WEBPACK_IMPORTED_MODULE_3_surveyjs_widgets__["jqueryuidatepicker"](__WEBPACK_IMPORTED_MODULE_1_survey_knockout__);
__WEBPACK_IMPORTED_MODULE_3_surveyjs_widgets__["nouislider"](__WEBPACK_IMPORTED_MODULE_1_survey_knockout__);
__WEBPACK_IMPORTED_MODULE_3_surveyjs_widgets__["select2tagbox"](__WEBPACK_IMPORTED_MODULE_1_survey_knockout__);
__WEBPACK_IMPORTED_MODULE_3_surveyjs_widgets__["signaturepad"](__WEBPACK_IMPORTED_MODULE_1_survey_knockout__);
__WEBPACK_IMPORTED_MODULE_3_surveyjs_widgets__["sortablejs"](__WEBPACK_IMPORTED_MODULE_1_survey_knockout__);
__WEBPACK_IMPORTED_MODULE_3_surveyjs_widgets__["ckeditor"](__WEBPACK_IMPORTED_MODULE_1_survey_knockout__);
__WEBPACK_IMPORTED_MODULE_3_surveyjs_widgets__["autocomplete"](__WEBPACK_IMPORTED_MODULE_1_survey_knockout__);
__WEBPACK_IMPORTED_MODULE_3_surveyjs_widgets__["bootstrapslider"](__WEBPACK_IMPORTED_MODULE_1_survey_knockout__);
var CkEditor_ModalEditor = {
    afterRender: function (modalEditor, htmlElement) {
        var editor = window["CKEDITOR"].replace(htmlElement);
        editor.on("change", function () {
            modalEditor.editingValue = editor.getData();
        });
        editor.setData(modalEditor.editingValue);
    },
    destroy: function (modalEditor, htmlElement) {
        var instance = window["CKEDITOR"].instances[htmlElement.id];
        if (instance) {
            instance.removeAllListeners();
            window["CKEDITOR"].remove(instance);
        }
    }
};
__WEBPACK_IMPORTED_MODULE_2_surveyjs_editor__["SurveyPropertyModalEditor"].registerCustomWidget("html", CkEditor_ModalEditor);
var SurveyEditorComponent = /** @class */ (function () {
    function SurveyEditorComponent() {
        var _this = this;
        this.surveySaved = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.saveMySurvey = function () {
            console.log(JSON.stringify(_this.editor.text));
            _this.surveySaved.emit(JSON.parse(_this.editor.text));
        };
    }
    SurveyEditorComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_1_survey_knockout__["JsonObject"].metaData.addProperty("questionbase", "popupdescription:text");
        __WEBPACK_IMPORTED_MODULE_1_survey_knockout__["JsonObject"].metaData.addProperty("page", "popupdescription:text");
        var editorOptions = { showEmbededSurveyTab: true, generateValidJSON: true };
        this.editor = new __WEBPACK_IMPORTED_MODULE_2_surveyjs_editor__["SurveyEditor"]("surveyEditorContainer", editorOptions);
        this.editor.text = JSON.stringify(this.json);
        this.editor.saveSurveyFunc = this.saveMySurvey;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], SurveyEditorComponent.prototype, "json", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], SurveyEditorComponent.prototype, "surveySaved", void 0);
    SurveyEditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "survey-editor",
            template: "<div id=\"surveyEditorContainer\"></div>"
        })
    ], SurveyEditorComponent);
    return SurveyEditorComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map