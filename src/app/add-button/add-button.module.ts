import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AddButtonComponent} from "./add-button.component";

@NgModule({
    declarations: [
        AddButtonComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [ ],
    exports: [AddButtonComponent]
})
export class AddButtonModule { }