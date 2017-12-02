import { Injectable } from '@angular/core';
import { PortfolioItem } from './portfolioItem';
import { PortfolioButton } from './portfolioButton';

@Injectable()
export class PortfolioService {
  public portfolioItems: PortfolioItem[]=[];
  constructor() {
    this.portfolioItems.push(new PortfolioItem(
      "U23 Squad Breakages",
      "Data base type thing using Angular5 and FireBase, will be used to keep track of maintenance for the Wellington Youth Sailing Trust boats.",
      "assets/images/nespresso.webp",
      new PortfolioButton("Source","https://github.com/LaserFlash/WYST-Maintenance"),
      new PortfolioButton("View","https://wyst-stuff.tk")
    ))

    this.portfolioItems.push(new PortfolioItem(
      "DimThing",
      "Program that allows for further dimming of screen through the use of a transparent overlay. Has support for keyboard shortcuts to adjust dimness and toggle immersive mode on or off.",
      "assets/images/DimThing.webp",
      new PortfolioButton("Source","https://github.com/LaserFlash/DimThing"),
      null
    ))

    this.portfolioItems.push(new PortfolioItem(
      "Portfolio Site",
      "Construction and design of this website. This project tends to get bursts of updates as it is just worked on by me. It is regularly revisted however",
      "assets/images/flatWebsite.webp",
      new PortfolioButton("Source","https://github.com/LaserFlash/LaserFlash.github.io"),
      new PortfolioButton("View","https://laserflash.tk")
    ))

    this.portfolioItems.push(new PortfolioItem(
      "ENGR 110 SCARA",
      "This is a group project, to implement basic drawing functionality to a provided Raspberry Pi based SCARA using java code.",
      "assets/images/SCARA.webp",
      new PortfolioButton("Source","https://github.com/LaserFlash/ENGR110-SCARA"),
      null
    ))

    this.portfolioItems.push(new PortfolioItem(
      "ENGR 101 Autonomous Vehicle",
      "This was a group project, with the goal of designing and contructing a small autonomous vehicle to get through given sections of a maze.",
      "assets/images/AVC.webp",
      new PortfolioButton("Source","https://github.com/papasele/AVCteam1"),
      null
    ))
  }
}
