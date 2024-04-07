import { useEffect, useState, useMemo } from 'react';

// ** MUI
import { Box, Button } from '@mui/material';

// ** service
import { getConvertCurrency, getLatestCurrency } from '../service';

// ** types
import { quoteType, selectOptionType } from '../types';

// ** components
import ConvertCard from '../UI/ConvertCard/ConvertCard';
import Loader from '../components/Loader/Loader';

// ** icons
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// ** utils
import { formatNumber } from '../utils/formatNumber';

const Convert = () => {
  const [currencyList, setCurrencyList] = useState<selectOptionType[]>([]);
  const [chosenFromCurrency, setChosenFromCurrency] = useState<selectOptionType>();
  const [chosenToCurrency, setChosenToCurrency] = useState<selectOptionType>();
  const [fromCurrencyValue, setFromCurrencyValue] = useState<string>();
  const [toCurrencyValue, setToCurrencyValue] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [inputErr, setInputErr] = useState<boolean>(false);

  useEffect(() => {
    initData();
  }, []);

  const initData = async () => {
    setLoading(true);
    const currencies = await getLatestCurrency({ start: 1, limit: 10 });
    const modifiedData = currencies.data.map((currency) => ({ value: currency.id, label: currency.symbol }));
    setCurrencyList(modifiedData);
    const modifiedToCurrencyData = modifiedData.slice(1, modifiedData.length);
    setChosenFromCurrency(modifiedData[0]);
    setChosenToCurrency(modifiedToCurrencyData[0]);
    setLoading(false);
  };

  const fromCurrencyList = useMemo(() => {
    if (!chosenToCurrency) return currencyList;
    return currencyList.filter((currency) => currency.value !== chosenToCurrency.value);
  }, [chosenToCurrency, currencyList]);

  const toCurrencyList = useMemo(() => {
    if (!chosenFromCurrency) return currencyList;
    return currencyList.filter((currency) => currency.value !== chosenFromCurrency.value);
  }, [chosenFromCurrency, currencyList]);

  const convertCurrency = async () => {
    const response = await getConvertCurrency(`${chosenFromCurrency?.value}`, `${chosenToCurrency?.label}`);
    const exchangePrice = response.data[1].quote[chosenToCurrency?.label as keyof quoteType].price;
    setToCurrencyValue(`${formatNumber(Number(fromCurrencyValue) * exchangePrice)}`);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexGrow: 1 }}>
          <Box sx={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
            <ConvertCard
              cardLabel='From'
              currency={String(chosenFromCurrency?.label)}
              cardValue={fromCurrencyValue}
              selectOptions={fromCurrencyList}
              onSelectChange={(val) => setChosenFromCurrency(val)}
              onInputChange={(val) => setFromCurrencyValue(val)}
              selectVal={chosenFromCurrency}
              error={inputErr}
              clearError={() => setInputErr(false)}
            />
            <ArrowForwardIcon sx={{ transform: 'rotate(90deg)', marginY: 2 }} />
            <ConvertCard
              cardLabel='To'
              currency={String(chosenToCurrency?.label)}
              cardValue={toCurrencyValue}
              selectOptions={toCurrencyList}
              onSelectChange={(val) => setChosenToCurrency(val)}
              selectVal={chosenToCurrency}
              disableInput
            />
            <Button
              variant='contained'
              sx={{ marginY: 2, width: '100%' }}
              onClick={convertCurrency}
              disabled={!fromCurrencyValue || fromCurrencyValue?.length === 0}
            >
              {!fromCurrencyValue || fromCurrencyValue?.length === 0 ? 'Enter an amount' : 'Convert'}
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Convert;
