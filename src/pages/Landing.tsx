import { useEffect, useState } from 'react';

// ** service
import { getLatestCurrency } from '../service';

// ** types
import { LatestCurrencyType } from '../types';

// ** MUI
import { Box, Paper, Typography } from '@mui/material';

// ** components
import CryptoTable from '../components/Table/Table';

const tableHeaders = [
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

const intervalTime = 30000;

const Landing = () => {
  const [cryptoLists, setCryptoLists] = useState<LatestCurrencyType[]>([]);
  const [firstRender, setFirstRender] = useState<boolean>(true);
  const [lastUpdated, setLastUpdated] = useState<string>();

  useEffect(() => {
    if (firstRender) {
      initData();
      setFirstRender(false);
    }
    const interval = setInterval(() => initData(), intervalTime);

    return () => clearInterval(interval);
  }, []);

  const initData = async () => {
    const response = await getLatestCurrency({ start: 1, limit: 10 });
    setCryptoLists(response.data);
    setLastUpdated(`${new Date()}`);
  };

  return (
    <Box>
      <Box
        component={Paper}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 0, paddingBlock: 2 }}
      >
        <Box>
          <Typography variant='body2' sx={{ color: '' }}>
            Last updated: {lastUpdated}
          </Typography>
        </Box>
      </Box>
      <CryptoTable headers={tableHeaders} data={cryptoLists} />
    </Box>
  );
};

export default Landing;
