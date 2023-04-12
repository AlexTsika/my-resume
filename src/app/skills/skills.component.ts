import { AfterViewInit, Component, ElementRef } from '@angular/core';
import ScrollService from '../util/ScrollService';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements AfterViewInit {
  images = [
    'assets/skills1.png',
    'assets/skills2.png',
  ];
  name = 'skills';
  constructor(private scrollService: ScrollService, public elRef: ElementRef) {
    console.log(this.name);
    console.log(this.elRef);
  }
  ngAfterViewInit() {
    console.log(this.name, this.elRef);
    this.scrollService.registerComponent(this.name, this.elRef);
  }
}
