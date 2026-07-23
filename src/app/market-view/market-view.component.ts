import { Component } from '@angular/core';
import { TickerMultiComponent } from '../tradingview/ticker-multi.component';
import { Ticker, TICKER_GROUPS } from '../tickers.config';

const ROW_SIZE = 4;

function chunk(tickers: Ticker[], size: number): Ticker[][] {
  const rows: Ticker[][] = [];
  for (let i = 0; i < tickers.length; i += size) {
    rows.push(tickers.slice(i, i + size));
  }
  return rows;
}

@Component({
  selector: 'app-market-view',
  standalone: true,
  imports: [TickerMultiComponent],
  templateUrl: './market-view.component.html',
  styleUrl: './market-view.component.scss',
})
export class MarketViewComponent {
  readonly groups = TICKER_GROUPS.map((group) => ({
    title: group.title,
    rows: chunk(group.tickers, ROW_SIZE),
  }));
}
