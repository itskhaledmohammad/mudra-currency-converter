type currencyRate = { [key: string]: number };
type currencyName = { [key: string]: string };

export interface IFixerAPICurrencyResponse {
  success: boolean;
  timestamp: number;
  base: string;
  date: string;
  rates: currencyRate;
}

export interface IFixerAPISymbolsResponse {
  success: boolean;
  symbols: currencyName;
}

export interface IAPICurrencyResponse {
  success: boolean;
  timestamp: number;
  date: string;
  base: string;
  target: string;
  rate: number;
}
