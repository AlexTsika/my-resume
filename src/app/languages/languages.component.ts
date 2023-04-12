import { AfterViewInit, Component, ElementRef } from '@angular/core';
import ScrollService from '../util/ScrollService';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements AfterViewInit {
  images = [
    'assets/languages1.png',
    'assets/languages2.png',
  ];
  name = 'languages';
  constructor(private scrollService: ScrollService, public elRef: ElementRef) {
    console.log(this.name);
    console.log(this.elRef);
  }
  ngAfterViewInit() {
    console.log(this.name, this.elRef);
    this.scrollService.registerComponent(this.name, this.elRef);
  }
}
