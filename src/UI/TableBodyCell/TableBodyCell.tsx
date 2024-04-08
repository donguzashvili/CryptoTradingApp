// ** MUI
import { Box, TableCell, Theme, useTheme } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

// ** utils
import { getNestedProperty } from '../../utils/getNestedProperty';
import { formatNumber } from '../../utils/formatNumber';

// ** types
import { TableBodyCellType } from '../../types';

// ** Icon
import { ReactComponent as CryptoIcon } from '../../assets/icons/cryptoIcon.svg';

const tablecellStyle = {
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
};

const arrowStyle = {
  transform: 'rotate(90deg)',
  height: '10px',
  width: '10px',
  position: 'absolute',
  left: '-10px',
};

const TableBodyCell = ({ headerKey, row, currency, percent }: TableBodyCellType) => {
  const theme: Theme = useTheme();

  const coloringNumbers = (value: string | number) => {
    const greenColor = theme.palette.success;
    const redColor = theme.palette.error;
    if (!Number(value)) return;
    if (Number(value) > 0) {
      return {
        color: greenColor['dark'],
        Arrow: <PlayArrowIcon sx={{ ...arrowStyle, transform: 'rotate(270deg)' }} />,
      };
    }
    return { color: redColor['dark'], Arrow: <PlayArrowIcon sx={arrowStyle} /> };
  };

  const value = getNestedProperty(row, headerKey);
  const formattedValue: string | number = formatNumber(value ?? 'Icon');
  const coloringNumbersResult = !headerKey.includes('price') ? coloringNumbers(formattedValue) : undefined;
  const { color, Arrow } = coloringNumbersResult ?? { color: '', Arrow: <></> };

  return (
    <TableCell align='left' sx={{ color: color || '' }}>
      <Box sx={tablecellStyle}>
        {currency && '$'}
        {Arrow && Arrow}
        {formattedValue || <CryptoIcon style={{ height: '30px', width: '30px' }} />}
        {percent && '%'}
      </Box>
    </TableCell>
  );
};

export default TableBodyCell;
