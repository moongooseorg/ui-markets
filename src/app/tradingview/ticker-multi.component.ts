import { AfterViewInit, Component, ElementRef, Input, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { ThemeService } from '../theme.service';
import { Ticker } from '../tickers.config';

@Component({
  selector: 'app-ticker-multi',
  standalone: true,
  imports: [],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './ticker-multi.component.html',
  styleUrl: './ticker-multi.component.scss',
})
export class TickerMultiComponent implements AfterViewInit {
  @Input() tickers!: Ticker[];
  @ViewChild('container', { static: true }) container!: ElementRef;

  private scriptUrl = 'https://s3.tradingview.com/external-embedding/embed-widget-tickers.js';

  constructor(private renderer: Renderer2, private themeService: ThemeService) {}

  ngAfterViewInit(): void {
    const script = this.renderer.createElement('script');
    const config = JSON.stringify({
      symbols: this.tickers.map((t) => ({ proName: t.proName, title: t.title })),
      isTransparent: true,
      showSymbolLogo: true,
      colorTheme: this.themeService.colorTheme,
      locale: 'en',
      displayMode: 'adaptive',
    });

    this.renderer.setProperty(script, 'src', this.scriptUrl);
    this.renderer.setProperty(script, 'async', true);
    this.renderer.setProperty(script, 'innerHTML', config);
    this.renderer.appendChild(this.container.nativeElement, script);
  }
}
