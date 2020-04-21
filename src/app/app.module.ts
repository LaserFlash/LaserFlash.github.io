import {
  BrowserModule,
  HammerModule,
  HAMMER_GESTURE_CONFIG
} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OverlayContainer } from '@angular/cdk/overlay';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { MarkdownModule } from 'ngx-markdown';

import { AppComponent } from './app.component';
import { PortfolioViewComponent } from './portfolio-view/portfolio-view.component';
import { AboutViewComponent } from './about-view/about-view.component';
import { CodeListComponent } from './code-list/code-list.component';
import { LanguageIconComponent } from './language-icon/language-icon.component';

import { PortfolioService } from './portfolio.service';
import { AppRoutingModule } from './app-routing.module';
import { HammerConfig } from './hammer.config';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioViewComponent,
    AboutViewComponent,
    CodeListComponent,
    LanguageIconComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule,
    MatSidenavModule,
    MatTabsModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MarkdownModule.forRoot()
  ],
  providers: [
    PortfolioService,
    { provide: HAMMER_GESTURE_CONFIG, useClass: HammerConfig },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(overlayContainer: OverlayContainer) {
    overlayContainer.getContainerElement().classList.add('my-app-theme');
  }
}
