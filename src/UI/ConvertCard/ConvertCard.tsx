// ** MUI
import { Box, Card, CardContent, Input, Paper, Typography } from '@mui/material';

// ** components
import Select from '../Select/Select';

// ** types
import { SxProps } from '@mui/system';
import { ConvertCardPropType } from '../../types';

const BoxWrapper = ({ children, sx }: { children: React.ReactNode; sx?: SxProps }) => {
  return <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', ...sx }}>{children}</Box>;
};

const ConvertCard = ({
  cardLabel,
  currency,
  onSelectChange,
  selectVal,
  cardValue,
  selectOptions,
  onInputChange,
  disableInput,
  error,
  clearError,
}: ConvertCardPropType) => {
  const handleInputChange = (value: string) => {
    clearError && clearError();
    onInputChange && onInputChange(value);
  };

  return (
    <Card component={Paper} sx={{ maxWidth: '400px' }}>
      <CardContent>
        <BoxWrapper>
          <Typography>{cardLabel}</Typography>
          <Typography>Balance: --{currency}</Typography>
        </BoxWrapper>
        <BoxWrapper sx={{ paddingTop: 1 }}>
          <Box>
            <Input
              error={error}
              disabled={disableInput}
              placeholder={'0.00'}
              sx={!error ? { '&::before': { content: 'none' } } : {}}
              value={cardValue || ''}
              onChange={(e) => handleInputChange(e.currentTarget.value)}
            />
          </Box>
          <Box>
            <Select onChange={onSelectChange} value={selectVal} options={selectOptions} />
          </Box>
        </BoxWrapper>
      </CardContent>
    </Card>
  );
};

export default ConvertCard;
