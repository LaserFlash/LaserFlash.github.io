import { NgModule }             from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { PortfolioViewComponent }   from './portfolio-view/portfolio-view.component';
import { AboutViewComponent }      from './about-view/about-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/portfolio', pathMatch: 'full' },
  { path: 'portfolio', component: PortfolioViewComponent },
  { path: 'about', component: AboutViewComponent },
  { path: '**', redirectTo: '/portfolio' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
