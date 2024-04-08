import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

// ** components
import TableSkeleton from './TableSkeleton';
import TableBodyCell from '../../UI/TableBodyCell/TableBodyCell';

// ** MUI
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import { Theme, useTheme } from '@mui/material';

// ** types
import { CryptoTablePropType } from '../../types';

const CryptoTable = memo(function CryptoTable({ headers, data }: CryptoTablePropType) {
  const navigate = useNavigate();
  const theme: Theme = useTheme();
  if (data?.length === 0) return <TableSkeleton />;

  const tableRowStyle = {
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  };

  return (
    <TableContainer component={Paper} sx={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
      <Table sx={{ minWidth: 700 }} aria-label='customized table'>
        <TableHead>
          <TableRow sx={{ borderTop: `1px solid ${theme.palette.grey['800']}` }}>
            {headers.map((el) => (
              <TableCell align='left' key={String(el.key)}>
                {el.name || 'Icon'}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row, idx) => (
            <TableRow
              sx={tableRowStyle}
              key={`row_${idx}`}
              onClick={() => navigate(`/charts?currency=${row.symbol}&id=${row.id}`)}
            >
              {headers.map((header, cellIdx) => (
                <TableBodyCell
                  key={`${idx}_${cellIdx}`}
                  row={row}
                  headerKey={String(header.key)}
                  currency={header.currency}
                  percent={header.percent}
                />
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
});

export default CryptoTable;
