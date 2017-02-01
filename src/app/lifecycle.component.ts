import {
    Component, OnInit, OnChanges, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked,
    AfterViewInit, AfterViewChecked, Input
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: `
    <ng-content></ng-content>
    <hr>
    <p #localReference>{{bindable}}</p>
    <p>{{localReference.textContent}}</p>
  `,
  styles: []
})
export class LifecycleComponent implements OnInit,OnChanges,OnDestroy,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked {

  @Input() bindable = 1000;
  constructor() { }

  ngOnInit() {
    this.log('ngOnInit');
  }
  ngOnChanges(){
    this.log('ngOnChanges');
  }
  ngOnDestroy(){
    this.log('ngOnDestroy');
  }
  ngDoCheck(){
    this.log('ngDoCheck');
  }
  ngAfterContentInit(){
    this.log('ngAfterContentInit');
  }
  ngAfterContentChecked(){
    this.log('ngAfterContentChecked');
  }
  ngAfterViewInit(){
    this.log('ngAfterViewInit');
  }
  ngAfterViewChecked(){
    this.log('ngAfterViewChecked');
  }

  private log(hook: string){
      console.log(hook);
  }
}
