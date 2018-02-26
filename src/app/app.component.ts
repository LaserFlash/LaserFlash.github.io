import { Component, NgModule, EventEmitter } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { PortfolioViewComponent } from './portfolio-view/portfolio-view.component';
import { AboutViewComponent } from './about-view/about-view.component';
import { routerTransition } from './router.animations';

@NgModule({
  imports: [ BrowserModule, BrowserAnimationsModule, AppRoutingModule ],
  declarations: [ AppComponent, PortfolioViewComponent, AboutViewComponent ],
  bootstrap: [ AppComponent ]
})

@Component({
  selector: 'app-root',
  animations: [ routerTransition ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bryn Bennett "LaserFlash"';

  routeLinks = [
    { label: 'Portfolio', link: 'portfolio' },
    { label: 'About', link: 'about' },
  ];

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }


}
