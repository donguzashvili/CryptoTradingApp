export const formatNumber = <T>(value: T, fixedNum: number = 2) => {
    if (typeof value !== 'number') return value;
    const [integerPart, decimalPart] = value.toFixed(fixedNum).split('.');
    const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const formattedNumber = decimalPart ? `${formattedIntegerPart}.${decimalPart}` : formattedIntegerPart;
    return formattedNumber;
}
