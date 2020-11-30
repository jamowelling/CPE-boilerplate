import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {APP_BASE_HREF, CommonModule} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './message.service';
import { WindowService } from './services/window.service';
import { RestApiService } from './services/rest-api.service';
import { PageComponent } from './components/page/page.component';
import { PreviewComponent } from './components/preview/preview.component';
import { ImageContentBlockComponent } from './components/image-content-block/image-content-block.component';
import { FeaturedTeamMemberComponent } from './components/featured-team-member/featured-team-member.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    PreviewComponent,
    ImageContentBlockComponent,
    FeaturedTeamMemberComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
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
