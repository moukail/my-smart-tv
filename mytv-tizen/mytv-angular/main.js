"use strict";
(self["webpackChunkmytv_angular"] = self["webpackChunkmytv_angular"] || []).push([["main"],{

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _components_video_wrapper_video_wrapper_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/video-wrapper/video-wrapper.component */ 8221);
var _class;


class AppComponent {
  constructor() {
    this.title = 'video-player';
  }
}
_class = AppComponent;
_class.ɵfac = function AppComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-root"]],
  decls: 4,
  vars: 0,
  consts: [[1, "container"], [1, "video-app"], [1, "video-player"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-video-wrapper");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
  },
  dependencies: [_components_video_wrapper_video_wrapper_component__WEBPACK_IMPORTED_MODULE_0__.VideoWrapperComponent],
  styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 100vh;\n}\n.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.container[_ngcontent-%COMP%]   .video-app[_ngcontent-%COMP%] {\n  display: flex;\n  display: flex;\n  width: 100vw;\n  height: 100vh;\n  justify-content: center;\n  align-items: flex-start;\n}\n.container[_ngcontent-%COMP%]   .video-app[_ngcontent-%COMP%]   .video-player[_ngcontent-%COMP%] {\n  width: 100vw;\n  background-color: #fff;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.container[_ngcontent-%COMP%]   .video-app[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%] {\n  margin-left: 1.5em;\n  flex: 1;\n}\n@media (max-width: 800px) {\n  .container[_ngcontent-%COMP%]   .video-app[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .container[_ngcontent-%COMP%]   .video-app[_ngcontent-%COMP%]   .video-player[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n  .container[_ngcontent-%COMP%]   .video-app[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%] {\n    margin: 2em 0 0 0;\n    width: 90%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBQ0Q7QUFDQztFQUNDLFNBQUE7QUFDRjtBQUVDO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7QUFBSDtBQUVHO0VBQ0QsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFBRjtBQUdHO0VBQ0Qsa0JBQUE7RUFDQSxPQUFBO0FBREY7QUFJRztFQXJCRjtJQXNCQyxzQkFBQTtFQURBO0VBR0E7SUFDRSxVQUFBO0VBREY7RUFJQTtJQUNFLGlCQUFBO0lBQ0EsVUFBQTtFQUZGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHdpZHRoOiAxMDB2dztcblx0aGVpZ2h0OiAxMDB2aDtcblxuXHRoMSB7XG5cdFx0bWFyZ2luOiAwO1xuXHR9XG5cblx0LnZpZGVvLWFwcCB7XG5cdCAgZGlzcGxheTogZmxleDtcblx0ICBkaXNwbGF5OiBmbGV4O1xuXHQgIHdpZHRoOiAxMDB2dztcblx0ICBoZWlnaHQ6IDEwMHZoO1xuXHQgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHQgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXG5cdCAgLnZpZGVvLXBsYXllciB7XG5cdFx0d2lkdGg6IDEwMHZ3O1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHQgIH1cblxuXHQgIC5saXN0IHtcblx0XHRtYXJnaW4tbGVmdDogMS41ZW07XG5cdFx0ZmxleDogMTtcblx0ICB9XG5cblx0ICBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG5cdFx0LnZpZGVvLXBsYXllciB7XG5cdFx0ICB3aWR0aDogOTAlO1xuXHRcdH1cblxuXHRcdC5saXN0IHtcblx0XHQgIG1hcmdpbjogMmVtIDAgMCAwO1xuXHRcdCAgd2lkdGg6IDkwJTtcblx0XHR9XG5cdCAgfVxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _components_video_wrapper_video_wrapper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/video-wrapper/video-wrapper.component */ 8221);
/* harmony import */ var _components_video_list_video_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/video-list/video-list.component */ 3679);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ 3910);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ 3228);
/* harmony import */ var _entity_store_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entity-store-module */ 2656);
/* harmony import */ var _ngrx_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/data */ 8147);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _entity_metadata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entity-metadata */ 3985);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _directives_NavigableListDirective__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/NavigableListDirective */ 6369);
/* harmony import */ var _directives_NavigableListItemDirective__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/NavigableListItemDirective */ 7476);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/a11y */ 3170);
/* harmony import */ var _directives_FocusDirective__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/FocusDirective */ 5252);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/scrolling */ 275);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;



















