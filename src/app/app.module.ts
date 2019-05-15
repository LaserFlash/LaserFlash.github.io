import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { OverlayContainer } from '@angular/cdk/overlay';

import { MatSidenavModule } from '@angular/material';
import { MatTabsModule } from '@angular/material';
import { MatListModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { MatProgressBarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { PortfolioViewComponent } from './portfolio-view/portfolio-view.component';
import { AboutViewComponent } from './about-view/about-view.component';

import { PortfolioService } from './portfolio.service';

import { AppRoutingModule } from './app-routing.module';

import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { HammerConfig } from './hammer.config'
import 'hammerjs';
import { CodeListComponent } from './code-list/code-list.component';
import { LanguageIconComponent } from './language-icon/language-icon.component';

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
  ],
  providers: [PortfolioService, {provide: HAMMER_GESTURE_CONFIG, useClass: HammerConfig}],
  bootstrap: [AppComponent]
})


export class AppModule {
  constructor(overlayContainer: OverlayContainer) {
    overlayContainer.getContainerElement().classList.add('my-app-theme');
  }
}
