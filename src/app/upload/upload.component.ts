import {Component, OnInit, Directive, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  private fileList : any = [];
  private invalidFiles : any = [];

  constructor() { }

  ngOnInit() {
  }

  onFilesChange(fileList : Array<File>){
    this.fileList = fileList;
  }

  onFileInvalids(fileList : Array<File>){
    this.invalidFiles = fileList;
  }
}