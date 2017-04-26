import { Component, OnInit } from '@angular/core';
import {LogService} from "./log.service";
import {DataService} from "./data.service";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  providers: [LogService, DataService]
})
export class ServicesComponent implements OnInit {
  items : string[] = [];
  constructor(private logService : LogService, private dataService : DataService) { }
  ngOnInit() {}

  getLog(value){
    this.logService.WriteToLog(value);
  }

  onStore(value){
    this.dataService.addData(value);
  }

  viewData(){
    this.items = this.dataService.getData().slice(0);
  }
}