class AppModule {}
_class = AppModule;
_class.ɵfac = function AppModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: _class,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_10__.StoreModule.forRoot(), _ngrx_data__WEBPACK_IMPORTED_MODULE_11__.EntityDataModule.forRoot(_entity_metadata__WEBPACK_IMPORTED_MODULE_4__.entityConfig), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__.MatProgressSpinnerModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_14__.MatListModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_15__.ScrollingModule, _entity_store_module__WEBPACK_IMPORTED_MODULE_3__.EntityStoreModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_16__.A11yModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _components_video_wrapper_video_wrapper_component__WEBPACK_IMPORTED_MODULE_1__.VideoWrapperComponent, _components_video_list_video_list_component__WEBPACK_IMPORTED_MODULE_2__.VideoListComponent, _directives_NavigableListDirective__WEBPACK_IMPORTED_MODULE_5__.NavigableListDirective, _directives_NavigableListItemDirective__WEBPACK_IMPORTED_MODULE_6__.NavigableListItemDirective, _directives_FocusDirective__WEBPACK_IMPORTED_MODULE_7__.FocusDirective],
    imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_10__.StoreRootModule, _ngrx_data__WEBPACK_IMPORTED_MODULE_11__.EntityDataModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__.MatProgressSpinnerModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_14__.MatListModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_15__.ScrollingModule, _entity_store_module__WEBPACK_IMPORTED_MODULE_3__.EntityStoreModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_16__.A11yModule]
  });
})();

/***/ }),

/***/ 3679:
/*!***************************************************************!*\
  !*** ./src/app/components/video-list/video-list.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VideoListComponent: () => (/* binding */ VideoListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_channel_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/channel.data-service */ 3245);
/* harmony import */ var _services_video_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/video.service */ 6794);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ 3228);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/scrolling */ 275);
/* harmony import */ var _directives_FocusDirective__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives/FocusDirective */ 5252);
var _class;







const _c0 = function (a0) {
  return {
    active: a0
  };
};
function VideoListComponent_div_0_mat_list_option_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-list-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("focus", function VideoListComponent_div_0_mat_list_option_5_Template_mat_list_option_focus_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const channel_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.onfocus(channel_r2));
    })("selectedChange", function VideoListComponent_div_0_mat_list_option_5_Template_mat_list_option_selectedChange_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const channel_r2 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.playIt(channel_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const channel_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", channel_r2)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c0, channel_r2 == ctx_r1.activeChannel));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", channel_r2.name, " ");
  }
}
function VideoListComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Channel List");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "cdk-virtual-scroll-viewport", 2)(4, "mat-selection-list", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, VideoListComponent_div_0_mat_list_option_5_Template, 2, 5, "mat-list-option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("multiple", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("cdkVirtualForOf", ctx_r0.list);
  }
}
class VideoListComponent {
  onKeydownHandler(event) {
    /*    if (this.showList && this.intervalID == 0){
          this.intervalID = setInterval(() => this.showList = false, 10000);
        }*/
    console.log('VideoListComponent onKeydownHandler', event.keyCode);
    this.showList = false;
    if (event.keyCode == 13) {
      console.log('VideoListComponent onKeydownHandler', 'enter');
      this.showList = false;
    }
    if (event.keyCode == 38) {
      console.log('VideoListComponent onKeydownHandler', 'keyUp');
      this.showList = true;
    }
    if (event.keyCode == 40) {
      console.log('VideoListComponent onKeydownHandler', 'keyDown');
      this.showList = true;
    }
    if (event.keyCode == 37) {
      console.log('VideoListComponent onKeydownHandler', 'keyLeft');
      this.showList = true;
    }
    if (event.keyCode == 39) {
      console.log('VideoListComponent onKeydownHandler', 'keyRight');
      this.showList = true;
      //setTimeout(() => this.showList = false, 10000);
    }

    if (event.keyCode == 49 && this.list.length > 0) {
      console.log('VideoListComponent onKeydownHandler', '1');
      this.playIt(this.list[0]);
    }
    if (event.keyCode == 50 && this.list.length > 1) {
      console.log('VideoListComponent onKeydownHandler', '2');
      this.playIt(this.list[1]);
    }
  }
  constructor(channelDataService, videoService) {
    this.channelDataService = channelDataService;
    this.videoService = videoService;
    this.list = [];
    this.showList = false;
    this.intervalID = 0;
  }
  ngOnInit() {
    console.log('VideoListComponent ngOnInit');
    this.channelDataService.all().subscribe(ELEMENT_DATA => {
      this.list = ELEMENT_DATA;
      this.showList = true;
      //this.playIt(this.list[1]);
    });
  }

