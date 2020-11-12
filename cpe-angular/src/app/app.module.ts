import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './message.service';
import { WindowService } from './services/window.service';
import { RestApiService } from './services/rest-api.service';
import { PageComponent } from './components/page/page.component';
import { PreviewComponent } from './components/preview/preview.component';

@NgModule({
  declarations: [
    AppComponent,
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
    RestApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
