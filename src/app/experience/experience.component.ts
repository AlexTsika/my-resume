import { AfterViewInit, Component, ElementRef } from '@angular/core';
import ScrollService from '../util/ScrollService';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements AfterViewInit {
  images = [
    'assets/experience1.png',
    'assets/experience2.png',
  ];
  name = 'experience';
  constructor(private scrollService: ScrollService, public elRef: ElementRef) {
    console.log(this.name);
    console.log(this.elRef);
  }
  ngAfterViewInit() {
    console.log(this.name, this.elRef);
    this.scrollService.registerComponent(this.name, this.elRef);
  }
}
