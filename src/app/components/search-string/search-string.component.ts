import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
    selector: 'app-search-string',
    templateUrl: './search-string.component.html',
    styleUrls: ['./search-string.component.scss']
})
export class SearchStringComponent implements OnInit {

   public searchString: string;
    public queryStringFormGroup: FormGroup;
    public resultString: string[];
    public showResultComponent: boolean;
    public countOfOccurrences: number;
    public countOfReverseOccurrences: number;
    constructor(private formBuilder: FormBuilder, private router: Router) {
    }

    public ngOnInit(): void {
        this.showResultComponent = false;
        this.resultString = [];
        this.searchString = '';
        this.queryStringFormGroup = this.formBuilder.group({
            queryString: '',
            message: '',
        });
    }

    public getFormControl(fieldName: string): AbstractControl | null {
        return this.queryStringFormGroup.get(fieldName);
    }

    public search(): void {
        const queryStr = this.getFormControl('message').value;
        this.checkPalindrome(queryStr);
        this.countOfOccurrences = this.getOccurrencesInString(this.getFormControl('queryString').value.replace(/\s/g, ''));
        this.countOfReverseOccurrences = this.getReverseOccurrencesInString(this.getFormControl('queryString').value.replace(/\s/g, ''));
        this.showResultComponent = true;
    }

    public checkPalindrome(queryStr: string): void {
        const splitString = queryStr.split(' ');
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < splitString.length; i++) {
            if (splitString[i].length > 1) {
                const re = /[\W_]/g;
                const lowRegStr = splitString[i].toLowerCase().replace(re, '');
                const reverseStr = lowRegStr.split('').reverse().join('');
                if (reverseStr === lowRegStr) {
                    this.resultString.push(splitString[i]);
                    if (i < splitString.length - 1) {
                        this.checkPalindrome(splitString[i] + splitString[i + 1]);
                    }
                }
            }
        }
    }

    public getOccurrencesInString(queryStr: string): number {
        if (queryStr.length > 1) {
            const regExp = new RegExp(queryStr, 'gi');
            const message = this.getFormControl('message').value.replace(/\s/g, '');
            return (message.match(regExp) || []).length;
        }
        return 0;
    }

    public getReverseOccurrencesInString(queryStr: string): number {
        if (queryStr.length > 1) {
        const regExp = new RegExp(queryStr, 'gi');
        const message = this.getFormControl('message').value.replace(/\s/g, '').split('').reverse().join('');
        return (message.match(regExp) || []).length;
        }
        return 0;
    }

}
