import { Component, OnInit } from '@angular/core';
import {validationMessageConstants} from "./validation.messages";

@Component({
  selector: 'app-constant',
  templateUrl: './constant.component.html',
  styleUrls: ['./constant.component.css']
})
export class ConstantComponent implements OnInit {
  constructor() { }
  ngOnInit() {}
  validationMessageConstants = new validationMessageConstants();
}