import { Component, ElementRef, HostListener } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private elementRef: ElementRef) { }

  // update active nav link on scroll
  updateActiveNavLink(): void {
    const navLinks = this.elementRef.nativeElement.querySelectorAll('.nav-link');
    let activeNavLink = navLinks[0];
    const offset = window.innerHeight * 0.11; // Calculate 10vh in pixels

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

    navLinks.forEach((navLink: HTMLElement) => {
      navLink.classList.remove('active');
    });

    activeNavLink.classList.add('active');
  }

  // update active nav link on scroll
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any): void {
    this.updateActiveNavLink();
  }

  // scroll to element
  scrollToElement(targetId: string): void {
    const element = document.getElementById(targetId);
    if (element) {
      const offset = window.innerHeight * 0.1; // Calculate 10vh in pixels
      const newScrollPosition = element.offsetTop - offset;
      window.scrollTo({ top: newScrollPosition, behavior: 'smooth' });
    }
  }

  closeNavbar(navbarToggler: HTMLButtonElement): void {
    const navbarCollapse: HTMLElement | null = document.getElementById('navbarNavAltMarkup');
    
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      navbarToggler.click();
    }
  }
  
}
