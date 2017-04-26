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
import {ConstantModule} from "./constant/constant.module";
import {AddButtonModule} from "./add-button/add-button.module";
import { UploadComponent } from './upload/upload.component';
import { DndDirective } from './upload/dnd.directive';
import { SwiperComponent } from './swiper/swiper.component';
import {SwiperModule} from "angular2-useful-swiper";
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { ServicesComponent } from './services/services.component';
import {LogService} from "./services/log.service";
import { ValidationDemoComponent } from './validation-demo/validation-demo.component';
import { CropImageComponent } from './crop-image/crop-image.component';

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
    ValidationComponent,
    UploadComponent,
    DndDirective,
    DndDirective,
    SwiperComponent,
    MultiSelectComponent,
    ServicesComponent,
    ValidationDemoComponent,
    CropImageComponent
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
    Md2Module.forRoot(),
    ConstantModule,
    AddButtonModule,
    SwiperModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
