import { useEffect, useState } from 'react';

// ** types
import { selectOptionType } from '../../types';
import { enumChartLabelEnum } from '../../types/enums';

// ** MUI
import { Box } from '@mui/material';

// ** components
import CustomSelect from '../Select/Select';

const intervalValues = [
  { label: '1 Hour', value: '1m', time: enumChartLabelEnum.minutes },
  { label: '1 Day', value: '1h', time: enumChartLabelEnum.hours },
  { label: '5 Days', value: '1d', time: enumChartLabelEnum.fiveDays },
  { label: '1 Week', value: '1d', time: enumChartLabelEnum.days },
  { label: '1 Month', value: '1w', time: enumChartLabelEnum.weeks },
  { label: '1 Year', value: '1M', time: enumChartLabelEnum.months },
];

const ChartHeader = ({ submit }: { submit: (interval: string, time: number) => void }) => {
  const [chosenTime, setChosenTime] = useState<selectOptionType>(intervalValues[0]);

  useEffect(() => {
    if (!chosenTime) return;
    submit(`${chosenTime.value}`, Number(chosenTime.time));
  }, [chosenTime]);

  return (
    <Box display='flex' justifyContent='center' alignItems='center' paddingBlock={2}>
      <CustomSelect
        options={intervalValues}
        label='Time interval'
        onChange={setChosenTime}
        value={chosenTime}
        sx={{ minWidth: '150px' }}
      />
    </Box>
  );
};

export default ChartHeader;
