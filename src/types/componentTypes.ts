import { enumChartLabelEnum } from "./enums";
import { DataEntry, LatestCurrencyType } from "./responses";

export type selectOptionType = { value: number | string; label: string | number; time?: number };

export type CryptoTablePropType = {
    headers: {
      name: string;
      key: keyof LatestCurrencyType;
      currency?: boolean;
      percent?: boolean;
    }[];
    data: LatestCurrencyType[];
  };

export type ChartProps = {
    data: DataEntry[];
    chartLabels: enumChartLabelEnum;
  };

export type TableBodyCellType = {
    headerKey: string;
    row: LatestCurrencyType;
    currency?: boolean;
    percent?: boolean;
}

export type ConvertCardPropType = {
    cardLabel: string;
    currency?: string;
    onSelectChange(val: selectOptionType): void;
    onInputChange?: (val: string) => void;
    selectVal?: selectOptionType;
    cardValue?: string;
    selectOptions: selectOptionType[];
    disableInput?: boolean;
    error?: boolean;
    clearError?: () => void;
  };