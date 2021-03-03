import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {SearchStringComponent} from './search-string.component';
import {MatButtonModule} from '@angular/material/button';
import {QueryResultModule} from '../query-result/query-result.module';

@NgModule({
    declarations: [SearchStringComponent],
    exports: [SearchStringComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatButtonModule,
        QueryResultModule
    ]
})
export class SearchStringModule {
}
