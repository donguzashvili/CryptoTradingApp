export const formatNumber = <T>(value: T) => {
    if(typeof value !== 'number') return value
    return value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",").toLocaleString();
}