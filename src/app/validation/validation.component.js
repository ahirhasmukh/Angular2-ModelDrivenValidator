"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ValidationComponent = (function () {
    function ValidationComponent() {
    }
    ValidationComponent.prototype.ngOnInit = function () {
        console.log('Error message: ' + this.errorMessage);
        console.log('Error field: ' + this.errorField);
        console.log('Error formInvalid: ' + this.isFormInvalid);
    };
    __decorate([
        core_1.Input()
    ], ValidationComponent.prototype, "errorMessage");
    __decorate([
        core_1.Input()
    ], ValidationComponent.prototype, "controlName");
    __decorate([
        core_1.Input()
    ], ValidationComponent.prototype, "errorField");
    __decorate([
        core_1.Input()
    ], ValidationComponent.prototype, "isFormInvalid");
    ValidationComponent = __decorate([
        core_1.Component({
            selector: 'validation',
            templateUrl: './validation.component.html'
        })
    ], ValidationComponent);
    return ValidationComponent;
}());
exports.ValidationComponent = ValidationComponent;
//# sourceMappingURL=validation.component.js.map