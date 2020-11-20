import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { createCustomElement } from '@angular/elements';
import {APP_BASE_HREF} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './message.service';
import { WindowService } from './services/window.service';
import { RestApiService } from './services/rest-api.service';
import { PageComponent } from './components/page/page.component';
import { PreviewComponent } from './components/preview/preview.component';
import { EscapeHtmlPipe } from './escape-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    PreviewComponent,
    EscapeHtmlPipe
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
    RestApiService,
    {provide: APP_BASE_HREF, useValue : '/' }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(injector: Injector) {}
}
