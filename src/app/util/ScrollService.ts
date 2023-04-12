import { Injectable, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export default class ScrollService {
  private scrollableElementRefs = new Map<string, ElementRef>

  registerComponent(name: string, elRef: ElementRef) {
    this.scrollableElementRefs.set(name, elRef);
  }
  
  scrollIntoView(elName : string): void {
    const offset = window.innerHeight * 0.1;
    let elRef = this.scrollableElementRefs.get(elName);
    if(!elRef) return;
    const newScrollPosition = elRef.nativeElement.offsetTop - offset;
    window.scrollTo({ top: newScrollPosition, behavior: 'smooth' });
  }
  isInView(elName : string): boolean {
    let elRef = this.scrollableElementRefs.get(elName);
    if(!elRef) return false;

    const rect = elRef.nativeElement.getBoundingClientRect();
    const offset = window.innerHeight * 0.11; 
    return (rect.top <= offset && rect.top >= -elRef.nativeElement.offsetHeight + offset);
  }
  getInViewElements() : string[] {
    const inViewElements: string[] = [];
    for(const [name, _] of this.scrollableElementRefs){
      if(this.isInView(name)){
        inViewElements.push(name);
      }
    }
    return inViewElements;
  }
  unregisterComponent(name: string) {
    this.scrollableElementRefs.delete(name);
  }
}