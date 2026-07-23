import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Theme = 'light-theme' | 'dark-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly currentTheme$ = new BehaviorSubject<Theme>(
    (localStorage.getItem('theme') as Theme) || 'dark-theme',
  );

  constructor(private zone: NgZone) {
    this.apply(this.currentTheme$.value);

    window.addEventListener('storage', (event) => {
      if (event.key !== 'theme' || !event.newValue) {
        return;
      }
      const theme = event.newValue as Theme;
      if (theme === this.currentTheme$.value) {
        return;
      }
      this.zone.run(() => {
        this.apply(theme);
        this.currentTheme$.next(theme);
      });
    });
  }

  get colorTheme(): 'light' | 'dark' {
    return this.currentTheme$.value === 'light-theme' ? 'light' : 'dark';
  }

  private apply(theme: Theme): void {
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(theme);
  }
}
