"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var LifecycleComponent = (function () {
    function LifecycleComponent() {
        this.bindable = 1000;
    }
    LifecycleComponent.prototype.ngOnInit = function () {
        this.log('ngOnInit');
    };
    LifecycleComponent.prototype.ngOnChanges = function () {
        this.log('ngOnChanges');
    };
    LifecycleComponent.prototype.ngOnDestroy = function () {
        this.log('ngOnDestroy');
    };
    LifecycleComponent.prototype.ngDoCheck = function () {
        this.log('ngDoCheck');
    };
    LifecycleComponent.prototype.ngAfterContentInit = function () {
        this.log('ngAfterContentInit');
    };
    LifecycleComponent.prototype.ngAfterContentChecked = function () {
        this.log('ngAfterContentChecked');
    };
    LifecycleComponent.prototype.ngAfterViewInit = function () {
        this.log('ngAfterViewInit');
    };
    LifecycleComponent.prototype.ngAfterViewChecked = function () {
        this.log('ngAfterViewChecked');
    };
    LifecycleComponent.prototype.log = function (hook) {
        console.log(hook);
    };
    __decorate([
        core_1.Input()
    ], LifecycleComponent.prototype, "bindable");
    LifecycleComponent = __decorate([
        core_1.Component({
            selector: 'app-lifecycle',
            template: "\n    <ng-content></ng-content>\n    <hr>\n    <p #localReference>{{bindable}}</p>\n    <p>{{localReference.textContent}}</p>\n  ",
            styles: []
        })
    ], LifecycleComponent);
    return LifecycleComponent;
}());
exports.LifecycleComponent = LifecycleComponent;
//# sourceMappingURL=lifecycle.component.js.map