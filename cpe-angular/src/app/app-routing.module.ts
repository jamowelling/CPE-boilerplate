import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './components/page/page.component';
import { PreviewComponent } from './components/preview/preview.component';

const routes: Routes = [
  {
    path: ':id',
    component: PageComponent
  },
  {
    path: '_preview/:parentId/:wpnonce',
    component: PreviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
