import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { AnotherComponent } from './test/another.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { PropertyBindingComponent } from './databinding/property-binding.component';
import { EventBindingComponent } from './databinding/event-binding.component';
import { TwoWayBindingComponent } from './databinding/two-way-binding.component';
import { LifecycleComponent } from './lifecycle.component';

import { InputTextModule } from 'primeng/primeng';
import {AutoCompleteModule} from 'primeng/primeng';
import { MaterialModule } from '@angular/material';
import { Md2Module }  from 'md2';
import { Ng2CompleterModule } from "ng2-completer";
import {SelectModule} from 'ng2-select';
import {ValidationComponent} from "./validation/validation.component";

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    AnotherComponent,
    DatabindingComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    LifecycleComponent,
    ValidationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2AutoCompleteModule,
    ReactiveFormsModule,
    InputTextModule,
    AutoCompleteModule,
    MaterialModule.forRoot(),
    Ng2CompleterModule,
    SelectModule,
    Md2Module.forRoot()
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
