import { Component, ElementRef , AfterViewInit} from '@angular/core';
import ScrollService from '../util/ScrollService';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit{
  images = [
    'assets/welcome1.png',
    'assets/welcome2.png',
  ];
  public name = 'home';
  constructor(private scrollService: ScrollService, public elRef: ElementRef) {
    console.log(this.name);
    console.log(this.elRef);
  }
  ngAfterViewInit() {
    console.log(this.name, this.elRef);
    this.scrollService.registerComponent(this.name, this.elRef);
  }
}
