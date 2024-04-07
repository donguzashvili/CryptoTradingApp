// ** MUI
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// ** types
import { SxProps } from '@mui/system';
import { selectOptionType } from '../../types';

type customSelectPropType = {
  options: selectOptionType[];
  label?: string;
  onChange: (val: selectOptionType) => void;
  value?: selectOptionType;
  disabled?: boolean;
  sx?: SxProps;
};

export default function CustomSelect({ options, label, onChange, value, disabled, sx }: customSelectPropType) {
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
      {label && <InputLabel id='select-small-label'>{label}</InputLabel>}
      <Select
        labelId='select-small-label'
        id='select-small'
        value={`${value?.value || ''}`}
        label={label}
        disabled={disabled}
        sx={{ ...sx }}
      >
        {options.map((el) => (
          <MenuItem key={el.value} value={el.value} onClick={() => onChange(el)}>
            {el.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
