import { Component } from '@angular/core';
import { TickerMultiComponent } from '../tradingview/ticker-multi.component';
import { TICKER_GROUPS } from '../tickers.config';

@Component({
  selector: 'app-market-view',
  standalone: true,
  imports: [TickerMultiComponent],
  templateUrl: './market-view.component.html',
  styleUrl: './market-view.component.scss',
})
export class MarketViewComponent {
  readonly groups = TICKER_GROUPS;
}
