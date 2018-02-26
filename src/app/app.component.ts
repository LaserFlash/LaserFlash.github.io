import { Component, NgModule, EventEmitter, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { PortfolioViewComponent } from './portfolio-view/portfolio-view.component';
import { AboutViewComponent } from './about-view/about-view.component';
import { routerTransition } from './router.animations';

import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  animations: [ routerTransition ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  router: Router;

  title = 'Bryn Bennett "LaserFlash"';

  routeLinks = [
    { label: 'Portfolio', link: '/portfolio' },
    { label: 'About', link: '/about' },
  ];

  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };

  constructor(private _router: Router ) {
    this.router = _router;
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      const element = document.getElementById('scrollId');
      setTimeout(function(){
        element.scrollIntoView();
        window.scrollTo(0, 0);
    }, 300);

  });
  }



  swipe(action = this.SWIPE_ACTION.RIGHT) {
      const pos: any = this.routeLinks.filter((item) => {if (item.link === this.router.url) {return item; } });
      const currentIndex: number = this.routeLinks.indexOf(pos[0]);

      if (currentIndex > this.routeLinks.length || currentIndex < 0) { return; }
      let nextIndex = 0;
      // next
      if (action === this.SWIPE_ACTION.RIGHT) {
        nextIndex = currentIndex - 1;
      }

      // previous
      if (action === this.SWIPE_ACTION.LEFT) {
        nextIndex = currentIndex + 1;
      }
      if (nextIndex >= 0 && nextIndex < this.routeLinks.length && nextIndex !== currentIndex) {
        this.router.navigateByUrl(this.routeLinks[nextIndex].link);
      }
    }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
