import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchStringComponent} from './components/search-string/search-string.component';
import {QueryResultComponent} from './components/query-result/query-result.component';

const routes: Routes = [
  {path: '', redirectTo: '/search-string', pathMatch: 'full'},
  {
    path: 'search-string',
    component: SearchStringComponent
  },
  {
    path: 'query-result',
    component: QueryResultComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
