import { AfterViewInit, Component, ElementRef } from '@angular/core';
import ScrollService from '../util/ScrollService';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements AfterViewInit {
  images = [
    'assets/profile1.png',
    'assets/profile2.png',
  ];
  name = 'profile';
  constructor(private scrollService: ScrollService, public elRef: ElementRef) {
    console.log(this.name);
    console.log(this.elRef);
  }
  ngAfterViewInit() {
    console.log(this.name, this.elRef);
    this.scrollService.registerComponent(this.name, this.elRef);
  }
}
