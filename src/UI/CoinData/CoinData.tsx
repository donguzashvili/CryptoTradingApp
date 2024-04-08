import { Box } from '@mui/material';
import { LatestCurrencyType } from '../../types';
import CryptoTable from '../../components/Table/Table';
import { cryptoTableColumn } from '../../components/Table/TableColumns/CryptoTableColumn';

const CoinData = ({ data }: { data: LatestCurrencyType }) => {
  return (
    <Box>
      <CryptoTable headers={cryptoTableColumn} data={[data]} />
    </Box>
  );
};

export default CoinData;
