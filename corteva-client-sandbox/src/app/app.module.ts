import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './message.service';
import { HomeComponent } from './home/home.component';
import { PagesListComponent } from './pages-list/pages-list.component';
import { PostsListComponent } from './posts-list/posts-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    PagesListComponent,
    PostsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    HttpErrorHandler,
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
