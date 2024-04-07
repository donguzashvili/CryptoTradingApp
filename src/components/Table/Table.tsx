import { useNavigate } from 'react-router-dom';

// ** utils
import { getNestedProperty } from '../../utils/getNestedProperty';
import { formatNumber } from '../../utils/formatNumber';

// ** components
import TableSkeleton from './TableSkeleton';

// ** MUI
import { Box, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Theme, useTheme } from '@mui/material';

type CryptoTablePropType<T> = {
  headers: {
    name: string;
    key: keyof T;
    currency?: boolean;
    percent?: boolean;
  }[];
  data: T[];
};

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

interface Crypto {
  symbol: string;
}

const CryptoTable = <T extends Crypto>({ headers, data }: CryptoTablePropType<T>) => {
  const navigate = useNavigate();
  const theme: Theme = useTheme();
  if (data.length === 0) return <TableSkeleton />;

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

  return (
    <TableContainer component={Paper} sx={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
      <Table sx={{ minWidth: 700 }} aria-label='customized table'>
        <TableHead>
          <TableRow>
            {headers.map((el) => (
              <TableCell align='left' key={String(el.key)}>
                {el.name || 'Icon'}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, idx) => (
            <TableRow
              sx={{
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: theme.palette.action.hover,
                },
              }}
              key={`row_${idx}`}
              onClick={() => navigate(`/charts?currency=${row.symbol}`)}
            >
              {headers.map((header, cellIdx) => {
                const key = header.key as string;
                const value = getNestedProperty(row, key);
                const formattedValue: string | number = formatNumber(value ?? 'Icon');
                const coloringNumbersResult = !key.includes('price') ? coloringNumbers(formattedValue) : undefined;
                const { color, Arrow } = coloringNumbersResult ?? { color: '', Arrow: <></> };
                return (
                  <TableCell align='left' key={`${idx}_${cellIdx}`} sx={{ color: color || '' }}>
                    <Box sx={tablecellStyle}>
                      {header.currency && '$'}
                      {Arrow && Arrow}
                      {formattedValue}
                      {header.percent && '%'}
                    </Box>
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CryptoTable;
