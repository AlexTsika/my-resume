import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  images: string[] = ['assets/icon1.png', 'assets/icon2.png'];
  currentImageIndex: number = 0;

  constructor(private elementRef: ElementRef) { }

  // change icon when clicked for 1 second
  changeImage() {
    // Change the image source to the next image
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;

    // Set a timeout to switch back to the first image after 0.5 seconds
    setTimeout(() => {
      this.currentImageIndex = 0;
    }, 500);
  }

  // This function updates the active nav link based on the current scroll position
  updateActiveNavLink(): void {
    const navLinks = this.elementRef.nativeElement.querySelectorAll('.nav-link');
    let activeNavLink = navLinks[0];
    const offset = window.innerHeight * 0.11; // Calculate 11vh in pixels

    // Loop through nav links to find the one corresponding to the section currently in view
    navLinks.forEach((navLink: HTMLElement) => {
      const targetId = (navLink.getAttribute('href')?.substring(1) || navLink.getAttribute('data-target-id')) ?? '';
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const rect = targetElement.getBoundingClientRect();

        if (rect.top <= offset && rect.top >= -targetElement.offsetHeight + offset) {
          activeNavLink = navLink;
        }
      }
    });

    // Remove the 'active' class from all nav links
    navLinks.forEach((navLink: HTMLElement) => {
      navLink.classList.remove('active');
    });

    // Add the 'active' class to the nav link corresponding to the section currently in view
    activeNavLink.classList.add('active');
  }

  // Listen for the window scroll event and update the active nav link
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any): void {
    this.updateActiveNavLink();
  }

  // Scroll to the target element smoothly
  scrollToElement(targetId: string): void {
    const element = document.getElementById(targetId);
    if (element) {
      const offset = window.innerHeight * 0.1; // Calculate 10vh in pixels
      const newScrollPosition = element.offsetTop - offset;
      window.scrollTo({ top: newScrollPosition, behavior: 'smooth' });
    }
  }

  // Close the collapsed navbar menu when a nav link is clicked
  closeNavbar(navbarToggler: HTMLButtonElement): void {
    const navbarCollapse: HTMLElement | null = document.getElementById('navbarNavAltMarkup');

    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      navbarToggler.click();
    }
  }

}