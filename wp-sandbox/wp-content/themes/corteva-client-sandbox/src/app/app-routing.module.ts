import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostSingleComponent } from './components/post-single/post-single.component';
import { PageComponent } from './components/page/page.component';
import { PreviewComponent } from './components/preview/preview.component';

const routes: Routes = [
  {
    path: '',
    component: PostListComponent
  },
  {
    path: 'posts/:id',
    component: PostSingleComponent
  },
  {
    path: 'pages/:id',
    component: PageComponent
  },
  {
    path: '_preview/:id/:parentId/:wpnonce',
    component: PreviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
