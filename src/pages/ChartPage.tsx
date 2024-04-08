import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

// ** service
import { getCurrencyChart } from '../service';

// ** MUI
import { Box, Paper, CircularProgress } from '@mui/material';

// ** components
import Chart from '../components/Chart/Chart';
import ChartHeader from '../UI/ChartHeader/ChartHeader';

// ** types
import { candleStickData } from '../types';
import { enumChartLabelEnum } from '../types/enums';

const ChartPage = () => {
  const [searchParams] = useSearchParams();
  const [chartLabels, setChartLabels] = useState<enumChartLabelEnum>(enumChartLabelEnum.minutes);
  const [data, setData] = useState<candleStickData>();

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    initData('1m', enumChartLabelEnum.minutes);
  }, []);

  const initData = async (interval: string, time: enumChartLabelEnum) => {
    setLoading(true);
    setChartLabels(time);
    const currency = searchParams.get('currency');
    const id = searchParams.get('id');
    if (!currency || !id) return;
    const currentTime = new Date().getTime();
    const secondOrMinutes = time === 0 ? 1 : Number(time) * 24;
    const chosenTimeInMs = secondOrMinutes * 60 * 60 * 1000;
    const startTime = currentTime - chosenTimeInMs;
    const response = await getCurrencyChart({
      interval,
      symbol: currency,
      startTime: `${startTime}`,
      endTime: `${currentTime}`,
    });
    setData(response);
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
        data && <Chart data={data} chartLabels={chartLabels} />
      )}
    </Box>
  );
};

ChartPage.displayName = 'chartPage';

export default ChartPage;
