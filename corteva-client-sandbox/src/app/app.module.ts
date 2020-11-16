import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { createCustomElement } from '@angular/elements';
import {APP_BASE_HREF} from '@angular/common';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './message.service';
import { HomeComponent } from './home/home.component';
import { PagesListComponent } from './pages-list/pages-list.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    PagesListComponent,
    PostsListComponent,
    HelloWorldComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  entryComponents:[HelloWorldComponent],
  providers: [
    HttpErrorHandler,
    MessageService,
    {provide: APP_BASE_HREF, useValue : '/' }
  ],
  //bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(injector: Injector) {
    const custom = createCustomElement(HelloWorldComponent, {injector: injector});
    customElements.define('app-hello-world', custom);
  }

  ngDoBootstrap(appRef): void {
    if (document.querySelector('app-root')) {
      appRef.bootstrap(AppComponent);
    }
  }
  

}