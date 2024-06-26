import { useEffect, useState } from 'react';

// ** service
import { getLatestCurrency } from '../service';

// ** types
import { LatestCurrencyType } from '../types';

// ** MUI
import { Box, CircularProgress, Paper, Typography } from '@mui/material';
import { Theme, useTheme } from '@mui/material';

// ** components
import CryptoTable from '../components/Table/Table';
import { cryptoTableColumn } from '../components/Table/TableColumns/CryptoTableColumn';

const intervalInSeconds = 30;
const intervalUpdateStep = 1000;

const Landing = () => {
  const theme: Theme = useTheme();
  const [cryptoLists, setCryptoLists] = useState<LatestCurrencyType[]>([]);
  const [firstRender, setFirstRender] = useState<boolean>(true);
  const [lastUpdated, setLastUpdated] = useState<string>();
  const [countDown, setCountDown] = useState<number>(intervalInSeconds);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (firstRender) {
      initData();
      setFirstRender(false);
    }

    const interval = setInterval(() => {
      setCountDown((prevCountdown) => {
        const newCount = prevCountdown - 1;
        if (newCount === 0) {
          initData();
          return intervalInSeconds;
        }
        return newCount;
      });
    }, intervalUpdateStep);

    return () => clearInterval(interval);
  }, []);

  const initData = async () => {
    setLoading(true);
    const response = await getLatestCurrency({ start: 1, limit: 100 });
    setCryptoLists(response);
    setLastUpdated(`${new Date()}`);
    setLoading(false);
  };

  return (
    <Box>
      <Box
        component={Paper}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 0, minHeight: '50px' }}
      >
        <Box>
          {loading ? (
            <Box sx={{ display: 'flex', alignItems: 'center', flexFlow: 'column nowrap', paddingY: 2 }}>
              <Typography>First load can take up to 60 seconds</Typography>
              <CircularProgress />
            </Box>
          ) : (
            <Box display='flex' alignItems='center'>
              <Typography variant='body2'>Last updated: {lastUpdated}</Typography>
              <Typography variant='body1' ml={2} color={theme.palette.success['dark']}>
                Update in: {countDown} seconds
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
      <CryptoTable headers={cryptoTableColumn} data={cryptoLists} />
    </Box>
  );
};

export default Landing;
