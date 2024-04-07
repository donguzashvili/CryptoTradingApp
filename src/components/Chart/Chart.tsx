import React from 'react';

// ** MUI
import { Box } from '@mui/material';
import { LineChart } from '@mui/x-charts';

// ** types
import { DataEntry } from '../../types';

type ChartProps = {
  data: DataEntry[];
  hourlyLabels?: boolean;
};

const Chart = ({ data, hourlyLabels }: ChartProps) => {
  // calculate dates for chart label
  let xAxisData;
  if (hourlyLabels) {
    xAxisData = data.map(([timestamp]) => {
      const date = new Date(timestamp);
      return `${date.getHours()}:00`; // Display hours in HH:00 format
    });
  } else {
    xAxisData = data.map(([timestamp]) => {
      const date = new Date(timestamp);
      return `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })}`;
    });
  }

  // get closePrice data
  const seriesData = React.useMemo(() => {
    return data.map(([, , , , closePrice]) => parseFloat(closePrice));
  }, [data]);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%' }}>
      <LineChart
        sx={{ bgcolor: 'black' }}
        xAxis={[{ scaleType: 'point', data: xAxisData }]}
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
