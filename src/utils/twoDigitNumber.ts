export function twoDigitNumber(data: Date | string | number){
    return String(data).padStart(2, '0')
}