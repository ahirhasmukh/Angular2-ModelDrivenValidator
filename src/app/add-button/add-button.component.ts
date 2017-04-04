import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css']
})
export class AddButtonComponent implements OnInit {

  dialogStatus: any;
  @Output() showDialog = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  show(dialog:any){
    this.showDialog.emit(this.dialogStatus);
  }
}
