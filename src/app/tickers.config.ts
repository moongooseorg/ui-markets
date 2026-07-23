export interface Ticker {
  proName: string;
  title: string;
}

export interface TickerGroup {
  title: string;
  tickers: Ticker[];
}

export const TICKER_GROUPS: TickerGroup[] = [
  {
    title: 'Magnificent Seven',
    tickers: [
      { proName: 'NASDAQ:NVDA', title: 'Nvidia' },
      { proName: 'NASDAQ:GOOGL', title: 'Google' },
      { proName: 'NASDAQ:AAPL', title: 'Apple' },
      { proName: 'NASDAQ:AMZN', title: 'Amazon' },
      { proName: 'NASDAQ:MSFT', title: 'Microsoft' },
      { proName: 'NASDAQ:META', title: 'Meta' },
      { proName: 'NASDAQ:TSLA', title: 'Tesla' },
    ],
  },
  {
    title: 'Commodities',
    tickers: [
      { proName: 'TVC:GOLD', title: 'Gold' },
      { proName: 'TVC:SILVER', title: 'Silver' },
    ],
  },
  {
    title: 'Banks',
    tickers: [
      { proName: 'NYSE:JPM', title: 'JP Morgan' },
      { proName: 'NYSE:WFC', title: 'Wells Fargo' },
      { proName: 'NYSE:BAC', title: 'BofA' },
      { proName: 'NYSE:GS', title: 'Goldman Sachs' },
      { proName: 'NYSE:MS', title: 'Morgan Stanley' },
      { proName: 'NYSE:C', title: 'Citi' },
      { proName: 'NYSE:USB', title: 'US Bank' },
      { proName: 'NYSE:PNC', title: 'PNC' },
      { proName: 'NYSE:FITB', title: 'Fifth Third' },
    ],
  },
  {
    title: 'Meme Stocks',
    tickers: [
      { proName: 'NYSE:AMC', title: 'AMC' },
      { proName: 'NYSE:GME', title: 'Gamestop' },
      { proName: 'NASDAQ:HYMC', title: 'Hycroft Mining' },
    ],
  },
  {
    title: 'Crypto',
    tickers: [
      { proName: 'COINBASE:BTCUSD', title: 'Bitcoin' },
      { proName: 'COINBASE:ETHUSD', title: 'Ethereum' },
      { proName: 'COINBASE:DOGEUSD', title: 'Doge' },
      { proName: 'COINBASE:ADAUSD', title: 'Cardano' },
    ],
  },
];
