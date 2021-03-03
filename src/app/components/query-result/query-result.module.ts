import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {QueryResultComponent} from './query-result.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    declarations: [QueryResultComponent],
    exports: [QueryResultComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatButtonModule,
    ]
})
export class QueryResultModule {
}
