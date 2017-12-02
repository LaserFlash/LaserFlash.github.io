import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bryn Bennett "LaserFlash"';

  routeLinks = [
    { label: 'Portfolio', link: 'portfolio' },
    { label: 'About', link: 'about' },
  ];
}
