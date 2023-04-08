import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
   scrollToElement(targetId: string): void {
    const element = document.getElementById(targetId);
    if (element) {
      const offset = window.innerHeight * 0.1; // Calculate 10vh in pixels
      const newScrollPosition = element.offsetTop - offset;
      window.scrollTo({ top: newScrollPosition, behavior: 'smooth' });
    }
  }
}