  playIt(channel) {
    console.log('VideoListComponent playIt');
    this.videoService.setCurrentVideoByIndex(channel);
    this.videoService.play();
    this.activeChannel = channel;
  }
  ngAfterContentInit() {
    console.log('VideoListComponent ngAfterContentInit');
  }
  ngAfterViewInit() {
    console.log('VideoListComponent ngAfterViewInit');
  }
  onfocus(channel) {
    console.log('VideoListComponent onfocus', channel.name);
  }
}
_class = VideoListComponent;
_class.ɵfac = function VideoListComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_channel_data_service__WEBPACK_IMPORTED_MODULE_0__.ChannelDataService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_video_service__WEBPACK_IMPORTED_MODULE_1__.VideoService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-video-list"]],
  hostBindings: function VideoListComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keydown", function VideoListComponent_keydown_HostBindingHandler($event) {
        return ctx.onKeydownHandler($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveDocument"]);
    }
  },
  decls: 1,
  vars: 1,
  consts: [["class", "video-list", 4, "ngIf"], [1, "video-list"], ["appendOnly", "", "itemSize", "1", 1, "example-viewport"], ["focus", "", "tabindex", "0", 3, "multiple"], ["class", "list-item", 3, "value", "ngClass", "focus", "selectedChange", 4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "list-item", 3, "value", "ngClass", "focus", "selectedChange"]],
  template: function VideoListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, VideoListComponent_div_0_Template, 6, 2, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showList);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_list__WEBPACK_IMPORTED_MODULE_5__.MatSelectionList, _angular_material_list__WEBPACK_IMPORTED_MODULE_5__.MatListOption, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__.CdkFixedSizeVirtualScroll, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__.CdkVirtualForOf, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__.CdkVirtualScrollViewport, _directives_FocusDirective__WEBPACK_IMPORTED_MODULE_2__.FocusDirective],
  styles: [".video-list[_ngcontent-%COMP%] {\n  width: auto;\n  height: 100%;\n}\n.video-list[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.video-list[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin: 0 1em 0 0;\n}\n.video-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%], .video-list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.video-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%], .video-list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]:focus {\n  background-color: lightblue;\n}\n.video-list[_ngcontent-%COMP%]   .list-item.active[_ngcontent-%COMP%] {\n  background-color: #ee6795;\n}\n\n.example-viewport[_ngcontent-%COMP%] {\n  height: 90vh;\n  overflow: hidden;\n}\n\n.example-item[_ngcontent-%COMP%] {\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy92aWRlby1saXN0L3ZpZGVvLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUNKO0FBRUU7RUFDRSxpQkFBQTtBQUFKO0FBR0U7RUFDRSxXQUFBO0FBREo7QUFJRTtFQUNFLDJCQUFBO0FBRko7QUFLRTtFQUNFLHlCQUFBO0FBSEo7O0FBT0E7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUFKRjs7QUFPQTtFQUNFLFlBQUE7QUFKRiIsInNvdXJjZXNDb250ZW50IjpbIi52aWRlby1saXN0IHtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogMTAwJTtcblxuICAuaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cbiAgLnRpdGxlIHtcbiAgICBtYXJnaW46IDAgMWVtIDAgMDtcbiAgfVxuXG4gIC5saXN0LCAubGlzdC1pdGVtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5saXN0LCAubGlzdC1pdGVtOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XG4gIH1cblxuICAubGlzdC1pdGVtLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlNjc5NTtcbiAgfVxufVxuXG4uZXhhbXBsZS12aWV3cG9ydCB7XG4gIGhlaWdodDogOTB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmV4YW1wbGUtaXRlbSB7XG4gIGhlaWdodDogNTBweDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 8221:
/*!*********************************************************************!*\
  !*** ./src/app/components/video-wrapper/video-wrapper.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VideoWrapperComponent: () => (/* binding */ VideoWrapperComponent)
