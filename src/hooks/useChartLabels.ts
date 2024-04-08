import { useMemo } from "react";

// ** types
import { DataEntry } from "../types";
import { enumChartLabelEnum } from "../types/enums";

// ** utils
import { twoDigitNumber } from "../utils/twoDigitNumber";

const useChartLabels = (data: DataEntry[], chartLabels: enumChartLabelEnum) => {
    const xAxisData = useMemo(() => {
        switch (chartLabels) {
          case enumChartLabelEnum.minutes:
            return data.map(([timestamp]) => {
              const date = new Date(timestamp);
              return `${twoDigitNumber(date.getHours())}:${twoDigitNumber(date.getMinutes())}`
            });
          case enumChartLabelEnum.hours:
            return data.map(([timestamp]) => {
              const date = new Date(timestamp);
              return `${twoDigitNumber(date.getHours())}:00`
            });
          case enumChartLabelEnum.days:
            return data.map(([timestamp]) => {
              const date = new Date(timestamp);
              return `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })}`;
            });
          case enumChartLabelEnum.fiveDays:
            return data.map(([timestamp]) => {
              const date = new Date(timestamp);
              return `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })}`;
            });
          case enumChartLabelEnum.weeks:
            return data.map(([timestamp]) => {
              const date = new Date(timestamp);
              return `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })}`;
            });
          case enumChartLabelEnum.months:
            return data.map(([timestamp]) => {
              const date = new Date(timestamp);
              return date.toLocaleString('default', { month: 'short' });
            });
    
          default:
            return data.map(([timestamp]) => {
              const date = new Date(timestamp);
              return `${twoDigitNumber(date.getHours())}:${twoDigitNumber(date.getMinutes())}`
            });
        }
      }, [chartLabels, data]);

      return xAxisData
}

export default useChartLabels