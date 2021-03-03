import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-query-result',
    templateUrl: './query-result.component.html',
    styleUrls: ['./query-result.component.scss']
})
export class QueryResultComponent implements OnInit {

    @Input() public searchString: string;
    @Input() public query: string;
    @Input() public resultString: string;
    @Input() public countOfOccurrences: number;
    @Input() public countOfReverseOccurrences: number;
    constructor() {
    }

    public ngOnInit(): void {
    }

}
