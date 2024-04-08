import React from 'react';

// ** MUI
import { Box } from '@mui/material';
import { LineChart } from '@mui/x-charts';

// ** types
import { ChartProps } from '../../types';

// ** hooks
import useChartLabels from '../../hooks/useChartLabels';

const Chart = ({ data, chartLabels }: ChartProps) => {
  const labels = useChartLabels(data, chartLabels);

  const seriesData = React.useMemo(() => {
    return data.map(([, , , , closePrice]) => parseFloat(closePrice));
  }, [data]);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', height: '100%', width: '100%' }}>
      <LineChart
        sx={{ bgcolor: 'black' }}
        xAxis={[{ scaleType: 'point', data: labels }]}
        series={[
          {
            curve: 'linear',
            data: seriesData,
            showMark: ({ index }) => index % 2 === 0,
          },
        ]}
        grid={{ vertical: true, horizontal: true }}
        height={600}
      />
    </Box>
  );
};

export default Chart;
