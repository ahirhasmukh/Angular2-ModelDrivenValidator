import {Component, OnInit, Output, EventEmitter, HostListener} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
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

  myForm : FormGroup;

  date: Date = null;
  minDate: Date = null;
  maxDate: Date = null;
  str ="8000777298";

  constructor(private formBuilder: FormBuilder){
    /*setTimeout(() => {
      this.items1.push({ name: 'Manjalpur', value: '7', disabled: false });
      this.items1.push({ name: 'Sitabag', value: '8', disabled: false });
      this.items1.push({ name: 'Vasna', value: '9', disabled: false });
      this.items1.push({ name: 'Gorva', value: '10', disabled: false });
    }, 3000);*/
  }

  public ngOnInit():any {
    this.addDataForm();

    this.date = new Date();
    this.minDate = new Date();
    this.minDate.setMonth(this.minDate.getMonth());
    this.maxDate = new Date();
    this.maxDate.setMonth(this.maxDate.getMonth() + 3);

    // *8**1***08

    let i;
    for(i=0;i<this.str.length;i++){
        if((i==1) || (i==4) || (i==8) ||(i==9)){

        }else{
          this.str = this.str.substr(0,i)+"*"+this.str.substr(i+1);
          console.log(this.str + " hi " + this.str.substr(0,i));
        }
    }

  }

  addDataForm(){
    this.myForm = this.formBuilder.group({
      firstname:  new FormControl('',[<any>Validators.required,<any>Validators.pattern('^[a-zA-z]*$'),<any>Validators.minLength(2),<any>Validators.maxLength(10)]),
      lastname:  new FormControl('',[<any>Validators.required,<any>Validators.pattern('^[a-zA-z]*$'),<any>Validators.minLength(2),<any>Validators.maxLength(10)]),
      fromdate: new FormControl('',[<any>Validators.required]),
      todate: new FormControl('',[<any>Validators.required]),
      address : this.formBuilder.group({
        homeNumber : new FormControl('',<any>Validators.required),
        /*street:  new FormControl(),
        zipcode:  new FormControl('',[<any>Validators.required,<any>Validators.pattern('[0-9]{5,6}')]),
        mobileNo: new FormControl('',[<any>Validators.required,<any>Validators.pattern('[0-9]{10,11}')]),
        emailId: new FormControl('',[<any>Validators.required,<any>Validators.pattern(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i)])*/
      }),
      /*items: new FormControl('',[<any>Validators.required]),*/
      /*color: new FormControl(),
      singalImage: new FormControl(''),
      multipleImages: new FormControl('')*/
    });
  }

  formItem: Array<any> = [];

  onSubmit(value:any, check:boolean){
    if(check){
      console.log('Firstname:'+ value.firstname);
      console.log('Lastname:'+ value.lastname);
      console.log('From date:'+ value.fromdate.viewValue);
      console.log('To date:'+ value.todate);
      console.log('Number:'+ value.address.homeNumber);

   /* console.log('Zipcode:'+ value.address.zipcode);
      console.log('Mobile number:'+ value.address.mobileNo);
      console.log('Email address:'+ value.address.emailId);
      console.log('AutoComplete:'+ value.items.name);*/

      this.formItem.push(value)
      /*this.formItem.push(value.lastname)
      this.formItem.push(value.fromdate)
      this.formItem.push(value.todate)
      this.formItem.push(value.address.homeNumber)
*/


 /*   this.formItem.push(value.address.zipcode)
      this.formItem.push(value.address.mobileNo)
      this.formItem.push(value.address.emailId)
      this.formItem.push(value.items.name)
      /*console.log('Single Image:'+ this.file.name);
      console.log('Multiple Image:');*/
    }
    else{
      console.log('Form invalid');
    }
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

  handleChange(value: any) {
    console.log('Changed data: ', value);
  }

  /*file :File;
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
  }*/

  /*items1: Array<any> =
      [
        { name: 'Vadodara', value: '1', disabled: false },
        { name: 'Rajkot', value: '2', disabled: false },
        { name: 'Delhi', value: '3', disabled: false },
        { name: 'Chennai', value: '4', disabled: true },
        { name: 'Mumbai', value: '5', disabled: false },
        { name: 'Goa', value: '6', disabled: true }
      ];
  multiItem: Array<any> = ['1', '3'];
  item: string = '0';


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
   }*/

   /*str1 = this.str.slice(0,1); // 8
   str2 = this.str.slice(1,2); // 0
   str3 = this.str.replace(this.str.slice(2,4), "**"); // 00
   str4 = this.str.slice(4,5); // 7
   str5 = this.str.slice(5,8); // 772
   str6 = this.str.slice(8,10); // 98
   str7 = this.str5.replace(this.str5, "***");*/
  dialogStatus(dialog:any){
    dialog.open();
  }

  close(dialog:any){
    dialog.close();
  }
}