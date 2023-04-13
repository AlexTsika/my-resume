import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  images = [
    'assets/contact1.png',
    'assets/contact2.png',
  ];

  constructor(public themeService: ThemeService) {}

  downloadPdf() {
    const pdfUrl = 'assets/AlexandrosTsikakisCV.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'AlexandrosTsikakisCV.pdf';
    link.dispatchEvent(new MouseEvent('click'));
  }

}
