import { Component, OnInit } from '@angular/core';

import { PortfolioItem } from './portfolio-item/portfolioItem';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-portfolio-view',
  templateUrl: './portfolio-view.component.html',
  styleUrls: ['./portfolio-view.component.css']
})
export class PortfolioViewComponent implements OnInit {
  items: PortfolioItem[];
  constructor(portfolioService: PortfolioService) {
    this.items = portfolioService.portfolioItems;
  }

  ngOnInit() {}
}
