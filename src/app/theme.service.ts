import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly storageKey = 'isDarkTheme'; // A private property to store the key for the theme setting in local storage
  public isDarkTheme$: BehaviorSubject<boolean>; // A public property to observe changes to the theme setting

  constructor() {
    const storedValue = localStorage.getItem(this.storageKey); // Retrieve the current theme setting from local storage
    const initialValue = storedValue !== null ? JSON.parse(storedValue) : false; // Parse the stored value or default to false
    this.isDarkTheme$ = new BehaviorSubject(initialValue); // Initialize the behavior subject with the current theme setting
  }

  toggleTheme(): void {
    const newValue = !this.isDarkTheme$.value; // Invert the current theme setting
    this.isDarkTheme$.next(newValue); // Update the behavior subject with the new theme setting
    localStorage.setItem(this.storageKey, JSON.stringify(newValue)); // Save the new theme setting to local storage
  }
}