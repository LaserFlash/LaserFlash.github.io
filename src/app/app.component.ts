import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { routerTransition } from './router.animations';

@Component({
  selector: 'app-root',
  animations: [routerTransition],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  inkColour = '#087f23';

  titleFirst = 'Bryn Bennett';
  titleSecond = '"LaserFlash"';

  routeLinks = [
    { label: 'Portfolio', link: '/portfolio' },
    { label: 'About', link: '/about' }
  ];

  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(evt => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      const element = document.getElementById('scrollId');
      setTimeout(function() {
        element.scrollIntoView();
        window.scrollTo(0, 0);
      }, 300);
    });
  }

  swipe(action: string) {
    const currentIndex: number = this.routeLinks.indexOf(
      this.routeLinks.filter(item => {
        if (item.link === this.router.url) {
          return item;
        }
      })[0]
    );

    const nextIndex =
      action === this.SWIPE_ACTION.RIGHT
        ? currentIndex - 1
        : action === this.SWIPE_ACTION.LEFT
        ? currentIndex + 1
        : currentIndex;

    if (
      nextIndex >= 0 &&
      nextIndex < this.routeLinks.length &&
      nextIndex !== currentIndex
    ) {
      this.router.navigateByUrl(this.routeLinks[nextIndex].link);
    }
  }

  getState(outlet: RouterOutlet) {
    return outlet.activatedRouteData.state;
  }
}