/* harmony export */ });
/* harmony import */ var hls_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hls.js */ 7345);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_video_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/video.service */ 6794);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-spinner */ 3910);
/* harmony import */ var _video_list_video_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../video-list/video-list.component */ 3679);
var _class;






const _c0 = ["myMedia"];
function VideoWrapperComponent_mat_spinner_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-spinner", 6);
  }
}
class VideoWrapperComponent {
  constructor(videoService) {
    this.videoService = videoService;
    this.loading = false;
    this.ignore = false;
    this.playing = false;
    this.hls = new hls_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.videoListeners = {
      canplay: () => this.videoService.setLoading(false),
      seeking: () => this.videoService.setLoading(true)
    };
  }
  ngOnInit() {
    this.subscriptions();
    Object.keys(this.videoListeners).forEach(videoListener => console.log(videoListener) //this.video.nativeElement.addEventListener(videoListener, this.videoListeners[videoListener])
    );

    this.myMedia.nativeElement.addEventListener('canplay', this.videoListeners['canplay']);
    this.myMedia.nativeElement.addEventListener('seeking', this.videoListeners['seeking']);
  }
  /** Play/Pause video on click */
  onVideoClick() {
    if (this.playing) {
      //this.videoService.pause();
    } else {
      this.videoService.play();
    }
  }
  /** Go full screen on double click */
  onDoubleClick() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      const videoPlayerDiv = document.querySelector('.video-player');
      if (videoPlayerDiv && videoPlayerDiv.requestFullscreen) {
        videoPlayerDiv.requestFullscreen();
      }
    }
  }
  /**
   * Loads the video, if the browser supports HLS then the video use it, else play a video with native support
   */
  load(currentVideo) {
    if (hls_js__WEBPACK_IMPORTED_MODULE_0__["default"].isSupported()) {
      this.loadVideoWithHLS(currentVideo);
    } else {
      if (this.myMedia.nativeElement.canPlayType('application/vnd.apple.mpegurl')) {
        this.loadVideo(currentVideo);
      }
    }
  }
  /**
   * Play or Pause current video
   */
  playPauseVideo(playing) {
    this.playing = playing;
    this.myMedia.nativeElement[playing ? 'play' : 'pause']();
  }
  /**
   * Setup subscriptions
   */
  subscriptions() {
    this.videoService.playingState$.subscribe(playing => this.playPauseVideo(playing));
    this.videoService.currentVideo$.subscribe(video => this.load(video));
    this.videoService.loading$.subscribe(loading => this.loading = loading);
  }
  /**
   * Method that loads the video with HLS support
   */
  loadVideoWithHLS(currentVideo) {
    this.hls.loadSource(currentVideo);
    this.hls.attachMedia(this.myMedia.nativeElement);
    // this.hls.on(HLS.Events.MANIFEST_PARSED, () => this.video.nativeElement.play());
  }
  /**
   * Method that loads the video without HLS support
   */
  loadVideo(currentVideo) {
    this.myMedia.nativeElement.src = currentVideo;
  }
}
_class = VideoWrapperComponent;
_class.ɵfac = function VideoWrapperComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_video_service__WEBPACK_IMPORTED_MODULE_1__.VideoService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-video-wrapper"]],
  viewQuery: function VideoWrapperComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.myMedia = _t.first);
    }
  },
  decls: 6,
  vars: 1,
  consts: [[1, "video-wrapper"], [1, "video", 3, "click", "dblclick"], ["myMedia", ""], ["class", "spinner", "color", "accent", "strokeWidth", "5", 4, "ngIf"], [1, "content"], [1, "list"], ["color", "accent", "strokeWidth", "5", 1, "spinner"]],
  template: function VideoWrapperComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "video", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function VideoWrapperComponent_Template_video_click_1_listener() {
        return ctx.onVideoClick();
      })("dblclick", function VideoWrapperComponent_Template_video_dblclick_1_listener() {
        return ctx.onDoubleClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, VideoWrapperComponent_mat_spinner_3_Template, 1, 0, "mat-spinner", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "app-video-list", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__.MatProgressSpinner, _video_list_video_list_component__WEBPACK_IMPORTED_MODULE_2__.VideoListComponent],
  styles: [".video-wrapper[_ngcontent-%COMP%]   .video[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  width: auto !important;\n  height: 100% !important;\n}\n.video-wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  position: fixed;\n  background: rgba(0, 0, 0, 0.5);\n  color: #f1f1f1;\n  width: 20%;\n}\n.video-wrapper[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(50% - 50px);\n  left: calc(50% - 50px);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy92aWRlby13cmFwcGVyL3ZpZGVvLXdyYXBwZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBREo7QUFJRTtFQUNFLGVBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FBRko7QUFLRTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQUhKIiwic291cmNlc0NvbnRlbnQiOlsiLnZpZGVvLXdyYXBwZXIge1xuXG4gIC52aWRlbyB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgY29sb3I6ICNmMWYxZjE7XG4gICAgd2lkdGg6IDIwJTtcbiAgfVxuXG4gIC5zcGlubmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiBjYWxjKDUwJSAtIDUwcHgpO1xuICAgIGxlZnQ6IGNhbGMoNTAlIC0gNTBweCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 5252:
/*!**********************************************!*\
  !*** ./src/app/directives/FocusDirective.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FocusDirective: () => (/* binding */ FocusDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;


class FocusDirective {
  constructor(element) {
    this.element = element;
    setTimeout(() => this.element.nativeElement.focus());
  }
}
_class = FocusDirective;
_class.ɵfac = function FocusDirective_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
_class.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: _class,
  selectors: [["", "focus", ""]]
});

