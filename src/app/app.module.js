"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var ng2_auto_complete_1 = require('ng2-auto-complete');
var app_component_1 = require('./app.component');
var test_component_1 = require('./test/test.component');
var another_component_1 = require('./test/another.component');
var databinding_component_1 = require('./databinding/databinding.component');
var property_binding_component_1 = require('./databinding/property-binding.component');
var event_binding_component_1 = require('./databinding/event-binding.component');
var two_way_binding_component_1 = require('./databinding/two-way-binding.component');
var lifecycle_component_1 = require('./lifecycle.component');
var primeng_1 = require('primeng/primeng');
var primeng_2 = require('primeng/primeng');
var material_1 = require('@angular/material');
var md2_1 = require('md2');
var ng2_completer_1 = require("ng2-completer");
var ng2_select_1 = require('ng2-select');
var validation_component_1 = require("./validation/validation.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                test_component_1.TestComponent,
                another_component_1.AnotherComponent,
                databinding_component_1.DatabindingComponent,
                property_binding_component_1.PropertyBindingComponent,
                event_binding_component_1.EventBindingComponent,
                two_way_binding_component_1.TwoWayBindingComponent,
                lifecycle_component_1.LifecycleComponent,
                validation_component_1.ValidationComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                ng2_auto_complete_1.Ng2AutoCompleteModule,
                forms_1.ReactiveFormsModule,
                primeng_1.InputTextModule,
                primeng_2.AutoCompleteModule,
                material_1.MaterialModule.forRoot(),
                ng2_completer_1.Ng2CompleterModule,
                ng2_select_1.SelectModule,
                md2_1.Md2Module.forRoot()
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map