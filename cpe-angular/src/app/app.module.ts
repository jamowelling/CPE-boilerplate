import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClickOutsideModule } from 'ng-click-outside';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './message.service';
import { WindowService } from './services/window.service';
import { RestApiService } from './services/rest-api.service';
import { PageComponent } from './components/page/page.component';
import { PreviewComponent } from './components/preview/preview.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { SearchSvgComponent } from 'src/assets/search/search-svg.component';

@NgModule({
  declarations: [AppComponent, PageComponent, PreviewComponent, TopNavComponent, SearchSvgComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule, ClickOutsideModule],
  providers: [
    HttpErrorHandler,
    MessageService,
    WindowService,
    RestApiService,
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
