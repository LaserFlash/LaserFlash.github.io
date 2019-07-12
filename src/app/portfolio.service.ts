// tslint:disable:max-line-length

import { Injectable } from "@angular/core";
import { PortfolioItem } from "./portfolioItem";
import { PortfolioButton } from "./portfolioButton";

@Injectable()
export class PortfolioService {
  public portfolioItems: PortfolioItem[] = [];
  constructor() {
    this.portfolioItems.push(
      new PortfolioItem(
        "Steam Friends Theme",
        "A darker theme for the Steam Friends UI",
        "assets/images/steam"
        new PortfolioButton(
          "Source",
          "https://github.com/LaserFlash/steam-friends-skin"
        ),
        new PortfolioButton(
          "Website",
          "https://laserflash.tk/steam-friends-skin/"
        )
      )
    );

    this.portfolioItems.push(
      new PortfolioItem(
        "Boat Logging",
        "This is a web app for recording the usage of boats and any issues or breakages they may have. This app and its deriviations are used by WYST, TRIYA, NPYC, and QCYC to satisfy Health and Safety requirements from Yachting New Zealand.",
        "assets/images/nespresso",
        new PortfolioButton(
          "Source",
          "https://github.com/LaserFlash/WYST-Maintenance"
        ),
        new PortfolioButton("Website", "https://wyst-stuff.tk")
      )
    );

    this.portfolioItems.push(
      new PortfolioItem(
        "Portfolio Site",
        "Construction and design of this website. This project tends to get bursts of updates as it is just worked on by me. It is regularly revisited however",
        "assets/images/flatWebsite",
        new PortfolioButton(
          "Source",
          "https://github.com/LaserFlash/LaserFlash.github.io"
        ),
        new PortfolioButton("Website", "https://laserflash.tk")
      )
    );

    this.portfolioItems.push(
      new PortfolioItem(
        "The Finding of I, Zack",
        'A Java game built for SWEN222. This was worked on by a group of five while at Uni. The original idea was inspired by "The Binding Of Issac", a top down dungeon crawler. I was primarily in charge of designing the user interface, and implementing rendering of all entities and the world.',
        "assets/images/IZack",
        new PortfolioButton(
          "Source",
          "https://github.com/LaserFlash/The-Finding-Of-I-Zack"
        ),
        null
      )
    );

    this.portfolioItems.push(
      new PortfolioItem(
        "DimThing",
        "Program that allows for further dimming of screen through the use of a transparent overlay. Has support for keyboard shortcuts to adjust dimness and toggle immersive mode on or off.",
        "assets/images/DimThing",
        new PortfolioButton("Source", "https://github.com/LaserFlash/DimThing"),
        null
      )
    );

    this.portfolioItems.push(
      new PortfolioItem(
        "ENGR 110 SCARA",
        "This is a group project, to implement basic drawing functionality to a provided Raspberry Pi based SCARA using java code.",
        "assets/images/SCARA",
        new PortfolioButton(
          "Source",
          "https://github.com/LaserFlash/ENGR110-SCARA"
        ),
        null
      )
    );

    this.portfolioItems.push(
      new PortfolioItem(
        "ENGR 101 Autonomous Vehicle",
        "This was a group project, with the goal of designing and constructing a small autonomous vehicle to get through given sections of a maze.",
        "assets/images/AVC",
        new PortfolioButton("Source", "https://github.com/papasele/AVCteam1"),
        null
      )
    );
  }
}
