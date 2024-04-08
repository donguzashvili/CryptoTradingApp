import { LatestCurrencyType } from "../../../types";

export const cryptoTableColumn = [
    {
      name: '',
      key: '' as keyof LatestCurrencyType,
    },
    {
      name: 'Name',
      key: 'name' as keyof LatestCurrencyType,
    },
    {
      name: 'Price',
      key: 'quote.USD.price' as keyof LatestCurrencyType,
      currency: true,
    },
    {
      name: '24h',
      key: 'quote.USD.percent_change_24h' as keyof LatestCurrencyType,
      percent: true,
    },
    {
      name: '7d',
      key: 'quote.USD.percent_change_7d' as keyof LatestCurrencyType,
      percent: true,
    },
    {
      name: '30d',
      key: 'quote.USD.percent_change_30d' as keyof LatestCurrencyType,
      percent: true,
    },
    {
      name: 'Market Cap',
      key: 'quote.USD.market_cap' as keyof LatestCurrencyType,
      currency: true,
    },
  ];