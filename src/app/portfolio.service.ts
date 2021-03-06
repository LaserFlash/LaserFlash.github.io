// tslint:disable:max-line-length

import { Injectable } from '@angular/core';
import { PortfolioItem } from './portfolio-view/portfolio-item/portfolioItem';
import { PortfolioButton } from './portfolio-view/portfolio-item/portfolioButton';

@Injectable()
export class PortfolioService {
  public portfolioItems: PortfolioItem[] = [];
  constructor() {
    this.portfolioItems.push(
      new PortfolioItem(
        'Steam Friends Theme',
        'A different take on a theme for the Steam Friends UI \n #### Customisation \n Comes with different status and avatar styles as well as dark and light themes',
        'assets/images/steam',
        new PortfolioButton(
          'Source',
          'https://github.com/LaserFlash/steam-friends-skin'
        ),
        new PortfolioButton(
          'Website',
          'https://laserflash.tk/steam-chat-skin-website/'
        )
      )
    );

    this.portfolioItems.push(
      new PortfolioItem(
        'Boat Logging',
        'This is a web app for boat/yacht clubs to record boat usage, maintenance, incident reporting, and safety prodcedures. \n\n This app and its deriviations are used by the following yacht clubs: \n - WYST \n - TRIYA \n - NPYC \n - QCYC \n \n Satisfying the Marine Operators Safety System (MOSS) requirements of Maritime New Zealand and Yachting New Zealand\'s  Health and Safety requirements.',
        'assets/images/nespresso',
        new PortfolioButton(
          'Source',
          'https://github.com/LaserFlash/WYST-Maintenance'
        ),
        new PortfolioButton('Website', 'https://wyst-stuff.tk')
      )
    );

    this.portfolioItems.push(
      new PortfolioItem(
        'Portfolio Site',
        'Construction and design of this website. This project tends to get bursts of updates as I becoming intereseted in implementing a new feature, or have a new portfolio item to add. It is regularly revisited however \n\n The site is built with **Angular8**',
        'assets/images/flatWebsite',
        new PortfolioButton(
          'Source',
          'https://github.com/LaserFlash/LaserFlash.github.io'
        ),
        new PortfolioButton('Website', 'https://laserflash.tk')
      )
    );

    this.portfolioItems.push(
      new PortfolioItem(
        'Pihinga - Job Search',
        ' [**Pihinga**](https://www.facebook.com/Pihinga) was a startup focused around helping single parents find employment relevant to them, we were tasked with designing a platform where jobs intended for this audience could be listed and applied to by the parents. \n\n This required interactions with the client **Pihinga** throughout the planning and development cycle and managing their requests. \n Deliverables: \n - Requirement Specification \n - Project Architecture \n - Wireframing and Design \n - Skeleton Implementation \n - Minimum Viable Product \n - Final Solution / Handover \n\n **Tools and Frameworks**: ReactJS, Firebase, and Xanpan styled development ',
        'assets/images/pihinga',
        null,
        null
      )
    );

    this.portfolioItems.push(
      new PortfolioItem(
        'The Finding of I, Zack',
        'A **Java** game built for **SWEN222**. \n\n This was worked on by a group of five while at Victoria University. The original idea was inspired by "The Binding Of Issac", a top down dungeon crawler. I was primarily in charge of designing the user interface, and implementing the rendering of entities and the world. \n #### Design \n Follows a Model View Controller (MVC) design approach, using Java Swing for visual aspects',
        'assets/images/IZack',
        new PortfolioButton(
          'Source',
          'https://github.com/LaserFlash/The-Finding-Of-I-Zack'
        ),
        null
      )
    );

    this.portfolioItems.push(
      new PortfolioItem(
        'DimThing',
        'Program that allows for further dimming of screen through the use of a transparent overlay. Has support for keyboard shortcuts to adjust dimness and toggle immersive mode on or off. \n\n #### Immersive Mode \n Allows for the adjustment of secondary screens seperatly to the main screen. Intented use is dimming a secondary screen while playing a game or watching a video',
        'assets/images/DimThing',
        new PortfolioButton('Source', 'https://github.com/LaserFlash/DimThing'),
        null
      )
    );

    this.portfolioItems.push(
      new PortfolioItem(
        'ENGR 110 SCARA',
        'This was a group project, implementing basic drawing functionality on a provided Raspberry Pi incorporated into a SCARA setup (Selective Compliance Articulated Robot Arm). \n\n This implementation is writen in **Java**',
        'assets/images/SCARA',
        new PortfolioButton(
          'Source',
          'https://github.com/LaserFlash/ENGR110-SCARA'
        ),
        null
      )
    );

    this.portfolioItems.push(
      new PortfolioItem(
        'ENGR 101 Autonomous Vehicle',
        'This was a group project, with the goal of designing and constructing a small autonomous vehicle to get through given sections of a maze. \n #### Maze \n The maze consisted of two sections. A taped white line to follow on the ground and a walled section. \n The taped section relied on a camera for navigation while the walled area used IR sensors to position the vehicle.',
        'assets/images/AVC',
        new PortfolioButton('Source', 'https://github.com/papasele/AVCteam1'),
        null
      )
    );
  }
}
