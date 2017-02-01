import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'validation',
    templateUrl: './validation.component.html'
})

export class ValidationComponent implements OnInit {

    @Input() errorMessage: string;
    @Input() controlName: string;
    @Input() errorField: any;
    @Input() isFormInvalid: boolean;

    ngOnInit(): void {
        console.log('Error message: ' +this.errorMessage);
        console.log('Error field: ' +this.errorField);
        console.log('Error formInvalid: ' +this.isFormInvalid);
    }
}