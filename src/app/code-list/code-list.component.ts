import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code-list',
  templateUrl: './code-list.component.html',
  styleUrls: ['./code-list.component.css']
})
export class CodeListComponent implements OnInit {

  private iconList = [
    {
      svgIconName: 'firebase',
      svgIconPath: '../assets/images/language-icons/firebase.svg',
      text: 'Firebase'
    },
    {
      svgIconName: 'angular',
      svgIconPath: '../assets/images/language-icons/angular.svg',
      text: 'Angular'
    },
    {
      svgIconName: 'html',
      svgIconPath: '../assets/images/language-icons/html.svg',
      text: 'HTML'
    },
    {
      svgIconName: 'css',
      svgIconPath: '../assets/images/language-icons/css.svg',
      text: 'CSS'
    },
    {
      svgIconName: 'java',
      svgIconPath: '../assets/images/language-icons/java.svg',
      text: 'Java'
    },
    {
      svgIconName: 'git',
      svgIconPath: '../assets/images/language-icons/git.svg',
      text: 'Git'
    }
  ]
  constructor() { }

  ngOnInit() { }

}