/***/ }),

/***/ 6369:
/*!******************************************************!*\
  !*** ./src/app/directives/NavigableListDirective.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavigableListDirective: () => (/* binding */ NavigableListDirective)
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ 3170);
/* harmony import */ var _NavigableListItemDirective__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavigableListItemDirective */ 7476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;



class NavigableListDirective {
  manage(event) {
    console.log('onKeydownHandler', event.code);
    this.keyManager.onKeydown(event);
  }
  constructor() {}
  ngAfterContentInit() {
    // typing the first letter of an item will jump to the item. (based on optional label input)
    this.keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__.FocusKeyManager(this.listItems).withWrap().withTypeAhead(300);
    setTimeout(() => {
      this.listItems.first.tabIndex = 0;
    });
    // todo: subscribe to listItems changes
    this.listItems.forEach((item, index) => {
      // TODO: unsub
      item.selectedChange.subscribe(it => {
        this.keyManager.setActiveItem(index);
        this.listItems.forEach((otherItem, otherIndex) => {
          if (otherIndex != index) {
            otherItem.selected = false;
          }
        });
      });
      item.focused.subscribe(_ => {
        this.keyManager.setActiveItem(index);
      });
    });
  }
}
_class = NavigableListDirective;
_class.ɵfac = function NavigableListDirective_Factory(t) {
  return new (t || _class)();
};
_class.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: _class,
  selectors: [["", "appNavigableList", ""]],
  contentQueries: function NavigableListDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _NavigableListItemDirective__WEBPACK_IMPORTED_MODULE_0__.NavigableListItemDirective, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.listItems = _t);
    }
  },
  hostBindings: function NavigableListDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown", function NavigableListDirective_keydown_HostBindingHandler($event) {
        return ctx.manage($event);
      });
    }
  }
});

/***/ }),

/***/ 7476:
/*!**********************************************************!*\
  !*** ./src/app/directives/NavigableListItemDirective.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavigableListItemDirective: () => (/* binding */ NavigableListItemDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;


class NavigableListItemDirective {
  /** Whether the item is currently selected or not. If it is selected, it will be tabbable */
  get selected() {
    return this._selected;
  }
  set selected(newValue) {
    this._selected = newValue;
    newValue ? this.tabIndex = 0 : this.tabIndex = -1;
  }
  constructor(element) {
    this.element = element;
    // Change name since it's not really two-way bindable.
    /** Emits when an item is selected with mouse or keyboard */
    this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * @internal
     * emits when the element is focused -
     * only intended to be used by the container navigable list component.
     */
    this.focused = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._selected = false;
  }
  focusEvent(event) {
    this.focused.emit();
  }
  manage(event) {
    this.selectedChange.emit();
    this.selected = true;
  }
  getLabel() {
    return this.channel?.name;
  }
  /** called by the key manager when this item should become focused */
  focus() {
    this.element.nativeElement.focus();
  }
}
_class = NavigableListItemDirective;
_class.ɵfac = function NavigableListItemDirective_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
_class.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: _class,
  selectors: [["", "appNavigableListItem", ""]],
  hostVars: 1,
  hostBindings: function NavigableListItemDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function NavigableListItemDirective_focus_HostBindingHandler($event) {
        return ctx.focusEvent($event);
      })("keydown.enter", function NavigableListItemDirective_keydown_enter_HostBindingHandler($event) {
        return ctx.manage($event);
      })("keydown.space", function NavigableListItemDirective_keydown_space_HostBindingHandler($event) {
        return ctx.manage($event);
      })("click", function NavigableListItemDirective_click_HostBindingHandler($event) {
        return ctx.manage($event);
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("tabindex", ctx.tabIndex);
    }
  },
  inputs: {
    channel: ["appNavigableListItem", "channel"],
    selected: ["navSelected", "selected"]
  },
  outputs: {
    selectedChange: "navSelection",
    focused: "focused"
  }
});

