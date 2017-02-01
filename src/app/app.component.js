"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var validation_messages_1 = require("../app/until/validation.messages");
var AppComponent = (function () {
    function AppComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.validationMessageConstants = new validation_messages_1.validationMessageConstants();
        this.value = {};
        this._disabledV = '0';
        this.disabled = false;
        this.items = [];
        this.cityList = [
            { "id": 1, "name": "Vadtal", "stateId": 1, "isEnable": 1 },
            { "id": 2, "name": "Kandari", "stateId": 1, "isEnable": 1 },
            { "id": 3, "name": "Mahuva", "stateId": 1, "isEnable": 1 },
            { "id": 4, "name": "Bhavnagar", "stateId": 1, "isEnable": 1 },
            { "id": 5, "name": "Ahmedabad", "stateId": 1, "isEnable": 1 },
            { "id": 6, "name": "Rajkot", "stateId": 1, "isEnable": 1 },
            { "id": 7, "name": "Gondal", "stateId": 1, "isEnable": 1 },
            { "id": 8, "name": "Veraval", "stateId": 1, "isEnable": 1 }
        ];
    }
    AppComponent.prototype.selected = function (value) {
        console.log('Selected value is: ', value);
    };
    AppComponent.prototype.removed = function (value) {
        console.log('Removed value is: ', value);
    };
    AppComponent.prototype.typed = function (value) {
        console.log('New search input: ', value);
    };
    AppComponent.prototype.refreshValue = function (value) {
        this.value = value;
    };
    AppComponent.prototype.ngOnInit = function () {
        this.addDataForm();
    };
    AppComponent.prototype.addDataForm = function () {
        this.myForm = this.formBuilder.group({
            firstname: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(2), forms_1.Validators.maxLength(10)]),
            lastname: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(2), forms_1.Validators.maxLength(10)]),
            address: this.formBuilder.group({
                homeNumber: new forms_1.FormControl('', forms_1.Validators.required),
                street: new forms_1.FormControl(),
                zipcode: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern('[0-9]{5,6}')]),
                mobileNo: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern('[0-9]{10,11}')]),
                emailId: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i)])
            }),
            items: new forms_1.FormControl('', [forms_1.Validators.required]),
            color: new forms_1.FormControl()
        });
    };
    AppComponent.prototype.onSubmit = function (value, check) {
        if (check) {
            console.log('Firstname:' + value.firstname);
            console.log('Lastname:' + value.lastname);
            console.log('Number:' + value.address.homeNumber);
            console.log('Street:' + value.address.street);
            console.log('Zipcode:' + value.address.zipcode);
            console.log('Mobile number:' + value.address.mobileNo);
            console.log('Email address:' + value.address.emailId);
            console.log('AutoComplete:' + value.items.name);
        }
        else {
            console.log('Form invalid');
        }
    };
    AppComponent.prototype.handleChange = function (value) {
        console.log('Changed data: ', value);
    };
    AppComponent.prototype.reset = function () {
        this.myForm.reset();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map