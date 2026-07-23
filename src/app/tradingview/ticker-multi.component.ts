import { AfterViewInit, Component, ElementRef, Input, OnDestroy, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
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
export class TickerMultiComponent implements AfterViewInit, OnDestroy {
  @Input() tickers!: Ticker[];
  @ViewChild('container', { static: true }) container!: ElementRef;

  private scriptUrl = 'https://s3.tradingview.com/external-embedding/embed-widget-tickers.js';
  private themeSub?: Subscription;

  constructor(private renderer: Renderer2, private themeService: ThemeService) {}

  ngAfterViewInit(): void {
    this.themeSub = this.themeService.currentTheme$.subscribe(() => this.render());
  }

  ngOnDestroy(): void {
    this.themeSub?.unsubscribe();
  }

  private render(): void {
    const host = this.container.nativeElement as HTMLElement;
    host.innerHTML = '';

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
    this.renderer.appendChild(host, script);
  }
}
