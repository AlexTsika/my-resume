import { AfterViewInit, Component, ElementRef } from '@angular/core';
import ScrollService from '../util/ScrollService';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements AfterViewInit {
  images = [
    'assets/education1.png',
    'assets/education2.png',
  ];
  name = 'education';
  constructor(private scrollService: ScrollService, public elRef: ElementRef) {
    console.log(this.name);
    console.log(this.elRef);
  }
  ngAfterViewInit() {
    console.log(this.name, this.elRef);
    this.scrollService.registerComponent(this.name, this.elRef);
  }
}
