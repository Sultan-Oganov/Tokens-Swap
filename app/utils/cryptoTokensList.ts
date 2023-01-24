export const cryptoTokensList: Record<string, any> = {
  baseUrl: 'https://tokens.pancakeswap.finance/',
  default: {
    name: 'PancakeSwap Default',
    homepage: 'https://pancakeswap.finance',
    url: 'pancakeswap-default.json',
  },
  extended: {
    name: 'PancakeSwap Extended',
    homepage: 'https://pancakeswap.finance',
    url: 'pancakeswap-extended.json',
  },
  top100: {
    name: 'PancakeSwap Top 100',
    homepage: 'https://pancakeswap.finance',
    url: 'pancakeswap-top-100.json',
  },
  all: {
    name: 'CoinGecko',
    homepage: 'https://www.coingecko.com',
    url: 'https://tokens.coingecko.com/binance-smart-chain/all.json',
  },
};
