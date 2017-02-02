import {Component, OnInit, ViewEncapsulation, ApplicationRef} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {SafeHtml, DomSanitizer} from "@angular/platform-browser";
import {CompleterService, CompleterData} from "ng2-completer";
import { validationMessageConstants } from "../app/until/validation.messages";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  validationMessageConstants = new validationMessageConstants();
  private value:any = {};
  private _disabledV:string = '0';
  private disabled:boolean = false;
  public items:Array<any> = [];

  public selected(value:any):void {
    console.log('Selected value is: ', value);
  }

  public removed(value:any):void {
    console.log('Removed value is: ', value);
  }

  public typed(value:any):void {
    console.log('New search input: ', value);
  }

  public refreshValue(value:any):void {
    this.value = value;
  }

  myForm : FormGroup;

  constructor(private formBuilder: FormBuilder){}

  public ngOnInit():any {
    this.addDataForm();
  }

  addDataForm(){
    this.myForm = this.formBuilder.group({
      firstname:  new FormControl('',[<any>Validators.required,<any>Validators.minLength(2),<any>Validators.maxLength(10)]),
      lastname:  new FormControl('',[<any>Validators.required,<any>Validators.minLength(2),<any>Validators.maxLength(10)]),
      fromdate: new FormControl('',[<any>Validators.required]),
      todate: new FormControl('',[<any>Validators.required]),
      address : this.formBuilder.group({
        homeNumber : new FormControl('',<any>Validators.required),
        street:  new FormControl(),
        zipcode:  new FormControl('',[<any>Validators.required,<any>Validators.pattern('[0-9]{5,6}')]),
        mobileNo: new FormControl('',[<any>Validators.required,<any>Validators.pattern('[0-9]{10,11}')]),
        emailId: new FormControl('',[<any>Validators.required,<any>Validators.pattern(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i)])
      }),
      items: new FormControl('',[<any>Validators.required]),
      color: new FormControl(),
      singalImage: new FormControl(''),
      multipleImages: new FormControl('')
    });
  }
  file :File;
  selectImage(event: EventTarget){
    let eventObj: MSInputMethodContext = <MSInputMethodContext> event;
    let target: HTMLInputElement = <HTMLInputElement> eventObj.target;
    let files: FileList = target.files;
    this.file = files[0];
    console.log( this.file);
  }

  onChange(event) {
    var files = event.srcElement.files;
    var file = event.target.files;
    console.log(files);
    console.log(file);
  }

  onSubmit(value:any, check:boolean){
    if(check){
      console.log('Firstname:'+ value.firstname);
      console.log('Lastname:'+ value.lastname);
      console.log('From date:'+ value.fromdate);
      console.log('To date:'+ value.todate);
      console.log('Number:'+ value.address.homeNumber);
      /*console.log('Street:'+ value.address.street);*/
      console.log('Zipcode:'+ value.address.zipcode);
      console.log('Mobile number:'+ value.address.mobileNo);
      console.log('Email address:'+ value.address.emailId);
      console.log('AutoComplete:'+ value.items.name);
      /*console.log('Single Image:'+ this.file.name);
      console.log('Multiple Image:');*/
    }
    else{
      console.log('Form invalid');
    }
  }

  handleChange(value: any) {
    console.log('Changed data: ', value);
  }

  public cityList = [
    {"id":1,"name":"Vadtal","stateId":1,"isEnable":1},
    {"id":2,"name":"Kandari","stateId":1,"isEnable":1},
    {"id":3,"name":"Mahuva","stateId":1,"isEnable":1},
    {"id":4,"name":"Bhavnagar","stateId":1,"isEnable":1},
    {"id":5,"name":"Ahmedabad","stateId":1,"isEnable":1},
    {"id":6,"name":"Rajkot","stateId":1,"isEnable":1},
    {"id":7,"name":"Gondal","stateId":1,"isEnable":1},
    {"id":8,"name":"Veraval","stateId":1,"isEnable":1}
  ];

  reset(fromdate:any,todate:any): void{
    this.myForm.reset();
    fromdate._value = null;
    fromdate._viewValue = null;
    todate._value = null;
    todate._viewValue = null;
    /*this.addDataForm();*/
  }
}