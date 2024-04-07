import React from 'react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

// ** service
import { getCurrencyChart } from '../service';

// ** MUI
import { Box, Paper, CircularProgress, Button } from '@mui/material';

// ** components
import Chart from '../components/Chart/Chart';
import CustomSelect from '../UI/Select/Select';

// ** types
import { candleStickData, selectOptionType } from '../types';

const dateOptions = [
  { label: '1 Day', value: 1 },
  { label: '5 Day', value: 5 },
  { label: '7 Day', value: 7 },
  { label: '14 Day', value: 14 },
  { label: '1 Month', value: 30 },
  { label: '3 Month', value: 90 },
  { label: '6 Month', value: 180 },
];

const ChartHeader = ({ submit }: { submit: (interval: string, time: number) => void }) => {
  const [chosenTime, setChosenTime] = useState<selectOptionType>(dateOptions[0]);

  const timeIntervalOptions = React.useMemo(() => {
    if (chosenTime.value === 1) {
      return [{ label: 'Hourly', value: '1h' }];
    } else if (Number(chosenTime.value) > 1 && Number(chosenTime.value) < 14) {
      return [{ label: 'Daily', value: '1d' }];
    } else if (Number(chosenTime.value) >= 14 && Number(chosenTime.value) < 90) {
      return [
        { label: 'Daily', value: '1d' },
        { label: 'Weekly', value: '1w' },
      ];
    } else {
      return [
        { label: 'Daily', value: '1d' },
        { label: 'Weekly', value: '1w' },
        { label: 'Monthly', value: '1M' },
      ];
    }
  }, [chosenTime]);

  const [chosenInterval, setChosenInterval] = useState<selectOptionType>(timeIntervalOptions[0]);

  useEffect(() => {
    if (!chosenInterval) return;
    if (chosenTime.value === 1) {
      // If chosen time is 1 Day, set interval to hourly
      setChosenInterval({ label: 'Hourly', value: '1h' });
    } else {
      // If chosen time is 14 Days or more, set interval to weekly
      setChosenInterval({ label: 'Daily', value: '1d' });
    }
  }, [chosenTime]);

  return (
    <Box display='flex' justifyContent='center' alignItems='center' paddingBlock={2}>
      <CustomSelect options={dateOptions} label='Historical Data Range' onChange={setChosenTime} value={chosenTime} />
      <CustomSelect
        options={timeIntervalOptions}
        disabled={chosenTime.value === 1}
        label='Time Interval'
        onChange={setChosenInterval}
        value={chosenInterval}
      />
      <Button variant='contained' onClick={() => submit(`${chosenInterval.value}`, Number(chosenTime.value))}>
        Submit
      </Button>
    </Box>
  );
};

const ChartPage = () => {
  const [searchParams] = useSearchParams();
  const [chosenTime, setChosenTime] = useState<number>(dateOptions[0].value);
  const [chartData, setChartData] = useState<candleStickData>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    initData('1h', 1);
  }, []);

  const initData = async (interval: string, time: number) => {
    setLoading(true);
    setChosenTime(time);
    const currency = searchParams.get('currency');
    if (!currency) return;
    const currentTime = new Date().getTime();
    const chosenTimeInMs = Number(time) * 24 * 60 * 60 * 1000;
    const startTime = currentTime - chosenTimeInMs;
    const response = await getCurrencyChart({
      interval,
      symbol: currency,
      startTime: `${startTime}`,
      endTime: `${currentTime}`,
    });
    setChartData(response);
    setLoading(false);
  };

  return (
    <Box component={Paper} sx={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
      <ChartHeader submit={(interval, time) => initData(interval, time)} />
      {loading ? (
        <Box display='flex' justifyContent='center'>
          <CircularProgress />
        </Box>
      ) : (
        chartData && <Chart data={chartData} hourlyLabels={chosenTime === 1} />
      )}
    </Box>
  );
};

export default ChartPage;
