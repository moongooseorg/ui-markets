import { Component } from '@angular/core';
import { MarketViewComponent } from './market-view/market-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MarketViewComponent],
  template: '<app-market-view />',
})
export class AppComponent {}