/***/ }),

/***/ 3985:
/*!************************************!*\
  !*** ./src/app/entity-metadata.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   entityConfig: () => (/* binding */ entityConfig)
/* harmony export */ });
const entityMetadata = {
  Channel: {}
};
// because the plural of "hero" is not "heros"
const pluralNames = {
  Channel: 'Channels'
};
const entityConfig = {
  entityMetadata,
  pluralNames
};

/***/ }),

/***/ 2656:
/*!****************************************!*\
  !*** ./src/app/entity-store-module.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EntityStoreModule: () => (/* binding */ EntityStoreModule)
/* harmony export */ });
/* harmony import */ var _services_channel_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/channel.data-service */ 3245);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngrx_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/data */ 8147);
var _class;




class EntityStoreModule {
  constructor(entityDataService, channelDataService) {
    entityDataService.registerService('Channel', channelDataService);
  }
}
_class = EntityStoreModule;
_class.ɵfac = function EntityStoreModule_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_data__WEBPACK_IMPORTED_MODULE_2__.EntityDataService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_channel_data_service__WEBPACK_IMPORTED_MODULE_0__.ChannelDataService));
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  providers: [_services_channel_data_service__WEBPACK_IMPORTED_MODULE_0__.ChannelDataService]
});

/***/ }),

/***/ 3245:
/*!**************************************************!*\
  !*** ./src/app/services/channel.data-service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChannelDataService: () => (/* binding */ ChannelDataService)
/* harmony export */ });
/* harmony import */ var _ngrx_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/data */ 8147);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9736);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 4860);
var _class;






class ChannelDataService extends _ngrx_data__WEBPACK_IMPORTED_MODULE_1__.DefaultDataService {
  constructor(httpClient, httpUrlGenerator) {
    super('Channel', httpClient, httpUrlGenerator);
    this.httpClient = httpClient;
  }
  all() {
    return this.httpClient.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/api/v1/channel/list`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => {
      return response;
    }));
  }
}
_class = ChannelDataService;
_class.ɵfac = function ChannelDataService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngrx_data__WEBPACK_IMPORTED_MODULE_1__.HttpUrlGenerator));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac
});

/***/ }),

/***/ 6794:
/*!*******************************************!*\
  !*** ./src/app/services/video.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VideoService: () => (/* binding */ VideoService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;


class VideoService {
  constructor() {
    this.playingState = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.loading = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(true);
    this.videoEnded = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
    this.currentVideo = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('');
  }
  get loading$() {
    return this.loading.asObservable();
  }
  setLoading(value) {
    this.loading.next(value);
  }
  play() {
    this.playingState.next(true);
  }
  pause() {
    this.playingState.next(false);
  }
  get playingState$() {
    return this.playingState.asObservable();
  }
  get videoEnded$() {
    return this.videoEnded.asObservable();
  }
  setVideoEnded(value) {
    this.videoEnded.next(value);
  }
  get currentVideo$() {
    return this.currentVideo.asObservable();
  }
  setCurrentVideo(video) {
    if (this.currentVideo.getValue() !== video) {
      this.currentVideo.next(video);
      this.pause();
    }
  }
  setCurrentVideoByIndex(channel) {
    this.setCurrentVideo(channel.video_url);
  }
}
_class = VideoService;
_class.ɵfac = function VideoService_Factory(t) {
  return new (t || _class)();
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  //apiUrl: 'http://mytv.dev.local',
  apiUrl: 'https://moukafih.nl'
};

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map