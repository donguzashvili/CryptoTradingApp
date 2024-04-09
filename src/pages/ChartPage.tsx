import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

// ** service
import { getConvertCurrency, getCurrencyChart } from '../service';

// ** MUI
import { Box, Paper, CircularProgress, Typography } from '@mui/material';

// ** components
import Chart from '../components/Chart/Chart';
import ChartHeader from '../UI/ChartHeader/ChartHeader';
import CoinData from '../UI/CoinData/CoinData';

// ** types
import { candleStickData, getConvertCurrencyRequestType } from '../types';
import { enumChartLabelEnum } from '../types/enums';

const ChartPage = () => {
  const [searchParams] = useSearchParams();
  const [chartLabels, setChartLabels] = useState<enumChartLabelEnum>(enumChartLabelEnum.minutes);
  const [coinData, setCoinData] = useState<getConvertCurrencyRequestType>();
  const [data, setData] = useState<candleStickData>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const currency = searchParams.get('currency');
  const id = searchParams.get('id');

  useEffect(() => {
    initData('1m', enumChartLabelEnum.minutes);
  }, []);

  const initData = async (interval: string, time: enumChartLabelEnum) => {
    setLoading(true);
    try {
      setChartLabels(time);

      if (!currency || !id) return;
      const currentTime = new Date().getTime();
      const secondOrMinutes = time === 0 ? 1 : Number(time) * 24;
      const chosenTimeInMs = secondOrMinutes * 60 * 60 * 1000;
      const startTime = currentTime - chosenTimeInMs;
      const response = getCurrencyChart({
        interval,
        symbol: currency,
        startTime: `${startTime}`,
        endTime: `${currentTime}`,
      });
      const coinData = getConvertCurrency(id);

      const [chartData, currencyData] = await Promise.all([response, coinData]);
      setCoinData(currencyData);
      setData(chartData);
    } catch (err) {
      setError('Data not found please try different coin');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component={Paper} sx={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
      <ChartHeader submit={(interval, time) => initData(interval, time)} />
      {loading ? (
        <Box display='flex' justifyContent='center'>
          <CircularProgress />
        </Box>
      ) : (
        <>
          {coinData && id && <CoinData data={coinData[Number(id)]} />}
          {data && <Chart data={data} chartLabels={chartLabels} />}
          {error && (
            <Typography textAlign='center' paddingY={1}>
              {error}
            </Typography>
          )}
        </>
      )}
    </Box>
  );
};

ChartPage.displayName = 'chartPage';

export default ChartPage;
