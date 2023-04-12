import { Component, ElementRef , AfterViewInit} from '@angular/core';
import ScrollService from '../util/ScrollService';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements AfterViewInit{
  images = [
    'assets/contact1.png',
    'assets/contact2.png',
  ];
  name = 'contact';
  constructor(private scrollService: ScrollService, private elRef: ElementRef) {
    console.log(this.name);
    console.log(this.elRef);
  }
  ngAfterViewInit() {
    console.log(this.name, this.elRef);
    this.scrollService.registerComponent(this.name, this.elRef);
  }
  downloadPdf() {
    const pdfUrl = 'assets/AlexandrosTsikakisCV.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'AlexandrosTsikakisCV.pdf';
    link.dispatchEvent(new MouseEvent('click'));
  }
}
