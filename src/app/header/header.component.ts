import { Component, ElementRef, HostListener } from '@angular/core';
import ScrollService from '../util/ScrollService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  images: string[] = ['assets/icon1.png', 'assets/icon2.png'];
  currentImageIndex: number = 0;

  constructor(private elementRef: ElementRef, private scrollService: ScrollService) { }

  // Change icon when clicked for 0.75 seconds
  changeImage() {
    // Change the image source to the next image
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;

    // Set a timeout to switch back to the first image after 0.75 seconds
    setTimeout(() => {
      this.currentImageIndex = 0;
    }, 750);
  }

  // This function updates the active nav link based on the current scroll position
  updateActiveNavLink(): void {
    let inviewElements = this.scrollService.getInViewElements();
    const navLinks = this.elementRef.nativeElement.querySelectorAll('.nav-link');
    // Loop through nav links to find the one corresponding to the section currently in view
    navLinks.forEach((navLink: HTMLElement) => {
      const targetId = (navLink.getAttribute('href')?.substring(1) || navLink.getAttribute('data-target-id')) ?? '';
      if(inviewElements.includes(targetId)){
        navLink.classList.add('active');
      }
      else {
        navLink.classList.remove('active');
      }
    });

  }

  // Listen for the window scroll event and update the active nav link
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any): void {
    this.updateActiveNavLink();
  }

  // Scroll to the target element smoothly
  scrollToElement(targetId: string): void {
    this.scrollService.scrollIntoView(targetId);
  }

  // Close the collapsed navbar menu when a nav link is clicked
  closeNavbar(navbarToggler: HTMLButtonElement): void {
    const navbarCollapse: HTMLElement | null = document.getElementById('navbarNavAltMarkup');

    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      navbarToggler.click();
    }
  }

}