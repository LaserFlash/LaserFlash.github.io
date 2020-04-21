import { Component, OnInit, Input } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-language-icon',
  templateUrl: './language-icon.component.html',
  styleUrls: ['./language-icon.component.css']
})
export class LanguageIconComponent implements OnInit {
  @Input() svgIconName: string;
  @Input() svgIconPath: string;
  @Input() text: string;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.matIconRegistry.addSvgIcon(
      this.svgIconName,
      this.domSanitizer.bypassSecurityTrustResourceUrl(this.svgIconPath)
    );
  }
}
