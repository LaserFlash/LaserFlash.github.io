import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PortfolioViewComponent } from './portfolio-view/portfolio-view.component';
import { AboutViewComponent } from './about-view/about-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/portfolio', pathMatch: 'full' },
  {
    path: 'portfolio',
    component: PortfolioViewComponent,
    data: { state: 'portfolio' }
  },
  { path: 'about', component: AboutViewComponent, data: { state: 'about' } },
  { path: '**', redirectTo: '/portfolio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
