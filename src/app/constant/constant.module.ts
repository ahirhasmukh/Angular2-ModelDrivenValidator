import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ConstantComponent} from "./constant.component";

@NgModule({
    declarations: [
        ConstantComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [ ],
    exports: [ConstantComponent]
})
export class ConstantModule { }