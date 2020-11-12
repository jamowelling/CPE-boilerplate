import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './message.service';
import { WindowService } from './services/window.service';
import { RestAPIService } from './services/rest-api.service';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostListSingleComponent } from './components/post-list-single/post-list-single.component';
import { PostSingleComponent } from './components/post-single/post-single.component';
import { PageComponent } from './components/page/page.component';
import { PreviewComponent } from './components/preview/preview.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListSingleComponent,
    PostSingleComponent,
    PageComponent,
    PreviewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    HttpErrorHandler,
    MessageService,
    WindowService,
    RestAPIService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
